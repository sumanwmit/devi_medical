import { useState } from 'react';
import { 
  FileText, Pill, Activity, Baby, Sparkles, HeartPulse, 
  Scissors, Heart, Shield, TrendingUp, ChevronDown, ChevronUp, MessageSquare, Phone 
} from 'lucide-react';
import { SERVICE_DETAILS, BUSINESS_INFO } from '../types';
import SeoManager from './SeoManager';

export default function ServicesView() {
  const [expandedSrvId, setExpandedSrvId] = useState<string | null>(null);

  const toggleSrv = (id: string) => {
    setExpandedSrvId(expandedSrvId === id ? null : id);
  };

  // Icon switcher matching iconName string to actual Lucide component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="h-6 w-6" />;
      case 'Pills': return <Pill className="h-6 w-6" />;
      case 'Activity': return <Activity className="h-6 w-6" />;
      case 'Baby': return <Baby className="h-6 w-6" />;
      case 'Sparkles': return <Sparkles className="h-6 w-6" />;
      case 'HeartPulse': return <HeartPulse className="h-6 w-6" />;
      case 'Scissors': return <Scissors className="h-6 w-6" />;
      case 'Heart': return <Heart className="h-6 w-6" />;
      case 'Shield': return <Shield className="h-6 w-6" />;
      case 'TrendingUp': return <TrendingUp className="h-6 w-6" />;
      default: return <Pill className="h-6 w-6" />;
    }
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '#services' }
  ];

  return (
    <div id="services-view" className="animate-fade-in bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12">
      <SeoManager 
        pageTitle="Our Pharmacy Services" 
        pageDescription="Explore the complete medical and diagnostic retail services provided at Dev Medical in Makhdumpur, including generic drugs, baby formulas, diabetic devices, and surgical gears."
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="space-y-2">
          <nav className="flex text-xs font-semibold text-slate-400 gap-1.5 items-center font-mono uppercase">
            <span>Dev Medical</span>
            <span>/</span>
            <span className="text-[#0A8F6A]">Services</span>
          </nav>
          <h1 className="font-sans font-extrabold text-4xl text-blue-900 dark:text-blue-400 tracking-tight">
            Our Dedicated Pharmacy Services
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            From critical prescribed therapeutics to household baby care hygiene, explore the distinct departments managed at our Titaiganj counter.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="services-grid-list">
          {SERVICE_DETAILS.map((srv) => {
            const isExpanded = expandedSrvId === srv.id;
            return (
              <div 
                key={srv.id}
                id={`service-card-${srv.id}`}
                className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isExpanded 
                    ? 'border-[#0A8F6A] shadow-lg ring-1 ring-[#0A8F6A]/20' 
                    : 'border-slate-150 dark:border-slate-800/80 hover:border-blue-500 hover:shadow-md'
                }`}
              >
                {/* Card Top / Visual header */}
                <div className="h-44 overflow-hidden relative bg-slate-150">
                  <img src={srv.image} alt={srv.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute top-4 left-4 p-3 bg-white dark:bg-slate-950 text-[#0A8F6A] rounded-xl shadow-md border border-slate-100 dark:border-slate-800">
                    {getIconComponent(srv.iconName)}
                  </div>
                </div>

                {/* Content block */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h2 className="font-sans font-bold text-xl text-slate-900 dark:text-white">
                      {srv.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  {/* Collapsible expansion drawer */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-fade-in text-xs sm:text-sm">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {srv.longDescription}
                      </p>
                      
                      <div className="space-y-2">
                        <span className="block font-bold text-slate-800 dark:text-slate-200">Key Features:</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {srv.features.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                              <span className="h-1.5 w-1.5 bg-[#0A8F6A] rounded-full shrink-0"></span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Button bar */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-2 items-stretch sm:items-center justify-between">
                    <button
                      onClick={() => toggleSrv(srv.id)}
                      className="px-4 py-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-755 text-slate-700 dark:text-slate-350 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-slate-150 dark:border-slate-750"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'Expand Details'}</span>
                      {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    </button>

                    <button
                      onClick={() => {
                        // Prefill the WhatsApp order form medicine required textarea
                        const formElem = document.getElementById('medicines-list');
                        if (formElem) {
                          const currentVal = (formElem as HTMLTextAreaElement).value;
                          const addition = `Inquiry regarding ${srv.title} service`;
                          (formElem as HTMLTextAreaElement).value = currentVal 
                            ? `${currentVal}\n- ${addition}` 
                            : `- ${addition}`;
                          
                          // Dispatch change event to update react state
                          const event = new Event('input', { bubbles: true });
                          formElem.dispatchEvent(event);

                          alert(`Added custom inquiry for "${srv.title}"! Scrolled down to your WhatsApp order form.`);
                          document.getElementById('whatsapp-order-card')?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          // Fallback directly to raw WhatsApp link
                          const txt = encodeURIComponent(`Hello Dev Medical, I have an inquiry about your "${srv.title}" service.`);
                          window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${txt}`, '_blank');
                        }
                      }}
                      className="px-4 py-2 bg-[#0A8F6A]/10 hover:bg-[#0A8F6A]/20 text-[#0A8F6A] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Order / Inquire department</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Closing Quick Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <h3 className="font-sans font-bold text-xl sm:text-2xl">
              Can't find a specific clinical device or drug formulation?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-sans max-w-xl">
              We coordinate directly with pharmaceutical distributors. If you have any specialty oncology, kidney care, or rare vaccines, we can specially source them under 24 hours.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="px-6 py-3 bg-[#0A8F6A] hover:bg-[#097e5d] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-transform hover:-translate-y-0.5 relative z-10 shrink-0 text-center"
          >
            Call pharmacist: {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>

      </div>
    </div>
  );
}
