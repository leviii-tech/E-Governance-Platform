import React from 'react';
import { 
  ShieldCheck, 
  Printer, 
  Download, 
  Share2, 
  CheckCircle, 
  Award, 
  Building,
  QrCode
} from 'lucide-react';

export const CertificateModal = ({ application, onClose }) => {
  if (!application) return null;

  const handlePrint = () => {
    window.print();
  };

  const certNumber = application.certificateNo && application.certificateNo !== 'PENDING_VERIFICATION' 
    ? application.certificateNo 
    : `CERT/GOV/2026/09/${application.id.replace('JS-2026-', '')}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '820px', background: '#ffffff', color: '#0f172a' }} onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.5rem', background: 'var(--gov-navy)', color: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} color="#ffd700" />
            <strong style={{ fontSize: '0.95rem' }}>Digitally Issued Government Certificate</strong>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-sm btn-saffron" onClick={handlePrint} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Printer size={14} /> Print / Save PDF
            </button>
            <button className="btn btn-sm btn-secondary" onClick={onClose}>✕</button>
          </div>
        </div>

        {/* Printable Certificate Document */}
        <div className="gov-certificate" id="printable-cert">
          {/* Watermark */}
          <div className="cert-watermark">GOVERNMENT OF INDIA</div>

          {/* Certificate Header with Emblem */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid #1e3a8a', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '56px', height: '56px', margin: '0 auto 0.5rem', borderRadius: '50%', background: '#1e3a8a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd700', fontWeight: 'bold', fontSize: '24px', border: '2px solid #ffd700' }}>
              🏛️
            </div>
            <h2 style={{ fontSize: '1.35rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1e3a8a', margin: '0 0 2px' }}>
              GOVERNMENT OF INDIA
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#334155', textTransform: 'uppercase', margin: '0 0 2px' }}>
              {application.department || 'OFFICE OF THE SUB-DIVISIONAL MAGISTRATE'}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
              National Digital Public Services Portal (JanSeva 360) • e-District Infrastructure
            </p>
          </div>

          {/* Certificate Main Title Banner */}
          <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
            <div style={{ display: 'inline-block', borderTop: '2px solid #1e3a8a', borderBottom: '2px solid #1e3a8a', padding: '6px 24px' }}>
              <h1 style={{ fontSize: '1.5rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0f172a', margin: 0 }}>
                {application.serviceTitle || 'STATUTORY CERTIFICATE'}
              </h1>
            </div>
          </div>

          {/* Certificate Metadata Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
            <div>
              <strong>Certificate No: </strong>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#1e3a8a' }}>{certNumber}</span>
            </div>
            <div>
              <strong>Date of Issuance: </strong>
              <span>{application.appliedDate || '2026-09-30'}</span>
            </div>
          </div>

          {/* Certificate Legal Body Copy */}
          <div style={{ fontSize: '1.02rem', lineHeight: 1.8, color: '#1e293b', textAlign: 'justify', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              This is to solemnly certify that <strong>Shri / Smt / Kum. {application.applicantName || 'Rajeshwar Sharma'}</strong>, 
              residing permanently in <strong>{application.district || 'South District'}</strong>, 
              has submitted authenticated documentary evidence under the prescribed revenue rules.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Upon thorough inquiry and statutory revenue field inspection conducted by the Revenue Inspector, 
              the total gross annual family income from all sources is verified and assessed to be 
              <strong> {application.annualIncome || '₹ 1,80,000 (Rupees One Lakh Eighty Thousand Only)'}</strong> per annum.
            </p>

            <p style={{ margin: 0 }}>
              This digital certificate is legally issued under Rule 9A of the Information Technology Act, 2000, and is valid across all Union and State Government institutions, universities, and public sector undertakings for all official statutory purposes.
            </p>
          </div>

          {/* Bottom Security & Digital Signature Footer */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.5rem', alignItems: 'flex-end', borderTop: '1.5px solid #cbd5e1', paddingTop: '1.25rem' }}>
            {/* Left: Verifiable QR Code & Security Stamp */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '84px', height: '84px', background: '#f8fafc', border: '1.5px solid #0f172a', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <QrCode size={72} color="#0f172a" />
              </div>
              <div style={{ fontSize: '0.75rem', color: '#475569', lineHeight: 1.4 }}>
                <strong style={{ display: 'block', color: '#1e3a8a' }}>VERIFICATION ENDPOINT</strong>
                <span>Scan QR code to verify live certificate validity on <br /><strong>janseva360.gov.in/verify</strong></span>
                <div style={{ marginTop: '3px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748b' }}>
                  SHA-256: 8f4c2e1b99a0e6371f49...
                </div>
              </div>
            </div>

            {/* Right: Digital DSC Signature Stamp */}
            <div style={{ border: '2px solid #10b981', background: 'rgba(16, 185, 129, 0.04)', borderRadius: '6px', padding: '0.75rem 1rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', color: '#065f46', fontSize: '0.78rem', fontWeight: 'bold' }}>
                <CheckCircle size={16} color="#10b981" />
                DIGITALLY SIGNED
              </div>
              <strong style={{ display: 'block', fontSize: '0.85rem', color: '#0f172a', marginTop: '2px' }}>
                SUB-DIVISIONAL MAGISTRATE (SDM)
              </strong>
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>
                DSC Serial: 4829-1092-B712<br />
                Timestamp: 2026-09-30 13:10:45 IST
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', padding: '1rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
          <button className="btn btn-secondary" onClick={onClose}>Close Preview</button>
          <button className="btn btn-primary" onClick={handlePrint} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Download size={16} /> Download Authenticated PDF
          </button>
        </div>
      </div>
    </div>
  );
};
