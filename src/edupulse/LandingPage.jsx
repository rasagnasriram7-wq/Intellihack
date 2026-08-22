import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Brain, ArrowRight, ShieldCheck, Users, Activity, ChevronDown } from 'lucide-react';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-edu-softPink/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-edu-brightBlue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto relative z-10">
        <div className="text-2xl font-black tracking-tight text-edu-darkText flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-edu-pinkRed flex items-center justify-center text-white">E</div>
          EDUPULSE
        </div>
        <nav className="hidden md:flex gap-8 font-medium text-edu-darkText/80">
          <a href="#" className="hover:text-edu-pinkRed transition">Home</a>
          <a href="#how-it-works" className="hover:text-edu-pinkRed transition">How It Works</a>
          <a href="#experience" className="hover:text-edu-pinkRed transition">Experience</a>
        </nav>
        <div className="flex gap-4">
          <button onClick={() => onNavigate('auth')} className="font-bold text-edu-deepBlue hover:text-edu-brightBlue transition">Sign In</button>
          <button onClick={() => onNavigate('auth')} className="bg-edu-pinkRed text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-edu-pinkRed/30 hover:-translate-y-0.5 transition">Get Started</button>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-20 text-center relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-edu-softPink/50 shadow-sm mb-8 text-edu-deepPink font-bold text-sm tracking-wide"
        >
          <Sparkles className="w-4 h-4" />
          Learn. Play. Understand. Grow.
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-edu-darkText leading-[1.1] mb-8"
        >
          Every Student.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-edu-pinkRed to-edu-deepBlue">One Personal AI Tutor.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-edu-darkText/70 max-w-3xl mb-12 font-medium"
        >
          Personalised learning that understands your level, adapts to your progress and helps you learn at your own pace.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button 
            onClick={() => onNavigate('auth')}
            className="bg-edu-pinkRed text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-edu-pinkRed/30 hover:-translate-y-1 transition flex items-center justify-center gap-2"
          >
            Start Learning <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white text-edu-darkText px-8 py-4 rounded-full font-bold text-lg shadow-md hover:-translate-y-1 transition flex items-center justify-center gap-2">
            <Brain className="w-5 h-5 text-edu-brightBlue" /> See How It Works
          </button>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 relative w-full max-w-5xl aspect-[21/9] bg-white/60 backdrop-blur-xl rounded-3xl border border-white shadow-2xl overflow-hidden flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-edu-softBlue/40 to-edu-babyPink/40 z-10 mix-blend-overlay"></div>
          
          <motion.img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" 
            alt="Young people walking with books" 
            className="absolute inset-0 w-[110%] h-[110%] max-w-none object-cover"
            animate={{ x: ["-5%", "0%", "-5%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          />

          <div className="relative z-20 flex flex-col items-center animate-float bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 group-hover:scale-105 transition-transform">
            <BookOpen className="w-16 h-16 text-edu-pinkRed mb-3" />
            <h3 className="text-xl font-bold text-edu-darkText">Interactive Learning Experience</h3>
          </div>
        </motion.div>
      </main>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-edu-babyPink/20 relative z-10 border-t border-edu-babyPink/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-edu-darkText mb-6"
            >
              How EDUPULSE Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-edu-darkText/70 font-medium leading-relaxed"
            >
              Edupulse AI Tutor is a personalized learning solution that identifies each student's level and adapts questions, difficulty, hints, and explanations in real time. It addresses the problem of limited individual attention by supporting struggling students, challenging advanced learners, and providing multilingual learning. Its uniqueness lies in checking true understanding through "Explain Why?" questions and creating a different learning path for every student.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] shadow-xl shadow-edu-softBlue/10 overflow-hidden flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" 
                  alt="Students walking with books on campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <Users className="w-6 h-6 text-edu-pinkRed" />
                </div>
              </div>
              <div className="p-8 pt-4 text-center">
                <h3 className="text-xl font-black text-edu-darkText mb-3">Group & Solo Studies</h3>
                <p className="text-edu-darkText/70 font-medium">Interactive animations and group-like study mechanics to make learning feel social and engaging.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] shadow-xl shadow-edu-softBlue/10 overflow-hidden flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80" 
                  alt="Student reading a book" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-edu-brightBlue" />
                </div>
              </div>
              <div className="p-8 pt-4 text-center">
                <h3 className="text-xl font-black text-edu-darkText mb-3">More Subjects</h3>
                <p className="text-edu-darkText/70 font-medium">Expanded curriculum including Math, Science, English, Social Studies, and Competitive Exam prep.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2rem] shadow-xl shadow-edu-softBlue/10 overflow-hidden flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-319ce51d1541?auto=format&fit=crop&w=600&q=80" 
                  alt="Student studying intensely" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="p-8 pt-4 text-center">
                <h3 className="text-xl font-black text-edu-darkText mb-3">Explain Why?</h3>
                <p className="text-edu-darkText/70 font-medium">Checks true understanding by asking students to explain their reasoning, ensuring concept mastery.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Trust Section */}
      <section id="experience" className="py-24 bg-white relative z-10 border-t border-edu-babyPink/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-edu-babyPink/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-edu-secondary rounded-full text-edu-deepBlue font-bold text-sm mb-6"
            >
              <ShieldCheck className="w-4 h-4" /> Trust & Credibility
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-edu-darkText mb-6 leading-tight"
            >
              Built on 15+ Years of Learning Experience.<br/>
              <span className="text-edu-pinkRed">Reimagined with AI.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-edu-darkText/70 font-medium leading-relaxed"
            >
              Combining deep educational expertise with adaptive AI to create a more personalised learning experience for every student.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Timeline & Stats */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-edu-babyPink/50 p-6 rounded-2xl border border-edu-softPink/30 text-center"
                >
                  <div className="text-4xl font-black text-edu-pinkRed mb-2">15+</div>
                  <div className="text-sm font-bold text-edu-darkText/80">Years of Educational Experience</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-edu-secondary/50 p-6 rounded-2xl border border-edu-softBlue/30 text-center"
                >
                  <div className="text-4xl font-black text-edu-brightBlue mb-2">100%</div>
                  <div className="text-sm font-bold text-edu-darkText/80">Personalised Learning Approach</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-purple-50 p-6 rounded-2xl border border-purple-100 text-center"
                >
                  <div className="text-4xl font-black text-purple-600 mb-2">1:1</div>
                  <div className="text-sm font-bold text-edu-darkText/80">AI Learning Attention</div>
                </motion.div>
              </div>

              {/* Timeline */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pl-6 border-l-4 border-edu-babyPink space-y-8"
              >
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-edu-pinkRed border-4 border-white shadow-sm"></div>
                  <h4 className="text-xl font-bold text-edu-darkText">15+ Years of Educational Experience</h4>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-edu-softPink border-4 border-white shadow-sm"></div>
                  <h4 className="text-xl font-bold text-edu-darkText/80">Understanding How Students Learn</h4>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-edu-softBlue border-4 border-white shadow-sm"></div>
                  <h4 className="text-xl font-bold text-edu-darkText/80">Personalised Teaching Approach</h4>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-edu-brightBlue border-4 border-white shadow-sm"></div>
                  <h4 className="text-xl font-bold text-edu-darkText/80">Adaptive AI</h4>
                </div>
                <div className="relative">
                  <div className="absolute -left-[34px] top-0 w-7 h-7 rounded-full bg-edu-deepBlue border-4 border-white shadow-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h4 className="text-2xl font-black text-edu-deepBlue">EDUPULSE</h4>
                </div>
              </motion.div>
            </div>

            {/* Illustration */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] bg-gradient-to-br from-edu-babyPink to-edu-secondary rounded-[3rem] p-8 flex items-center justify-center border-4 border-white shadow-2xl"
            >
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-[3rem]"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-8">
                <div className="flex items-end gap-6">
                  {/* Educator Avatar */}
                  <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="w-24 h-24 bg-white rounded-full shadow-lg border-4 border-edu-softPink flex items-center justify-center mb-4">
                      <Users className="w-10 h-10 text-edu-pinkRed" />
                    </div>
                    <div className="bg-white px-4 py-2 rounded-xl font-bold text-sm text-edu-darkText shadow-sm">Expertise</div>
                  </div>
                  
                  {/* Connection Node */}
                  <div className="mb-12">
                    <Activity className="w-8 h-8 text-edu-deepBlue opacity-50" />
                  </div>

                  {/* AI Avatar */}
                  <div className="flex flex-col items-center animate-float">
                    <div className="w-28 h-28 bg-white rounded-full shadow-lg border-4 border-edu-brightBlue flex items-center justify-center mb-4 relative">
                      <Brain className="w-12 h-12 text-edu-brightBlue animate-pulse-glow" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-xl font-bold text-sm text-edu-darkText shadow-sm">Adaptive AI</div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl font-bold text-lg text-edu-deepBlue text-center shadow-lg">
                  The perfect blend of human wisdom<br/>and artificial intelligence.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
