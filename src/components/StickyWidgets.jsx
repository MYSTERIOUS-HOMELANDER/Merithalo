import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function StickyWidgets() {
  return (
    <>
      {/* Sticky Bottom Actions Container */}
      <div className="sticky-buttons-container">
        {/* Call Button */}
        <a 
          href="tel:+919339789671" 
          className="sticky-action-btn btn-call animate-pulse-phone"
          title="Call Admission Counselor Now"
          aria-label="Call MeritHalo Support"
        >
          <Phone size={24} />
          <span className="sticky-label">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919339789671?text=Hi%20MeritHalo,%20I%20need%20assistance%20regarding%20my%20MBBS%20counselling." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="sticky-action-btn btn-whatsapp animate-pulse-whatsapp"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp with MeritHalo"
        >
          <MessageCircle size={26} />
          <span className="sticky-label">WhatsApp</span>
        </a>
      </div>

      <style>{`
        .sticky-buttons-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 1500;
        }
        
        .sticky-action-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          cursor: pointer;
        }
        
        .sticky-action-btn:hover {
          transform: scale(1.1);
        }
        
        .btn-call {
          background-color: var(--primary-blue);
          animation: pulse-phone 2s infinite;
        }
        
        .btn-whatsapp {
          background-color: #10b981;
          animation: pulse-whatsapp 2s infinite;
        }
        
        .sticky-label {
          position: absolute;
          right: 70px;
          background-color: #0c1a30;
          color: white;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 700;
          font-family: var(--font-heading);
          opacity: 0;
          pointer-events: none;
          transform: translateX(10px);
          transition: all 0.3s ease;
          white-space: nowrap;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        
        .sticky-action-btn:hover .sticky-label {
          opacity: 1;
          transform: translateX(0);
        }
        
        @media (max-width: 576px) {
          .sticky-buttons-container {
            bottom: 20px;
            right: 20px;
            gap: 12px;
          }
          
          .sticky-action-btn {
            width: 48px;
            height: 48px;
          }
          
          .sticky-label {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
