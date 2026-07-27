import React, { useState, useEffect } from 'react';
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";

export default function Preloader() {
  const [exit, setExit] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect dark mode preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handler = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    // Start exit transition after 1.5s
    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 1500);

    // Completely remove preloader after exit animation finishes (total 2s)
    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 2000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`preloader-overlay ${exit ? 'fade-out-exit' : ''}`}>
      <div className="preloader-content">
        
        {/* Animated Logo */}
        <div className="preloader-logo animate-pulse-logo">
          <img src={isDarkMode ? logoDark : logoDark} alt="MeritHalo Logo" className="preloader-logo-img" />
        </div>

        {/* Spinner Loader */}
        <div className="preloader-spinner"></div>
      </div>

      <style>{`
        .preloader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: transform 0.5s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.5s ease;
        }
        
        .preloader-overlay.fade-out-exit {
          opacity: 0;
          transform: translateY(-100%);
          pointer-events: none;
        }
        
        .preloader-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .preloader-logo {
          margin-bottom: 48px;
          filter: drop-shadow(0 0 15px rgba(0, 119, 204, 0.3));
        }
        
        .preloader-logo-img {
          height: 200px;
          width: auto;
          display: block;
        }
        
        .animate-pulse-logo {
          animation: logo-heartbeat 1.5s ease-in-out infinite;
        }
        
        @keyframes logo-heartbeat {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 15px rgba(0, 119, 204, 0.2)); }
          50% { transform: scale(1.04); filter: drop-shadow(0 0 25px rgba(239, 185, 29, 0.4)); }
        }
        
        /* Spinner Loader */
        .preloader-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(0, 119, 204, 0.2);
          border-top-color: #0077CC;
          border-right-color: #EFB91D;
          border-radius: 50%;
          animation: spinner-rotate 1s linear infinite;
        }
        
        @keyframes spinner-rotate {
          to {
            transform: rotate(360deg);
          }
        }
        
      `}</style>
    </div>
  );
}
