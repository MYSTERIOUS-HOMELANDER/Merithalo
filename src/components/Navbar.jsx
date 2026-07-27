import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";

export default function Navbar({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Detect dark mode preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handler = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Counselling Guide', href: '#roadmap' },
    { label: 'Avoid Scams', href: '#scams' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
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
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container" height="80px" width="100%">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav-logo" >
            <img src={isDarkMode ? logoLight : logoDark} alt="MeritHalo Logo"  />
          </a>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Nav Actions */}
          <div className="nav-actions">
            <a href="tel:+919339789671" className="btn-phone-circle" title="Call Us Directly">
              <PhoneCall size={20} />
            </a>
            {/* <button className="btn btn-primary" onClick={onOpenModal}>
              Book Free Session
            </button> */}
            <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Sidebar */}
      <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-header">
          <img src={isDarkMode ? logoLight : logoDark} alt="MeritHalo Logo" className="mobile-logo" />
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="mobile-nav-link"
            >
              {item.label}
            </a>
          ))}
          <div className="mobile-nav-cta">
            {/* <button className="btn btn-primary btn-full" onClick={() => { setIsOpen(false); onOpenModal(); }}>
              Book Free Sessions
            </button> */}
            <a href="tel:+919339789671" className="btn btn-secondary btn-full flex-center" style={{ marginTop: '12px' }}>
              <PhoneCall size={18} style={{ marginRight: '8px' }} /> Call Support
            </a>
          </div>
        </div>
      </div>
      <div className={`mobile-sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={() => setIsOpen(false)}></div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(26, 115, 232, 0.08);
          z-index: 1000;
          transition: var(--transition-smooth);
        }
        
        .navbar.scrolled {
          height: 70px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: var(--box-shadow-sm);
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }
        
        .nav-logo {
          display: flex;
          align-items: center;
          height: 100%;
        }
        
        .nav-logo img {
          height: 120px;
          width: auto;
          display: block;
        }
        
        .nav-links {
          display: flex;
          gap: 32px;
        }
        
        .nav-link {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 15px;
          color: var(--text-dark);
          position: relative;
          padding: 8px 0;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-blue);
          transition: var(--transition-smooth);
        }
        
        .nav-link:hover {
          color: var(--primary-blue);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .btn {
          font-family: var(--font-heading);
          font-weight: 600;
          padding: 10px 20px;
          border-radius: var(--border-radius-sm);
          border: none;
          cursor: pointer;
          font-size: 14px;
          transition: var(--transition-smooth);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        .btn-full {
          width: 100%;
        }
        
        .flex-center {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        .btn-primary {
          background-color: var(--primary-blue);
          color: var(--text-light);
          box-shadow: 0 4px 10px rgba(26, 115, 232, 0.25);
        }
        
        .btn-primary:hover {
          background-color: #1557b0;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(26, 115, 232, 0.35);
        }
        
        .btn-secondary {
          background-color: var(--bg-ice);
          color: var(--primary-blue);
          border: 1px solid rgba(26, 115, 232, 0.2);
        }
        
        .btn-secondary:hover {
          background-color: var(--accent-light-sky);
          transform: translateY(-2px);
        }
        
        .btn-phone-circle {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--bg-ice);
          color: var(--primary-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(26, 115, 232, 0.1);
        }
        
        .btn-phone-circle:hover {
          background: var(--primary-blue);
          color: white;
          transform: scale(1.05);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--primary-navy);
          cursor: pointer;
        }
        
        /* Mobile Sidebar Drawer */
        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: -320px;
          width: 300px;
          height: 100%;
          background: white;
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
          z-index: 1002;
          padding: 24px;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .mobile-sidebar.open {
          transform: translateX(-320px);
        }
        
        .mobile-sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        
        .mobile-logo {
          height: 48px;
          width: auto;
        }
        
        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }
        
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 600;
          color: var(--text-dark);
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .mobile-nav-link:hover {
          color: var(--primary-blue);
          padding-left: 8px;
        }
        
        .mobile-nav-cta {
          margin-top: 40px;
        }
        
        .mobile-sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 37, 64, 0.4);
          backdrop-filter: blur(4px);
          z-index: 1001;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        
        .mobile-sidebar-overlay.show {
          opacity: 1;
          pointer-events: auto;
        }
        
        @media (max-width: 992px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
