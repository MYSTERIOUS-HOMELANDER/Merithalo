import React from 'react';
import { ShieldAlert, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  const trustBadges = [
    { text: 'Ethical Guidance', icon: <CheckCircle2 size={16} />, color: '#10b981' },
    { text: 'Transparent Process', icon: <CheckCircle2 size={16} />, color: '#10b981' },
    { text: 'Student First', icon: <CheckCircle2 size={16} />, color: '#10b981' },
    { text: 'No False Promises', icon: <CheckCircle2 size={16} />, color: '#10b981' },
    { text: 'BEWARE OF SCAMS', icon: <ShieldAlert size={16} />, color: '#d93025' },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Centered Hero Content */}
        <div className="hero-content">
          <div className="hero-badge animate-float">
            <Sparkles size={14} className="accent-icon" />
            <span>NMC Compliant & Ethical MBBS Admissions 2026</span>
          </div>
          
          <h1 className="hero-title">
            Guiding Future Doctors Through Every Step of <span className="highlight">MBBS Counselling</span>
          </h1>
          
          <p className="hero-subtitle">
            From NEET Results to Final Admission, MeritHalo helps students understand counselling, compare colleges, avoid costly mistakes, stay protected from admission scams, and confidently choose the right medical college.
          </p>

          <div className="hero-ctas">
            {/* <button className="btn btn-primary btn-large animate-pulse-glow" onClick={onOpenModal}>
              Book Free Guidance Session <ChevronRight size={18} style={{ marginLeft: '6px' }} />
            </button> */}
            {/* <a href="#scams" className="btn btn-secondary btn-large" >
              Scam Warning Center <ChevronRight size={18} style={{ marginLeft: '6px' }} />
            </a> */}
          </div>

          {/* Trust Badges */}
          <div className="trust-badges-wrapper">
            <p className="trust-title">Our Guiding Pillars</p>
            <div className="trust-badges-container">
              {trustBadges.map((badge, idx) => (
                <div 
                  key={idx} 
                  className="trust-badge" 
                  style={{ borderColor: badge.color + '30' }}
                >
                  <span style={{ color: badge.color }} className="badge-icon">
                    {badge.icon}
                  </span>
                  <span className={`badge-text ${badge.text === 'BEWARE OF SCAMS' ? 'red-text animate-shake' : ''}`}>
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .hero-section {
          background: radial-gradient(circle at 50% 20%, rgba(240, 244, 249, 0.8) 0%, rgba(255, 255, 255, 1) 80%);
          padding: 160px 0 96px 0;
          overflow: hidden;
          text-align: center;
        }
        
        .hero-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(26, 115, 232, 0.08);
          border: 1px solid rgba(26, 115, 232, 0.15);
          color: var(--primary-blue);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font-heading);
          margin-bottom: 32px;
        }
        
        .accent-icon {
          color: var(--accent-sky);
        }
        
        .hero-title {
          font-size: 54px;
          font-weight: 800;
          color: var(--primary-navy);
          line-height: 1.15;
          margin-bottom: 24px;
          letter-spacing: -0.5px;
          max-width: 800px;
        }
        
        .hero-title .highlight {
          color: var(--primary-blue);
          position: relative;
          display: inline-block;
        }
        
        .hero-title .highlight::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 100%;
          height: 6px;
          background: rgba(0, 180, 216, 0.2);
          z-index: -1;
          border-radius: 4px;
        }
        
        .hero-subtitle {
          font-size: 18px;
          color: var(--text-body);
          line-height: 1.65;
          margin-bottom: 40px;
          max-width: 760px;
        }
        
        .hero-ctas {
          display: flex;
          gap: 16px;
          margin-bottom: 56px;
          justify-content: center;
        }
        
        .btn-large {
          padding: 14px 32px;
          font-size: 16px;
        }
        
        /* Trust Badges */
        .trust-badges-wrapper {
          border-top: 1px solid #e2e8f0;
          padding-top: 32px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .trust-title {
          font-family: var(--font-heading);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-muted);
          font-weight: 700;
          margin-bottom: 16px;
        }
        
        .trust-badges-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          max-width: 800px;
        }
        
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 8px 16px;
          box-shadow: var(--box-shadow-sm);
          transition: var(--transition-smooth);
        }
        
        .trust-badge:hover {
          transform: translateY(-2px);
          box-shadow: var(--box-shadow-md);
        }
        
        .badge-icon {
          display: flex;
          align-items: center;
        }
        
        .badge-text {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-dark);
        }
        
        .red-text {
          color: var(--scam-red);
          font-weight: 700;
          letter-spacing: 0.2px;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 130px 0 64px 0;
          }
          
          .hero-title {
            font-size: 38px;
          }
          
          .hero-subtitle {
            font-size: 16px;
          }
          
          .hero-ctas {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            gap: 12px;
          }
          
          .btn-large {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
