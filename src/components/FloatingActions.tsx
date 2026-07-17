import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div id="floating-actions-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Back to Top */}
      {isVisible && (
        <button
          id="back-to-top"
          onClick={scrollToTop}
          className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-bounce"
          aria-label="Back to Top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        id="floating-call"
        href={`tel:${BUSINESS_INFO.phone}`}
        className="p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center border border-blue-400"
        aria-label="Call Store"
        title="Call Store Now"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Floating WhatsApp Support Button */}
      <a
        id="floating-whatsapp"
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Dev%20Medical%2C%20I%20want%20to%20order%20medicines%20from%20your%20store.`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-[#0A8F6A] hover:bg-[#087b5b] text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center justify-center border border-emerald-500 relative group"
        aria-label="WhatsApp Order & Support"
        title="Order via WhatsApp"
      >
        <span className="absolute right-full mr-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs font-bold py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-100 dark:border-slate-800">
          Order on WhatsApp 💬
        </span>
        <MessageSquare className="h-6 w-6" />
      </a>
    </div>
  );
}
