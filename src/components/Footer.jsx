import React from 'react';
import { Phone, Mail, ExternalLink, ShieldAlert } from 'lucide-react';
import logoLight from '../assets/logo-light.svg';

export default function Footer({ onOpenModal }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        
        {/* Company Intro Column */}
        <div className="footer-brand-col">
          <img src={logoLight} alt="MeritHalo Logo" className="footer-logo" />
          <p className="brand-desc">
            MeritHalo is an independent MBBS counselling advisory and verification cell. We help students navigate the medical admissions pathway with complete transparency and zero false promises.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <Phone size={14} className="icon-sky" />
              <a href="tel:+919339789671">+91 9339789671</a>
            </div>
            <div className="contact-item">
              <Mail size={14} className="icon-sky" />
              <a href="mailto:info.merithalo@gmail.com">info.merithalo@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Navigation Quick Links Column */}
        <div className="footer-links-col">
          <h4>Counselling Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
            </li>
            <li>
              <a href="#roadmap" onClick={(e) => handleNavClick(e, '#roadmap')}>Counselling Roadmap</a>
            </li>
            <li>
              <a href="#scams" onClick={(e) => handleNavClick(e, '#scams')}>Avoid Scams Portal</a>
            </li>
            <li>
              <a href="#faqs" onClick={(e) => handleNavClick(e, '#faqs')}>FAQ Center</a>
            </li>
          </ul>
        </div>

        {/* Official Portals Column */}
        <div className="footer-links-col">
          <h4>Official Portals</h4>
          <ul className="footer-links">
            <li>
              <a href="https://mcc.nic.in" target="_blank" rel="noopener noreferrer" className="flex-link">
                MCC AIQ Portal <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href="https://neet.nta.nic.in" target="_blank" rel="noopener noreferrer" className="flex-link">
                NTA NEET Official <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href="https://www.nmc.org.in" target="_blank" rel="noopener noreferrer" className="flex-link">
                NMC official Website <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href="https://www.cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="flex-link">
                Report Cyber Fraud <ExternalLink size={12} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Critical Legal Disclaimer Container */}
      <div className="container disclaimer-container">
        <div className="disclaimer-box">
          <div className="disclaimer-title">
            <ShieldAlert size={16} />
            <h5>IMPORTANT LEGAL DISCLAIMER</h5>
          </div>
          <p>
            MeritHalo is an independent consulting assistance platform and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with the Medical Counselling Committee (MCC), National Testing Agency (NTA), National Medical Commission (NMC), or any state government counselling authority. All official MBBS allotments happen solely based on merit ranks via official websites (mcc.nic.in and respective state portals). We do not guarantee admissions or block seats under any circumstances. Beware of scammers offering backdoor entries.
          </p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} MeritHalo. All Rights Reserved. We don't sell admissons, we guide future doctors.</p>
          <div className="bottom-links">
            <span className="clickable-span" onClick={onOpenModal}>Privacy Policy</span>
            <span className="divider">|</span>
            <span className="clickable-span" onClick={onOpenModal}>Terms of Guidance</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--bg-dark-navy);
          color: #94a3b8;
          padding: 80px 0 40px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 56px;
        }
        
        .footer-brand-col {
          display: flex;
          flex-direction: column;
        }
        
        .footer-logo {
          height: 48px;
          width: auto;
          margin-bottom: 24px;
          align-self: flex-start;
        }
        
        .brand-desc {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 24px;
          color: #cbd5e1;
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: #cbd5e1;
        }
        
        .contact-item a:hover {
          color: var(--accent-sky);
        }
        
        .icon-sky {
          color: var(--accent-sky);
        }
        
        .footer-links-col h4 {
          color: white;
          font-size: 16px;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 8px;
        }
        
        .footer-links-col h4::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 32px;
          height: 2px;
          background-color: var(--accent-sky);
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .footer-links a {
          font-size: 14px;
          color: #94a3b8;
          transition: var(--transition-smooth);
        }
        
        .footer-links a:hover {
          color: white;
          padding-left: 4px;
        }
        
        .flex-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        
        /* Disclaimer styles */
        .disclaimer-container {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 40px;
        }
        
        .disclaimer-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--border-radius-sm);
          padding: 24px;
          margin-bottom: 40px;
        }
        
        .disclaimer-title {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ef4444;
          margin-bottom: 12px;
        }
        
        .disclaimer-title h5 {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1px;
        }
        
        .disclaimer-box p {
          font-size: 12px;
          line-height: 1.6;
          color: #64748b;
          text-align: justify;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #64748b;
        }
        
        .bottom-links {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .clickable-span {
          cursor: pointer;
        }
        
        .clickable-span:hover {
          color: white;
        }
        
        .divider {
          color: rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
