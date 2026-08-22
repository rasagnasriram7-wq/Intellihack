import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const scenarios = [
  {
    id: 'rote',
    title: 'Rote Memorization',
    pain: 'Rote Memorization Illusion: Students cram for exams but forget concepts weeks later.',
    fix: 'Real-Time Adaptive Learning Flow: AI breaks down complex topics into digestible interactive stories.'
  },
  {
    id: 'onesize',
    title: 'One-Size-Fits-All',
    pain: 'One-Size-Fits-All Gap: Fast learners get bored, struggling students get left behind.',
    fix: 'AI "Explain Why" Checks: System constantly assesses understanding and adapts pacing dynamically.'
  },
  {
    id: 'language',
    title: 'Language Barriers',
    pain: 'Language Barriers: Complex terminology in non-native languages hinders comprehension.',
    fix: 'AI Multilingual Engine: Seamlessly toggle between English and regional languages mid-concept.'
  },
  {
    id: 'anxiety',
    title: 'Exam Anxiety',
    pain: 'Exam Anxiety: High-stakes testing creates immense pressure and mental blocks.',
    fix: 'Gentle Diagnostics: Low-stakes, stress-free micro-assessments that feel like games.'
  }
];

export default function ProblemSolution() {
  const [activeTab, setActiveTab] = useState(scenarios[0].id);
  const activeScenario = scenarios.find(s => s.id === activeTab);

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">The Old Way vs. <span className="text-brand-600">The AuraLearn Way</span></h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">See how our AI fundamentally changes the learning equation.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === s.id ? 'bg-brand-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12"
            >
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-red-500">
                  <XCircle className="w-24 h-24" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold text-red-900">The Problem</h3>
                </div>
                <p className="text-red-800 text-lg leading-relaxed relative z-10">{activeScenario.pain}</p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-emerald-500">
                  <CheckCircle2 className="w-24 h-24" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-bold text-emerald-900">AI Solution</h3>
                </div>
                <p className="text-emerald-800 text-lg leading-relaxed relative z-10">{activeScenario.fix}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
