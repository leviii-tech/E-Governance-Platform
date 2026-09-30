import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle, 
  Upload, 
  FileText, 
  AlertCircle, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  QrCode,
  Download,
  Lock,
  Smartphone,
  FolderCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ApplicationWizardModal = ({ 
  service, 
  onClose, 
  onSuccessSubmit, 
  onViewCertificate 
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    applicantName: 'Rajeshwar Sharma',
    aadhaarNumber: '9845-1234-5678',
    applicantPhone: '+91 98451 23098',
    annualIncome: '180000',
    occupation: 'Self-Employed / Business',
    district: 'South District',
    residentialAddress: 'House No. 42, Civil Lines, South Tehsil, New Delhi - 110001',
    casteCategory: 'Other Backward Class (OBC)',
    subCaste: 'Kashyap / Vishwakarma',
    childName: 'Aarav Sharma',
    dob: '2026-03-15',
    gender: 'Male',
    hospitalName: 'District Civil Government Hospital',
    farmerName: 'Rajeshwar Sharma',
    landAreaHectares: '1.8',
    bankAccountNumber: '9188001239841',
    ifscCode: 'SBIN0001429',
    educationLevel: 'B.Tech / B.E. / BCA / MCA',
    domainSkill: 'Software & Web Engineering',
    portfolioUrl: 'https://github.com/deekshith/e-gov-prototype',
    businessName: 'Sharma Digital Solutions',
    businessType: 'Sole Proprietorship',
    gstinNumber: '07AABCS1429M1ZB',
    employeeCount: '4',
    surveyNumber: '312/A-4',
    villageTehsil: 'Kisan Nagar, Rural South',
    transferMode: 'Sale Deed Purchase',
    deedRegNo: 'REG/2026/09/4412',
    residingYears: '15',
    voterEpicNo: 'DL/04/182/990142',
    purpose: 'College Admission'
  });

  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "Aadhaar_UIDAI_Verified.pdf", size: "1.2 MB", verified: true, source: "DigiLocker" },
    { name: "Income_Self_Affidavit_2026.pdf", size: "840 KB", verified: true, source: "Uploaded" }
  ]);

  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [otpVerified, setOtpVerified] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApplication, setSubmittedApplication] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleDigiLockerAutoImport = () => {
    setUploadedFiles(prev => [
      ...prev,
      { name: "Land_Record_7_12_Extract.pdf", size: "1.5 MB", verified: true, source: "DigiLocker Govt Vault" },
      { name: "Voter_ID_EPIC_Card.pdf", size: "620 KB", verified: true, source: "DigiLocker Govt Vault" }
    ]);
    alert("DigiLocker Bridge: 2 authenticated statutory documents imported and cryptographic SHA-256 signatures verified!");
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.aadhaarNumber || formData.aadhaarNumber.length < 12) {
        newErrors.aadhaarNumber = "Valid 12-digit Aadhaar UID is mandatory.";
      }
      if (!formData.applicantPhone || formData.applicantPhone.length < 10) {
        newErrors.applicantPhone = "Valid 10-digit mobile number required.";
      }
    } else if (step === 2) {
      if (!formData.applicantName || formData.applicantName.trim() === '') {
        newErrors.applicantName = "Applicant legal name is mandatory.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const randomId = 'JS-2026-' + Math.floor(1000 + Math.random() * 9000);
      const newApp = {
        id: randomId,
        serviceId: service.id,
        serviceTitle: service.title,
        applicantName: formData.applicantName || 'Citizen Applicant',
        applicantPhone: formData.applicantPhone,
        appliedDate: new Date().toISOString().split('T')[0],
        status: "Submitted",
        department: service.department,
        slaDeadline: new Date(Date.now() + service.slaDays * 86400000).toISOString().split('T')[0],
        certificateNo: "PENDING_VERIFICATION",
        qrCodeData: `https://janseva360.gov.in/verify/${randomId}`,
        annualIncome: formData.annualIncome ? `₹ ${parseInt(formData.annualIncome).toLocaleString('en-IN')}` : 'N/A',
        district: formData.district || 'Central District',
        history: [
          { stage: "Submitted & Aadhaar e-KYC Authenticated", time: "Just Now", done: true, officer: "Automated Gateway" },
          { stage: "Desk Verification of Documents", time: "Pending", done: false, officer: "Desk Officer" },
          { stage: "Field Inspection / Revenue Review", time: "Pending", done: false, officer: "Revenue Inspector" },
          { stage: "Final Digital DSC Signature Issuance", time: "Pending", done: false, officer: "Tehsildar / Sub-Divisional Magistrate" }
        ],
        remarks: "Application received with DigiLocker verified identity. Queued in department workflow."
      };

      setSubmittedApplication(newApp);
      setIsSubmitting(false);
      onSuccessSubmit(newApp);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '750px' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gov-blue)', fontSize: '0.8rem', fontWeight: 700 }}>
              <ShieldCheck size={16} />
              <span>OFFICIAL CITIZEN APPLICATION FORM</span>
            </div>
            <h2 style={{ fontSize: '1.35rem', margin: '2px 0 0', color: 'var(--text-primary)' }}>
              {service.title}
            </h2>
          </div>
          <button className="btn btn-secondary btn-icon" onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* If already submitted successfully */}
          {submittedApplication ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', border: '2px solid #10b981' }}>
                <CheckCircle size={38} color="#10b981" />
              </div>

              <span className="badge badge-green" style={{ marginBottom: '0.5rem' }}>APPLICATION RECORDED</span>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Application Successfully Submitted!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
                Your request has been officially recorded in the National Digital Public Register and forwarded to the <strong>{service.department}</strong>.
              </p>

              {/* Receipt Summary Card */}
              <div style={{ background: 'var(--bg-card-hover)', border: '1.5px dashed var(--gov-blue)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', textAlign: 'left', marginBottom: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Application Tracking ID:</span>
                    <strong style={{ fontSize: '1.25rem', color: 'var(--gov-blue)', fontFamily: 'var(--font-mono)' }}>
                      {submittedApplication.id}
                    </strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Guaranteed SLA Resolution:</span>
                    <strong style={{ fontSize: '1rem', color: '#10b981' }}>
                      Within {service.slaDays} Days ({submittedApplication.slaDeadline})
                    </strong>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Applicant Name: </span>
                    <strong>{submittedApplication.applicantName}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>SMS Alerts Phone: </span>
                    <strong>{submittedApplication.applicantPhone}</strong>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    alert(`Application receipt for ${submittedApplication.id} downloaded.`);
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Download size={16} /> Download Acknowledgment Slip
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={onClose}
                >
                  Go to Live Tracker
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* 4-Step Stepper Header */}
              <div className="stepper-wrap">
                <div className="stepper-line">
                  <div className="stepper-line-fill" style={{ width: `${((currentStep - 1) / 3) * 100}%` }}></div>
                </div>

                <div className={`stepper-node ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'done' : ''}`}>
                  <div className="stepper-circle">{currentStep > 1 ? '✓' : '1'}</div>
                  <span className="stepper-title">e-KYC Identity</span>
                </div>

                <div className={`stepper-node ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'done' : ''}`}>
                  <div className="stepper-circle">{currentStep > 2 ? '✓' : '2'}</div>
                  <span className="stepper-title">Form Details</span>
                </div>

                <div className={`stepper-node ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'done' : ''}`}>
                  <div className="stepper-circle">{currentStep > 3 ? '✓' : '3'}</div>
                  <span className="stepper-title">Documents</span>
                </div>

                <div className={`stepper-node ${currentStep >= 4 ? 'active' : ''}`}>
                  <div className="stepper-circle">4</div>
                  <span className="stepper-title">Declaration</span>
                </div>
              </div>

              {/* Step 1: e-KYC Identity */}
              {currentStep === 1 && (
                <div>
                  <div style={{ background: 'rgba(29, 78, 216, 0.08)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(29, 78, 216, 0.2)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <ShieldCheck size={24} color="#1d4ed8" />
                    <div>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>UIDAI Aadhaar Verified Authentication</strong>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Your identity details are authenticated securely using standard zero-knowledge token exchange.
                      </p>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label form-label-required">12-Digit Aadhaar UID Number</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={formData.aadhaarNumber}
                      onChange={(e) => handleInputChange('aadhaarNumber', e.target.value)}
                      placeholder="XXXX-XXXX-XXXX"
                    />
                    {errors.aadhaarNumber && <p style={{ color: 'var(--gov-red)', fontSize: '0.8rem', marginTop: '4px' }}>{errors.aadhaarNumber}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label form-label-required">Aadhaar-Linked Mobile Number (for OTP & SMS)</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input 
                        type="text" 
                        className="form-input" 
                        value={formData.applicantPhone}
                        onChange={(e) => handleInputChange('applicantPhone', e.target.value)}
                      />
                      <button 
                        type="button" 
                        className="btn btn-secondary"
                        onClick={() => {
                          setOtpSent(true);
                          setOtpCode('482910');
                          alert("Aadhaar OTP Sent: 482910");
                        }}
                      >
                        {otpSent ? 'Resend OTP' : 'Send OTP'}
                      </button>
                    </div>
                  </div>

                  {otpSent && (
                    <div className="form-group" style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #10b981' }}>
                      <label className="form-label" style={{ color: '#065f46' }}>Enter 6-Digit OTP received on SMS</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        placeholder="e.g. 482910"
                        style={{ maxWidth: '200px', fontWeight: 'bold', letterSpacing: '0.2em', textAlign: 'center' }}
                      />
                      <span style={{ fontSize: '0.75rem', color: '#047857', display: 'block', marginTop: '4px' }}>
                        ✓ Demo OTP prefilled: 482910 (Verified)
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Dynamic Form Fields */}
              {currentStep === 2 && (
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                    {service.title} - Specific Requirements
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {service.fields.map((field) => (
                      <div 
                        key={field.name} 
                        className="form-group" 
                        style={{ gridColumn: field.type === 'textarea' ? 'span 2' : 'span 1' }}
                      >
                        <label className={`form-label ${field.required ? 'form-label-required' : ''}`}>
                          {field.label}
                        </label>

                        {field.type === 'select' ? (
                          <select 
                            className="form-select"
                            value={formData[field.name] || ''}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                          >
                            {field.options.map((opt, i) => (
                              <option key={i} value={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : field.type === 'textarea' ? (
                          <textarea 
                            className="form-textarea"
                            value={formData[field.name] || ''}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            placeholder={field.placeholder || ''}
                          />
                        ) : (
                          <input 
                            type={field.type} 
                            className="form-input"
                            value={formData[field.name] || ''}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            placeholder={field.placeholder || ''}
                          />
                        )}

                        {errors[field.name] && (
                          <p style={{ color: 'var(--gov-red)', fontSize: '0.8rem', marginTop: '4px' }}>
                            {errors[field.name]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Document Uploads & DigiLocker Vault Bridge */}
              {currentStep === 3 && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', background: 'var(--bg-card-hover)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>DigiLocker Native Integration</strong>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>Import authenticated certificates directly without physical scanning.</p>
                    </div>
                    <button 
                      type="button"
                      className="btn btn-sm btn-saffron"
                      onClick={handleDigiLockerAutoImport}
                      style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <Sparkles size={14} /> Fetch from DigiLocker
                    </button>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label className="form-label">Attached Documents ({uploadedFiles.length})</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {uploadedFiles.map((file, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <FileText size={20} color="#1d4ed8" />
                            <div>
                              <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>{file.name}</strong>
                              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                {file.size} • Source: <span style={{ color: '#10b981', fontWeight: 600 }}>{file.source}</span>
                              </div>
                            </div>
                          </div>
                          <span className="badge badge-green">VERIFIED</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Manual File Dropzone Simulator */}
                  <div style={{ border: '2px dashed var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', textAlign: 'center', cursor: 'pointer', background: 'var(--bg-card-hover)' }}
                    onClick={() => {
                      const newDoc = prompt("Enter simulated document filename to attach (e.g. Salary_Slip_2026.pdf):", "Salary_Slip_August2026.pdf");
                      if (newDoc) {
                        setUploadedFiles(prev => [...prev, { name: newDoc, size: "1.1 MB", verified: true, source: "Citizen Upload" }]);
                      }
                    }}
                  >
                    <Upload size={32} color="#64748b" style={{ margin: '0 auto 0.5rem' }} />
                    <strong style={{ fontSize: '0.9rem', display: 'block', color: 'var(--text-primary)' }}>Click to upload supplementary PDF/JPG document</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Maximum file size 2MB per attachment</span>
                  </div>
                </div>
              )}

              {/* Step 4: Final Declaration & Review */}
              {currentStep === 4 && (
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    Review Application Summary
                  </h4>

                  <div style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.88rem', marginBottom: '0.75rem' }}>
                      <div><span style={{ color: 'var(--text-muted)' }}>Service:</span> <strong>{service.title}</strong></div>
                      <div><span style={{ color: 'var(--text-muted)' }}>Department:</span> <strong>{service.department}</strong></div>
                      <div><span style={{ color: 'var(--text-muted)' }}>Applicant Name:</span> <strong>{formData.applicantName}</strong></div>
                      <div><span style={{ color: 'var(--text-muted)' }}>Aadhaar UID:</span> <strong>{formData.aadhaarNumber}</strong></div>
                      <div><span style={{ color: 'var(--text-muted)' }}>Govt Fee:</span> <strong>{service.fee}</strong></div>
                      <div><span style={{ color: 'var(--text-muted)' }}>SLA Delivery:</span> <strong style={{ color: '#10b981' }}>{service.slaDays} Working Days</strong></div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(245, 158, 11, 0.08)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
                    <input type="checkbox" id="legal-declaration" defaultChecked style={{ marginTop: '3px', cursor: 'pointer' }} />
                    <label htmlFor="legal-declaration" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer', lineHeight: 1.4 }}>
                      I hereby solemnly declare that the particulars provided in this application are true, correct, and complete to the best of my knowledge under Section 199/200 of the Indian Penal Code.
                    </label>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        {!submittedApplication && (
          <div className="modal-footer">
            {currentStep > 1 && (
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={() => setCurrentStep(prev => prev - 1)}
                disabled={isSubmitting}
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <ArrowLeft size={16} /> Back
              </button>
            )}

            {currentStep < 4 ? (
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleNext}
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Continue <ArrowRight size={16} />
              </button>
            ) : (
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                {isSubmitting ? 'Transmitting & Encrypting...' : 'Confirm & Submit Application'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
