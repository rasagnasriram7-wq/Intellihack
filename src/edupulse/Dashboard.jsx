import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, Flame, Star, Trophy, BookOpen, Target, BrainCircuit, Search } from 'lucide-react';

export default function Dashboard({ user, onLogout, onStartLearning, onOpenTutor }) {
  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-edu-pinkRed flex items-center justify-center text-white font-black text-xl">E</div>
          <span className="font-black text-xl tracking-tight text-edu-darkText">EDUPULSE</span>
        </div>
        
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-edu-brightBlue flex items-center justify-center text-white font-bold text-lg">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-edu-darkText leading-tight">{user.name}</p>
              <p className="text-sm font-medium text-edu-darkText/60">Class {user.class} • {user.board}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="flex items-center gap-1 bg-amber-100 text-amber-600 px-2 py-1 rounded-md text-xs font-bold">
              <Star className="w-3 h-3 fill-current" /> {user.points || 0}
            </div>
            <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-1 rounded-md text-xs font-bold">
              <Flame className="w-3 h-3 fill-current" /> {user.streak || 0}
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-edu-babyPink text-edu-deepPink font-bold rounded-xl">
            <BookOpen className="w-5 h-5" /> Home
          </a>
          <button onClick={onOpenTutor} className="flex items-center w-full text-left gap-3 px-4 py-3 text-edu-darkText/70 font-bold rounded-xl hover:bg-slate-50 transition">
            <Search className="w-5 h-5" /> Find Tutorials
          </button>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-edu-darkText/70 font-bold rounded-xl hover:bg-slate-50 transition">
            <Trophy className="w-5 h-5" /> Rewards
          </a>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button onClick={onLogout} className="flex items-center gap-3 px-4 py-3 w-full text-left text-edu-darkText/70 font-bold rounded-xl hover:bg-red-50 hover:text-red-500 transition">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10 bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl font-black text-edu-darkText">Welcome back, {user.name}! 👋</h1>
            <p className="text-edu-darkText/60 font-medium mt-1">Ready to continue your learning journey?</p>
            <div className="flex items-center gap-2 mt-4">
               <span className="font-bold text-sm text-edu-darkText">Language:</span>
               <span className="font-black text-edu-brightBlue">{user.language}</span>
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="hidden md:block relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=300&q=80" 
              alt="Student smiling" 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </motion.div>
          
          {/* Decorative background for header */}
          <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-edu-babyPink/50 to-transparent"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            {/* Recommendation Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-edu-deepBlue to-edu-brightBlue rounded-[2rem] p-8 text-white shadow-xl shadow-edu-brightBlue/20 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-lg text-sm font-bold backdrop-blur-sm mb-4">
                  <Target className="w-4 h-4" /> Recommended For You
                </div>
                <h2 className="text-3xl font-black mb-2">{user.subject}: {user.topic}</h2>
                <p className="text-white/80 font-medium mb-8 max-w-md">"You answered 3 fraction questions incorrectly. Let's strengthen this concept."</p>
                <button 
                  onClick={onStartLearning}
                  className="bg-edu-pinkRed hover:bg-edu-deepPink text-white px-8 py-3.5 rounded-xl font-bold transition shadow-lg flex items-center gap-2"
                >
                  Start Recommended Practice <BookOpen className="w-5 h-5" />
                </button>
              </div>

              <div className="hidden md:block relative z-10 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform -rotate-3 hover:rotate-0 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-319ce51d1541?auto=format&fit=crop&w=500&q=80" 
                  alt="Student deeply focused" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Performance */}
            <div>
              <h3 className="text-xl font-black text-edu-darkText mb-4">Subject Performance</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-edu-darkText">Mathematics</span>
                    <span className="font-black text-edu-brightBlue">82%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-edu-brightBlue h-2 rounded-full w-[82%]"></div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 border-2 border-edu-pinkRed rounded-2xl opacity-50"></div>
                  <div className="flex justify-between items-center mb-3 relative z-10">
                    <span className="font-bold text-edu-darkText">Science</span>
                    <span className="font-black text-edu-pinkRed">78%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 relative z-10">
                    <div className="bg-edu-pinkRed h-2 rounded-full w-[78%]"></div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-edu-darkText">English</span>
                    <span className="font-black text-emerald-500">91%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full w-[91%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm">
              <h3 className="font-black text-lg text-edu-darkText mb-6">Learning Activity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <span className="font-medium text-edu-darkText/70">Weekly Score</span>
                  <span className="font-black text-edu-darkText">84/100</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-xl">
                  <span className="font-medium text-orange-800">Learning Streak</span>
                  <span className="font-black text-orange-600 flex items-center gap-1"><Flame className="w-4 h-4"/> 7 Days</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-edu-babyPink rounded-xl">
                  <span className="font-medium text-edu-deepPink">Improvement</span>
                  <span className="font-black text-edu-pinkRed">+12%</span>
                </div>
              </div>
            </div>
            
            {/* AI Analysis */}
            <div className="bg-edu-secondary rounded-[2rem] p-6 border border-edu-brightBlue/20">
               <h3 className="font-black text-lg text-edu-deepBlue mb-4 flex items-center gap-2"><BrainCircuit className="w-5 h-5"/> AI Insights</h3>
               <div className="space-y-3 text-sm">
                  <p><span className="font-bold text-edu-darkText">Strong Topic:</span> Algebra</p>
                  <p><span className="font-bold text-edu-darkText">Needs Work:</span> Chemical Reactions</p>
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
