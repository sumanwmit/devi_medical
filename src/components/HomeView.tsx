import { useState, useMemo } from 'react';
import { 
  Search, ShieldCheck, ShieldAlert, Award, Clock, Star, MapPin, 
  Phone, MessageSquare, ClipboardCheck, ArrowRight, Pill, Sparkles, 
  HeartPulse, Scissors, ChevronDown, ChevronUp, AlertCircle, 
  Dumbbell, Smile, Baby, Accessibility, TrendingUp, HelpCircle
} from 'lucide-react';
import { BUSINESS_INFO, REVIEWS, FAQS } from '../types';
import { POPULAR_MEDICINES, FEATURED_CATEGORIES } from '../data/medicines';
import WhatsAppOrderForm from './WhatsAppOrderForm';
import SeoManager from './SeoManager';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
}

export default function HomeView({ setActiveTab }: HomeViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Filter medicines based on search and category
  const filteredMedicines = useMemo(() => {
    return POPULAR_MEDICINES.filter(med => {
      const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            med.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            med.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const categoriesList = ['All', 'Tablets', 'Capsules', 'Syrups', 'Medical Equipment', 'Baby Products', 'Skin Care', 'Diabetic Care'];

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  // Icon selector helper
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pills': return <Pill className="h-6 w-6" />;
      case 'Sparkle': return <Sparkles className="h-6 w-6" />;
      case 'GlassWater': return <Pill className="h-6 w-6 rotate-90" />;
      case 'Syringe': return <Pill className="h-6 w-6" />;
      case 'HeartPulse': return <HeartPulse className="h-6 w-6" />;
      case 'Dumbbell': return <Dumbbell className="h-6 w-6" />;
      case 'Activity': return <HeartPulse className="h-6 w-6" />;
      case 'Smile': return <Smile className="h-6 w-6" />;
      case 'Baby': return <Baby className="h-6 w-6" />;
      case 'ShieldAlert': return <ShieldCheck className="h-6 w-6" />;
      case 'Accessibility': return <Accessibility className="h-6 w-6" />;
      case 'TrendingUp': return <TrendingUp className="h-6 w-6" />;
      default: return <Pill className="h-6 w-6" />;
    }
  };

  return (
    <div id="home-view" className="animate-fade-in bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <SeoManager isFaqPage={true} />

      {/* Hero Section */}
      <section 
        id="hero-banner" 
        className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white overflow-hidden py-20 lg:py-28"
      >
        {/* Background Image Overlay with low opacity */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-multiply bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631549916768-4119b255f9ec?q=80&w=1600&auto=format&fit=crop')" }}></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0A8F6A] rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-semibold text-emerald-300">
              <ShieldCheck className="h-4 w-4" />
              <span>Registered Chemists & Druggists</span>
            </div>

            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Dev <span className="text-[#0A8F6A]">Medical</span>
              <span className="block text-xl sm:text-2xl font-medium text-blue-200 mt-2">
                Your Trusted Pharmacy in Tekari & Makhdumpur
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              Providing 100% genuine medicines, professional healthcare products, surgical supplies, gentle baby care, personal care, and daily medical essentials at highly affordable prices in Bihar.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4.5 w-4.5" />
                <span>Call Store</span>
              </a>
              <a 
                href="#order-form" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0A8F6A] hover:bg-[#097e5d] text-white font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <MessageSquare className="h-4.5 w-4.5" />
                <span>WhatsApp Order</span>
              </a>
              <a 
                href={BUSINESS_INFO.mapDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all"
              >
                <MapPin className="h-4.5 w-4.5 text-red-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Minor stats badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-md">
              <div>
                <span className="block font-bold text-2xl text-emerald-400">100%</span>
                <span className="text-xs text-slate-400">Genuine Medicines</span>
              </div>
              <div>
                <span className="block font-bold text-2xl text-blue-400">Fast</span>
                <span className="text-xs text-slate-400">Store Pick-up</span>
              </div>
              <div>
                <span className="block font-bold text-2xl text-[#0A8F6A]">Direct</span>
                <span className="text-xs text-slate-400">WhatsApp Support</span>
              </div>
            </div>

          </div>

          {/* Hero Right: Quick Mini Form Indicator / Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-2xl shadow-2xl relative space-y-4">
              <div className="absolute top-2 right-2 bg-[#0A8F6A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Active 🟢
              </div>
              <h3 className="font-sans font-bold text-lg text-white">
                📞 Emergency Delivery & Inquiry
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Need urgent medications or life-saving cardiac products? Call our pharmacist immediately.
              </p>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/10 space-y-2">
                <span className="block text-xs text-slate-400">Direct Pharmacy Helpline:</span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 text-xl font-bold text-[#0A8F6A] hover:underline">
                  <Phone className="h-5 w-5 animate-pulse" />
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <p className="text-[10px] text-slate-400 font-mono italic">
                * We serve Titaiganj and all surrounding parts of Makhdumpur, Bihar.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Emergency Contact Notice Bar */}
      <div className="bg-red-600 dark:bg-red-950 text-white py-3 border-y border-red-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 animate-bounce shrink-0" />
            <span className="text-sm font-bold tracking-wide">
              {BUSINESS_INFO.hours.emergency}
            </span>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="px-4 py-1 bg-white hover:bg-slate-100 text-red-600 font-extrabold text-xs rounded-full uppercase transition-colors shrink-0"
          >
            Call Now: {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>

      {/* Interactive Medicine Search Section */}
      <section id="medicine-search-box" className="py-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-sans font-bold text-3xl text-blue-900 dark:text-blue-400">
              🔍 Medicine Search & Price Check
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Browse our popular catalog or search for your required medicines instantly to check availability.
            </p>
          </div>

          {/* Search Controls */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search Paracetamol, Dolo, Glucometer, Novamox, Insulin, etc..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] text-slate-800 dark:text-white transition-all"
                />
              </div>

              {/* Category Dropdown/Selector */}
              <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#0A8F6A] text-white'
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {filteredMedicines.slice(0, 6).map((med) => (
                <div 
                  key={med.id} 
                  className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/80 hover:border-[#0A8F6A]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full uppercase">
                        {med.category}
                      </span>
                      {med.requiresPrescription ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full flex items-center gap-1">
                          <ShieldAlert className="h-3 w-3" /> Rx Required
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-[#0A8F6A] rounded-full">
                          OTC
                        </span>
                      )}
                    </div>

                    <h4 className="font-sans font-bold text-base text-slate-900 dark:text-white">
                      {med.name}
                    </h4>
                    
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {med.description}
                    </p>

                    <div className="text-[11px] space-y-1 font-mono text-slate-400 pt-1">
                      <p>🏭 Mfg: <span className="text-slate-600 dark:text-slate-300">{med.manufacturer}</span></p>
                      <p>💊 Dosage: <span className="text-slate-600 dark:text-slate-300">{med.dosage}</span></p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/50">
                    <span className="font-sans font-extrabold text-[#0A8F6A] text-sm">
                      M.R.P: {med.price}
                    </span>
                    <button
                      onClick={() => {
                        const formElem = document.getElementById('medicines-list');
                        if (formElem) {
                          const currentVal = (formElem as HTMLTextAreaElement).value;
                          const addition = `${med.name} (${med.price})`;
                          (formElem as HTMLTextAreaElement).value = currentVal 
                            ? `${currentVal}\n- ${addition}` 
                            : `- ${addition}`;
                          
                          // Dispatch change event to update react state
                          const event = new Event('input', { bubbles: true });
                          formElem.dispatchEvent(event);

                          alert(`"${med.name}" added to your WhatsApp Inquiry Form below!`);
                          document.getElementById('whatsapp-order-card')?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          alert(`To order, copy: "${med.name}" and paste in our WhatsApp Order Form below!`);
                        }
                      }}
                      className="px-3 py-1.5 bg-[#0A8F6A]/10 hover:bg-[#0A8F6A]/20 text-[#0A8F6A] text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                    >
                      <span>+ Add to Inquiry</span>
                    </button>
                  </div>
                </div>
              ))}

              {filteredMedicines.length === 0 && (
                <div className="col-span-2 text-center py-8 bg-slate-100/50 dark:bg-slate-950/40 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    No matching medicines found in our catalog preview.
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Don't worry, we stock <strong>all genuine medicines</strong>. Simply upload your prescription on WhatsApp below!
                  </p>
                </div>
              )}
            </div>

            <p className="text-[11px] text-center text-slate-400">
              * Showing popular sample medicines. Our physical retail store stocks over 5,000+ formulations. Contact us to check.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-sans font-bold text-3xl text-blue-900 dark:text-blue-400">
              🏆 Why Choose Dev Medical?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Experience maximum trust, quick checkout, and professional pharmacy services in Makhdumpur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '100% Genuine Medicines', desc: 'Direct sourcing ensures zero duplicate formulations.', icon: <Award className="h-6 w-6 text-[#0A8F6A]" /> },
              { title: 'Experienced Staff', desc: 'Licensed professionals guiding you on drug dosage guidelines.', icon: <ClipboardCheck className="h-6 w-6 text-blue-600" /> },
              { title: 'Affordable Prices', desc: 'Attractive counter discounts on standard pharmaceutical brands.', icon: <Sparkles className="h-6 w-6 text-[#0A8F6A]" /> },
              { title: 'Fast Service', desc: 'Pick up your prepared medicines under 3 minutes at our counter.', icon: <Clock className="h-6 w-6 text-blue-600" /> },
              { title: 'Prescription Medicines', desc: 'Safely stocks critical life-saving cardiac, neuro, & diabetic pills.', icon: <Pill className="h-6 w-6 text-[#0A8F6A]" /> },
              { title: 'Healthcare Products', desc: 'Quality wellness creams, premium infant formulas, and supplements.', icon: <HeartPulse className="h-6 w-6 text-blue-600" /> },
              { title: 'Trusted Local Pharmacy', desc: 'Loved and trusted by thousands of patients in Titaiganj.', icon: <ShieldCheck className="h-6 w-6 text-[#0A8F6A]" /> },
              { title: 'Easy WhatsApp Support', desc: 'Submit prescriptions from your home and pick up ready packs.', icon: <MessageSquare className="h-6 w-6 text-blue-600" /> },
            ].map((card, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl inline-block mb-4">
                  {card.icon}
                </div>
                <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Categories Grid */}
      <section id="featured-categories" className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-sans font-bold text-3xl text-blue-900 dark:text-blue-400">
              🏷️ Our Featured Categories
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              We cover all your household medical needs. Find customized segments stocked on our shelves.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {FEATURED_CATEGORIES.map((cat) => (
              <div 
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.name === 'Medical Equipment' ? 'Medical Equipment' : cat.name === 'Baby Products' ? 'Baby Products' : cat.name === 'Skin Care' ? 'Skin Care' : cat.name === 'Diabetic Care' ? 'Diabetic Care' : cat.name);
                  document.getElementById('medicine-search-box')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200/50 dark:border-slate-850/80 text-center hover:border-[#0A8F6A] hover:bg-[#0A8F6A]/5 dark:hover:bg-[#0A8F6A]/10 transition-all cursor-pointer group"
              >
                <div className="mx-auto p-3.5 bg-white dark:bg-slate-900 text-[#0A8F6A] rounded-2xl inline-block mb-3 shadow-xs group-hover:scale-110 transition-transform">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h4 className="font-sans font-bold text-sm text-slate-900 dark:text-white truncate">
                  {cat.name}
                </h4>
                <p className="text-[11px] text-slate-400 font-mono mt-1">
                  {cat.count}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Our Services - Standard Grid */}
      <section id="our-services-grid" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="font-sans font-bold text-3xl text-blue-900 dark:text-blue-400">
                🩺 Comprehensive Healthcare Services
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Beyond regular medicines, we act as a complete wellness hub for Makhdumpur community.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('services')}
              className="text-sm font-bold text-[#0A8F6A] hover:underline flex items-center gap-1 group whitespace-nowrap"
            >
              <span>View Detailed Services Page</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Prescription Medicines', desc: '100% authentic medicines verified and double-checked by registered pharmacists.', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop' },
              { name: 'OTC Medicines', desc: 'Quick household treatments for headaches, flu, cough, and digestive discomfort.', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=400&auto=format&fit=crop' },
              { name: 'Surgical Items', desc: 'Sterile cotton bandages, clinical braces, medical tapes, and disposable syringes.', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop' },
            ].map((srv, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800/80 shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img src={srv.img} alt={srv.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-white">
                      {srv.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('services')}
                    className="text-xs font-bold text-[#0A8F6A] hover:underline text-left inline-block"
                  >
                    Learn more details →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Customers Trust Us */}
      <section id="why-customers-trust" className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-sans font-bold text-3xl text-blue-900 dark:text-blue-400">
              🤝 Why Customers Trust Us
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Our business is built upon long-term local trust, fast checkouts, and patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Experienced Pharmacy', text: 'Over decades of pharmaceutical handling and accurate dosage knowledge.', iconName: 'Award' },
              { title: 'Quality Medicines', text: 'Rigid shelf temperature controls protect active chemical compounds.', iconName: 'ShieldCheck' },
              { title: 'Quick Service', text: 'Pre-ordered prescriptions processed immediately to save your waiting time.', iconName: 'Clock' },
              { title: 'Friendly Staff', text: 'Polite interactions, explaining medication schedules patiently.', iconName: 'Smile' },
              { title: 'Reasonable Pricing', text: 'Affordable rates, high-quality generic alternatives to help you save.', iconName: 'TrendingUp' },
              { title: 'Convenient Location', text: 'Centrally located at Titaiganj, Makhdumpur with easy parking space.', iconName: 'MapPin' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850 flex gap-4 items-start"
              >
                <div className="p-2.5 bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-lg shrink-0">
                  {item.iconName === 'Award' && <Award className="h-5 w-5" />}
                  {item.iconName === 'ShieldCheck' && <ShieldCheck className="h-5 w-5" />}
                  {item.iconName === 'Clock' && <Clock className="h-5 w-5" />}
                  {item.iconName === 'Smile' && <Smile className="h-5 w-5" />}
                  {item.iconName === 'TrendingUp' && <TrendingUp className="h-5 w-5" />}
                  {item.iconName === 'MapPin' && <MapPin className="h-5 w-5" />}
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-base text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Working Process */}
      <section id="working-process" className="py-16 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-sans font-bold text-3xl text-blue-900 dark:text-blue-400">
              ⚡ How It Works (Simple 4 Steps)
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Get your medicines ready without unnecessary waiting loops or confusion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Visit Store', desc: 'Walk in directly to our Titaiganj, Makhdumpur counter.' },
              { step: '02', title: 'Share Prescription', desc: 'Hand over or share your doctor’s slip on WhatsApp.' },
              { step: '03', title: 'Get Medicines', desc: 'Our licensed pharmacist packs your dosage immediately.' },
              { step: '04', title: 'Easy Payment', desc: 'Pay via digital UPI, card, or physical cash securely.' },
            ].map((proc, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs relative">
                <span className="absolute top-4 right-4 text-3xl font-extrabold text-blue-500/20 font-mono">
                  {proc.step}
                </span>
                <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-white mt-4 mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WhatsApp Order Form Anchor Section */}
      <section id="order-form" className="py-16 bg-white dark:bg-slate-900 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 dark:bg-emerald-950/40 text-[#0A8F6A] rounded-full text-xs font-semibold">
                <MessageSquare className="h-3.5 w-3.5 animate-pulse" />
                <span>Instant Prescription Portal</span>
              </div>
              
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-blue-900 dark:text-blue-400 tracking-tight leading-tight">
                Order via WhatsApp in Seconds
              </h2>
              
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                Save time at our pharmacy. Avoid long queues and multiple visits by uploading your doctor's slip online. Our pharmacists will review, verify, package your medicines, and keep them ready for a super-fast pickup or coordinate a local delivery.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 bg-blue-100 dark:bg-blue-950/50 text-blue-600 rounded-md shrink-0 mt-0.5">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">Official Pharmacist Inspection</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Our counter checks all prescriptions diligently.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 bg-blue-100 dark:bg-blue-950/50 text-blue-600 rounded-md shrink-0 mt-0.5">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">Ready Pack under 10 Minutes</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Receive alert when your package is ready at Titaiganj.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-850">
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  "Simply fill out the form beside this block. We instantly pre-configure everything, and the app lets you click directly to submit via secure WhatsApp."
                </p>
                <p className="text-[11px] font-bold text-slate-600 dark:text-slate-300 mt-2 text-right">
                  - Pharmacist, Dev Medical
                </p>
              </div>

            </div>

            <div className="lg:col-span-7">
              <WhatsAppOrderForm />
            </div>

          </div>
        </div>
      </section>

      {/* Customer Testimonials / Google Reviews Section */}
      <section id="testimonials-section" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-sans font-bold text-3xl text-blue-900 dark:text-blue-400">
              ⭐ What Our Customers Say
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Read transparent experiences and five-star feedback from local Makhdumpur families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div 
                key={review.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full font-mono">
                      {review.platform} Review
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-4">
                  <img src={review.avatar} alt={review.name} className="h-10 w-10 rounded-full object-cover border border-slate-100 dark:border-slate-800 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[150px]">
                      {review.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono block">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="text-center space-y-2">
            <h2 className="font-sans font-bold text-3xl text-blue-900 dark:text-blue-400">
              ❓ Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Have questions about ordering medicines, prescription regulations, or timings? Read below.
            </p>
          </div>

          <div className="space-y-3" id="faq-accordion-group">
            {FAQS.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div 
                  key={idx}
                  id={`faq-item-${idx}`}
                  className="border border-slate-200/80 dark:border-slate-800 rounded-xl overflow-hidden transition-all bg-slate-50 dark:bg-slate-950"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-sans font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="h-4.5 w-4.5 text-[#0A8F6A] shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? <ChevronUp className="h-4 w-4 text-slate-500 shrink-0" /> : <ChevronDown className="h-4 w-4 text-slate-500 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="p-4 pt-0 border-t border-slate-200/40 dark:border-slate-800/40 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Google Map Section & Location Split */}
      <section id="location-map-split" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-sans font-bold text-3xl text-blue-900 dark:text-blue-400">
              📍 Find Us in Makhdumpur
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Easily navigate to our physical retail medical counter at Titaiganj, Bihar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Address & Hours */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <h3 className="font-sans font-bold text-xl text-blue-900 dark:text-blue-400">
                  Dev Medical Store
                </h3>
                
                <div className="space-y-3 text-xs sm:text-sm">
                  
                  <div className="flex gap-2.5 items-start">
                    <MapPin className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-slate-800 dark:text-slate-200">Address:</span>
                      <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {BUSINESS_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <Clock className="h-5 w-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-slate-800 dark:text-slate-200">Store Hours:</span>
                      <p className="text-slate-500 dark:text-slate-400 mt-1 font-mono">
                        Mon - Sat: {BUSINESS_INFO.hours.weekdays}<br />
                        Sunday: {BUSINESS_INFO.hours.sunday}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <Phone className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-slate-800 dark:text-slate-200">Call Support:</span>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="text-[#0A8F6A] font-bold hover:underline">
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Located near Makhdumpur, Bihar, our pharmacy serves as a primary hub for genuine medications. Click below to launch direct driving route mappings.
                </p>
                <a
                  href={BUSINESS_INFO.mapDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs transition-colors block text-xs"
                >
                  Launch Route on Google Maps Navigation
                </a>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[300px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
              <iframe
                title="Dev Medical Map Location"
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
      </section>

      {/* Contact CTA banner */}
      <section id="contact-cta" className="py-16 bg-gradient-to-r from-blue-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop')" }}></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
            Need Genuine Medicines & Healthcare Essentials?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Contact us now. Send your doctor’s prescription on WhatsApp or call our licensed counter pharmacist immediately to confirm stock availability!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md transition-transform hover:-translate-y-0.5 text-sm"
            >
              <Phone className="h-5 w-5" />
              <span>Call store now: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Dev%20Medical%2C%20I%20have%20a%20prescription%20to%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-[#0A8F6A] hover:bg-[#087b5b] text-white font-bold rounded-xl shadow-md transition-transform hover:-translate-y-0.5 text-sm"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Order via WhatsApp Messenger</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 font-mono italic">
            🕒 Active Timing: {BUSINESS_INFO.hours.weekdays} | Sunday: {BUSINESS_INFO.hours.sunday}
          </p>
        </div>
      </section>

    </div>
  );
}
