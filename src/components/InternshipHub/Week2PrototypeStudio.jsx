import React, { useState } from 'react';
import { 
  Layout, 
  Monitor, 
  Laptop, 
  Tablet, 
  Smartphone, 
  Palette, 
  Type, 
  CheckCircle2, 
  Sliders, 
  Layers, 
  Eye, 
  ShieldCheck,
  FileCode,
  Sparkles
} from 'lucide-react';
import { week2Data } from '../../data/internshipData';
import { publicServices } from '../../data/servicesData';

export const Week2PrototypeStudio = () => {
  const [activeViewport, setActiveViewport] = useState('desktop');
  const [viewMode, setViewMode] = useState('hifi'); // 'hifi' or 'wireframe'

  const currentDevice = week2Data.deviceViewports.find(d => d.id === activeViewport) || week2Data.deviceViewports[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Week 2 Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0f766e, #042f2e)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', color: '#ffffff', border: '1px solid rgba(255,255,255,0.15)', boxShadow: 'var(--shadow-xl)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', marginBottom: '0.5rem' }}>
          <Layout size={22} />
          <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            WEEK 2 DELIVERABLE: RESPONSIVE WEB PROTOTYPE & DESIGN SYSTEM
          </span>
        </div>
        <h1 style={{ fontSize: '2.25rem', margin: '0 0 1rem', color: '#ffffff' }}>
          UI/UX Architecture & Responsive Viewport Studio
        </h1>
        <p style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '850px', lineHeight: 1.6 }}>
          Explore our responsive design system engineered for extreme cross-device resilience across 4K desktop kiosks, government laptops, field officer tablets, and low-cost 375px mobile screens.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem' }}>
            📐 <strong>Mobile-First Fluid Grid</strong>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem' }}>
            ♿ <strong>WCAG 2.1 AA Compliant</strong>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem' }}>
            🎨 <strong>Indian Gov Semantic Design Tokens</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Multi-Device Resolution Viewport Sandbox */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <span className="badge badge-green" style={{ marginBottom: '0.4rem' }}>INTERACTIVE SANDBOX</span>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>Multi-Device Viewport Engine</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Test portal layout adaptation across real device aspect ratios</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Viewport Selectors */}
            <div className="role-pill-group">
              <button 
                className={`role-pill ${activeViewport === 'desktop' ? 'active' : ''}`}
                onClick={() => setActiveViewport('desktop')}
              >
                <Monitor size={14} /> Desktop (1920)
              </button>
              <button 
                className={`role-pill ${activeViewport === 'laptop' ? 'active' : ''}`}
                onClick={() => setActiveViewport('laptop')}
              >
                <Laptop size={14} /> Laptop (1024)
              </button>
              <button 
                className={`role-pill ${activeViewport === 'tablet' ? 'active' : ''}`}
                onClick={() => setActiveViewport('tablet')}
              >
                <Tablet size={14} /> Tablet (768)
              </button>
              <button 
                className={`role-pill ${activeViewport === 'mobile' ? 'active' : ''}`}
                onClick={() => setActiveViewport('mobile')}
              >
                <Smartphone size={14} /> Mobile (375)
              </button>
            </div>

            {/* Wireframe vs HiFi Mode Toggle */}
            <button 
              className={`btn btn-sm ${viewMode === 'wireframe' ? 'btn-saffron' : 'btn-secondary'}`}
              onClick={() => setViewMode(viewMode === 'hifi' ? 'wireframe' : 'hifi')}
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <Sliders size={14} />
              {viewMode === 'hifi' ? 'Show Wireframe Mode' : 'Show Hi-Fi Mode'}
            </button>
          </div>
        </div>

        {/* Viewport Container Frame */}
        <div style={{ background: '#0b1320', padding: '2rem 1rem', borderRadius: 'var(--radius-xl)', border: '2px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Viewport Resolution: <strong style={{ color: '#ffd700' }}>{currentDevice.label}</strong></span>
            <span>•</span>
            <span>Target: {currentDevice.desc}</span>
          </div>

          {/* Interactive Simulated Device Bezel */}
          <div style={{
            width: currentDevice.width,
            maxWidth: '100%',
            height: currentDevice.height,
            background: viewMode === 'wireframe' ? '#f8f9fa' : 'var(--bg-main)',
            color: viewMode === 'wireframe' ? '#212529' : 'var(--text-primary)',
            borderRadius: activeViewport === 'mobile' ? '36px' : '12px',
            border: activeViewport === 'mobile' ? '12px solid #1e293b' : '4px solid #334155',
            overflowY: 'auto',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
            filter: viewMode === 'wireframe' ? 'grayscale(100%) contrast(120%)' : 'none',
            fontFamily: viewMode === 'wireframe' ? 'Courier New, monospace' : 'inherit',
            transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            {/* Embedded Live Portal Preview Header */}
            <div style={{ background: '#09172a', color: '#ffffff', padding: '0.75rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #f59e0b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <strong style={{ fontSize: '0.9rem' }}>JanSeva 360</strong>
              </div>
              <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Govt of India</span>
            </div>

            {/* Embedded Live Portal Content */}
            <div style={{ padding: '1.25rem' }}>
              <div style={{ background: 'linear-gradient(135deg, #1e3a8a, #0b192c)', color: '#ffffff', padding: '1.25rem', borderRadius: '10px', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', margin: '0 0 4px', color: '#ffffff' }}>Direct Citizen Digital Services</h4>
                <p style={{ fontSize: '0.75rem', opacity: 0.8, margin: 0 }}>48-hour guaranteed statutory delivery.</p>
              </div>

              {/* Sample 2-col cards */}
              <div style={{ display: 'grid', gridTemplateColumns: activeViewport === 'mobile' ? '1fr' : 'repeat(2, 1fr)', gap: '0.75rem' }}>
                {publicServices.slice(0, 4).map((srv) => (
                  <div key={srv.id} style={{ background: 'var(--bg-card)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.65rem', color: '#10b981', fontWeight: 'bold' }}>SLA: {srv.slaDays} DAYS</span>
                    <h5 style={{ fontSize: '0.88rem', margin: '2px 0 4px' }}>{srv.title}</h5>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>{srv.fee}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Design Tokens & Palette */}
      <section>
        <span className="badge badge-saffron" style={{ marginBottom: '0.4rem' }}>DESIGN TOKENS</span>
        <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          Design System & Semantic Color Tokens
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          Harmonious color palette meeting WCAG 2.1 AAA contrast ratios across all states
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
          {week2Data.designPhilosophy.colorPalette.map((col, idx) => (
            <div key={idx} className="card" style={{ padding: '1rem' }}>
              <div style={{ width: '100%', height: '70px', borderRadius: '8px', background: col.hex, marginBottom: '0.75rem', border: '1px solid rgba(0,0,0,0.1)' }}></div>
              <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block' }}>{col.name}</strong>
              <code style={{ fontSize: '0.8rem', color: 'var(--gov-blue)', fontFamily: 'var(--font-mono)' }}>{col.hex}</code>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '4px 0 0' }}>{col.usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Typography & Accessibility Standards */}
      <section className="card" style={{ background: 'var(--bg-card)', padding: '2rem' }}>
        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
          Typography Hierarchy & Accessibility Foundations
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'var(--bg-card-hover)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <Type size={20} color="var(--gov-blue)" style={{ marginBottom: '0.5rem' }} />
            <strong style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'block' }}>Primary UI Font: Inter</strong>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
              High x-height and distinctive letterforms for effortless readability on low-resolution mobile displays.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card-hover)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <Sparkles size={20} color="#f59e0b" style={{ marginBottom: '0.5rem' }} />
            <strong style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'block' }}>Heading Font: Outfit</strong>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
              Modern geometric grotesque typography giving an authoritative, trustworthy public-sector presence.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card-hover)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <ShieldCheck size={20} color="#10b981" style={{ marginBottom: '0.5rem' }} />
            <strong style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'block' }}>WCAG 2.1 AA Compliant</strong>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
              4.5:1 minimum text contrast, visible focus rings, dynamic text resizer, and dyslexia-friendly font support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
