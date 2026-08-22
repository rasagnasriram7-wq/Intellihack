import React from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section */}
        <div className="bg-brand-600 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning?</h2>
              <p className="text-brand-100 text-lg">Join thousands of students achieving mastery with AuraLearn AI.</p>
            </div>
            <div className="md:w-1/2 w-full bg-white rounded-2xl p-6 shadow-xl">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <select className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500">
                    <option value="" disabled selected>Select Class</option>
                    <option value="nur-5">Nursery - Class 5</option>
                    <option value="6-10">Class 6 - 10</option>
                    <option value="11-12">Class 11 - 12 (Board)</option>
                    <option value="jee">JEE Main / Advanced</option>
                    <option value="neet">NEET</option>
                  </select>
                </div>
                <input 
                  type="email" 
                  placeholder="Enter Parent/Student Email" 
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button className="w-full bg-slate-900 text-white rounded-lg px-4 py-3 font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-slate-800 pb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-bold text-xl text-white">AuraLearn <span className="text-brand-500">AI</span></span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Revolutionizing education from Nursery to NEET through adaptive, empathetic AI.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Curriculum</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Foundational</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Middle School</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">High School</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">JEE / NEET</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Pedagogy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} AuraLearn AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
