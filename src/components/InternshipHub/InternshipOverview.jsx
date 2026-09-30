import React, { useState } from 'react';
import { 
  ClipboardList, 
  Layout, 
  ShieldCheck, 
  Activity, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  ExternalLink,
  Sparkles,
  Download,
  FileText
} from 'lucide-react';
import { internshipModules } from '../../data/internshipData';
import { Week1Planning } from './Week1Planning';
import { Week2PrototypeStudio } from './Week2PrototypeStudio';
import { Week3QALab } from './Week3QALab';
import { Week4AuditCenter } from './Week4AuditCenter';

export const InternshipOverview = ({ initialWeek = 1 }) => {
  const [activeWeek, setActiveWeek] = useState(initialWeek);

  const getWeekIcon = (weekNum) => {
    switch (weekNum) {
      case 1: return ClipboardList;
      case 2: return Layout;
      case 3: return ShieldCheck;
      case 4: return Activity;
      default: return BookOpen;
    }
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem 4rem' }}>
      {/* Top Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', marginBottom: '0.4rem' }}>
          <Award size={20} />
          <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            JUNIOR WEB DEVELOPER INTERNSHIP CAPSTONE PORTFOLIO
          </span>
        </div>
        <h1 style={{ fontSize: '2.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          E-Governance Digital Services Technical Suite
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '850px' }}>
          Interactive 4-Week engineering and architectural deliverables portfolio covering Strategy, Responsive Design, Automated QA Verification, and Performance/Security Compliance.
        </p>
      </div>

      {/* 4-Week Master Navigation Tabs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {internshipModules.map((mod) => {
          const IconComponent = getWeekIcon(mod.week);
          const isActive = activeWeek === mod.week;
          return (
            <div 
              key={mod.week}
              className="card card-interactive"
              onClick={() => setActiveWeek(mod.week)}
              style={{
                border: isActive ? '2px solid var(--gov-blue)' : '1px solid var(--border-color)',
                background: isActive ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.08), rgba(29, 78, 216, 0.02))' : 'var(--bg-card)',
                boxShadow: isActive ? '0 8px 20px rgba(29, 78, 216, 0.15)' : 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '140px'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className={`badge ${isActive ? 'badge-blue' : 'badge-green'}`}>
                    WEEK {mod.week}
                  </span>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: isActive ? 'var(--gov-blue)' : 'var(--bg-card-hover)', color: isActive ? '#ffffff' : 'var(--gov-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconComponent size={16} />
                  </div>
                </div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', margin: '4px 0 2px' }}>
                  {mod.shortTitle}
                </h3>
              </div>

              <div style={{ fontSize: '0.78rem', color: isActive ? 'var(--gov-blue)' : 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={13} color="#10b981" /> Deliverables Active
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Week Content Render */}
      <div>
        {activeWeek === 1 && <Week1Planning />}
        {activeWeek === 2 && <Week2PrototypeStudio />}
        {activeWeek === 3 && <Week3QALab />}
        {activeWeek === 4 && <Week4AuditCenter />}
      </div>
    </div>
  );
};
