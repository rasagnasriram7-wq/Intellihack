import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Play, CheckCircle2, XCircle, BrainCircuit, Star, RefreshCcw } from 'lucide-react';

export default function LearningFlow({ user, onBack }) {
  const [mode, setMode] = useState('learn'); // learn, play, quiz, explain, success

  const isAdvanced = ['Physics', 'Chemistry', 'JEE Main', 'JEE Advanced', 'NEET'].includes(user.subject);
  
  const content = isAdvanced ? {
    topic: 'Thermodynamics',
    lesson: 'Entropy & Second Law',
    q: 'Why does the entropy of an isolated system always increase?',
    wrongA: 'A) Because energy is constantly being created in the system',
    correctA: 'B) Because systems naturally progress towards states with higher probability/microstates',
    explain: "You selected: Because energy is constantly being created. \n\nThat violates the First Law of Thermodynamics (Energy cannot be created or destroyed). The true reason entropy increases is statistical mechanics: there are vastly more disordered 'microstates' than ordered ones. The universe simply evolves towards the most probable state.",
    explainCorrect: "Exactly right! \n\nStatistical mechanics tells us that there are vastly more disordered 'microstates' than ordered ones. The universe simply evolves towards the most probable state, which naturally means an increase in entropy."
  } : {
    topic: 'Moon Phases',
    lesson: 'Why does the Moon look different every night?',
    q: 'What causes the phases of the Moon?',
    wrongA: "A) The Earth's shadow falling on the Moon",
    correctA: "B) The Moon's changing position relative to the Earth and Sun",
    explain: "You selected: The Earth's shadow falling on the Moon. \n\nThis is a common misconception! Earth's shadow only causes lunar eclipses. The daily phases are actually caused by the Moon's orbit around the Earth, which changes how much of its sunlit side we can see.",
    explainCorrect: "Spot on! \n\nThe daily phases are caused by the Moon's orbit around the Earth, which constantly changes the angle at which we view its sunlit side."
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="p-6 border-b border-slate-100 flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 font-bold text-edu-darkText hover:text-edu-pinkRed transition">
          <ArrowLeft className="w-5 h-5" /> Back to Dashboard
        </button>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-edu-babyPink text-edu-deepPink font-bold rounded-lg text-sm">{user.subject}</div>
          <div className="px-3 py-1 bg-edu-secondary text-edu-deepBlue font-bold rounded-lg text-sm">{user.topic}</div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 lg:p-10">
        <AnimatePresence mode="wait">
          {mode === 'learn' && (
            <motion.div key="learn" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-black text-edu-darkText">{content.topic}</h1>
                <span className="font-bold text-edu-darkText/50">Lesson 2 / 5</span>
              </div>
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 mb-8 flex gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{content.lesson}</h3>
                  <p className="text-lg text-edu-darkText/80 leading-relaxed font-medium mb-4">
                    {isAdvanced 
                      ? "Entropy is a measure of the number of possible microscopic states (microstates) of a system in thermodynamic equilibrium. The Second Law dictates that an isolated system will naturally evolve towards maximum entropy."
                      : "The moon doesn't produce its own light. We can only see it because it reflects sunlight. As the moon orbits the Earth, the sun lights up different parts of it."}
                  </p>
                </div>
                <div className="w-1/3 hidden md:flex items-center justify-center">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-3"
                  >
                    <img 
                      src={isAdvanced 
                        ? "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80" 
                        : "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80"} 
                      alt="Student focusing on subject"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-edu-brightBlue/10 mix-blend-overlay"></div>
                  </motion.div>
                </div>
              </div>
              <button onClick={() => setMode('play')} className="w-full bg-edu-brightBlue hover:bg-edu-deepBlue text-white font-bold py-4 rounded-xl transition flex justify-center items-center gap-2 text-lg">
                Now Let's Play! <Play className="w-5 h-5 fill-current" />
              </button>
            </motion.div>
          )}

          {mode === 'play' && (
            <motion.div key="play" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
              <h1 className="text-3xl font-black text-edu-darkText mb-4">Concept Match Game</h1>
              <p className="text-edu-darkText/60 font-medium mb-10">Drag the correct concept to the image (Simulation)</p>
              
              <div className="bg-edu-babyPink rounded-[2rem] h-64 flex items-center justify-center mb-8 border-2 border-dashed border-edu-softPink">
                <p className="font-bold text-edu-deepPink">Interactive Game Interface Goes Here</p>
              </div>

              <button onClick={() => setMode('quiz')} className="bg-edu-pinkRed text-white font-bold py-4 px-12 rounded-xl transition shadow-lg inline-block">
                Complete Game & Start Quiz
              </button>
            </motion.div>
          )}

          {mode === 'quiz' && (
            <motion.div key="quiz" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
              <div className="mb-8">
                <span className="font-bold text-edu-darkText/50">Question 3 / 5</span>
                <div className="w-full bg-slate-100 h-2 rounded-full mt-2"><div className="bg-edu-brightBlue h-2 rounded-full w-[60%]"></div></div>
              </div>
              
              <h2 className="text-2xl font-black text-edu-darkText mb-8">{content.q}</h2>
              
              <div className="space-y-4">
                <button onClick={() => setMode('explain')} className="w-full text-left p-5 rounded-xl border-2 border-slate-200 hover:border-edu-pinkRed hover:bg-edu-babyPink font-bold text-lg transition-all text-edu-darkText">
                  {content.wrongA}
                </button>
                <button onClick={() => setMode('explain_correct')} className="w-full text-left p-5 rounded-xl border-2 border-slate-200 hover:border-edu-brightBlue hover:bg-edu-secondary font-bold text-lg transition-all text-edu-darkText">
                  {content.correctA}
                </button>
              </div>
            </motion.div>
          )}

          {mode === 'explain' && (
            <motion.div key="explain" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="flex items-center gap-4 text-edu-deepPink mb-6">
                <XCircle className="w-10 h-10" />
                <h2 className="text-3xl font-black text-edu-darkText">Let's understand where you went wrong.</h2>
              </div>

              <div className="bg-edu-secondary border border-edu-brightBlue/30 rounded-[2rem] p-8 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <BrainCircuit className="w-6 h-6 text-edu-brightBlue" />
                  <span className="font-bold text-edu-deepBlue text-lg">AI Tutor Explanation</span>
                </div>
                <p className="text-lg font-medium text-edu-darkText/80 whitespace-pre-line">
                  {content.explain}
                </p>
                
                <div className="mt-8 bg-white p-4 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2"><Play className="w-4 h-4 text-edu-pinkRed"/> Watch this quick visual:</h4>
                  <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden relative">
                     <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/50 font-bold">Educational Video Player</span>
                     </div>
                  </div>
                </div>
              </div>

              <button onClick={() => setMode('success')} className="w-full bg-edu-brightBlue hover:bg-edu-deepBlue text-white font-bold py-4 rounded-xl transition flex justify-center items-center gap-2 text-lg">
                Try a Similar Question <RefreshCcw className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {mode === 'explain_correct' && (
            <motion.div key="explain_correct" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="flex items-center gap-4 text-green-500 mb-6">
                <CheckCircle2 className="w-10 h-10" />
                <h2 className="text-3xl font-black text-edu-darkText">Correct! Let's solidify your understanding.</h2>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-[2rem] p-8 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <BrainCircuit className="w-6 h-6 text-green-600" />
                  <span className="font-bold text-green-700 text-lg">AI Tutor Explanation</span>
                </div>
                <p className="text-lg font-medium text-edu-darkText/80 whitespace-pre-line">
                  {content.explainCorrect}
                </p>
                
                <div className="mt-8 bg-white p-4 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2"><Play className="w-4 h-4 text-green-600"/> Watch this quick visual:</h4>
                  <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden relative">
                     <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/50 font-bold">Educational Video Player</span>
                     </div>
                  </div>
                </div>
              </div>

              <button onClick={() => setMode('success')} className="w-full bg-edu-pinkRed hover:bg-edu-deepPink text-white font-bold py-4 rounded-xl transition flex justify-center items-center gap-2 text-lg">
                Continue to Next Topic <BookOpen className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {mode === 'success' && (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                 <CheckCircle2 className="w-12 h-12 relative z-10" />
                 <Star className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-bounce fill-current" />
                 <Star className="w-4 h-4 text-yellow-400 absolute top-10 -left-4 animate-bounce fill-current" style={{ animationDelay: '0.2s' }} />
              </div>
              
              <h1 className="text-4xl font-black text-edu-darkText mb-4">Great Job!</h1>
              <p className="text-xl text-edu-darkText/70 font-medium mb-8">You understood the concept and got the follow-up question right.</p>
              
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-6 py-3 rounded-xl font-black text-xl mb-10">
                +10 Points <Star className="w-6 h-6 fill-current" />
              </div>

              <div className="space-y-4">
                <button onClick={onBack} className="w-full bg-edu-pinkRed hover:bg-edu-deepPink text-white font-bold py-4 rounded-xl transition shadow-lg shadow-edu-pinkRed/20 text-lg">
                  Continue Learning Path
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
