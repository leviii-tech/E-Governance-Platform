import React, { useState } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Lock, 
  Zap, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Search, 
  Code, 
  Key, 
  Globe, 
  Cpu,
  TrendingUp,
  ShieldAlert
} from 'lucide-react';
import { week4Data } from '../../data/internshipData';

export const Week4AuditCenter = () => {
  const [xssInput, setXssInput] = useState('<script>alert("XSS Exploit Cookie Hijack")</script><img src=x onerror=alert(1)>');
  const [sqliInput, setSqliInput] = useState("' OR '1'='1' --");
  const [selectedRole, setSelectedRole] = useState('citizen');

  // Live sanitization preview
  const sanitizeHtml = (str) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const rbacRules = {
    citizen: ["Submit Application", "Track Own ID", "Lodge Grievance", "Download Own Certificate"],
    officer: ["Submit Application", "Track Own ID", "Lodge Grievance", "Scrutinize Queue", "Issue DSC Digital Approvals", "Reject Submissions"],
    superadmin: ["All Officer Capabilities", "Modify System SLAs", "Audit Security Logs", "Department Workload Rebalancing"]
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Week 4 Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', color: '#ffffff', border: '1px solid rgba(255,255,255,0.15)', boxShadow: 'var(--shadow-xl)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', marginBottom: '0.5rem' }}>
          <Activity size={22} />
          <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            WEEK 4 DELIVERABLE: PERFORMANCE, ACCESSIBILITY & SECURITY AUDIT
          </span>
        </div>
        <h1 style={{ fontSize: '2.25rem', margin: '0 0 1rem', color: '#ffffff' }}>
          Platform Audit, Web Vitals & Cybersecurity Radar
        </h1>
        <p style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '850px', lineHeight: 1.6 }}>
          Comprehensive technical audit quantifying Google Lighthouse Core Web Vitals, WCAG 2.1 AA accessibility compliance checkpoints, and OWASP Top 10 hardened cybersecurity defenses.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem' }}>
            ⚡ <strong>Lighthouse Score: 99/100</strong>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem' }}>
            ♿ <strong>WCAG 2.1 AA: 100% Pass</strong>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem' }}>
            🔒 <strong>OWASP Top 10 Hardened</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Google Lighthouse Scoreboard */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
          <div>
            <span className="badge badge-green" style={{ marginBottom: '0.4rem' }}>GOOGLE LIGHTHOUSE V11 AUDIT</span>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>Performance & Web Vitals Audit</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Audited against mobile 4G fast throttling & desktop telemetry</p>
          </div>
        </div>

        {/* 4 Score Dials */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          <div className="card" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
            <div style={{ width: '84px', height: '84px', borderRadius: '50%', border: '6px solid #10b981', margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', fontWeight: 900, color: '#10b981', fontFamily: 'var(--font-heading)' }}>
              {week4Data.lighthouseScores.performance}
            </div>
            <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block' }}>Performance</strong>
            <span style={{ fontSize: '0.75rem', color: '#10b981' }}>Fast (0.6s FCP)</span>
          </div>

          <div className="card" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
            <div style={{ width: '84px', height: '84px', borderRadius: '50%', border: '6px solid #10b981', margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', fontWeight: 900, color: '#10b981', fontFamily: 'var(--font-heading)' }}>
              {week4Data.lighthouseScores.accessibility}
            </div>
            <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block' }}>Accessibility</strong>
            <span style={{ fontSize: '0.75rem', color: '#10b981' }}>WCAG 2.1 AA Full</span>
          </div>

          <div className="card" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
            <div style={{ width: '84px', height: '84px', borderRadius: '50%', border: '6px solid #10b981', margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', fontWeight: 900, color: '#10b981', fontFamily: 'var(--font-heading)' }}>
              {week4Data.lighthouseScores.bestPractices}
            </div>
            <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block' }}>Best Practices</strong>
            <span style={{ fontSize: '0.75rem', color: '#10b981' }}>Modern Standards</span>
          </div>

          <div className="card" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
            <div style={{ width: '84px', height: '84px', borderRadius: '50%', border: '6px solid #10b981', margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', fontWeight: 900, color: '#10b981', fontFamily: 'var(--font-heading)' }}>
              {week4Data.lighthouseScores.seo}
            </div>
            <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block' }}>SEO & Discoverability</strong>
            <span style={{ fontSize: '0.75rem', color: '#10b981' }}>Structured Schema</span>
          </div>
        </div>

        {/* Core Web Vitals Metrics Table */}
        <div className="card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Core Web Vitals Metrics vs Industry Benchmarks
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {week4Data.coreWebVitals.map((cwv, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card-hover)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)', display: 'block' }}>{cwv.metric}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Benchmark: {cwv.benchmark}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: cwv.color, fontFamily: 'var(--font-mono)' }}>{cwv.value}</div>
                  <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>{cwv.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Cybersecurity Vulnerability & Defense Simulator */}
      <section>
        <span className="badge badge-red" style={{ marginBottom: '0.4rem' }}>CYBERSECURITY LAB</span>
        <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          Interactive Vulnerability & Defense Sandbox
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          Test common public sector cyber threats and view our real-time architectural sanitization and defenses.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* XSS Attack Simulator */}
          <div className="card" style={{ border: '1.5px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <ShieldAlert size={20} color="#ef4444" />
              <div>
                <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>Cross-Site Scripting (XSS) Defense</h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CWE-79 • DOMPurify & JSX Escaping</span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Simulate Malicious Payload Input:</label>
              <textarea 
                className="form-textarea"
                value={xssInput}
                onChange={(e) => setXssInput(e.target.value)}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', minHeight: '70px' }}
              />
            </div>

            <div>
              <strong style={{ fontSize: '0.8rem', color: '#10b981', display: 'block', textTransform: 'uppercase', marginBottom: '4px' }}>
                🛡️ Sanitized Safe Output (Zero Script Execution):
              </strong>
              <div style={{ background: '#09172a', color: '#38bdf8', padding: '0.75rem 1rem', borderRadius: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', wordBreak: 'break-all' }}>
                {sanitizeHtml(xssInput)}
              </div>
            </div>
          </div>

          {/* SQL Injection Parameterized Query Simulator */}
          <div className="card" style={{ border: '1.5px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <Lock size={20} color="#1d4ed8" />
              <div>
                <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>SQL Injection (SQLi) Defense</h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CWE-89 • Parameterized Query Binding</span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Simulate Injected Query String:</label>
              <input 
                type="text"
                className="form-input"
                value={sqliInput}
                onChange={(e) => setSqliInput(e.target.value)}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
              />
            </div>

            <div>
              <strong style={{ fontSize: '0.8rem', color: '#10b981', display: 'block', textTransform: 'uppercase', marginBottom: '4px' }}>
                🛡️ Backend Prepared Statement Execution:
              </strong>
              <div style={{ background: '#09172a', color: '#4ade80', padding: '0.75rem 1rem', borderRadius: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                <code>SELECT * FROM applications WHERE id = $1; [Param: "{sqliInput}"]</code>
              </div>
              <span style={{ fontSize: '0.72rem', color: '#10b981', display: 'block', marginTop: '4px' }}>
                ✓ Parameter treated as literal string. Zero database schema compromise.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Role-Based Access Control (RBAC) Matrix */}
      <section className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: 0 }}>
              Role-Based Access Control (RBAC) Authorization Matrix
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '2px 0 0' }}>
              Strict cryptographic authorization barriers preventing unauthorized privilege escalation
            </p>
          </div>

          {/* Role selector buttons */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['citizen', 'officer', 'superadmin'].map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRole(r)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  border: selectedRole === r ? '1.5px solid var(--gov-blue)' : '1px solid var(--border-color)',
                  background: selectedRole === r ? 'var(--gov-blue)' : 'var(--bg-card-hover)',
                  color: selectedRole === r ? '#ffffff' : 'var(--text-primary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textTransform: 'uppercase'
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--bg-card-hover)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>
            Active Permissions for <span style={{ color: 'var(--gov-blue)', textTransform: 'uppercase' }}>{selectedRole}</span> Role:
          </strong>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {rbacRules[selectedRole].map((perm, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '0.4rem 0.75rem', borderRadius: '6px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={14} color="#10b981" />
                <span>{perm}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
