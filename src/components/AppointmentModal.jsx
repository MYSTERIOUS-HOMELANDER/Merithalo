import React, { useState } from 'react';
import { X, Send, CheckCircle2, User, Phone, Mail, Award, MapPin } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    score: '',
    state: 'Uttar Pradesh',
    timeSlot: 'Morning (10 AM - 1 PM)'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out all required fields.');
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        score: '',
        state: 'Uttar Pradesh',
        timeSlot: 'Morning (10 AM - 1 PM)'
      });
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container glass-panel fade-in-animation">
        <button className="modal-close" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon-wrapper animate-pulse-glow">
              <CheckCircle2 size={40} />
            </div>
            <h3>Guidance Session Booked!</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>. Your appointment has been scheduled.
            </p>
            <p className="success-sub">
              An MBBS admissions advisor will call you at <strong>{formData.phone}</strong> during your preferred slot: <strong>{formData.timeSlot}</strong>.
            </p>
          </div>
        ) : (
          <div className="modal-body">
            <div className="modal-header">
              <h3>Book a Free Guidance Session</h3>
              <p>1-on-1 personalized counselling assessment call with our senior advisor.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              {/* Name */}
              <div className="modal-group">
                <label htmlFor="name"><User size={14} /> Full Name *</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Student or Parent Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Phone */}
              <div className="modal-group">
                <label htmlFor="phone"><Phone size={14} /> Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="e.g. +91 93397 89671"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="modal-group">
                <label htmlFor="email"><Mail size={14} /> Email Address (Optional)</label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. info@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Score and State */}
              <div className="modal-row">
                <div className="modal-group col-6">
                  <label htmlFor="score"><Award size={14} /> NEET Score</label>
                  <input
                    type="number"
                    id="score"
                    placeholder="e.g. 580"
                    min="0"
                    max="720"
                    value={formData.score}
                    onChange={handleChange}
                  />
                </div>

                <div className="modal-group col-6">
                  <label htmlFor="state"><MapPin size={14} /> State Domicile</label>
                  <select id="state" value={formData.state} onChange={handleChange}>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Other">Other State</option>
                  </select>
                </div>
              </div>

              {/* Slot */}
              <div className="modal-group">
                <label htmlFor="timeSlot">Preferred Callback Slot</label>
                <select id="timeSlot" value={formData.timeSlot} onChange={handleChange}>
                  <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                  <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                  <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-full flex-center">
                <Send size={16} style={{ marginRight: '8px' }} /> Schedule Callback
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 37, 64, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }
        
        .modal-container {
          background: white;
          border-radius: var(--border-radius-md);
          width: 100%;
          max-width: 480px;
          box-shadow: var(--box-shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.4);
          position: relative;
          overflow: hidden;
        }
        
        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--bg-ice);
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .modal-close:hover {
          background: #e2e8f0;
          color: var(--text-dark);
        }
        
        .modal-body {
          padding: 40px;
        }
        
        .modal-header {
          margin-bottom: 24px;
        }
        
        .modal-header h3 {
          font-size: 22px;
          color: var(--primary-navy);
          margin-bottom: 6px;
        }
        
        .modal-header p {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.4;
        }
        
        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .modal-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .modal-group label {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .modal-group label svg {
          color: var(--primary-blue);
        }
        
        .modal-group input, 
        .modal-group select {
          padding: 12px;
          border: 1.5px solid #e2e8f0;
          border-radius: var(--border-radius-sm);
          font-size: 14px;
          background-color: #f8fafc;
          color: var(--text-dark);
          transition: var(--transition-smooth);
        }
        
        .modal-group input:focus, 
        .modal-group select:focus {
          border-color: var(--primary-blue);
          background-color: white;
          box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.15);
          outline: none;
        }
        
        .modal-row {
          display: flex;
          gap: 16px;
        }
        
        /* Success screen styling */
        .modal-success {
          padding: 48px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }
        
        .success-icon-wrapper {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.1);
          color: var(--success-green);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--success-green);
        }
        
        .modal-success h3 {
          font-size: 22px;
          color: var(--primary-navy);
        }
        
        .modal-success p {
          font-size: 14.5px;
          color: var(--text-body);
          line-height: 1.5;
        }
        
        .modal-success .success-sub {
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 6px;
        }
        
        @media (max-width: 576px) {
          .modal-body {
            padding: 24px;
          }
          
          .modal-row {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
}
