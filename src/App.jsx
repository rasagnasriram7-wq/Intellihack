import React, { useState } from 'react';
import LandingPage from './edupulse/LandingPage';
import AuthPage from './edupulse/AuthPage';
import OnboardingFlow from './edupulse/OnboardingFlow';
import Dashboard from './edupulse/Dashboard';
import LearningFlow from './edupulse/LearningFlow';
import AITutor from './edupulse/AITutor';

export default function App() {
  const [appState, setAppState] = useState('landing'); // landing, auth, onboarding, dashboard, learning
  const [user, setUser] = useState(null);
  
  // Demo Student Data
  const demoStudent = {
    id: 'demo-123',
    name: 'Ananya',
    email: 'ananya@demo.com',
    class: '8',
    board: 'CBSE',
    subject: 'Science',
    language: 'Telugu',
    level: 'Intermediate',
    topic: 'Moon Phases',
    points: 850,
    streak: 7,
    performance: { Science: 78 }
  };

  const navigate = (state) => setAppState(state);

  const handleLogin = (email) => {
    // Mock login logic
    if (email.includes('demo')) {
      setUser(demoStudent);
      setAppState('dashboard');
    } else {
      setUser({ name: email.split('@')[0], email });
      setAppState('onboarding');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setAppState('landing');
  };

  const completeOnboarding = (profileData) => {
    setUser({ ...user, ...profileData });
    setAppState('dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-edu-babyPink via-white to-edu-secondary text-edu-darkText font-sans overflow-x-hidden selection:bg-edu-pinkRed selection:text-white">
      {appState === 'landing' && <LandingPage onNavigate={navigate} />}
      {appState === 'auth' && <AuthPage onLogin={handleLogin} onBack={() => navigate('landing')} />}
      {appState === 'onboarding' && <OnboardingFlow onComplete={completeOnboarding} />}
      {appState === 'dashboard' && <Dashboard user={user} onLogout={handleLogout} onStartLearning={() => navigate('learning')} onOpenTutor={() => navigate('aitutor')} />}
      {appState === 'learning' && <LearningFlow user={user} onBack={() => navigate('dashboard')} />}
      {appState === 'aitutor' && <AITutor user={user} onBack={() => navigate('dashboard')} />}
    </div>
  );
}
