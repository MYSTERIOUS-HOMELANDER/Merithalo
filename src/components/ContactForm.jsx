import React from 'react';
import { Phone, Mail, MessageSquare, Clock } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        
        {/* Centered Headings */}
        <div className="contact-header">
          <span className="accent-text">GET IN TOUCH</span>
          <h2>Connect Directly with an Expert Counselor</h2>
          <p>
            We are here to answer all parent and student queries regarding MBBS allotments, college verification, bonds, and registrations. Use any channel below for direct support.
          </p>
        </div>

        {/* Contact Info Cards Full Grid */}
        <div className="info-cards-grid">
          {/* Call */}
          <a href="tel:+919339789671" className="info-card">
            <div className="info-icon bg-blue">
              <Phone size={22} />
            </div>
            <div className="info-text">
              <h5>Call Support</h5>
              <p className="highlight-text">+91 9339789671</p>
              <span>Click to dial directly</span>
            </div>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/919339789671?text=Hi%20MeritHalo,%20I%20have%20NEET%20counselling%20questions." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="info-card"
          >
            <div className="info-icon bg-green">
              <MessageSquare size={22} />
            </div>
            <div className="info-text">
              <h5>WhatsApp Chat</h5>
              <p className="highlight-text">+91 9339789671</p>
              <span>Click to chat instantly</span>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:info.merithalo@gmail.com" className="info-card">
            <div className="info-icon bg-navy">
              <Mail size={22} />
            </div>
            <div className="info-text">
              <h5>Email Queries</h5>
              <p className="highlight-text">info.merithalo@gmail.com</p>
              <span>Write to our audit desk</span>
            </div>
          </a>

          {/* Hours */}
          <div className="info-card unlinked">
            <div className="info-icon bg-ice">
              <Clock size={22} />
            </div>
            <div className="info-text">
              <h5>Advising Desk Hours</h5>
              <p>9:00 AM – 9:00 PM</p>
              <span>Monday to Sunday</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-ice);
          padding: 96px 0;
          border-top: 1px solid #e2e8f0;
        }
        
        .contact-container {
          max-width: var(--max-width);
        }
        
        .contact-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 56px auto;
        }
        
        .contact-header h2 {
          font-size: 36px;
          color: var(--primary-navy);
          margin-bottom: 16px;
        }
        
        .contact-header p {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.6;
        }
        
        .info-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        
        .info-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: var(--border-radius-md);
          padding: 28px 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: var(--transition-smooth);
          box-shadow: var(--box-shadow-sm);
        }
        
        .info-card:not(.unlinked):hover {
          transform: translateY(-4px);
          box-shadow: var(--box-shadow-md);
          border-color: var(--primary-blue);
        }
        
        .info-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .bg-blue { background: rgba(26, 115, 232, 0.1); color: var(--primary-blue); }
        .bg-green { background: rgba(16, 185, 129, 0.1); color: var(--success-green); }
        .bg-navy { background: rgba(10, 37, 64, 0.1); color: var(--primary-navy); }
        .bg-ice { background: var(--bg-ice); color: var(--text-muted); }
        
        .info-text h5 {
          font-size: 14px;
          color: var(--text-dark);
          margin-bottom: 4px;
        }
        
        .info-text .highlight-text {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--primary-navy);
          font-size: 16px;
          margin-bottom: 2px;
        }
        
        .info-text span {
          font-size: 12px;
          color: var(--text-muted);
          display: block;
        }
        
        @media (max-width: 768px) {
          .contact-header h2 {
            font-size: 28px;
          }
          
          .info-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
