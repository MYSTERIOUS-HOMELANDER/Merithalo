import React, { useState } from 'react';
import { ArrowRight, BookOpen, Layers, CheckSquare, BadgeInfo } from 'lucide-react';

export default function Roadmap() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: '1. Result & State Rank Analysis',
      subtitle: 'Understanding your actual standing',
      icon: <Layers size={22} />,
      details: 'After NEET results, your All India Rank (AIR) is published. However, counselling depends heavily on Category Ranks and State Merit Lists (released separately by states). We help you map your AIR to state quotas (85% seats) and AIQ (15% seats) to identify which pools hold your best options.',
      tips: 'Never rely on last year\'s raw marks cutoff. The rank-inflation index changes annually. Always compare All India Ranks.'
    },
    {
      title: '2. Strategic College Shortlisting',
      subtitle: 'Analyzing parameters beyond pictures',
      icon: <BookOpen size={22} />,
      details: 'Choosing a college is not just about the tuition fees. You must evaluate NMC recognition status, patient flow/clinical exposure, infrastructure, clinical training years, hospital size, PG quota availability, state rural/service bonds (which can range from 1 to 10 years or ₹10L to ₹1Cr), and hidden hostel/development fees.',
      tips: 'Private colleges with low tuition fees often have heavy security deposits or mandatory hostel charges. Check college history.'
    },
    {
      title: '3. Choice Filling Optimization',
      subtitle: 'The make-or-break sorting phase',
      icon: <CheckSquare size={22} />,
      details: 'During MCC and State rounds, you submit a preference list of colleges. If you put a college high on the list that you cannot afford or do not want, and get allotted, you will forfeit your security deposit (up to ₹2 Lakhs in Deemed rounds) to exit. We use probability mapping to order choices so you do not lose deposits or miss out on superior colleges.',
      tips: 'Sort your options strictly in descending order of actual preference, never in order of probability. Let the algorithm find your best fit.'
    },
    {
      title: '4. Allotment, Verification & Reporting',
      subtitle: 'Securing your medical seat legally',
      icon: <BadgeInfo size={22} />,
      details: 'Once a seat is allotted, you must download the allotment letter, undergo document verification (where errors in certificates can lead to cancellation and disqualification), pay tuition fees directly to the college\'s official bank account, and complete physical reporting. MeritHalo audits your document folders before you report.',
      tips: 'Ensure your spelling on NEET forms matches your Class 10/12 certificate exactly. Keep affidavit templates ready.'
    }
  ];

  return (
    <section id="roadmap" className="roadmap-section">
      <div className="container">
        <div className="section-header">
          <span className="accent-text">Education First</span>
          <h2>The MBBS Counselling Roadmap</h2>
          <p>
            Understanding the rules of MCC (All India Quota) and State counselling is the only way to secure a seat without making costly registration errors.
          </p>
        </div>

        {/* AIQ vs State Quota Box */}
        <div className="quota-infobox">
          <div className="quota-col">
            <h4>15% All India Quota (AIQ)</h4>
            <p>Conducted by MCC (Medical Counselling Committee) for all government medical colleges in India, plus 100% seats in Deemed Universities, AFMC, AIIMS, and JIPMER. Open to students from all states.</p>
          </div>
          <div className="quota-divider">VS</div>
          <div className="quota-col">
            <h4>85% State Quota</h4>
            <p>Conducted by respective State Counselling Authorities (e.g., DME UP, CET Maharashtra). Restricted to students holding local domicile certificates. Holds the highest probability for local government seats.</p>
          </div>
        </div>

        {/* Interactive Steps */}
        <div className="roadmap-interactive">
          {/* Left panel: Steps Buttons */}
          <div className="steps-buttons">
            {steps.map((step, idx) => (
              <button
                key={idx}
                className={`step-btn ${activeStep === idx ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <span className="step-btn-icon">{step.icon}</span>
                <div className="step-btn-text">
                  <h5>{step.title}</h5>
                  <span>{step.subtitle}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right panel: Step Details */}
          <div className="step-details-card glass-panel">
            <div className="details-header">
              <span className="step-number">Phase {activeStep + 1}</span>
              <h3>{steps[activeStep].title.split('. ')[1]}</h3>
            </div>
            <p className="details-text">{steps[activeStep].details}</p>
            <div className="tips-box">
              <h5>💡 Pro Tip for Parents & Students</h5>
              <p>{steps[activeStep].tips}</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .roadmap-section {
          background-color: var(--bg-ice);
          padding: 96px 0;
        }
        
        .accent-text {
          font-family: var(--font-heading);
          color: var(--primary-blue);
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 8px;
        }
        
        .quota-infobox {
          background: white;
          border-radius: var(--border-radius-md);
          border: 1px solid rgba(26, 115, 232, 0.1);
          box-shadow: var(--box-shadow-sm);
          padding: 24px 32px;
          display: flex;
          align-items: center;
          margin-bottom: 56px;
          gap: 32px;
        }
        
        .quota-col {
          flex: 1;
        }
        
        .quota-col h4 {
          color: var(--primary-blue);
          font-size: 18px;
          margin-bottom: 8px;
        }
        
        .quota-col p {
          font-size: 14px;
          color: var(--text-body);
          line-height: 1.5;
        }
        
        .quota-divider {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-ice);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 12px;
          color: var(--text-muted);
          border: 1px solid #e2e8f0;
        }
        
        /* Interactive Steps Grid */
        .roadmap-interactive {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: start;
        }
        
        .steps-buttons {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .step-btn {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: var(--border-radius-sm);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          text-align: left;
          transition: var(--transition-smooth);
        }
        
        .step-btn:hover {
          border-color: var(--primary-blue);
          transform: translateX(5px);
        }
        
        .step-btn.active {
          border-color: var(--primary-blue);
          background-color: var(--bg-white);
          box-shadow: var(--box-shadow-md);
        }
        
        .step-btn-icon {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: var(--bg-ice);
          color: var(--primary-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }
        
        .step-btn.active .step-btn-icon {
          background: var(--primary-blue);
          color: white;
        }
        
        .step-btn-text h5 {
          font-size: 15px;
          color: var(--text-dark);
          margin-bottom: 2px;
        }
        
        .step-btn-text span {
          font-size: 12.5px;
          color: var(--text-muted);
        }
        
        /* Details Card */
        .step-details-card {
          background: white;
          border-radius: var(--border-radius-md);
          padding: 40px;
          box-shadow: var(--box-shadow-md);
          min-height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .details-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 20px;
        }
        
        .step-number {
          font-family: var(--font-heading);
          color: var(--accent-sky);
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        
        .details-header h3 {
          font-size: 24px;
          color: var(--primary-navy);
        }
        
        .details-text {
          font-size: 15px;
          color: var(--text-body);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        
        .tips-box {
          background-color: #f8fafc;
          border: 1px dashed rgba(26, 115, 232, 0.2);
          border-radius: var(--border-radius-sm);
          padding: 18px;
        }
        
        .tips-box h5 {
          font-size: 13.5px;
          color: var(--primary-blue);
          margin-bottom: 6px;
        }
        
        .tips-box p {
          font-size: 13px;
          color: var(--text-body);
          line-height: 1.5;
        }
        
        @media (max-width: 992px) {
          .quota-infobox {
            flex-direction: column;
            gap: 20px;
            padding: 24px;
          }
          
          .quota-divider {
            transform: rotate(90deg);
          }
          
          .roadmap-interactive {
            grid-template-columns: 1fr;
          }
          
          .step-details-card {
            min-height: auto;
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
