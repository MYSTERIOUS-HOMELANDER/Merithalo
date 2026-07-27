import React from 'react';
import { ShieldAlert, AlertTriangle } from 'lucide-react';

export default function ScamsSection() {
  const scams = [
    {
      title: 'Fake Guarantees',
      desc: 'Agents claiming "100% guaranteed seats" in government colleges. Admission is only possible based on NEET rank via official centralized online allotments.',
    },
    {
      title: 'Fake Colleges',
      desc: 'Touting cheap seats at unrecognized, non-approved medical colleges. Always check the official National Medical Commission (NMC) portal first.',
    },
    {
      title: 'Hidden Charges',
      desc: 'Quoting low tuition fees upfront, only to demand massive, unexpected "development fees," mandatory deposits, or library charges post-admission.',
    },
    {
      title: 'Manipulated Counselling',
      desc: 'Claims of backdoor access to alter official merit lists or database servers. Official portals (MCC) are highly secure, and rank manipulation is impossible.',
    },
    {
      title: 'Unauthorized Agents',
      desc: 'Fraudsters pretending to be college directors, NMC representatives, or ministry officials with forged ID cards or fake delegation letters.',
    },
    {
      title: 'Seat Blocking Scams',
      desc: 'Middlemen blocking private seats illegally using dummy candidates, then trying to sell these seats under "management quota" for heavy fees.',
    },
    {
      title: 'Document Fraud',
      desc: 'Promising to bypass document verification by creating fake domicile, category, or mark certificates. This results in permanent blacklist and jail time.',
    }
  ];

  return (
    <section id="scams" className="scams-section">
      <div className="container">
        
        {/* Warning Header */}
        <div className="scams-header">
          <div className="warning-pill">
            <ShieldAlert size={16} />
            <span>CRITICAL ANTI-SCAM ALERT</span>
          </div>
          <h2>Avoid MBBS Admission Scams</h2>
          <p>
            The Medical Counselling Committee (MCC) and state councils do NOT authorize agents, consultants, or mediators to allot seats. Do not pay any "booking amount" to private accounts.
          </p>
        </div>

        {/* Scams Grid */}
        <div className="scams-grid">
          {scams.map((scam, idx) => (
            <div key={idx} className="scam-card">
              <div className="scam-card-header">
                <AlertTriangle size={18} className="icon-red" />
                <h4>{scam.title}</h4>
              </div>
              <p>{scam.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scams-section {
          background-color: var(--bg-dark-navy);
          color: var(--text-light);
          padding: 96px 0;
          position: relative;
        }
        
        .scams-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 90% 80%, rgba(217, 48, 37, 0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        
        .scams-header {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 64px auto;
        }
        
        .warning-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(217, 48, 37, 0.15);
          border: 1px solid rgba(217, 48, 37, 0.3);
          color: #f87171;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
        }
        
        .scams-header h2 {
          color: white;
          font-size: 38px;
          margin-bottom: 16px;
        }
        
        .scams-header p {
          color: #94a3b8;
          font-size: 16px;
          line-height: 1.6;
        }
        
        .scams-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        
        .scam-card {
          background: var(--bg-dark-card);
          border: 1px solid rgba(217, 48, 37, 0.15);
          border-radius: var(--border-radius-sm);
          padding: 24px;
          transition: var(--transition-smooth);
        }
        
        .scam-card:hover {
          transform: translateY(-4px);
          border-color: rgba(217, 48, 37, 0.4);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .scam-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        
        .icon-red {
          color: #ef4444;
        }
        
        .scam-card-header h4 {
          color: white;
          font-size: 16px;
          font-weight: 700;
        }
        
        .scam-card p {
          color: #94a3b8;
          font-size: 13.5px;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .scams-header h2 {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
}
