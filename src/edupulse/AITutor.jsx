import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  PlayCircle,
  FileText,
  Sparkles,
  Send,
  Loader2,
  AlertCircle,
} from 'lucide-react';

export default function AITutor({ user, onBack }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const [aiAnswer, setAiAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    const question = searchQuery.trim();

    if (!question) {
      return;
    }

    setHasSearched(true);
    setIsLoading(true);
    setAiAnswer('');
    setAiError('');

    try {
      const response = await fetch('http://localhost:3001/api/tutor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          student: user,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'AI request failed.');
      }

      setAiAnswer(data.answer || 'The AI did not return an answer.');
    } catch (error) {
      console.error('AI Tutor error:', error);

      setAiError(
        'I could not connect to the AI tutor. Please make sure the AI server is running and try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleRelatedTopic = (topic) => {
    setSearchQuery(topic);

    // Automatically ask AI about the selected topic.
    askQuestion(topic);
  };

  const askQuestion = async (question) => {
    const cleanQuestion = question.trim();

    if (!cleanQuestion) {
      return;
    }

    setHasSearched(true);
    setIsLoading(true);
    setAiAnswer('');
    setAiError('');

    try {
      const response = await fetch('http://localhost:3001/api/tutor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: cleanQuestion,
          student: user,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'AI request failed.');
      }

      setAiAnswer(data.answer || 'The AI did not return an answer.');
    } catch (error) {
      console.error('AI Tutor error:', error);

      setAiError(
        'I could not connect to the AI tutor. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const isAdvanced = [
    'Physics',
    'Chemistry',
    'JEE Main',
    'JEE Advanced',
    'NEET',
  ].includes(user?.subject);

  const relatedTopics = isAdvanced
    ? [
        'Statistical Mechanics',
        'Thermodynamic Equilibrium',
        'Enthalpy vs Entropy',
      ]
    : [
        'Solar System',
        'Eclipses',
        'Tides',
      ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* HEADER */}
      <header className="p-4 bg-white border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 text-edu-darkText hover:text-edu-pinkRed transition bg-slate-100 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div>
            <h2 className="font-black text-xl text-edu-darkText leading-none">
              AI Tutor
            </h2>

            <span className="text-sm font-bold text-edu-darkText/60">
              {user?.subject || 'Learning'}
            </span>
          </div>
        </div>

        {/* SEARCH */}
        <form
          onSubmit={handleSearch}
          className="relative w-full md:w-1/2"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Ask anything about ${
              user?.subject || 'your subject'
            }...`}
            className="w-full bg-slate-100 border border-slate-300 rounded-full py-3 pl-12 pr-14 focus:outline-none focus:ring-2 focus:ring-edu-brightBlue transition font-medium"
          />

          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

          <button
            type="submit"
            disabled={isLoading || !searchQuery.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-edu-brightBlue hover:bg-edu-deepBlue disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </form>
      </header>

      {/* MAIN */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 w-full max-w-5xl mx-auto">
        {!hasSearched ? (
          /* EMPTY STATE */
          <div className="flex flex-col items-center justify-center h-[65vh] text-center">
            <div className="w-24 h-24 bg-edu-babyPink rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-10 h-10 text-edu-pinkRed" />
            </div>

            <h3 className="text-2xl font-black text-edu-darkText mb-2">
              What do you want to learn today?
            </h3>

            <p className="text-edu-darkText/60 font-medium max-w-md mb-8">
              Ask EduPulse AI anything about{' '}
              {user?.subject || 'your subject'}.
              Your answer will be personalized for your class,
              level, board, language, and current topic.
            </p>

            {/* QUICK QUESTIONS */}
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
              <button
                onClick={() =>
                  handleRelatedTopic(
                    user?.topic || 'Explain my current topic'
                  )
                }
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold hover:border-edu-pinkRed hover:text-edu-pinkRed transition"
              >
                Explain my current topic
              </button>

              <button
                onClick={() =>
                  handleRelatedTopic(
                    `Give me a simple explanation of ${user?.subject || 'this subject'}`
                  )
                }
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold hover:border-edu-pinkRed hover:text-edu-pinkRed transition"
              >
                Explain simply
              </button>

              <button
                onClick={() =>
                  handleRelatedTopic(
                    `Give me practice questions for ${user?.topic || user?.subject || 'my subject'}`
                  )
                }
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold hover:border-edu-pinkRed hover:text-edu-pinkRed transition"
              >
                Give me practice questions
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* AI HEADER */}
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-edu-pinkRed" />

              <h3 className="text-xl font-bold text-edu-darkText">
                EduPulse AI Tutor
              </h3>
            </div>

            {/* QUESTION */}
            <div className="bg-edu-babyPink/50 border border-edu-babyPink rounded-2xl p-5">
              <p className="text-xs uppercase tracking-wide font-black text-edu-pinkRed mb-2">
                Your question
              </p>

              <p className="font-bold text-edu-darkText">
                {searchQuery}
              </p>
            </div>

            {/* AI ANSWER */}
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-edu-babyPink flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-edu-pinkRed" />
                </div>

                <div>
                  <h4 className="font-black text-lg text-edu-darkText">
                    EduPulse AI Tutor
                  </h4>

                  <p className="text-xs font-medium text-slate-400">
                    Personalized for Class {user?.class || '—'} •{' '}
                    {user?.board || '—'} •{' '}
                    {user?.language || 'English'}
                  </p>
                </div>
              </div>

              {/* LOADING */}
              {isLoading && (
                <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-5">
                  <Loader2 className="w-5 h-5 text-edu-brightBlue animate-spin" />

                  <p className="font-medium text-slate-600">
                    EduPulse AI is thinking...
                  </p>
                </div>
              )}

              {/* ERROR */}
              {aiError && !isLoading && (
                <div className="flex gap-3 bg-red-50 border border-red-100 rounded-2xl p-5 text-red-700">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />

                  <div>
                    <p className="font-bold mb-1">
                      AI Tutor unavailable
                    </p>

                    <p className="text-sm font-medium">
                      {aiError}
                    </p>
                  </div>
                </div>
              )}

              {/* ANSWER */}
              {aiAnswer && !isLoading && !aiError && (
                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-edu-darkText font-medium leading-7 whitespace-pre-wrap">
                    {aiAnswer}
                  </p>
                </div>
              )}
            </div>

            {/* VIDEO + ASSIGNMENT */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* VIDEO */}
              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all cursor-pointer">
                <div className="aspect-video relative flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80"
                    alt="Student watching tutorial"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />

                  <PlayCircle className="w-16 h-16 text-white/90 group-hover:text-white transition-colors z-10 filter drop-shadow-lg group-hover:scale-110" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-edu-babyPink text-edu-deepPink text-xs font-bold px-2 py-1 rounded-md">
                      Video Tutorial
                    </span>

                    <span className="text-xs font-bold text-slate-400">
                      AI Recommended
                    </span>
                  </div>

                  <h4 className="font-black text-lg text-edu-darkText mb-2">
                    Learn: {searchQuery}
                  </h4>

                  <p className="text-sm font-medium text-edu-darkText/70">
                    A recommended tutorial to help you understand this
                    concept visually.
                  </p>
                </div>
              </div>

              {/* ASSIGNMENT */}
              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all cursor-pointer flex flex-col">
                <div className="p-8 flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
                    alt="Student writing assignment"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-edu-secondary to-edu-babyPink/50 mix-blend-multiply" />

                  <div className="relative z-10 flex flex-col items-center">
                    <FileText className="w-16 h-16 text-edu-deepBlue mb-4 group-hover:scale-110 transition-transform" />

                    <h4 className="font-black text-xl text-edu-darkText mb-2">
                      Practice Assignment
                    </h4>

                    <p className="text-sm font-medium text-edu-darkText/80 bg-white/50 px-3 py-1 rounded-lg backdrop-blur-sm">
                      Personalized practice
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-slate-100">
                  <button
                    onClick={() =>
                      askQuestion(
                        `Create a practice assignment about ${
                          searchQuery || user?.topic || user?.subject
                        } for a Class ${user?.class || 'student'} ${
                          user?.board || ''
                        } student. Give questions without immediately giving the answers.`
                      )
                    }
                    className="w-full py-3 bg-edu-brightBlue hover:bg-edu-deepBlue text-white font-bold rounded-xl transition"
                  >
                    Ask AI for Practice
                  </button>
                </div>
              </div>
            </div>

            {/* RELATED TOPICS */}
            <div className="mt-12">
              <h4 className="font-bold text-edu-darkText mb-4">
                Related Topics You Might Like
              </h4>

              <div className="flex flex-wrap gap-3">
                {relatedTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => handleRelatedTopic(topic)}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-edu-darkText/70 hover:border-edu-pinkRed hover:text-edu-pinkRed transition"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* ASK ANOTHER QUESTION */}
            <div className="text-center pt-4 pb-8">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setHasSearched(false);
                  setAiAnswer('');
                  setAiError('');
                }}
                className="px-6 py-3 bg-edu-darkText text-white font-bold rounded-xl hover:opacity-90 transition"
              >
                Ask Another Question
              </button>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}