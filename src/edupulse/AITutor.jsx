import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, BookOpen, PlayCircle, FileText, Sparkles } from 'lucide-react';

export default function AITutor({ user, onBack }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setHasSearched(true);
    }
  };

  const isAdvanced = ['Physics', 'Chemistry', 'JEE Main', 'JEE Advanced', 'NEET'].includes(user.subject);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="p-4 bg-white border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 text-edu-darkText hover:text-edu-pinkRed transition bg-slate-100 rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="font-black text-xl text-edu-darkText leading-none">Find Tutorials & Assignments</h2>
            <span className="text-sm font-bold text-edu-darkText/60">{user.subject}</span>
          </div>
        </div>
        
        <form onSubmit={handleSearch} className="relative w-full md:w-1/2">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${user.subject} topics, tutorials, or assignments...`}
            className="w-full bg-slate-100 border border-slate-300 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-edu-brightBlue transition font-medium"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <button type="submit" className="hidden">Search</button>
        </form>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-8 w-full max-w-5xl mx-auto">
        {!hasSearched ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="w-24 h-24 bg-edu-babyPink rounded-full flex items-center justify-center mb-6">
              <Search className="w-10 h-10 text-edu-pinkRed" />
            </div>
            <h3 className="text-2xl font-black text-edu-darkText mb-2">What do you want to learn today?</h3>
            <p className="text-edu-darkText/60 font-medium max-w-md">
              Search for any topic in {user.subject} to find AI-curated video tutorials, reading materials, and practice assignments.
            </p>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-edu-pinkRed" />
              <h3 className="text-xl font-bold text-edu-darkText">AI Recommended Results for "{searchQuery}"</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Video Tutorial Card */}
              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all cursor-pointer">
                <div className="aspect-video relative flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80" 
                    alt="Student watching tutorial"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                  <PlayCircle className="w-16 h-16 text-white/90 group-hover:text-white transition-colors z-10 filter drop-shadow-lg group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-edu-babyPink text-edu-deepPink text-xs font-bold px-2 py-1 rounded-md">Video Tutorial</span>
                    <span className="text-xs font-bold text-slate-400">12 mins</span>
                  </div>
                  <h4 className="font-black text-lg text-edu-darkText mb-2">
                    {isAdvanced ? "Advanced Concepts in " : "Introduction to "} {searchQuery || 'the topic'}
                  </h4>
                  <p className="text-sm font-medium text-edu-darkText/70">
                    A comprehensive video breakdown explaining the core principles and common pitfalls.
                  </p>
                </div>
              </div>

              {/* Practice Assignment Card */}
              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all cursor-pointer flex flex-col">
                <div className="p-8 flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" 
                    alt="Student writing assignment"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-edu-secondary to-edu-babyPink/50 mix-blend-multiply"></div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <FileText className="w-16 h-16 text-edu-deepBlue mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-black text-xl text-edu-darkText mb-2">Practice Assignment</h4>
                    <p className="text-sm font-medium text-edu-darkText/80 bg-white/50 px-3 py-1 rounded-lg backdrop-blur-sm">
                      15 Questions • Medium Difficulty
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-white border-t border-slate-100">
                  <button className="w-full py-3 bg-edu-brightBlue hover:bg-edu-deepBlue text-white font-bold rounded-xl transition">
                    Start Assignment
                  </button>
                </div>
              </div>
            </div>

            {/* Related Topics */}
            <div className="mt-12">
              <h4 className="font-bold text-edu-darkText mb-4">Related Topics You Might Like</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-edu-darkText/70 hover:border-edu-pinkRed cursor-pointer transition">
                  {isAdvanced ? 'Statistical Mechanics' : 'Solar System'}
                </span>
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-edu-darkText/70 hover:border-edu-pinkRed cursor-pointer transition">
                  {isAdvanced ? 'Thermodynamic Equilibrium' : 'Eclipses'}
                </span>
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-edu-darkText/70 hover:border-edu-pinkRed cursor-pointer transition">
                  {isAdvanced ? 'Enthalpy vs Entropy' : 'Tides'}
                </span>
              </div>
            </div>

          </motion.div>
        )}
      </main>
    </div>
  );
}
