import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, HelpCircle, Zap } from 'lucide-react';

export default function DualJourney() {
  return (
    <section id="pathways" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Two Paths, <span className="text-brand-600">One Destination: Mastery</span></h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">See how the AI adapts in real-time based on the student's current understanding.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Struggling Path */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/40 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Needs Extra Support</h3>
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Scaffolded Hints</h4>
                  <p className="text-sm text-slate-600">Provides partial steps without giving away the final answer.</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Visual Breakdowns</h4>
                  <p className="text-sm text-slate-600">Transforms abstract math into interactive visual blocks.</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Micro-Rewards</h4>
                  <p className="text-sm text-slate-600">Encourages persistence with immediate positive reinforcement.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advanced Path */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-indigo-50 border border-indigo-100 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-300/40 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Advanced Learner</h3>
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Accelerated Pacing</h4>
                  <p className="text-sm text-slate-600">Skips repetitive drills and jumps to edge-case scenarios.</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Multi-Concept Challenges</h4>
                  <p className="text-sm text-slate-600">Combines topics (e.g., Algebra + Geometry) for deeper testing.</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Deep "Why" Prompts</h4>
                  <p className="text-sm text-slate-600">Asks the student to explain their reasoning to the AI.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
