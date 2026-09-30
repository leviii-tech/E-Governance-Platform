import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Search, 
  ShieldCheck, 
  Globe, 
  Moon, 
  Sun, 
  Volume2, 
  User, 
  FileCheck, 
  AlertCircle, 
  Sparkles, 
  CheckCircle,
  Menu,
  X,
  FileText,
  Clock,
  AlertTriangle,
  HeartHandshake,
  FolderLock
} from 'lucide-react';
import { translations } from '../data/translations';

export const Navbar = ({ 
  currentRole, 
  setCurrentRole, 
  activeTab, 
  setActiveTab, 
  theme, 
  setTheme, 
  lang, 
  setLang, 
  fontScale, 
  setFontScale,
  dyslexicFont,
  setDyslexicFont
}) => {
  const [timeString, setTimeString] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const t = translations[lang] || translations.en;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }) + ' IST');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleVoiceNarration = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const textToRead = `${t.portalName}. ${t.portalSubtitle}. ${t.tagline}. You are currently on the ${currentRole === 'citizen' ? 'Citizen Services' : 'Officer Console'} section.`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-Speech is not supported in this browser.");
    }
  };

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('contrast');
    else setTheme('light');
  };

  const navItems = [
    { id: 'home', label: t.navHome, icon: Building2 },
    { id: 'services', label: t.navServices, icon: FileText },
    { id: 'track', label: t.navTrack, icon: Clock },
    { id: 'grievance', label: t.navGrievance, icon: AlertTriangle },
    { id: 'schemes', label: t.navSchemes, icon: HeartHandshake },
    { id: 'digilocker', label: t.navDigilocker, icon: FolderLock }
  ];

  return (
    <header className="gov-header" role="banner">
      {/* Top Tricolor Strip */}
      <div className="gov-top-ribbon" aria-hidden="true"></div>

      {/* Top Utility & Accessibility Bar */}
      <div className="gov-top-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem', fontWeight: 500 }}>
            <span>{t.govTitle}</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ color: 'var(--gov-saffron)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
              {timeString}
            </span>
          </div>

          <div className="accessibility-toolbar">
            {/* Font Scale Scaler */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginRight: '0.4rem' }}>
              <button 
                onClick={() => setFontScale(Math.max(0.85, fontScale - 0.05))} 
                className="acc-btn" 
                title="Decrease font size"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button 
                onClick={() => setFontScale(1)} 
                className={`acc-btn ${fontScale === 1 ? 'active' : ''}`} 
                title="Reset font size"
                aria-label="Default font size"
              >
                A
              </button>
              <button 
                onClick={() => setFontScale(Math.min(1.25, fontScale + 0.05))} 
                className="acc-btn" 
                title="Increase font size"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Dyslexia Font Toggle */}
            <button 
              onClick={() => setDyslexicFont(!dyslexicFont)} 
              className={`acc-btn ${dyslexicFont ? 'active' : ''}`}
              title="Toggle Dyslexia Friendly Font"
            >
              {dyslexicFont ? 'Normal Font' : 'Dyslexia Font'}
            </button>

            {/* Voice Narration / Screen Reader */}
            <button 
              onClick={handleVoiceNarration} 
              className={`acc-btn ${isSpeaking ? 'active' : ''}`}
              title="Screen Reader Voice Assistant"
              style={{ display: 'flex', alignItems: 'center', gap: '3px' }}
            >
              <Volume2 size={12} />
              {isSpeaking ? 'Speaking...' : t.screenReader}
            </button>

            {/* Theme Toggle (Light / Dark / High Contrast) */}
            <button 
              onClick={cycleTheme} 
              className="acc-btn"
              title="Switch Theme (Light / Dark / High Contrast)"
              style={{ display: 'flex', alignItems: 'center', gap: '3px' }}
            >
              {theme === 'light' ? <Moon size={12} /> : theme === 'dark' ? <Sun size={12} /> : <ShieldCheck size={12} />}
              {theme === 'light' ? 'Dark' : theme === 'dark' ? 'Contrast' : 'Light'}
            </button>

            {/* Multi-language Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '0.4rem' }}>
              <Globe size={12} />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                style={{ 
                  background: 'rgba(255,255,255,0.15)', 
                  color: '#ffffff', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  borderRadius: '4px',
                  padding: '2px 6px',
                  fontSize: '0.75rem',
                  cursor: 'pointer'
                }}
                aria-label="Select Portal Language"
              >
                <option value="en" style={{ color: '#000' }}>English</option>
                <option value="hi" style={{ color: '#000' }}>हिन्दी (Hindi)</option>
                <option value="te" style={{ color: '#000' }}>తెలుగు (Telugu)</option>
                <option value="ta" style={{ color: '#000' }}>தமிழ் (Tamil)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Brand & Role Bar */}
      <div className="container">
        <div className="nav-main">
          {/* Logo & Portal Identity */}
          <div 
            className="brand-emblem-wrap" 
            onClick={() => { setCurrentRole('citizen'); setActiveTab('home'); }}
            style={{ cursor: 'pointer' }}
          >
            <div className="emblem-icon">
              <Building2 size={24} color="#ffd700" />
            </div>
            <div className="brand-titles">
              <h1>{t.portalName}</h1>
              <p>{t.portalSubtitle}</p>
            </div>
          </div>

          {/* Role Portals Switcher */}
          <div className="role-pill-group" role="tablist" aria-label="Portal Mode">
            <button 
              className={`role-pill ${currentRole === 'citizen' ? 'active' : ''}`}
              onClick={() => { setCurrentRole('citizen'); setActiveTab('home'); }}
              role="tab"
              aria-selected={currentRole === 'citizen'}
            >
              <User size={15} />
              <span>{t.roleCitizen}</span>
            </button>

            <button 
              className={`role-pill ${currentRole === 'officer' ? 'active' : ''}`}
              onClick={() => { setCurrentRole('officer'); setActiveTab('officer'); }}
              role="tab"
              aria-selected={currentRole === 'officer'}
            >
              <FileCheck size={15} />
              <span>{t.roleOfficer}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation Bar for Citizen Mode */}
      {currentRole === 'citizen' && (
        <div style={{ background: 'rgba(0,0,0,0.22)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="container">
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.35rem 0', flexWrap: 'wrap', gap: '0.5rem' }}>
              <ul className="nav-links">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button 
                      className={`nav-link-btn ${activeTab === item.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <item.icon size={15} />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={14} color="#10b981" />
                  256-Bit SSL Encrypted
                </span>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
