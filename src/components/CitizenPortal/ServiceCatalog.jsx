import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  FileText, 
  Building2, 
  HeartHandshake, 
  AlertTriangle, 
  LayoutGrid, 
  Clock, 
  CheckSquare, 
  Info,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { publicServices, serviceCategories } from '../../data/servicesData';
import { translations } from '../../data/translations';

export const ServiceCatalog = ({ lang, onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDocModal, setActiveDocModal] = useState(null);
  const t = translations[lang] || translations.en;

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'identity': return FileText;
      case 'revenue': return Building2;
      case 'welfare': return HeartHandshake;
      case 'grievance': return AlertTriangle;
      default: return LayoutGrid;
    }
  };

  const filteredServices = publicServices.filter((service) => {
    const matchesCat = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem 4rem' }}>
      {/* Catalog Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gov-blue)', marginBottom: '0.4rem' }}>
          <ShieldCheck size={18} />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            National Unified Service Catalog
          </span>
        </div>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          Public Services Directory
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px' }}>
          Browse, verify prerequisites, and apply online for statutory government certificates, welfare schemes, revenue mutations, and business clearances.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative' }}>
          <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search by certificate name, department, or keyword (e.g. Caste, Land, PM-Kisan)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.75rem', height: '48px', fontSize: '1rem' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Showing {filteredServices.length} Services
          </span>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '2.5rem' }}>
        {serviceCategories.map((cat) => {
          const IconC = getCategoryIcon(cat.id);
          const isSelected = selectedCategory === cat.id;
          return (
            <button 
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                border: isSelected ? '1.5px solid var(--gov-blue)' : '1px solid var(--border-color)',
                background: isSelected ? 'var(--gov-blue)' : 'var(--bg-card)',
                color: isSelected ? '#ffffff' : 'var(--text-primary)',
                fontWeight: isSelected ? 700 : 500,
                fontSize: '0.9rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all var(--transition-fast)'
              }}
            >
              <IconC size={16} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      {filteredServices.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
          <AlertTriangle size={48} color="#f59e0b" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No Services Match Your Search</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Try searching for common terms like "Income", "Caste", "Birth", "Land", or "Grievance".
          </p>
          <button 
            className="btn btn-secondary"
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
          >
            Clear Filters & Reset
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="card"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge badge-blue">{service.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: '#10b981', fontWeight: 600 }}>
                    <Clock size={13} />
                    <span>SLA: {service.slaDays} Days</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>

                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                  🏛️ {service.department}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {service.description}
                </p>

                {/* Required Documents Pill */}
                <div style={{ background: 'var(--bg-card-hover)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Required Documents ({service.requiredDocs.length}):
                    </span>
                    <button 
                      onClick={() => setActiveDocModal(service)}
                      style={{ background: 'none', border: 'none', color: 'var(--gov-blue)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}
                    >
                      <Info size={12} /> Checklist
                    </button>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {service.requiredDocs.slice(0, 2).map((doc, i) => (
                      <span key={i} style={{ fontSize: '0.75rem', background: 'var(--bg-card)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                        ✓ {doc}
                      </span>
                    ))}
                    {service.requiredDocs.length > 2 && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', alignSelf: 'center' }}>
                        +{service.requiredDocs.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Fee:</span>
                  <strong style={{ color: 'var(--gov-blue)', fontSize: '1rem' }}>{service.fee}</strong>
                </div>

                <button 
                  className="btn btn-primary"
                  onClick={() => onSelectService(service)}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  Apply Online <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Document Checklist Modal */}
      {activeDocModal && (
        <div className="modal-overlay" onClick={() => setActiveDocModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Document Checklist</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{activeDocModal.title}</p>
              </div>
              <button className="btn btn-secondary btn-icon" onClick={() => setActiveDocModal(null)}>✕</button>
            </div>

            <div className="modal-body">
              <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
                Please ensure you have scanned PDF or JPG copies of the following documents before proceeding with your application:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {activeDocModal.requiredDocs.map((doc, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'var(--bg-card-hover)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <CheckSquare size={18} color="#10b981" />
                    <div>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{doc}</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Max file size: 2MB • Format: PDF, JPG, PNG</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem', background: 'rgba(29, 78, 216, 0.08)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(29, 78, 216, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gov-blue)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  <ShieldCheck size={16} /> DigiLocker Auto-Verification Available
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                  You can automatically import your Aadhaar, PAN, and Land records directly from DigiLocker inside the application wizard.
                </p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setActiveDocModal(null)}>Close</button>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const srv = activeDocModal;
                  setActiveDocModal(null);
                  onSelectService(srv);
                }}
              >
                Proceed to Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
