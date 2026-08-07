import { HeartPulse, Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openModal: (modalType: 'privacy' | 'terms' | 'disclaimer') => void;
}

export default function Footer({ setActiveTab, openModal }: FooterProps) {
  const handleFooterLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    { id: 'srv-1', name: 'Prescription Medicines' },
    { id: 'srv-2', name: 'OTC Medicines' },
    { id: 'srv-3', name: 'Health Supplements' },
    { id: 'srv-4', name: 'Baby Care Products' },
    { id: 'srv-6', name: 'Medical Devices' },
    { id: 'srv-7', name: 'Surgical Items' },
  ];

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#0A8F6A]/20 text-[#0A8F6A] rounded-lg">
                <HeartPulse className="h-6 w-6" />
              </div>
              <span className="font-sans font-bold text-xl tracking-tight text-white">
                Dev <span className="text-[#0A8F6A]">Medical</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              {BUSINESS_INFO.tagline}
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-xs">
              <span className="flex items-center gap-2 text-slate-400">
                <ShieldCheck className="h-4 w-4 text-[#0A8F6A]" />
                100% Genuine Certified Stock
              </span>
              <span className="text-slate-400 font-mono">
                Store ID: 3XFF+JM2, Makhdumpur
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-sm font-semibold text-white tracking-wider uppercase mb-5 pb-2 border-b border-[#0A8F6A]/20 w-1/3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Our Services' },
                { id: 'gallery', label: 'Store Gallery' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'faq', label: 'Pharmacy FAQ' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleFooterLinkClick(link.id)}
                    className="flex items-center gap-1.5 hover:text-[#0A8F6A] transition-colors duration-150 text-slate-400 text-left"
                  >
                    <ArrowRight className="h-3 w-3 text-[#0A8F6A]" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-sans text-sm font-semibold text-white tracking-wider uppercase mb-5 pb-2 border-b border-[#0A8F6A]/20 w-1/3">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesList.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleFooterLinkClick('services')}
                    className="flex items-center gap-1.5 hover:text-[#0A8F6A] transition-colors duration-150 text-slate-400 text-left"
                  >
                    <ArrowRight className="h-3 w-3 text-slate-500" />
                    {srv.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours & Address */}
          <div className="space-y-5">
            <div>
              <h3 className="font-sans text-sm font-semibold text-white tracking-wider uppercase mb-4 pb-2 border-b border-[#0A8F6A]/20 w-1/3">
                Store Hours
              </h3>
              <ul className="space-y-2 text-sm text-slate-400 font-sans">
                <li className="flex items-start gap-2">
                  <Clock className="h-4.5 w-4.5 text-[#0A8F6A] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-slate-300">Mon - Sat:</span>
                    <span className="block text-xs text-slate-400">{BUSINESS_INFO.hours.weekdays}</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4.5 w-4.5 text-[#0A8F6A] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-slate-300">Sunday:</span>
                    <span className="block text-xs text-[#0A8F6A]">{BUSINESS_INFO.hours.sunday}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Location Details
              </h3>
              <p className="text-xs text-slate-400 flex items-start gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Contact and Map Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10 border-b border-slate-800 items-center">
          
          {/* Quick Contact buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-900/30 text-blue-300 hover:bg-blue-900/50 border border-blue-800 transition-colors text-sm font-semibold"
            >
              <Phone className="h-4.5 w-4.5" />
              <span>Call Store: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Dev%20Medical%2C%20I%20have%20an%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A8F6A]/20 text-emerald-300 hover:bg-[#0A8F6A]/40 border border-emerald-800 transition-colors text-sm font-semibold"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              <span>WhatsApp Support</span>
            </a>
          </div>

          {/* Email / Support info */}
          <div className="text-center lg:text-left flex items-center justify-center lg:justify-start gap-2.5 text-sm text-slate-400">
            <Mail className="h-5 w-5 text-[#0A8F6A]" />
            <div>
              <span className="block text-xs text-slate-500">Email Address</span>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-300 hover:text-white underline">
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>

          {/* Directions link */}
          <div className="text-center lg:text-right">
            <a
              href={BUSINESS_INFO.mapDirectionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors border border-slate-700"
            >
              <MapPin className="h-3.5 w-3.5 text-red-400" />
              <span>Get Google Maps Directions</span>
            </a>
          </div>

        </div>

        {/* Legal documents & Disclaimer */}
        <div className="pt-8 text-xs text-slate-500 space-y-4">
          <div className="flex flex-wrap justify-center lg:justify-between gap-4">
            <p className="text-center lg:text-left"><a href="#" class="wmit-popup-trigger">Developed by WMIT</a>

              &copy; {new Date().getFullYear()} <strong>Dev Medical</strong>. All rights reserved. Registered Chemist & Druggist, Makhdumpur, Bihar. Developed by <a href="https://main.webmakerit.com" <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">WMIT</a>.
            </p>
            <div className="flex items-center space-x-4">
              <button onClick={() => openModal('privacy')} className="hover:text-white transition-colors underline">
                Privacy Policy
              </button>
              <span>•</span>
              <button onClick={() => openModal('terms')} className="hover:text-white transition-colors underline">
                Terms & Conditions
              </button>
              <span>•</span>
              <button onClick={() => openModal('disclaimer')} className="hover:text-white transition-colors underline">
                Disclaimer
              </button>
            </div>
          </div>

          <p className="leading-relaxed text-center lg:text-left font-sans italic text-slate-600 dark:text-slate-500 max-w-4xl mx-auto lg:mx-0">
            <strong>Medical Disclaimer:</strong> The information provided on this website, including but not limited to medicine descriptions, dosage suggestions, and healthcare FAQs, is for informational and educational purposes only. It should not be considered medical advice or substituted for professional clinical counsel, diagnosis, or treatment. Please always consult a registered healthcare medical officer or practitioner before taking any drugs or following any treatment regimens. Dev Medical is an independent retail store.
          </p>
        </div>

      </div>
    </footer>
  );
}
