import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Roadmap from './components/Roadmap';
import ScamsSection from './components/ScamsSection';
import FAQs from './components/FAQs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import StickyWidgets from './components/StickyWidgets';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      {/* Page Loader Overlay */}
      <Preloader />

      {/* Header Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Sections */}
      <main style={{ marginTop: '80px' }}>
        <Hero onOpenModal={handleOpenModal} />
        <Roadmap />
        <TrustBadges />
        <ScamsSection />
        <FAQs />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Floating Call & WhatsApp Controls */}
      <StickyWidgets />

      {/* Callback/Booking Popup Form Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
