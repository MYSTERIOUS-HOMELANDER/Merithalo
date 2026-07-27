import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      q: 'Is there any backdoor entry or direct admission that does not require NEET?',
      a: 'Absolutely not. According to National Medical Commission (NMC) directives, NEET UG qualification is mandatory for admission to any MBBS program in India—including all Government, Private, and Deemed Universities. Any consultant claiming they can bypass NEET scores is attempting to scam you.'
    },
    {
      q: 'Why do security deposits get forfeited, and how can I avoid it?',
      a: 'During AIQ or State counselling, if you get allotted a seat in Round 2, Mop-up, or Stray rounds and choose not to report, your security deposit (₹10,000 for Gov, ₹2,00,000 for Deemed) is forfeited. We structure your choice-filling sheets strategically so you only list colleges you are 100% willing to join, preventing deposit losses.'
    },
    {
      q: 'How should I handle consultants calling me with my NEET score?',
      a: 'Be extremely cautious. Official counselling boards (like MCC) NEVER call, text, or WhatsApp candidates offering seats. These agents purchase leaked test registration lists. If a caller pressures you for immediate payments, hang up and paste the claim in our "Verify a Claim" box on this site.'
    },
    {
      q: 'What is the main difference between AIQ (MCC) and State counselling?',
      a: 'AIQ (MCC) governs 15% of government medical college seats across India, plus 100% of Deemed Universities, AIIMS, and JIPMER, and is open to all qualified candidates. State Quotas govern 85% of local government college seats plus state private colleges, and are restricted to candidates with local domicile. State quotas generally have more relaxed rank cutoffs.'
    },
    {
      q: 'What parameters should I compare before locked college preferences?',
      a: 'You must check: (1) NMC Recognition Status (some colleges have suspended intake), (2) Clinical Patient Flow (necessary for practical surgery training), (3) Rural/Service Bond Penalties (some states have 2-5 year mandatory service or heavy fines), and (4) Tuition vs Miscellaneous hostel fees.'
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faqs" className="faqs-section">
      <div className="container">
        
        {/* Header */}
        <div className="faqs-header">
          <HelpCircle size={28} className="icon-blue" />
          <h2>MBBS Counselling FAQs</h2>
          <p>Clear, direct answers to the most common counselling questions parents and students ask us.</p>
        </div>

        {/* Accordion Container */}
        <div className="faqs-accordion">
          {faqItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${openIndex === idx ? 'open' : ''}`}
              onClick={() => toggleFAQ(idx)}
            >
              <div className="faq-question">
                <h4>{item.q}</h4>
                <button className="faq-toggle-btn">
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </button>
              </div>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .faqs-section {
          background-color: var(--bg-white);
          padding: 96px 0;
          border-top: 1px solid #f1f5f9;
        }
        
        .faqs-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 56px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        .faqs-header h2 {
          font-size: 36px;
          color: var(--primary-navy);
        }
        
        .faqs-header p {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.6;
        }
        
        /* Accordion structure */
        .faqs-accordion {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .faq-item {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .faq-item:hover {
          border-color: var(--primary-blue);
          box-shadow: var(--box-shadow-sm);
        }
        
        .faq-item.open {
          border-color: var(--primary-blue);
          box-shadow: var(--box-shadow-md);
        }
        
        .faq-question {
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        
        .faq-question h4 {
          font-size: 16px;
          color: var(--primary-navy);
          font-weight: 700;
          line-height: 1.4;
        }
        
        .faq-toggle-btn {
          background: none;
          border: none;
          color: var(--primary-blue);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          background-color: var(--bg-ice);
        }
        
        .faq-item.open .faq-answer {
          max-height: 200px; /* arbitrary height to slide down */
        }
        
        .faq-answer p {
          padding: 24px;
          font-size: 14.5px;
          color: var(--text-body);
          line-height: 1.6;
          border-top: 1px solid #edf2f7;
        }
        
        @media (max-width: 768px) {
          .faqs-header h2 {
            font-size: 28px;
          }
          
          .faq-question {
            padding: 18px;
          }
          
          .faq-question h4 {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
