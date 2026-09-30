import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  ShieldCheck, 
  FileText, 
  Download, 
  ExternalLink,
  UserCheck,
  Building,
  QrCode,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import { translations } from '../../data/translations';

export const ApplicationTracker = ({ 
  applications, 
  initialSearchId = '', 
  onViewCertificate,
  lang
}) => {
  const [searchId, setSearchId] = useState(initialSearchId || (applications[0]?.id || 'JS-2026-8842'));
  const [selectedApp, setSelectedApp] = useState(
    applications.find(a => a.id === (initialSearchId || 'JS-2026-8842')) || applications[0]
  );
  const [errorMessage, setErrorMessage] = useState('');

  const t = translations[lang] || translations.en;

  const handleSearch = (e) => {
    e?.preventDefault();
    const query = searchId.trim().toUpperCase();
    const found = applications.find(a => a.id.toUpperCase() === query);
    if (found) {
      setSelectedApp(found);
      setErrorMessage('');
    } else {
      setSelectedApp(null);
      setErrorMessage(`No application found with ID "${searchId}". Please check the tracking number or select from sample IDs below.`);
    }
  };

  const selectQuickId = (app) => {
    setSearchId(app.id);
    setSelectedApp(app);
    setErrorMessage('');
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem 4rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gov-blue)', marginBottom: '0.4rem' }}>
          <Clock size={18} />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Real-Time Citizen Tracking Engine
          </span>
        </div>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          Application Status & Verification
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px' }}>
          Track the live multi-stage department workflow, inspect revenue officer remarks, and download authenticated statutory certificates.
        </p>
      </div>

      {/* Search Bar */}
      <div className="card" style={{ marginBottom: '2rem', background: 'var(--bg-card)', border: '1.5px solid var(--border-color)' }}>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '280px', position: 'relative' }}>
            <Search size={18} color="#64748b" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              className="form-input" 
              placeholder="Enter Application Tracking ID (e.g. JS-2026-8842)..."
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              style={{ paddingLeft: '2.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '1.05rem' }}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem' }}>
            Track Now
          </button>
        </form>

        {/* Quick Demo IDs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Quick Sample Records:</span>
          {applications.map((app) => (
            <button
              key={app.id}
              onClick={() => selectQuickId(app)}
              style={{
                background: selectedApp?.id === app.id ? 'var(--gov-blue)' : 'var(--bg-card-hover)',
                color: selectedApp?.id === app.id ? '#ffffff' : 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                padding: '3px 10px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              {app.id} ({app.status})
            </button>
          ))}
        </div>
      </div>

      {/* Search Error Alert */}
      {errorMessage && (
        <div style={{ background: 'var(--gov-red-light)', border: '1px solid var(--gov-red)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--gov-red)' }}>
          <AlertCircle size={24} />
          <div>
            <strong style={{ fontSize: '0.95rem' }}>Application Not Found</strong>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem' }}>{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Selected Application Details */}
      {selectedApp && (
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '2rem' }}>
          {/* Left Column: Progress Stepper & Timeline */}
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span className="badge badge-blue" style={{ marginBottom: '0.4rem' }}>{selectedApp.department}</span>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{selectedApp.serviceTitle}</h2>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                  Reference No: <strong>{selectedApp.id}</strong>
                </div>
              </div>

              <span className={`badge ${
                selectedApp.status === 'Approved' ? 'badge-green' : 
                selectedApp.status === 'Under Review' ? 'badge-saffron' : 'badge-blue'
              }`} style={{ fontSize: '0.85rem', padding: '0.4rem 0.85rem' }}>
                ● {selectedApp.status.toUpperCase()}
              </span>
            </div>

            {/* 4-Stage Vertical Timeline */}
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
              Department Processing Timeline
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', paddingLeft: '2rem' }}>
              {/* Vertical line */}
              <div style={{ position: 'absolute', left: '11px', top: '10px', bottom: '10px', width: '2px', background: 'var(--border-color)' }}></div>

              {selectedApp.history.map((stage, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  {/* Timeline icon dot */}
                  <div style={{ 
                    position: 'absolute', 
                    left: '-2rem', 
                    top: '2px', 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%', 
                    background: stage.done ? '#10b981' : 'var(--bg-card)', 
                    border: stage.done ? '2px solid #10b981' : '2px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    zIndex: 2
                  }}>
                    {stage.done ? '✓' : idx + 1}
                  </div>

                  <div style={{ background: stage.done ? 'var(--bg-card-hover)' : 'transparent', padding: stage.done ? '0.75rem 1rem' : '0.4rem 0.5rem', borderRadius: 'var(--radius-md)', border: stage.done ? '1px solid var(--border-color)' : 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ fontSize: '0.92rem', color: stage.done ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                        {stage.stage}
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: stage.done ? '#10b981' : 'var(--text-muted)', fontWeight: 600 }}>
                        {stage.time}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Assigned: {stage.officer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Officer Remarks Box */}
            {selectedApp.remarks && (
              <div style={{ marginTop: '2rem', background: 'rgba(29, 78, 216, 0.06)', border: '1px solid rgba(29, 78, 216, 0.2)', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gov-blue)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  🏛️ Revenue Officer Endorsement Remarks:
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', margin: 0 }}>
                  "{selectedApp.remarks}"
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Application Summary & Certificate Action */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Citizen Profile & Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Applicant:</span>
                  <strong>{selectedApp.applicantName}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Mobile Number:</span>
                  <strong>{selectedApp.applicantPhone}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Date of Application:</span>
                  <strong>{selectedApp.appliedDate}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>SLA Deadline:</span>
                  <strong style={{ color: '#10b981' }}>{selectedApp.slaDeadline}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>District:</span>
                  <strong>{selectedApp.district}</strong>
                </div>
              </div>
            </div>

            {/* Certificate Issuance Callout */}
            {selectedApp.status === 'Approved' ? (
              <div style={{ background: 'linear-gradient(135deg, #064e3b, #047857)', color: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '1.75rem', boxShadow: '0 10px 20px rgba(6, 78, 59, 0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                  <ShieldCheck size={24} color="#ffd700" />
                  <strong style={{ fontSize: '1.1rem' }}>Digital Certificate Ready</strong>
                </div>
                <p style={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Your certificate has been digitally signed by the Sub-Divisional Magistrate with verifiable QR authentication.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <button 
                    className="btn btn-saffron"
                    onClick={() => onViewCertificate(selectedApp)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                  >
                    <QrCode size={18} /> View & Print Certificate
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', textAlign: 'center' }}>
                <Clock size={32} color="#f59e0b" style={{ margin: '0 auto 0.75rem' }} />
                <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>Application In Scrutiny</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  The revenue desk is currently examining submitted revenue records. You will receive an instant SMS alert upon approval.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
