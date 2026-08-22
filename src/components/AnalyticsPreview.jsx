import React from 'react';
import { BarChart3, TrendingUp, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AnalyticsPreview() {
  return (
    <section id="analytics" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">See the Unseen with <span className="text-brand-400">Deep Analytics</span></h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Move beyond simple scores. Our dashboard visualizes exactly how your child's brain is grasping concepts, highlighting true mastery vs. temporary memorization.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-500/20 rounded-xl text-brand-400 shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Granular Mastery Gauges</h4>
                  <p className="text-slate-400">Tracks sub-skills like "Algebraic Logic" instead of just "Math".</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400 shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Dynamic Growth Trajectories</h4>
                  <p className="text-slate-400">Predictive modeling shows expected progress curves.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="glass-panel p-6 shadow-2xl relative">
              <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
                <h3 className="font-bold text-xl flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-brand-400" />
                  Student Mastery Portal
                </h3>
                <span className="text-sm bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full border border-brand-500/30">Live Sync</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300">Physics: Kinematics Logic</span>
                    <span className="font-bold text-brand-400">92% Mastery</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      className="bg-gradient-to-r from-brand-600 to-brand-400 h-full rounded-full"
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300">Math: Algebraic Manipulation</span>
                    <span className="font-bold text-emerald-400">88% Mastery</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                      className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full"
                    ></motion.div>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-slate-400 mb-4">Growth Trajectory (Last 30 Days)</h4>
                  <div className="h-32 flex items-end justify-between gap-2">
                    {[40, 45, 55, 60, 62, 75, 82, 88].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="w-full bg-brand-500/50 hover:bg-brand-400 rounded-t-md cursor-pointer transition-colors"
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
