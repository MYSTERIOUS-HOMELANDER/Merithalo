import React from 'react';
import { Check, Star, ShieldCheck } from 'lucide-react';

export default function PremiumSection({ onOpenModal }) {
  const premiumFeatures = [
    { title: '1-on-1 Dedicated Expert Advisor', desc: 'Direct mobile access to a senior counselling advisor. No customer support queues. Direct parent helpline.' },
    { title: 'Optimized Choice-Filling Sheet', desc: 'Custom choice sheet mapped to your score, category, and budget to maximize allotment odds and prevent seat security deposit forfeits.' },
    { title: 'Real-Time NMC & State Alerts', desc: 'Immediate notification via SMS/WhatsApp about application dates, document upload windows, fee payments, and bond details.' },
    { title: 'Seat Risk Assessment Index', desc: 'Category-wise rank analysis explaining your actual chances in Round 1, Round 2, and subsequent mop-up rounds.' },
    { title: 'Folder Audit & Verification Prep', desc: 'Pre-allotment verification of your certificates (Domicile, Category, EWS, Affidavits) to ensure zero document rejection at reporting.' },
    { title: 'Support Until Stray Vacancy Round', desc: 'We stay with you through government, private, and stray vacancy spot rounds until your physical admission is complete.' }
  ];

  return (
    <section id="premium" className="premium-section">
      <div className="container">
        
        {/* Premium Plan Details Box */}
        <div className="premium-container glass-panel-dark">
          <div className="popular-ribbon">
            <Star size={12} style={{ marginRight: '4px' }} /> PREFERRED CHOICE
          </div>
          
          <div className="plan-intro">
            <h3>Elite Premium Admission Plan</h3>
            <p>End-to-End Expert Choice Sorting, Verification & Support</p>
          </div>
          
          <div className="plan-features-grid">
            {premiumFeatures.map((feat, idx) => (
              <div key={idx} className="plan-feature-premium">
                <div className="bullet-circle-gold">
                  <Check size={14} />
                </div>
                <div>
                  <h5>{feat.title}</h5>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="premium-footer-actions">
            <div className="premium-guarantee-box">
              <ShieldCheck size={20} className="text-gold" />
              <span>Refund Protection: Security deposit protection guarantee.</span>
            </div>
            
            <button className="btn btn-premium-action" onClick={onOpenModal}>
              Apply for Premium Guidance
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .premium-section {
          background-color: var(--bg-white);
          padding: 80px 0;
          border-top: 1px solid #f1f5f9;
          position: relative;
        }
        
        /* Premium Showcase Box */
        .premium-container {
          background-color: var(--bg-dark-navy);
          color: white;
          border-radius: var(--border-radius-md);
          padding: 48px;
          border: 2px solid var(--premium-gold);
          box-shadow: 0 20px 40px rgba(8, 29, 51, 0.15), 0 0 25px rgba(234, 179, 8, 0.1);
          position: relative;
          max-width: 950px;
          margin: 0 auto;
        }
        
        .popular-ribbon {
          position: absolute;
          top: 24px;
          right: 24px;
          background-color: var(--premium-gold);
          color: #0c1a30;
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.5px;
          padding: 4px 10px;
          border-radius: 4px;
          display: flex;
          align-items: center;
        }
        
        .plan-intro {
          margin-bottom: 36px;
        }
        
        .plan-intro h3 {
          font-size: 26px;
          color: white;
          margin-bottom: 6px;
        }
        
        .plan-intro p {
          font-size: 15px;
          color: #94a3b8;
        }
        
        .plan-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
          margin-bottom: 40px;
        }
        
        .plan-feature-premium {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        
        .bullet-circle-gold {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(234, 179, 8, 0.2);
          color: var(--premium-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .plan-feature-premium h5 {
          color: white;
          font-size: 15.5px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        
        .plan-feature-premium p {
          color: #cbd5e1;
          font-size: 13.5px;
          line-height: 1.5;
        }
        
        .premium-footer-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 32px;
        }
        
        .premium-guarantee-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px dashed rgba(234, 179, 8, 0.3);
          padding: 14px 20px;
          border-radius: var(--border-radius-sm);
          font-size: 13px;
          color: #cbd5e1;
        }
        
        .text-gold {
          color: var(--premium-gold);
        }
        
        .btn-premium-action {
          background-color: var(--premium-gold);
          color: #0c1a30;
          font-weight: 700;
          padding: 14px 28px;
          font-size: 15px;
          border-radius: var(--border-radius-sm);
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(234, 179, 8, 0.3);
          transition: var(--transition-smooth);
          white-space: nowrap;
        }
        
        .btn-premium-action:hover {
          background-color: #facc15;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(234, 179, 8, 0.4);
        }
        
        @media (max-width: 768px) {
          .premium-container {
            padding: 32px 24px;
          }
          
          .premium-footer-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 20px;
          }
          
          .btn-premium-action {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
