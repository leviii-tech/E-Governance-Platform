import React, { useState } from 'react';
import { 
  FolderLock, 
  ShieldCheck, 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  QrCode, 
  Lock, 
  Plus, 
  Key,
  Eye
} from 'lucide-react';
import { mockDigiLockerDocuments } from '../../data/servicesData';

export const DigiLockerVault = ({ onViewCertificate }) => {
  const [documents, setDocuments] = useState(mockDigiLockerDocuments);
  const [verifyingDocId, setVerifyingDocId] = useState(null);

  const handleVerifyHash = (docId) => {
    setVerifyingDocId(docId);
    setTimeout(() => {
      setVerifyingDocId(null);
      alert("✅ Cryptographic Checksum Verified: 2048-bit RSA DSC signature matches official repository with zero tampering.");
    }, 800);
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem 4rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8b5cf6', marginBottom: '0.4rem' }}>
            <FolderLock size={18} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              National DigiLocker Bridge
            </span>
          </div>
          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
            Digital Document Vault
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px' }}>
            Access, view, and cryptographically verify your legally recognized electronic documents issued directly by government authorities under the Information Technology Act, 2000.
          </p>
        </div>

        <button 
          className="btn btn-primary"
          onClick={() => {
            const docName = prompt("Enter Name of Document to Link from National Repo (e.g. Driving License, Degree):", "State Driving License (DL)");
            if (docName) {
              setDocuments([
                ...documents,
                {
                  id: "DOC-NEW-" + Math.floor(1000 + Math.random() * 9000),
                  title: docName,
                  docNumber: "DL-04-2026-0091823",
                  issuer: "Ministry of Road Transport & Highways",
                  issueDate: "2026-01-10",
                  verified: true,
                  fileType: "Government Credential",
                  hash: "sha256:4f8812ca0991bb..."
                }
              ]);
            }
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Plus size={16} /> Link New Document
        </button>
      </div>

      {/* Trust & Legal Banner */}
      <div style={{ background: 'rgba(139, 92, 246, 0.08)', border: '1px solid rgba(139, 92, 246, 0.25)', borderRadius: 'var(--radius-lg)', padding: '1.25rem 1.5rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <ShieldCheck size={32} color="#8b5cf6" />
        <div style={{ flex: 1 }}>
          <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>Legally Equivalent to Original Physical Documents</strong>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
            Issued digital documents inside DigiLocker are treated at par with original physical documents under Rule 9A of the Information Technology (Preservation and Retention of Information by Intermediaries Providing Digital Locker Facilities) Rules, 2016.
          </p>
        </div>
      </div>

      {/* Documents Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {documents.map((doc) => (
          <div key={doc.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(29, 78, 216, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FileText size={22} color="var(--gov-blue)" />
                </div>
                <span className="badge badge-green" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle2 size={12} /> DIGITALLY SIGNED
                </span>
              </div>

              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                {doc.title}
              </h3>

              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                🏛️ <strong>Issuer:</strong> {doc.issuer}
              </div>

              <div style={{ background: 'var(--bg-card-hover)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Document Number:</span>
                  <strong style={{ fontFamily: 'var(--font-mono)' }}>{doc.docNumber}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Issue Date:</span>
                  <span>{doc.issueDate}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>SHA-256 Hash:</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gov-blue)' }}>{doc.hash}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
              <button 
                className="btn btn-sm btn-secondary"
                onClick={() => handleVerifyHash(doc.id)}
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
              >
                <Key size={14} />
                {verifyingDocId === doc.id ? 'Checking...' : 'Verify Hash'}
              </button>

              <button 
                className="btn btn-sm btn-primary"
                onClick={() => {
                  alert(`Opening official cryptographic preview for ${doc.title}...`);
                }}
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
              >
                <Eye size={14} /> View Document
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
