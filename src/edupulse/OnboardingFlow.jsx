import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';

export default function OnboardingFlow({ onComplete }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ class: '', subject: '', language: '', level: '' });
  const [isAssessing, setIsAssessing] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);
  
  const handleAssessment = () => {
    setIsAssessing(true);
    setTimeout(() => {
      setIsAssessing(false);
      setData(prev => ({ ...prev, level: 'Intermediate' }));
      setStep(4);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-edu-babyPink"
      >
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-edu-darkText mb-2">Tell EDUPULSE How You Learn</h2>
                <p className="text-edu-darkText/60 font-medium">Select your class to personalise your AI tutor.</p>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-8">
                {['Nursery', 'LKG', 'UKG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map(c => (
                  <button 
                    key={c}
                    onClick={() => setData({ ...data, class: c })}
                    className={`py-4 rounded-xl font-bold text-lg transition-all ${data.class === c ? 'bg-edu-pinkRed text-white shadow-lg shadow-edu-pinkRed/30' : 'bg-slate-50 text-edu-darkText hover:bg-edu-babyPink'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <button 
                onClick={handleNext}
                disabled={!data.class}
                className="w-full bg-edu-brightBlue hover:bg-edu-deepBlue text-white font-bold py-4 rounded-xl transition flex justify-center items-center gap-2 disabled:opacity-50"
              >
                Next <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-edu-darkText mb-2">Choose Subject & Language</h2>
                <p className="text-edu-darkText/60 font-medium">What do you want to learn today?</p>
              </div>
              
              <div className="mb-6">
                <label className="block font-bold text-edu-darkText mb-3">Subject / Exam Prep</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology', 'English', 'Hindi', 'Telugu', 'Social Studies', 'JEE Main', 'JEE Advanced', 'NEET'].map(s => (
                    <button 
                      key={s}
                      onClick={() => setData({ ...data, subject: s })}
                      className={`py-3 rounded-xl font-bold transition-all text-sm ${data.subject === s ? 'bg-edu-pinkRed text-white shadow-md' : 'bg-slate-50 text-edu-darkText hover:bg-edu-babyPink border border-slate-100'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block font-bold text-edu-darkText mb-3">Language</label>
                <div className="grid grid-cols-3 gap-3">
                  {['English', 'తెలుగు', 'हिन्दी', 'தமிழ்'].map(l => (
                    <button 
                      key={l}
                      onClick={() => setData({ ...data, language: l })}
                      className={`py-3 rounded-xl font-bold transition-all ${data.language === l ? 'bg-edu-brightBlue text-white' : 'bg-slate-50 text-edu-darkText hover:bg-edu-secondary'}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleNext}
                disabled={!data.subject || !data.language}
                className="w-full bg-edu-brightBlue hover:bg-edu-deepBlue text-white font-bold py-4 rounded-xl transition flex justify-center items-center gap-2 disabled:opacity-50"
              >
                Start Level Assessment <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="text-center py-10">
              {isAssessing ? (
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-6 relative">
                    <Brain className="w-24 h-24 text-edu-pinkRed animate-pulse-glow" />
                  </div>
                  <h3 className="text-2xl font-black text-edu-darkText mb-2">Analysing Your Level...</h3>
                  <p className="text-edu-darkText/60 font-medium">EDUPULSE is reviewing your answers.</p>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-black text-edu-darkText mb-8">Let's understand your learning level.</h2>
                  <div className="bg-slate-50 p-6 rounded-2xl mb-8 text-left border border-slate-200">
                    <p className="font-bold text-lg mb-4">Q: What is the main source of energy for the Earth?</p>
                    <div className="space-y-3">
                      <button onClick={handleAssessment} className="w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-edu-brightBlue font-medium">A) The Moon</button>
                      <button onClick={handleAssessment} className="w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-edu-brightBlue font-medium">B) The Sun</button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="s4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-black text-edu-darkText mb-4">Your personalised learning profile is ready!</h2>
              <div className="bg-edu-secondary/50 rounded-2xl p-6 mb-8 inline-block text-left">
                <p className="font-bold text-edu-deepBlue mb-2">Assessed Level: <span className="text-edu-pinkRed">Intermediate</span></p>
                <p className="font-medium text-edu-darkText/80">Strong Areas: Basic Concepts</p>
                <p className="font-medium text-edu-darkText/80">Recommended Starting Point: Lesson 3</p>
              </div>
              <button 
                onClick={() => onComplete(data)}
                className="w-full bg-edu-pinkRed hover:bg-edu-deepPink text-white font-bold py-4 rounded-xl transition shadow-lg shadow-edu-pinkRed/20"
              >
                Go to Dashboard
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
