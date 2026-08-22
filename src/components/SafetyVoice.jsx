import React from 'react';
import { ShieldAlert, Mic, HeartHandshake, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SafetyVoice() {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Built with <span className="text-brand-600">Safety & Accessibility</span></h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Because every child learns differently, and emotional well-being is fundamental to learning.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Safety Card */}
          <div className="glass-card p-8 bg-white/90 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-rose-100 text-rose-600 rounded-2xl">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Gentle Distress Guardrails</h3>
                <p className="text-slate-500 font-medium">Emotional & Cognitive Safety</p>
              </div>
            </div>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our AI constantly monitors for signs of severe frustration or emotional distress during learning sessions. When detected, the system immediately halts challenging tasks and routes the session to a supportive mode.
            </p>
            
            <div className="bg-rose-50 border border-rose-100 rounded-xl p-5 flex items-start gap-4">
              <HeartHandshake className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-rose-900 mb-1">Intervention Triggered</h4>
                <p className="text-rose-800/80 text-sm">"It looks like this topic is causing some stress. Let's take a break. A notification has been sent to your parent/teacher."</p>
              </div>
            </div>
          </div>

          {/* Voice Feature */}
          <div className="glass-card p-8 bg-white/90 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-brand-100 text-brand-600 rounded-2xl">
                  <Mic className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Pre-Reader Voice Support</h3>
                  <p className="text-slate-500 font-medium">Speech-to-Text & Text-to-Speech</p>
                </div>
              </div>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                For younger children in Nursery to Class 2, AuraLearn offers a completely voice-guided interface. They can speak their answers and hear the AI's explanations, making learning intuitive before they can read fluently.
              </p>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-brand-400" />
                  <span className="text-sm font-medium text-slate-300">Listening...</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1 h-12">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((bar) => (
                  <motion.div
                    key={bar}
                    animate={{ 
                      height: ['20%', '80%', '40%', '100%', '30%'],
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      delay: bar * 0.1
                    }}
                    className="w-2 bg-brand-500 rounded-full"
                  ></motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
