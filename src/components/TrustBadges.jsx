import React from 'react';
import { Shield, Sparkles, UserCheck, Eye, HelpCircle } from 'lucide-react';

export default function TrustBadges() {
  const pillars = [
    {
      title: 'Ethical Guidance',
      desc: 'We follow absolute merit-based advising. No backdoor entries, no recommendations influenced by payout margins. Only pure medical career planning.',
      icon: <UserCheck size={28} />,
      color: '#10b981',
      bg: '#f0fdf4'
    },
    {
      title: 'Transparent Process',
      desc: 'Every choice list, cutoff, and allotment data is shared openly. We guide you to pay all tuition fees directly to official university/MCC accounts.',
      icon: <Eye size={28} />,
      color: '#1a73e8',
      bg: '#eff6ff'
    },
    {
      title: 'Student First',
      desc: 'Our recommendations are strictly personalized around your NEET score and financial budget, helping you secure the best college without taking unnecessary debts.',
      icon: <Sparkles size={28} />,
      color: '#00b4d8',
      bg: '#f0fdfa'
    },
    {
      title: 'No False Promises',
      desc: 'We never guarantee admissions for borderline scores. We provide highly accurate, cutoff-backed probability estimates so you can make informed decisions.',
      icon: <Shield size={28} />,
      color: '#f59e0b',
      bg: '#fffbeb'
    },
    {
      title: 'Anti-Scam Alert',
      desc: 'We actively counsel students against high-pressure callers, fake seat-blocking schemes, and document frauds. You pay ₹0 to confirm validity of any call.',
      icon: <HelpCircle size={28} />,
      color: '#d93025',
      bg: '#fdf2f2'
    }
  ];

  return (
    <section className="pillars-section">
      <div className="container">
        <div className="section-header">
          <h2>Built on Absolute Trust & Authority</h2>
          <p>
            Unlike traditional consulting agencies, MeritHalo operates as an educational counselling assistant, protecting students from common pitfalls in medical admissions.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card">
              <div className="icon-wrapper" style={{ color: pillar.color, backgroundColor: pillar.bg }}>
                {pillar.icon}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pillars-section {
          background-color: var(--bg-white);
          padding: 80px 0;
          border-top: 1px solid #f1f5f9;
        }
        
        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 56px auto;
        }
        
        .section-header h2 {
          font-size: 36px;
          color: var(--primary-navy);
          margin-bottom: 16px;
        }
        
        .section-header p {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.6;
        }
        
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        
        .pillar-card {
          background: white;
          border: 1px solid #f1f5f9;
          border-radius: var(--border-radius-md);
          padding: 32px;
          box-shadow: var(--box-shadow-sm);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .pillar-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--box-shadow-md);
          border-color: rgba(26, 115, 232, 0.15);
        }
        
        .icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: var(--transition-smooth);
        }
        
        .pillar-card:hover .icon-wrapper {
          transform: scale(1.1);
        }
        
        .pillar-card h3 {
          font-size: 20px;
          color: var(--primary-navy);
          margin-bottom: 12px;
        }
        
        .pillar-card p {
          font-size: 14.5px;
          color: var(--text-body);
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 28px;
          }
          
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          
          .pillar-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
