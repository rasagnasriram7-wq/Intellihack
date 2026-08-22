import React from 'react';
import { Globe, LogIn, Menu, User, LogOut } from 'lucide-react';

export default function Header({ user, onOpenAuth, onLogout }) {
  return (
    <header className="fixed top-0 w-full z-50 glass-card rounded-none border-t-0 border-x-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand-500 shadow-lg shadow-brand-500/30">
              <div className="absolute w-full h-full bg-brand-400 rounded-xl animate-ping opacity-20"></div>
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-900">AuraLearn <span className="text-brand-600">AI</span></span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Features</a>
            <a href="#curriculum" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Curriculum</a>
            <a href="#pathways" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Pathways</a>
            <a href="#analytics" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Analytics</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-slate-600 hover:text-slate-900 cursor-pointer">
              <Globe className="w-5 h-5" />
              <select className="bg-transparent font-medium focus:outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
                <option value="mr">Marathi</option>
                <option value="bn">Bengali</option>
              </select>
            </div>
            
            {user ? (
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <User className="w-5 h-5 text-brand-600" />
                  <span>{user.name}</span>
                </div>
                <button 
                  onClick={onLogout}
                  className="text-slate-500 hover:text-red-500 transition-colors p-2"
                  title="Sign Out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={onOpenAuth}
                className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <LogIn className="w-4 h-4" />
                Log In
              </button>
            )}

            <button className="md:hidden text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
