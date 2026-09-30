import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Compass, 
  AlertTriangle, 
  HeartHandshake, 
  FolderLock, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Award, 
  Landmark,
  Zap,
  Users,
  Building
} from 'lucide-react';
import { publicServices } from '../../data/servicesData';
import { translations } from '../../data/translations';

export const CitizenHome = ({ 
  lang, 
  onNavigate, 
  onSelectService, 
  applicationsCount,
  onTrackApp
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[lang] || translations.en;

  const quickActions = [
    {
      id: "apply",
      title: "Apply for Certificates",
      desc: "Income, Caste, Domicile, Birth & Revenue records",
      icon: FileText,
      color: "#1d4ed8",
      bg: "rgba(29, 78, 216, 0.08)",
      action: () => onNavigate('services')
    },
    {
      id: "track",
      title: "Track Application",
      desc: "Live 4-stage tracking with officer inspection logs",
      icon: Clock,
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.08)",
      action: () => onNavigate('track')
    },
    {
      id: "grievance",
      title: "JanSunwai Grievance",
      desc: "Report civic issues: roads, power, water & sanitation",
      icon: AlertTriangle,
      color: "#ef4444",
      bg: "rgba(239, 68, 68, 0.08)",
      action: () => onNavigate('grievance')
    },
    {
      id: "schemes",
      title: "Welfare & Grants",
      desc: "Check eligibility for PM-Kisan & state subsidies",
      icon: HeartHandshake,
      color: "#10b981",
      bg: "rgba(16, 185, 129, 0.08)",
      action: () => onNavigate('schemes')
    },
    {
      id: "digilocker",
      title: "DigiLocker Vault",
      desc: "Aadhaar, PAN, Land Records & Digital Certs",
      icon: FolderLock,
      color: "#8b5cf6",
      bg: "rgba(139, 92, 246, 0.08)",
      action: () => onNavigate('digilocker')
    }
  ];

  const filteredServices = searchQuery.trim() 
    ? publicServices.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        s.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : publicServices.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '4px 12px', borderRadius: '20px', marginBottom: '1rem' }}>
                <Sparkles size={14} color="#f59e0b" />
                <span style={{ color: '#ffd700', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                  NEXT-GEN DIGITAL PUBLIC INFRASTRUCTURE
                </span>
              </div>
              <h1 style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Direct, Frictionless <br />
                <span style={{ background: 'linear-gradient(90deg, #ffd700, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Public Services for Every Citizen
                </span>
              </h1>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '580px', lineHeight: 1.6 }}>
                Apply for statutory certificates, monitor live application statuses, resolve civic grievances, and claim Direct Benefit Transfers (DBT) with guaranteed 48-hour SLAs.
              </p>

              {/* Instant Search Box */}
              <div className="hero-search-box">
                <Search size={22} color="#64748b" style={{ marginLeft: '8px' }} />
                <input 
                  type="text" 
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onNavigate('services');
                  }}
                />
                <button 
                  className="btn btn-primary"
                  onClick={() => onNavigate('services')}
                >
                  Search
                </button>
              </div>

              {/* Popular quick search tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Popular Searches:</span>
                {["Income Certificate", "Caste Certificate", "PM-Kisan DBT", "Road Pothole", "Trade License"].map((tag, idx) => (
                  <button 
                    key={idx}
                    onClick={() => { setSearchQuery(tag); onNavigate('services'); }}
                    style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.15)', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Hero Right Widget: Live Service Guarantee Card */}
            <div>
              <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '20px', padding: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(245, 158, 11, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Landmark size={22} color="#ffd700" />
                    </div>
                    <div>
                      <h3 style={{ color: '#ffffff', fontSize: '1.1rem', margin: 0 }}>Citizen Service Charter</h3>
                      <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: 0 }}>Statutory Timelines & Guarantees</p>
                    </div>
                  </div>
                  <span className="badge badge-green">LIVE SLA</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.04)', padding: '0.75rem 1rem', borderRadius: '10px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>📜 Income & Asset Cert</span>
                    <strong style={{ color: '#10b981', fontSize: '0.9rem' }}>48 - 72 Hours</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.04)', padding: '0.75rem 1rem', borderRadius: '10px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>🚨 Emergency Civic Grievance</span>
                    <strong style={{ color: '#f59e0b', fontSize: '0.9rem' }}>24 - 48 Hours</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.04)', padding: '0.75rem 1rem', borderRadius: '10px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>🌾 PM-Kisan DBT Clearance</span>
                    <strong style={{ color: '#10b981', fontSize: '0.9rem' }}>Direct to Bank</strong>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.8rem' }}>
                    <CheckCircle2 size={16} />
                    <span>DigiLocker Pre-Verified</span>
                  </div>
                  <button 
                    onClick={() => onTrackApp('JS-2026-8842')}
                    className="btn btn-sm btn-saffron"
                  >
                    Track Demo App
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Counter */}
          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <div className="stat-val">148+</div>
              <div className="stat-lbl">{t.quickStats.servicesOnline}</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-val">2.48 Cr+</div>
              <div className="stat-lbl">{t.quickStats.processedApps}</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-val">2.4 Days</div>
              <div className="stat-lbl">{t.quickStats.avgTurnaround}</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-val">98.4%</div>
              <div className="stat-lbl">{t.quickStats.satisfaction}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        {/* Urgent Gazette Notification Ticker */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--gov-saffron)', borderRadius: 'var(--radius-md)', padding: '0.75rem 1.25rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-saffron">GAZETTE UPDATE</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>
              🔔 Yuva Skill Apprenticeship 2026 applications are now open! Zero fee certification with ₹8,000 monthly DBT stipend.
            </span>
          </div>
          <button 
            className="btn btn-sm btn-outline"
            onClick={() => {
              const yuvaSrv = publicServices.find(s => s.id === 'srv-yuva-grant');
              if (yuvaSrv) onSelectService(yuvaSrv);
            }}
          >
            Apply Now &rarr;
          </button>
        </div>

        {/* 5 Quick Action Gateways */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>Core Citizen Gateways</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Access all government services through seamless digital touchpoints</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {quickActions.map((action) => {
              const IconComp = action.icon;
              return (
                <div 
                  key={action.id}
                  className="card card-interactive"
                  onClick={action.action}
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '180px' }}
                >
                  <div>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: action.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <IconComp size={24} color={action.color} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>{action.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{action.desc}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: action.color, fontSize: '0.85rem', fontWeight: 600, marginTop: '1rem' }}>
                    Access Service <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Popular Public Services */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>Most Requested Public Services</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>High-priority statutory certificates and subsidy enrollments</p>
            </div>
            <button 
              className="btn btn-secondary"
              onClick={() => onNavigate('services')}
            >
              View All 18+ Services &rarr;
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {filteredServices.map((service) => (
              <div key={service.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span className="badge badge-blue">{service.category}</span>
                    <span className="badge badge-green">SLA: {service.slaDays} Days</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
                    {service.description}
                  </p>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    🏛️ <strong>Dept:</strong> {service.department}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Fee:</span>
                    <strong style={{ color: 'var(--gov-blue)', fontSize: '0.95rem' }}>{service.fee}</strong>
                  </div>
                  <button 
                    className="btn btn-sm btn-primary"
                    onClick={() => onSelectService(service)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why JanSeva 360 Feature Pillars */}
        <section style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            <span className="badge badge-saffron" style={{ marginBottom: '0.5rem' }}>CORE ARCHITECTURE</span>
            <h2 style={{ fontSize: '1.85rem', color: 'var(--text-primary)' }}>Built on India's Digital Public Stack</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Eliminating physical paperwork, ensuring zero bribery, and delivering instantaneous verification through Aadhaar, DigiLocker, and NPCI.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(29, 78, 216, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <ShieldCheck size={28} color="#1d4ed8" />
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Cryptographic Verifiability</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Every certificate is digitally signed with RSA DSC and contains a verifiable QR code to prevent fraud.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Zap size={28} color="#10b981" />
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>48-Hour SLA Guarantee</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Automated department workflow triggers hierarchical escalation if an officer fails to review within 48 hours.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <FolderLock size={28} color="#f59e0b" />
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>DigiLocker Native Bridge</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Import verified identity documents instantly without requiring manual physical notarization.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Users size={28} color="#8b5cf6" />
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>100% Inclusive & Multilingual</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Complies with WCAG 2.1 AA standards, high-contrast modes, dynamic text scaler, and voice narrator.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
