import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Sun, Moon, HeartPulse } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  darkMode,
  toggleDarkMode,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white dark:bg-slate-950 py-4 border-b border-slate-100 dark:border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div 
            id="brand-logo-container"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="p-2.5 bg-[#0A8F6A]/10 text-[#0A8F6A] rounded-xl group-hover:scale-110 transition-transform duration-200">
              <HeartPulse className="h-7 w-7" />
            </div>
            <div>
              <span className="block font-sans font-bold text-2xl tracking-tight text-blue-900 dark:text-blue-400">
                Dev <span className="text-[#0A8F6A]">Medical</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400">
                Makhdumpur, Bihar
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'text-[#0A8F6A] bg-[#0A8F6A]/5 dark:bg-[#0A8F6A]/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Actions */}
          <div id="desktop-actions" className="hidden lg:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-desktop"
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-[#0A8F6A] hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Quick Call */}
            <a
              id="call-btn-desktop"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg transition-all"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call Store</span>
            </a>

            {/* WhatsApp Order */}
            <a
              id="whatsapp-btn-desktop"
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Dev%20Medical%2C%20I%20want%20to%20order%20medicines.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0A8F6A] hover:bg-[#087b5b] rounded-lg shadow-sm shadow-emerald-200 dark:shadow-none hover:shadow transition-all"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>WhatsApp Order</span>
            </a>
          </div>

          {/* Mobile Actions Tray */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Dark Mode Toggle Mobile */}
            <button
              id="theme-toggle-mobile"
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Hamburger Button */}
            <button
              id="hamburger-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div id="mobile-drawer" className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-mobile-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-sans text-base font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'text-white bg-[#0A8F6A]'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-2">
              <a
                id="call-btn-mobile"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-sans text-sm font-bold text-blue-700 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-300 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call Store (09708172728)</span>
              </a>
              <a
                id="whatsapp-btn-mobile"
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Dev%20Medical%2C%20I%20want%20to%20order%20medicines.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-sans text-sm font-bold text-white bg-[#0A8F6A] hover:bg-[#087b5b] transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
