import React from 'react';
import { ShieldCheck, PhoneCall, Globe, CheckCircle2, HeartHandshake, ExternalLink, Building, Lock } from 'lucide-react';
import { translations } from '../data/translations';

export const Footer = ({ lang, onNavigate }) => {
  const t = translations[lang] || translations.en;

  return (
    <footer style={{ background: 'var(--gov-navy)', color: '#ffffff', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem' }}>
      {/* Emergency Helpline Banner */}
      <div style={{ background: 'linear-gradient(90deg, #1e3a8a, #0f2b5c)', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <PhoneCall size={20} color="#f59e0b" />
            <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
              24x7 Citizen Support & Emergency Directory:
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem' }}>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px' }}>
              🚨 All Emergencies: <strong style={{ color: '#f59e0b' }}>112</strong>
            </span>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px' }}>
              🏛️ JanSunwai Grievance: <strong style={{ color: '#f59e0b' }}>1905</strong>
            </span>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px' }}>
              👩 Women Safety Helpline: <strong style={{ color: '#f59e0b' }}>181</strong>
            </span>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px' }}>
              🌾 Kisan Call Center: <strong style={{ color: '#f59e0b' }}>1800-180-1551</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container" style={{ padding: '3.5rem 1.25rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
          {/* Col 1: About */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ width: '36px', height: '36px', background: '#1d4ed8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={20} color="#ffd700" />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', margin: 0 }}>JanSeva 360</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              National Digital Public Service Delivery Infrastructure designed for speed, accessibility, and zero-leakage public welfare distribution. Built for 1.4B citizens across 28 states and 8 union territories.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.8rem', fontWeight: 600 }}>
              <CheckCircle2 size={16} />
              WCAG 2.1 AA Accessibility Certified
            </div>
          </div>

          {/* Col 2: Citizen Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '1rem', borderBottom: '2px solid var(--gov-saffron)', display: 'inline-block', paddingBottom: '4px' }}>
              Popular Public Services
            </h4>
            <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li style={{ cursor: 'pointer', transition: 'color 0.2s' }} onClick={() => onNavigate('services')}>• Income & Asset Certificates</li>
              <li style={{ cursor: 'pointer', transition: 'color 0.2s' }} onClick={() => onNavigate('services')}>• Community & Caste Certificate</li>
              <li style={{ cursor: 'pointer', transition: 'color 0.2s' }} onClick={() => onNavigate('services')}>• PM-Kisan DBT Subsidy Transfer</li>
              <li style={{ cursor: 'pointer', transition: 'color 0.2s' }} onClick={() => onNavigate('services')}>• Land Record 7/12 RoR Mutation</li>
              <li style={{ cursor: 'pointer', transition: 'color 0.2s' }} onClick={() => onNavigate('services')}>• Trade License & MSME Registration</li>
            </ul>
          </div>

          {/* Col 3: Government Portals */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '1rem', borderBottom: '2px solid #10b981', display: 'inline-block', paddingBottom: '4px' }}>
              Digital India Ecosystem
            </h4>
            <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('digilocker')}>📂 DigiLocker National Vault</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('grievance')}>🏛️ JanSunwai 24x7 Grievance</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('schemes')}>🌾 Direct Benefit Transfer (DBT)</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('track')}>🔍 National Application Tracker</li>
              <li style={{ color: '#10b981', fontWeight: 600 }}>🔒 UIDAI Aadhaar e-KYC Integrated</li>
            </ul>
          </div>

          {/* Col 4: Standards & Security */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '1rem', borderBottom: '2px solid #3b82f6', display: 'inline-block', paddingBottom: '4px' }}>
              Security & Compliance
            </h4>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
                🔒 <strong>Cryptographic Security:</strong> All digital certificates are signed with 2048-bit RSA DSC keys with public SHA-256 validation endpoints under the IT Act 2000.
              </p>
              <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#cbd5e1' }}>
                Hosted on Tier-4 National Cloud Data Centers.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
          <div>
            © 2026 National E-Governance Division (NeGD) • Ministry of Electronics & IT • Government of India. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Hyperlinking Policy</span>
            <span>•</span>
            <span>Accessibility Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
