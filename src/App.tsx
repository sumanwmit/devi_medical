import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import LegalModal from './components/LegalModals';

// Page Views
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark';
    }
    return false;
  });

  // Legal Modal states
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Sync Dark Mode Class to HTML Element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Smooth scroll logic for Testimonials and FAQ sections located in Home View
  useEffect(() => {
    if (activeTab === 'testimonials') {
      setActiveTab('home');
      setTimeout(() => {
        const elem = document.getElementById('testimonials-section');
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else if (activeTab === 'faq') {
      setActiveTab('home');
      setTimeout(() => {
        const elem = document.getElementById('faq-section');
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [activeTab]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleOpenLegalModal = (type: 'privacy' | 'terms' | 'disclaimer') => {
    setLegalType(type);
    setIsLegalOpen(true);
  };

  const handleCloseLegalModal = () => {
    setIsLegalOpen(false);
    setLegalType(null);
  };

  // Render view based on active tab
  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesView />;
      case 'gallery':
        return <GalleryView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Dynamic Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Stage */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Footer Block */}
      <Footer
        setActiveTab={setActiveTab}
        openModal={handleOpenLegalModal}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Compliance / Legal document modals */}
      <LegalModal
        isOpen={isLegalOpen}
        type={legalType}
        onClose={handleCloseLegalModal}
      />

    </div>
  );
}
