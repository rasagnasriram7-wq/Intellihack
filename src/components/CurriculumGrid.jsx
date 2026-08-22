import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FlaskConical, Atom } from 'lucide-react';

const categories = [
  {
    id: 'foundational',
    title: 'Foundational (Nursery – 5)',
    icon: BookOpen,
    content: 'Play-based learning, phonics, and voice-guided interactive lessons designed to build curiosity and core cognitive skills.'
  },
  {
    id: 'middle',
    title: 'Middle & High (6 – 10)',
    icon: FlaskConical,
    content: 'Interactive Science, Math, and Social Studies with immersive visual simulations to solidify theoretical concepts.'
  },
  {
    id: 'senior',
    title: 'Senior & Exams (11 – 12)',
    icon: Atom,
    content: 'Specialized modules for JEE Main, JEE Advanced, and NEET. Deep dives into Physics, Chemistry, Biology, and advanced Math.'
  }
];

export default function CurriculumGrid() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section id="curriculum" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Comprehensive <span className="text-brand-600">Curriculum</span></h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Tailored content for every stage of your child's academic journey.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex flex-col gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-4 p-6 rounded-2xl text-left transition-all ${
                    activeTab === cat.id 
                    ? 'bg-brand-600 text-white shadow-xl shadow-brand-500/20 translate-x-2' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:shadow-md'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${activeTab === cat.id ? 'bg-white/20' : 'bg-brand-50 text-brand-600'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-lg">{cat.title}</span>
                </button>
              );
            })}
          </div>

          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              {categories.map((cat) => (
                activeTab === cat.id && (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col justify-center relative overflow-hidden"
                  >
                    <div className="absolute -bottom-20 -right-20 opacity-5">
                      <cat.icon className="w-96 h-96" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">{cat.title} Coverage</h3>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-xl relative z-10">
                      {cat.content}
                    </p>
                    <div className="mt-8 relative z-10">
                      <button className="text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-2">
                        Explore Modules <span>→</span>
                      </button>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
