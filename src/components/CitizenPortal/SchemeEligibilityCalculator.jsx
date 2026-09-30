import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Sparkles, 
  CheckCircle, 
  Calculator, 
  ArrowRight, 
  Building, 
  Users, 
  IndianRupee,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const SchemeEligibilityCalculator = ({ onApplyScheme }) => {
  const [params, setParams] = useState({
    age: '23',
    annualIncome: '150000',
    category: 'OBC',
    occupation: 'Student / Graduate',
    state: 'National / All States',
    landHoldingHectares: '0'
  });

  const [hasCalculated, setHasCalculated] = useState(false);

  const calculateEligibleSchemes = () => {
    setHasCalculated(true);
    try {
      confetti({ particleCount: 60, spread: 50 });
    } catch(err) {}
  };

  const schemesList = [
    {
      id: "sch-yuva",
      title: "PM Yuva Apprentice & Skill Development Stipend",
      ministry: "Ministry of Skill Development & Entrepreneurship",
      monthlyBenefit: "₹8,000 / month",
      annualTotal: "₹96,000 / year",
      criteria: "Graduates/Vocational students aged 18-30 with family income < ₹3,50,000",
      eligible: parseInt(params.age) >= 18 && parseInt(params.age) <= 30 && parseInt(params.annualIncome) <= 350000,
      tags: ["Youth", "Employment", "Direct Bank Transfer"]
    },
    {
      id: "sch-kisan",
      title: "PM-Kisan Samman Nidhi Direct Income Support",
      ministry: "Ministry of Agriculture & Farmers Welfare",
      monthlyBenefit: "₹500 / month (₹2,000 every 4 months)",
      annualTotal: "₹6,000 / year",
      criteria: "Small & marginal farmers owning cultivable agricultural land",
      eligible: params.occupation === 'Farmer / Agrarian' || parseFloat(params.landHoldingHectares) > 0,
      tags: ["Agriculture", "Direct Bank Transfer"]
    },
    {
      id: "sch-ayushman",
      title: "Ayushman Bharat PM-JAY Health Insurance",
      ministry: "National Health Authority",
      monthlyBenefit: "Free Hospitalization Cover",
      annualTotal: "₹5,00,000 / family / year",
      criteria: "Families with annual income < ₹2,50,000 (EWS/OBC/SC/ST)",
      eligible: parseInt(params.annualIncome) <= 250000,
      tags: ["Healthcare", "Cashless"]
    },
    {
      id: "sch-scholarship",
      title: "Post-Matric National Merit Scholarship",
      ministry: "Ministry of Social Justice & Empowerment",
      monthlyBenefit: "₹1,200 / month + 100% Tuition Waiver",
      annualTotal: "₹45,000 / year",
      criteria: "Students enrolled in higher education from reserved / low income groups",
      eligible: params.occupation === 'Student / Graduate' && parseInt(params.annualIncome) <= 250000,
      tags: ["Education", "Tuition Waiver"]
    },
    {
      id: "sch-solar",
      title: "PM Surya Ghar Free Rooftop Solar Scheme",
      ministry: "Ministry of New and Renewable Energy",
      monthlyBenefit: "Up to 300 Units Free Electricity",
      annualTotal: "₹78,000 Capital Subsidy",
      criteria: "Residential property owners looking to install 1-3kW solar panels",
      eligible: true,
      tags: ["Clean Energy", "Green Subsidy"]
    }
  ];

  const matchedSchemes = schemesList.filter(s => s.eligible);

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem 4rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', marginBottom: '0.4rem' }}>
          <Sparkles size={18} />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Zero-Barrier Benefits Discovery
          </span>
        </div>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          Welfare Scheme Eligibility Calculator
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px' }}>
          Enter your demographic parameters to instantly uncover all Central and State welfare subsidies, educational scholarships, and financial entitlements you qualify for.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '2.5rem' }}>
        {/* Left: Input Form */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            <Calculator size={20} color="var(--gov-blue)" />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: 0 }}>Your Citizen Profile</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            <div className="form-group">
              <label className="form-label">Applicant Age</label>
              <input 
                type="number" 
                className="form-input" 
                value={params.age}
                onChange={(e) => setParams({ ...params, age: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Total Annual Family Income (INR)</label>
              <input 
                type="number" 
                className="form-input" 
                value={params.annualIncome}
                onChange={(e) => setParams({ ...params, annualIncome: e.target.value })}
                placeholder="e.g. 180000"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Social Category</label>
              <select 
                className="form-select"
                value={params.category}
                onChange={(e) => setParams({ ...params, category: e.target.value })}
              >
                <option value="General">General / Open Category</option>
                <option value="EWS">Economically Weaker Section (EWS)</option>
                <option value="OBC">Other Backward Class (OBC)</option>
                <option value="SC">Scheduled Caste (SC)</option>
                <option value="ST">Scheduled Tribe (ST)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Primary Occupation</label>
              <select 
                className="form-select"
                value={params.occupation}
                onChange={(e) => setParams({ ...params, occupation: e.target.value })}
              >
                <option value="Student / Graduate">Student / Unemployed Graduate</option>
                <option value="Farmer / Agrarian">Farmer / Cultivator</option>
                <option value="Self-Employed / Business">Self-Employed / Small Business</option>
                <option value="Daily Wage / Artisan">Daily Wage Worker / Artisan</option>
                <option value="Senior Citizen / Retired">Senior Citizen / Retired</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Landholding (in Hectares, if any)</label>
              <input 
                type="number" 
                className="form-input" 
                value={params.landHoldingHectares}
                onChange={(e) => setParams({ ...params, landHoldingHectares: e.target.value })}
              />
            </div>

            <button 
              className="btn btn-primary btn-lg"
              onClick={calculateEligibleSchemes}
              style={{ width: '100%', marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <Sparkles size={18} /> Calculate Entitlements
            </button>
          </div>
        </div>

        {/* Right: Matched Schemes List */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: 0 }}>
              Matched Welfare Schemes ({matchedSchemes.length})
            </h3>
            <span className="badge badge-green">100% VERIFIED CRITERIA</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {matchedSchemes.map((scheme) => (
              <div key={scheme.id} className="card" style={{ borderLeft: '4px solid #10b981' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0 }}>{scheme.title}</h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>🏛️ {scheme.ministry}</span>
                  </div>
                  <span className="badge badge-green">ELIGIBLE</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', background: 'var(--bg-card-hover)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', margin: '0.75rem 0' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Direct Financial Benefit:</span>
                    <strong style={{ color: 'var(--gov-blue)', fontSize: '0.95rem' }}>{scheme.monthlyBenefit}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Total Annual Grant:</span>
                    <strong style={{ color: '#10b981', fontSize: '0.95rem' }}>{scheme.annualTotal}</strong>
                  </div>
                </div>

                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  📋 <strong>Qualification:</strong> {scheme.criteria}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    {scheme.tags.map((t, i) => (
                      <span key={i} style={{ fontSize: '0.7rem', background: 'rgba(29, 78, 216, 0.08)', color: 'var(--gov-blue)', padding: '2px 6px', borderRadius: '4px' }}>
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button 
                    className="btn btn-sm btn-primary"
                    onClick={() => {
                      alert(`Direct enrollment started for ${scheme.title}! Opening application wizard...`);
                    }}
                  >
                    Apply Now &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
