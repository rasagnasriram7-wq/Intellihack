import React from 'react';
import { Sparkles, ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenAssessment, onOpenVideo }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 shadow-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-semibold text-slate-700">From Information into Intelligence</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight"
          >
            Master Every Subject <span className="text-gradient">from Nursery to 12th</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 mb-4 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            An adaptive AI learning companion powered by pedagogical expertise. 
            Ditch rote memorization for deep concept mastery tailored to how your brain learns.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-brand-600 mb-10 font-bold"
          >
            AI that explains the "Why", not just the "What".
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={onOpenAssessment}
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-brand-500/30 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Start Free AI Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onOpenVideo}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-full font-bold text-lg transition-all hover:border-slate-300 flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5 text-slate-500" />
              Watch Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
