import React, { useState } from 'react';
import { 
  Building2, 
  FileCheck, 
  CheckCircle, 
  XCircle, 
  Clock, 
  AlertTriangle, 
  Search, 
  Filter, 
  Eye, 
  ShieldCheck, 
  User, 
  FileText,
  TrendingUp,
  Award,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const OfficerDashboard = ({ 
  applications, 
  onUpdateAppStatus, 
  onViewCertificate 
}) => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeReviewApp, setActiveReviewApp] = useState(null);
  const [officerRemarks, setOfficerRemarks] = useState('');

  const filteredApps = applications.filter((app) => {
    const matchesStatus = filterStatus === 'all' || app.status.toLowerCase() === filterStatus.toLowerCase();
    const matchesSearch = 
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.serviceTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const pendingCount = applications.filter(a => a.status !== 'Approved' && a.status !== 'Rejected').length;
  const approvedCount = applications.filter(a => a.status === 'Approved').length;

  const handleApprove = () => {
    if (!activeReviewApp) return;
    const certNum = `CERT/REV/2026/09/${activeReviewApp.id.replace('JS-2026-', '')}`;
    onUpdateAppStatus(activeReviewApp.id, 'Approved', officerRemarks || 'Document scrutiny completed. Verified by Revenue Inspector. Approved for digital issuance.', certNum);
    
    try {
      confetti({ particleCount: 80, spread: 60 });
    } catch(err) {}

    setActiveReviewApp(null);
    setOfficerRemarks('');
    alert(`Application ${activeReviewApp.id} approved! Digital DSC certificate generated.`);
  };

  const handleReject = () => {
    if (!activeReviewApp) return;
    const reason = prompt("Enter specific rejection reason for citizen:", "Incomplete family income affidavit. Please re-upload updated ITR document.");
    if (reason) {
      onUpdateAppStatus(activeReviewApp.id, 'Rejected', reason);
      setActiveReviewApp(null);
      setOfficerRemarks('');
      alert(`Application ${activeReviewApp.id} marked as Action Required.`);
    }
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem 4rem' }}>
      {/* Officer Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem', background: 'var(--gov-navy)', color: '#ffffff', padding: '1.75rem 2rem', borderRadius: 'var(--radius-xl)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gov-saffron)', marginBottom: '0.4rem' }}>
            <Building2 size={20} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              DISTRICT REVENUE & SUB-DIVISIONAL MAGISTRATE CONSOLE
            </span>
          </div>
          <h1 style={{ fontSize: '2rem', color: '#ffffff', margin: 0 }}>
            Officer Scrutiny & Approval Desk
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: '4px 0 0' }}>
            Officer ID: <strong style={{ color: '#ffd700', fontFamily: 'var(--font-mono)' }}>SDM-CENTRAL-04</strong> • Digital Token: <span style={{ color: '#10b981' }}>DSC Authenticated 🔒</span>
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>Pending Queue</span>
            <strong style={{ fontSize: '1.4rem', color: '#f59e0b', fontFamily: 'var(--font-heading)' }}>{pendingCount}</strong>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>Issued Today</span>
            <strong style={{ fontSize: '1.4rem', color: '#10b981', fontFamily: 'var(--font-heading)' }}>{approvedCount}</strong>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>SLA Compliance Rate</span>
            <span className="badge badge-green">98.4%</span>
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>1.8 Days Avg</div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '4px' }}>✓ Well within 3-day statutory deadline</div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>DigiLocker Auto-Matches</span>
            <span className="badge badge-blue">89.2%</span>
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--gov-blue)' }}>Instant Verification</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Automated UIDAI + ITR cross-check</div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Grievance Resolution</span>
            <span className="badge badge-saffron">24h Priority</span>
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f59e0b' }}>94.8% SLA</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Ward PWD engineers on duty</div>
        </div>
      </div>

      {/* Applications Review Table */}
      <div className="card">
        {/* Table Filter Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['all', 'submitted', 'under review', 'approved'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  border: filterStatus === status ? '1.5px solid var(--gov-blue)' : '1px solid var(--border-color)',
                  background: filterStatus === status ? 'var(--gov-blue)' : 'var(--bg-card)',
                  color: filterStatus === status ? '#ffffff' : 'var(--text-primary)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textTransform: 'capitalize'
                }}
              >
                {status}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', minWidth: '260px' }}>
            <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              className="form-input" 
              placeholder="Search by ID or Citizen Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '2.25rem', fontSize: '0.85rem', height: '38px' }}
            />
          </div>
        </div>

        {/* Applications List */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ background: 'var(--bg-card-hover)', borderBottom: '2px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '0.85rem 1rem' }}>Tracking ID</th>
                <th style={{ padding: '0.85rem 1rem' }}>Citizen Name</th>
                <th style={{ padding: '0.85rem 1rem' }}>Service Type</th>
                <th style={{ padding: '0.85rem 1rem' }}>District</th>
                <th style={{ padding: '0.85rem 1rem' }}>Applied Date</th>
                <th style={{ padding: '0.85rem 1rem' }}>Status</th>
                <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>Officer Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredApps.map((app) => (
                <tr key={app.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.15s' }}>
                  <td style={{ padding: '1rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--gov-blue)' }}>
                    {app.id}
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {app.applicantName}
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{app.applicantPhone}</div>
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>
                    {app.serviceTitle}
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>
                    {app.district}
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                    {app.appliedDate}
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span className={`badge ${
                      app.status === 'Approved' ? 'badge-green' : 
                      app.status === 'Under Review' ? 'badge-saffron' : 'badge-blue'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    {app.status === 'Approved' ? (
                      <button 
                        className="btn btn-sm btn-secondary"
                        onClick={() => onViewCertificate(app)}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                      >
                        <Eye size={14} /> View Cert
                      </button>
                    ) : (
                      <button 
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                          setActiveReviewApp(app);
                          setOfficerRemarks(app.remarks || '');
                        }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                      >
                        <FileCheck size={14} /> Scrutinize
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Scrutiny & Approval Modal */}
      {activeReviewApp && (
        <div className="modal-overlay" onClick={() => setActiveReviewApp(null)}>
          <div className="modal-content" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="badge badge-blue">OFFICIAL SCRUTINY DESK</span>
                <h3 style={{ fontSize: '1.25rem', margin: '4px 0 0' }}>Review Application: {activeReviewApp.id}</h3>
              </div>
              <button className="btn btn-secondary btn-icon" onClick={() => setActiveReviewApp(null)}>✕</button>
            </div>

            <div className="modal-body">
              <div style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div><span style={{ color: 'var(--text-muted)' }}>Citizen:</span> <strong>{activeReviewApp.applicantName}</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Phone:</span> <strong>{activeReviewApp.applicantPhone}</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Service:</span> <strong>{activeReviewApp.serviceTitle}</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>District:</span> <strong>{activeReviewApp.district}</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Annual Income:</span> <strong>{activeReviewApp.annualIncome}</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>SLA Deadline:</span> <strong style={{ color: '#10b981' }}>{activeReviewApp.slaDeadline}</strong></div>
              </div>

              {/* Verified Documents */}
              <div style={{ marginBottom: '1.25rem' }}>
                <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>
                  Attached Documents (DigiLocker Authenticated):
                </strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.85rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.25)', fontSize: '0.82rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FileText size={16} color="#10b981" />
                      <span>UIDAI_Aadhaar_Authentication_Token.pdf</span>
                    </div>
                    <span className="badge badge-green">SHA-256 MATCH</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.85rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.25)', fontSize: '0.82rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FileText size={16} color="#10b981" />
                      <span>Revenue_Affidavit_Income_Proof.pdf</span>
                    </div>
                    <span className="badge badge-green">VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Officer Endorsement Notes */}
              <div className="form-group">
                <label className="form-label">Sub-Divisional Magistrate Remarks / Endorsement</label>
                <textarea 
                  className="form-textarea"
                  value={officerRemarks}
                  onChange={(e) => setOfficerRemarks(e.target.value)}
                  placeholder="Enter official scrutiny notes for audit trail..."
                  style={{ minHeight: '80px' }}
                />
              </div>
            </div>

            <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn btn-secondary" onClick={handleReject} style={{ color: 'var(--gov-red)' }}>
                <XCircle size={16} /> Reject / Request More Info
              </button>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button className="btn btn-secondary" onClick={() => setActiveReviewApp(null)}>Cancel</button>
                <button className="btn btn-success" onClick={handleApprove} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle size={16} /> Approve & Issue DSC Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
