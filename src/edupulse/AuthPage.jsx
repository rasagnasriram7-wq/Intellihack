import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowLeft, BookOpen } from 'lucide-react';

export default function AuthPage({ onLogin, onBack }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email || 'demo@demo.com');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-edu-softBlue to-edu-babyPink rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      
      <button onClick={onBack} className="absolute top-8 left-8 text-edu-darkText hover:text-edu-pinkRed flex items-center gap-2 font-bold transition">
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white flex overflow-hidden relative z-10"
      >
        {/* Left Side: Illustration */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-edu-babyPink to-edu-softBlue p-12 flex-col justify-between relative overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/40 rounded-full blur-xl animate-float"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-edu-darkText mb-4 leading-tight">Your AI Learning<br/>Companion Awaits!</h2>
            <p className="text-lg text-edu-deepBlue font-medium">Log in to continue your streak and earn more badges today.</p>
          </div>
          
          <div className="relative z-10 self-center">
             <motion.img 
               src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=600&q=80" 
               alt="Student studying" 
               className="w-64 h-64 object-cover rounded-full border-8 border-white shadow-2xl animate-float"
             />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 p-10 sm:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center lg:text-left">
            <div className="w-12 h-12 rounded-xl bg-edu-pinkRed flex items-center justify-center text-white text-2xl font-black mb-6 mx-auto lg:mx-0">E</div>
            <h2 className="text-3xl font-black text-edu-darkText mb-2">{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
            <p className="text-edu-darkText/60 font-medium">
              {isLogin ? 'Enter your details to access your dashboard.' : 'Start your personalised learning journey.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-sm font-bold text-edu-darkText mb-2">Student Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-edu-darkText/40" />
                  <input type="text" placeholder="e.g. Ananya" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-edu-brightBlue focus:border-transparent transition font-medium" />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-bold text-edu-darkText mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-edu-darkText/40" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@example.com" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-edu-brightBlue focus:border-transparent transition font-medium" 
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-bold text-edu-darkText">Password</label>
                {isLogin && <a href="#" className="text-sm font-bold text-edu-brightBlue hover:text-edu-deepBlue">Forgot Password?</a>}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-edu-darkText/40" />
                <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-edu-brightBlue focus:border-transparent transition font-medium" />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-bold text-edu-darkText mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-edu-darkText/40" />
                  <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-edu-brightBlue focus:border-transparent transition font-medium" />
                </div>
              </div>
            )}

            <button type="submit" className="w-full bg-edu-pinkRed hover:bg-edu-deepPink text-white font-bold py-4 rounded-xl transition shadow-lg shadow-edu-pinkRed/20 mt-4">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-edu-darkText/70 font-medium">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button onClick={() => setIsLogin(!isLogin)} className="text-edu-pinkRed font-bold hover:underline">
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
