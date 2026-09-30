import React, { useState } from 'react';
import { 
  ClipboardList, 
  Users, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  ArrowRight, 
  Target, 
  Compass, 
  Calendar,
  Sparkles,
  MapPin,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { week1Data } from '../../data/internshipData';

export const Week1Planning = () => {
  const [selectedPersona, setSelectedPersona] = useState(week1Data.personas[0]);
  const [reqFilter, setReqFilter] = useState('all');
  const [reqSearch, setReqSearch] = useState('');

  const filteredFR = week1Data.functionalRequirements.filter(fr => {
    const matchesModule = reqFilter === 'all' || fr.module.toLowerCase() === reqFilter.toLowerCase();
    const matchesSearch = fr.title.toLowerCase().includes(reqSearch.toLowerCase()) || fr.desc.toLowerCase().includes(reqSearch.toLowerCase()) || fr.id.toLowerCase().includes(reqSearch.toLowerCase());
    return matchesModule && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Week 1 Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a, #0b192c)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', color: '#ffffff', border: '1px solid rgba(255,255,255,0.15)', boxShadow: 'var(--shadow-xl)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffd700', marginBottom: '0.5rem' }}>
          <ClipboardList size={22} />
          <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            WEEK 1 DELIVERABLE: STRATEGY & REQUIREMENTS SPECIFICATION (SRS)
          </span>
        </div>
        <h1 style={{ fontSize: '2.25rem', margin: '0 0 1rem', color: '#ffffff' }}>
          Planning & Strategic Architecture for E-Governance
        </h1>
        <p style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '850px', lineHeight: 1.6 }}>
          {week1Data.overview.vision}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>Core Mandate:</span>
            <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>Unified Citizen Public Portal</strong>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>Target Turnaround (SLA):</span>
            <strong style={{ fontSize: '0.95rem', color: '#10b981' }}>&lt; 48 Hours Resolution</strong>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>Integrations:</span>
            <strong style={{ fontSize: '0.95rem', color: '#ffd700' }}>UIDAI Aadhaar • DigiLocker • NPCI</strong>
          </div>
        </div>
      </div>

      {/* Section 1: User Personas */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '0.4rem' }}>STAKEHOLDER PROFILES</span>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>Target Citizen & Officer Personas</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Representative archetypes across rural, urban, senior citizen, and administrative domains</p>
          </div>
        </div>

        {/* Persona Selector Tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {week1Data.personas.map((p) => (
            <div 
              key={p.id}
              className="card card-interactive"
              onClick={() => setSelectedPersona(p)}
              style={{
                border: selectedPersona.id === p.id ? '2px solid var(--gov-blue)' : '1px solid var(--border-color)',
                background: selectedPersona.id === p.id ? 'rgba(29, 78, 216, 0.05)' : 'var(--bg-card)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: selectedPersona.id === p.id ? 'var(--gov-blue)' : 'var(--bg-card-hover)', color: selectedPersona.id === p.id ? '#ffffff' : 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  {p.name.charAt(0)}
                </div>
                <div>
                  <strong style={{ fontSize: '0.95rem', display: 'block', color: 'var(--text-primary)' }}>{p.name}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Persona Detail Card */}
        {selectedPersona && (
          <div className="card" style={{ background: 'var(--bg-card)', border: '1.5px solid var(--border-color)', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
              <div>
                <span className="badge badge-saffron" style={{ marginBottom: '0.4rem' }}>{selectedPersona.role}</span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>{selectedPersona.name}</h3>
                <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  <span>📍 {selectedPersona.location}</span>
                  <span>📱 Digital Literacy: <strong>{selectedPersona.digitalLiteracy}</strong></span>
                  <span>🗣️ Preferred Language: <strong>{selectedPersona.language}</strong></span>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ background: 'var(--bg-card-hover)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <strong style={{ color: 'var(--gov-blue)', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
                  🎯 Primary Goals & Motivations:
                </strong>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', margin: 0 }}>{selectedPersona.goals}</p>
              </div>

              <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <strong style={{ color: 'var(--gov-red)', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
                  ⚠️ Current Bureaucratic Pain Points:
                </strong>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', margin: 0 }}>{selectedPersona.painPoints}</p>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.06)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                <strong style={{ color: '#059669', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
                  ✨ JanSeva 360 Feature Impact:
                </strong>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', margin: 0 }}>{selectedPersona.solutionBenefit}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 2: Functional & Non-Functional Requirements Matrix */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-green" style={{ marginBottom: '0.4rem' }}>SYSTEM REQUIREMENTS</span>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>Functional & Non-Functional Matrix</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Traceability matrix mapping user needs to architectural specifications</p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                placeholder="Search requirements..."
                value={reqSearch}
                onChange={(e) => setReqSearch(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.25rem', height: '38px', fontSize: '0.85rem' }}
              />
            </div>
          </div>
        </div>

        {/* FR Table */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Functional Requirements (10 Core Modules)
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: 'var(--bg-card-hover)', borderBottom: '2px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Req ID</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Module</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Feature Specification</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Priority</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Verification Method</th>
                </tr>
              </thead>
              <tbody>
                {filteredFR.map((fr) => (
                  <tr key={fr.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--gov-blue)' }}>
                      {fr.id}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>
                      {fr.module}
                    </td>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <strong style={{ color: 'var(--text-primary)', display: 'block' }}>{fr.title}</strong>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{fr.desc}</span>
                    </td>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <span className="badge badge-blue">{fr.priority}</span>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Automated E2E Test (Week 3)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* NFR Table */}
        <div className="card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Non-Functional Requirements & Performance Benchmarks
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {week1Data.nonFunctionalRequirements.map((nfr) => (
              <div key={nfr.id} style={{ background: 'var(--bg-card-hover)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#10b981', fontSize: '0.85rem' }}>{nfr.id}</span>
                  <span className="badge badge-green">{nfr.category}</span>
                </div>
                <strong style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.35rem' }}>
                  {nfr.metric}
                </strong>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {nfr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Citizen User Journey Mapping */}
      <section>
        <span className="badge badge-saffron" style={{ marginBottom: '0.4rem' }}>SERVICE BLUEPRINT</span>
        <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          End-to-End Citizen Journey Map
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          5-Stage interaction flow illustrating touchpoints, citizen emotional states, and backend verification steps.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {week1Data.userJourney.map((j, idx) => (
            <div key={idx} className="card" style={{ borderTop: '4px solid var(--gov-blue)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gov-blue)' }}>STAGE {idx + 1}</span>
                <span className="badge badge-saffron">{j.emotion}</span>
              </div>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{j.step}</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.4 }}>
                {j.action}
              </p>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                📱 <strong>Touchpoint:</strong> {j.touchpoint}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Risk Analysis & Mitigation Matrix */}
      <section>
        <span className="badge badge-red" style={{ marginBottom: '0.4rem' }}>GOVERNANCE RISK MATRIX</span>
        <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          Risk Assessment & Contingency Mitigation
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          Identified technical, security, and administrative failure modes with proactive mitigations.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {week1Data.riskMatrix.map((rm, idx) => (
            <div key={idx} className="card" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.5rem', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span className={`badge ${rm.severity === 'Critical' ? 'badge-red' : 'badge-saffron'}`}>Severity: {rm.severity}</span>
                  <span className="badge badge-blue">Probability: {rm.probability}</span>
                </div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', margin: '4px 0' }}>
                  {rm.risk}
                </h4>
              </div>

              <div style={{ background: 'var(--bg-card-hover)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <strong style={{ fontSize: '0.78rem', color: '#10b981', display: 'block', textTransform: 'uppercase', marginBottom: '2px' }}>
                  🛡️ Architectural Mitigation Strategy:
                </strong>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {rm.mitigation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
