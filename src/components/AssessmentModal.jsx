import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, CheckCircle2, XCircle, Brain, BookOpen } from 'lucide-react';

export default function AssessmentModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsProcessing(true);
    
    // Simulate AI thinking and gaining knowledge animation
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 2500);
  };

  const isCorrect = selectedAnswer === 'B'; // 'B) 2 m/s²' is correct

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl relative z-10 overflow-hidden flex flex-col min-h-[500px]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-600 to-indigo-600 p-6 text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-white animate-pulse-glow" />
              </div>
              <div>
                <h2 className="text-xl font-bold">AI Diagnostic Demo</h2>
                <p className="text-brand-100 text-sm">Experience the "Explain Why" flow</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="relative z-10 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1.5">
            <motion.div 
              className="bg-brand-500 h-full"
              initial={{ width: '0%' }}
              animate={{ width: step === 1 ? '33%' : step === 2 ? '100%' : '100%' }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>

          {/* Content Area */}
          <div className="p-8 flex-1 flex flex-col relative">
            
            {/* Processing State (Gaining Knowledge Animation) */}
            <AnimatePresence>
              {isProcessing && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center"
                >
                  <motion.div 
                    className="w-24 h-24 mb-6 relative"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <Brain className="w-24 h-24 text-brand-500 absolute inset-0 animate-pulse-glow" />
                  </motion.div>
                  <motion.div className="flex items-center gap-4 text-brand-600 font-bold text-xl animate-bounce">
                    <BookOpen className="w-6 h-6" />
                    <span>AI is reading and analyzing your response...</span>
                  </motion.div>
                  <p className="text-slate-500 mt-2">Gaining knowledge on your logic pattern.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {step === 1 && !isProcessing && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Question 1: Physics (Kinematics)</h3>
                  <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 mb-6 shadow-inner">
                    <p className="text-lg text-slate-800 leading-relaxed font-medium">
                      A car accelerates uniformly from rest to a speed of 20 m/s in 10 seconds. What is the car's acceleration?
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => handleAnswer('A')} className="p-4 border-2 border-slate-200 rounded-xl hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700 text-left font-bold text-slate-700 transition-all shadow-sm">A) 1 m/s²</button>
                    <button onClick={() => handleAnswer('B')} className="p-4 border-2 border-slate-200 rounded-xl hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700 text-left font-bold text-slate-700 transition-all shadow-sm">B) 2 m/s²</button>
                    <button onClick={() => handleAnswer('C')} className="p-4 border-2 border-slate-200 rounded-xl hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700 text-left font-bold text-slate-700 transition-all shadow-sm">C) 10 m/s²</button>
                    <button onClick={() => handleAnswer('D')} className="p-4 border-2 border-slate-200 rounded-xl hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700 text-left font-bold text-slate-700 transition-all shadow-sm">D) 200 m/s²</button>
                  </div>
                </motion.div>
              )}

              {step === 2 && !isProcessing && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col md:flex-row gap-8"
                >
                  <div className="flex-1">
                    <div className={`flex items-center gap-3 mb-4 p-4 rounded-xl ${isCorrect ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
                      {isCorrect ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
                      <span className="font-bold text-lg">
                        {isCorrect ? "Correct! The answer is 2 m/s²." : "Not quite! Let's understand why."}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4">AI Deep Dive Explanation</h3>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-brand-500 rounded-l-2xl"></div>
                      <p className="text-slate-700 font-medium mb-4">
                        <span className="text-brand-600 font-bold mr-2">AuraLearn AI:</span> 
                        {isCorrect 
                          ? "Great job using the formula a = (v-u)/t. You identified that initial velocity (u) is 0 m/s since it starts from rest. (20 - 0) / 10 = 2 m/s²."
                          : "Remember, acceleration is the change in velocity over time. The formula is a = (v-u)/t. Since the car starts from rest, its initial velocity (u) is 0."
                        }
                      </p>
                      <p className="text-slate-700 font-medium">
                        <span className="text-brand-600 font-bold mr-2">Concept:</span>
                        Physically, an acceleration of 2 m/s² means that every second, the car's speed increases by 2 m/s. Watch this visual breakdown to solidify the concept!
                      </p>
                    </div>
                  </div>

                  {/* Subject Related Demo Video */}
                  <div className="flex-1">
                    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border-4 border-slate-800">
                      <div className="aspect-video relative">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/xZVJqEBNyM8?autoplay=1&mute=1" 
                          title="Kinematics Explanation" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          className="absolute inset-0"
                        ></iframe>
                      </div>
                      <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                        <span className="font-bold text-sm text-brand-400">Subject: Kinematics</span>
                        <span className="text-xs text-slate-400">0:45 / 2:30</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Footer Actions */}
          {step === 2 && (
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button 
                onClick={onClose}
                className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-brand-500/30 hover:-translate-y-1"
              >
                Complete Diagnostic <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
