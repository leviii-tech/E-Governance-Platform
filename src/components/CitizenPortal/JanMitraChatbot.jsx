import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  User, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const JanMitraChatbot = ({ onNavigate, onSelectServiceByName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Namaste! 🙏 I am Jan-Mitra, your AI Citizen Assistant. How can I assist you today with government certificates, welfare schemes, or civic grievances?'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const samplePrompts = [
    "How to apply for Income Certificate?",
    "Where can I track application JS-2026-8842?",
    "What welfare schemes are available for students?",
    "How to report a broken road or water leak?"
  ];

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Simulate smart bot response
    setTimeout(() => {
      let botResponse = "I can guide you through our portal! You can apply for certificates from the Service Catalog, track live progress, or lodge grievances with guaranteed 48-hour SLAs.";
      const lower = text.toLowerCase();

      if (lower.includes('income') || lower.includes('certificate')) {
        botResponse = "To apply for an Income Certificate: You need an Aadhaar card and an income affidavit. The statutory turnaround SLA is 3 working days with a nominal fee of ₹25. Would you like me to open the Income Certificate form for you?";
      } else if (lower.includes('track') || lower.includes('8842') || lower.includes('status')) {
        botResponse = "You can track any application in real-time on our 'Track Application' tab. For example, reference JS-2026-8842 is currently Approved by the Sub-Divisional Magistrate with a downloadable digital certificate!";
      } else if (lower.includes('scheme') || lower.includes('student') || lower.includes('welfare') || lower.includes('stipend')) {
        botResponse = "For students and youth, we offer the 'PM Yuva Skill Apprenticeship' (₹8,000/month stipend) and 'Post-Matric Merit Scholarships'. You can test your eligibility on our Welfare Calculator!";
      } else if (lower.includes('road') || lower.includes('pothole') || lower.includes('grievance') || lower.includes('complaint')) {
        botResponse = "For civic problems like potholes or electrical faults, visit the 'JanSunwai Civic Grievance' tab. You can tag GPS coordinates and upload photos; the ward engineer is mandated to act within 48 hours.";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 600);
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999 }}>
      {/* Launcher Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1d4ed8, #0b192c)',
            border: '2px solid #f59e0b',
            color: '#ffffff',
            boxShadow: '0 8px 25px rgba(29, 78, 216, 0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          title="Open Jan-Mitra AI Assistant"
          aria-label="Open Jan-Mitra AI Assistant"
        >
          <Bot size={28} color="#ffd700" />
        </button>
      )}

      {/* Expandable Chat Window */}
      {isOpen && (
        <div style={{
          width: '380px',
          maxWidth: '90vw',
          height: '520px',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.25s ease'
        }}>
          {/* Chat Header */}
          <div style={{
            background: 'var(--gov-navy)',
            color: '#ffffff',
            padding: '1rem 1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid var(--gov-saffron)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} color="#ffd700" />
              </div>
              <div>
                <strong style={{ fontSize: '1rem', display: 'block' }}>Jan-Mitra AI Assistant</strong>
                <span style={{ fontSize: '0.72rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span>
                  Online • 24x7 Citizen Guide
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Feed */}
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {messages.map((msg, i) => (
              <div 
                key={i} 
                style={{ 
                  display: 'flex', 
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: '0.5rem'
                }}
              >
                {msg.sender === 'bot' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--gov-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Bot size={16} color="#ffffff" />
                  </div>
                )}
                <div style={{
                  maxWidth: '80%',
                  padding: '0.75rem 1rem',
                  borderRadius: '14px',
                  background: msg.sender === 'user' ? 'var(--gov-blue)' : 'var(--bg-card-hover)',
                  color: msg.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                  fontSize: '0.86rem',
                  lineHeight: 1.4,
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div style={{ padding: '0.5rem 0.75rem', background: 'var(--bg-card-hover)', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p)}
                style={{
                  fontSize: '0.72rem',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div style={{ padding: '0.75rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Ask anything about public services..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
              style={{ fontSize: '0.88rem', padding: '0.5rem 0.75rem' }}
            />
            <button 
              className="btn btn-primary"
              onClick={() => handleSendMessage()}
              style={{ padding: '0 0.85rem' }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
