import React, { useState } from 'react';
import { 
  AlertTriangle, 
  MapPin, 
  Camera, 
  Send, 
  Clock, 
  CheckCircle2, 
  ShieldAlert,
  Building,
  User,
  Phone,
  ArrowRight
} from 'lucide-react';
import { mockGrievances } from '../../data/servicesData';
import confetti from 'canvas-confetti';

export const GrievanceRedressal = ({ lang }) => {
  const [grievances, setGrievances] = useState(mockGrievances);
  const [showLodgeForm, setShowLodgeForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Public Works Department (PWD)',
    location: '',
    reportedBy: 'Kishore Patel',
    phone: '+91 98451 90211',
    priority: 'High (SLA 48 Hrs)',
    description: '',
    photoAttached: true
  });

  const [submittedTicket, setSubmittedTicket] = useState(null);

  const departments = [
    "Public Works Department (PWD) - Roads & Bridges",
    "State Electricity Distribution Corp",
    "Municipal Water Supply & Sewerage Board",
    "Urban Sanitation & Solid Waste Management",
    "Public Health & Primary Healthcare Centers",
    "Public Distribution System (Ration & Food Civil Supplies)"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.location || !formData.description) {
      alert("Please fill in the incident title, location, and description.");
      return;
    }

    const newTicketId = "GRV-2026-" + Math.floor(1000 + Math.random() * 9000);
    const newGrievance = {
      id: newTicketId,
      title: formData.title,
      category: formData.category,
      location: formData.location,
      reportedBy: formData.reportedBy,
      phone: formData.phone,
      reportedDate: new Date().toISOString().split('T')[0],
      priority: formData.priority,
      status: "Under Investigation",
      assignedOfficer: "Automated JanSunwai Dispatch Desk",
      description: formData.description,
      timeline: [
        { event: "Grievance Lodged via Citizen Portal", time: "Just Now", status: "Done" },
        { event: "Auto-Routing to Ward Executive Engineer", time: "Pending", status: "Active" },
        { event: "Field Scrutiny & Remedial Action", time: "Pending", status: "Pending" },
        { event: "Citizen Verification & Ticket Closeout", time: "Pending", status: "Pending" }
      ]
    };

    setGrievances([newGrievance, ...grievances]);
    setSubmittedTicket(newGrievance);
    setShowLodgeForm(false);

    try {
      confetti({ particleCount: 80, spread: 60 });
    } catch(err) {}
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem 4rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', marginBottom: '0.4rem' }}>
            <AlertTriangle size={18} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              JanSunwai 24x7 Civic Redressal
            </span>
          </div>
          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
            Public Grievance Redressal Portal
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px' }}>
            Report road potholes, electricity faults, water contamination, or municipal lapses. Guaranteed time-bound resolution with officer accountability.
          </p>
        </div>

        <button 
          className="btn btn-saffron btn-lg"
          onClick={() => { setShowLodgeForm(!showLodgeForm); setSubmittedTicket(null); }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <AlertTriangle size={18} />
          {showLodgeForm ? 'Cancel Submission' : 'Lodge New Grievance'}
        </button>
      </div>

      {/* Confirmation alert after submission */}
      {submittedTicket && (
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1.5px solid #10b981', borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-green">TICKET DISPATCHED</span>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: '4px 0' }}>
              Grievance Registered: {submittedTicket.id}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
              Assigned to <strong>{submittedTicket.category}</strong> with priority <strong>{submittedTicket.priority}</strong>.
            </p>
          </div>
          <button 
            className="btn btn-sm btn-secondary" 
            onClick={() => setSubmittedTicket(null)}
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Lodge Grievance Form Drawer / Modal */}
      {showLodgeForm && (
        <div className="card" style={{ marginBottom: '3rem', border: '2px solid var(--gov-saffron)', background: 'var(--bg-card)' }}>
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>File a Civic Grievance</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Provide exact location coordinates and photos for prompt field action within 48 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label className="form-label form-label-required">Grievance Title / Problem Summary</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Broken drainage causing dirty water overflow on Main Bazaar road"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Concerned Department</label>
                <select 
                  className="form-select"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  {departments.map((dept, i) => (
                    <option key={i} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Priority Level</label>
                <select 
                  className="form-select"
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                >
                  <option value="Critical (SLA 24 Hrs)">Critical Emergency (SLA 24 Hrs)</option>
                  <option value="High (SLA 48 Hrs)">High Priority (SLA 48 Hrs)</option>
                  <option value="Normal (SLA 5 Days)">Standard Resolution (SLA 5 Days)</option>
                </select>
              </div>

              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label className="form-label form-label-required">Exact Incident Location / Landmark</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Near Pole #14, Sector 7 Market Road, Ward 12"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => {
                      setFormData({ ...formData, location: "GPS: Lat 28.6139° N, Long 77.2090° E (Auto-Tagged)" });
                      alert("Simulated GPS location successfully captured!");
                    }}
                    style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <MapPin size={16} color="#ef4444" /> Tag GPS
                  </button>
                </div>
              </div>

              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label className="form-label form-label-required">Detailed Description of Problem</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Describe how long the issue has persisted, risks to public safety, and nearby affected landmarks..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#10b981' }}>
                <Camera size={18} />
                <span>Photo Proof Attached: <strong>Pothole_Site_Photo_2026.jpg</strong></span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowLodgeForm(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Send size={16} /> Submit Grievance
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Active Complaints Feed */}
      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
          Recent Public Grievance Records ({grievances.length})
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {grievances.map((grv) => (
            <div key={grv.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.35rem' }}>
                    <span className="badge badge-red">{grv.id}</span>
                    <span className="badge badge-blue">{grv.category}</span>
                    <span className="badge badge-saffron">{grv.priority}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>
                    {grv.title}
                  </h3>
                </div>

                <span className="badge badge-green" style={{ fontSize: '0.85rem' }}>
                  ● {grv.status.toUpperCase()}
                </span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
                {grv.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.82rem', color: 'var(--text-muted)', background: 'var(--bg-card-hover)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
                <div>📍 <strong>Location:</strong> {grv.location}</div>
                <div>👤 <strong>Reported By:</strong> {grv.reportedBy} ({grv.reportedDate})</div>
                <div>🏛️ <strong>Assigned Desk:</strong> {grv.assignedOfficer}</div>
              </div>

              {/* Mini Timeline */}
              <div>
                <strong style={{ fontSize: '0.8rem', color: 'var(--text-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  Remediation Progress:
                </strong>
                <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
                  {grv.timeline.map((step, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        flex: 1, 
                        minWidth: '160px', 
                        padding: '0.5rem 0.75rem', 
                        borderRadius: '6px', 
                        background: step.status === 'Done' ? 'rgba(16, 185, 129, 0.1)' : step.status === 'Active' ? 'rgba(245, 158, 11, 0.1)' : 'var(--bg-card)', 
                        border: step.status === 'Done' ? '1px solid #10b981' : step.status === 'Active' ? '1px solid #f59e0b' : '1px solid var(--border-color)',
                        fontSize: '0.75rem'
                      }}
                    >
                      <strong style={{ color: step.status === 'Done' ? '#065f46' : step.status === 'Active' ? '#b45309' : 'var(--text-muted)', display: 'block' }}>
                        {step.status === 'Done' ? '✓ ' : ''}{step.event}
                      </strong>
                      <span style={{ color: 'var(--text-muted)' }}>{step.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
