import React, { useState, FormEvent } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  Building, Calendar, AlertTriangle, ShieldCheck 
} from 'lucide-react';
import { BUSINESS_INFO } from '../types';
import SeoManager from './SeoManager';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill in Name, Phone Number, and your Message.');
      return;
    }

    // Process submission simulation elegantly
    setIsSuccess(true);
    setTimeout(() => {
      // clear form
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '#contact' }
  ];

  return (
    <div id="contact-view" className="animate-fade-in bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12">
      <SeoManager 
        pageTitle="Contact Our Store" 
        pageDescription="Get in touch with Dev Medical in Makhdumpur, Bihar. Give us a call at 09708172728, visit our Titaiganj shop, or send an inquiry online."
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="space-y-2">
          <nav className="flex text-xs font-semibold text-slate-400 gap-1.5 items-center font-mono uppercase">
            <span>Dev Medical</span>
            <span>/</span>
            <span className="text-[#0A8F6A]">Contact Us</span>
          </nav>
          <h1 className="font-sans font-extrabold text-4xl text-blue-900 dark:text-blue-400 tracking-tight">
            Contact Dev Medical Team
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Need stock clarification? Message us or stop by our physical chemist desk at Titaiganj. We are happy to serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-main-grid">
          
          {/* Column 1: Contact details & Hours */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-blue-900 dark:text-blue-400">
                Pharmacy Contact Details
              </h2>

              <div className="space-y-4">
                {/* Physical Location */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-850 flex gap-3.5 items-start">
                  <div className="p-2.5 bg-red-50 dark:bg-red-950/40 text-red-500 rounded-lg shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Store Location</span>
                    <h4 className="font-sans font-bold text-base text-slate-900 dark:text-white">
                      Dev Medical, Titaiganj
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {BUSINESS_INFO.address}
                    </p>
                    <a 
                      href={BUSINESS_INFO.mapDirectionUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-bold text-blue-600 hover:underline inline-block mt-1"
                    >
                      View on Google Maps Navigation →
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-850 flex gap-3.5 items-start">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 rounded-lg shrink-0">
                    <Phone className="h-5 w-5 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Phone Lines</span>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="block font-sans font-extrabold text-lg text-[#0A8F6A] hover:underline">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-slate-400 font-sans block">
                      Click to call direct from your device
                    </span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-850 flex gap-3.5 items-start">
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] rounded-lg shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Email Address</span>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="block font-sans font-bold text-sm text-slate-800 dark:text-slate-200 hover:underline">
                      {BUSINESS_INFO.email}
                    </a>
                    <span className="text-[11px] text-slate-400 font-sans block">
                      General business and supplier inquiries
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours Box */}
            <div className="p-6 bg-slate-900 text-slate-350 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-emerald-400" />
                <h3 className="font-sans font-bold text-lg text-white">Store Opening Timings</h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm font-sans">
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="font-semibold text-slate-300">Monday - Saturday:</span>
                  <span className="font-mono text-slate-400">{BUSINESS_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="font-semibold text-slate-300">Sunday Routine:</span>
                  <span className="font-mono text-emerald-400">{BUSINESS_INFO.hours.sunday}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500 font-mono italic">
                  <span>Emergency Response:</span>
                  <span>24/7 Available for Trauma</span>
                </div>
              </div>
              <div className="flex gap-2 p-3 bg-red-950/40 border border-red-900/30 rounded-xl text-[11px] text-red-300">
                <AlertTriangle className="h-4.5 w-4.5 shrink-0" />
                <span>Schedule-H drug supplies require physical doctor validation at counter.</span>
              </div>
            </div>

          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-150 dark:border-slate-800/80 shadow-md flex flex-col justify-between">
            {isSuccess ? (
              <div className="py-16 text-center space-y-4 animate-fade-in my-auto">
                <div className="inline-flex p-4 bg-emerald-50 dark:bg-emerald-950/30 text-[#0A8F6A] rounded-full">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h2 className="font-sans font-bold text-2xl text-slate-900 dark:text-white">
                  Inquiry Submitted Successfully!
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto font-sans">
                  Thank you for reaching out to Dev Medical. Our Makhdumpur counter manager will review your submission and call you on <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-5 py-2.5 bg-[#0A8F6A] hover:bg-[#087b5b] text-white text-xs font-bold rounded-xl transition-all"
                >
                  Send another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-2xl text-blue-900 dark:text-blue-400">
                    Send us a Quick Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Fill out your query details below, and our pharmacist team will reach out directly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Message / Inquiry Detail <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your requirement. Let us know if you need specific branded vaccines, blood sugar testers, baby diets, or orthopedic gears..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] transition-all"
                  />
                </div>

                {/* Compliance verification notice */}
                <div className="flex gap-2 items-center text-[11px] text-slate-400 font-sans">
                  <ShieldCheck className="h-4 w-4 text-[#0A8F6A] shrink-0" />
                  <span>Your information is protected under standard patient privacy protocols.</span>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0A8F6A] hover:bg-[#087b5b] text-white font-bold rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Inquiry Form</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Embedded Map Panel */}
        <div className="space-y-4">
          <h3 className="font-sans font-bold text-lg text-blue-900 dark:text-blue-400">
            Interactive Store Location Map
          </h3>
          <div className="h-96 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
            <iframe
              title="Dev Medical Interactive Location"
              src={BUSINESS_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
