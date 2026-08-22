import http from 'http';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 3001;

if (!process.env.GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is missing from .env');
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const server = http.createServer(async (req, res) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'http://localhost:5174'
  );

  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, OPTIONS'
  );

  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type'
  );

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/tutor') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const data = JSON.parse(body);

        const {
          question,
          student,
        } = data;

        if (!question?.trim()) {
          res.writeHead(400, {
            'Content-Type': 'application/json',
          });

          res.end(
            JSON.stringify({
              error: 'Question is required.',
            })
          );

          return;
        }

        const studentContext = `
Student profile:
Name: ${student?.name || 'Student'}
Class: ${student?.class || 'Not provided'}
Board: ${student?.board || 'Not provided'}
Subject: ${student?.subject || 'Not provided'}
Language: ${student?.language || 'English'}
Level: ${student?.level || 'Intermediate'}
Current topic: ${student?.topic || 'Not provided'}
`;

        const systemInstruction = `
You are EduPulse AI Tutor.

You are helping a school student learn.

${studentContext}

Teaching rules:
- Explain concepts clearly and step by step.
- Match explanations to the student's class and level.
- Use simple language appropriate for the student's age.
- Use examples when helpful.
- If the student is confused, simplify the explanation.
- Encourage the student to think and solve problems.
- Do not simply give answers when teaching would be more useful.
- Stay focused on education and the student's subject.
- Respect the student's preferred language when possible.
`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.5-flash-lite',
          contents: question.trim(),
          config: {
            systemInstruction,
          },
        });

        res.writeHead(200, {
          'Content-Type': 'application/json',
        });

        res.end(
          JSON.stringify({
            answer: response.text,
          })
        );
      } catch (error) {
        console.error('Gemini request failed:', error);

        res.writeHead(500, {
          'Content-Type': 'application/json',
        });

        res.end(
          JSON.stringify({
            error: 'The AI tutor could not process the request.',
          })
        );
      }
    });

    return;
  }

  res.writeHead(404, {
    'Content-Type': 'application/json',
  });

  res.end(
    JSON.stringify({
      error: 'Not found',
    })
  );
});

server.listen(PORT, () => {
  console.log(
    `EduPulse AI server running on http://localhost:${PORT}`
  );
});