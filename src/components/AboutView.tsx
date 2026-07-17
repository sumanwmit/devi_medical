import { ShieldCheck, HeartPulse, Target, Eye, Users, Award, Calendar, Check, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../types';
import SeoManager from './SeoManager';

export default function AboutView() {
  const milestones = [
    { year: '2016', title: 'Humble Roots', desc: 'Dev Medical was founded as a small pharmaceutical retailer in Titaiganj, Makhdumpur, serving local families with genuine pills.' },
    { year: '2018', title: 'Distributor Network Expansion', desc: 'Connected directly with authorized distributors of major pharmaceutical giants like Cipla, Alkem, and Abbott to guarantee pricing and stock.' },
    { year: '2020', title: 'Crisis Support Heroics', desc: 'Worked 24/7 during seasonal health emergencies, maintaining a perfect supply chain of face masks, sanitizers, and critical medical oxygen gadgets.' },
    { year: '2023', title: 'Digital WhatsApp Integration', desc: 'Launched direct WhatsApp prescription ordering to make healthcare extremely fast and accessible for the rural Makhdumpur populace.' },
    { year: '2026', title: 'A Decade of Trust', desc: 'Now recognized as the most reliable, 100% genuine medical retailer in Titaiganj, with a community of thousands of happy families.' }
  ];

  const values = [
    { title: 'Absolute Authenticity', desc: 'We maintain zero tolerance for low-quality or duplicate medicines. Everything on our racks is 100% genuine.', icon: <ShieldCheck className="h-5 w-5 text-[#0A8F6A]" /> },
    { title: 'Compassionate Care', desc: 'Our customer relationships are patient-first. We guide you carefully on dosing intervals and safety precautions.', icon: <HeartPulse className="h-5 w-5 text-blue-600" /> },
    { title: 'Ethical Pricing', desc: 'We strictly follow standard NPPA medicine caps, offering fair counter discounts to make medicines affordable.', icon: <Award className="h-5 w-5 text-[#0A8F6A]" /> },
    { title: '24/7 Availability', desc: 'We understand health emergencies don’t consult schedules. We respond immediately to life-critical calls after hours.', icon: <Users className="h-5 w-5 text-blue-600" /> },
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '#about' }
  ];

  return (
    <div id="about-view" className="animate-fade-in bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12">
      <SeoManager 
        pageTitle="About Our Pharmacy" 
        pageDescription="Learn about the story, mission, and core pharmaceutical values of Dev Medical, your trusted retail pharmacy in Makhdumpur, Bihar."
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header / Breadcrumb navigation */}
        <div className="space-y-2">
          <nav className="flex text-xs font-semibold text-slate-400 gap-1.5 items-center font-mono uppercase">
            <span>Dev Medical</span>
            <span>/</span>
            <span className="text-[#0A8F6A]">About Us</span>
          </nav>
          <h1 className="font-sans font-extrabold text-4xl text-blue-900 dark:text-blue-400 tracking-tight">
            Our Business Story & Pharmacy Mission
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Delivering authentic medications and patient-first healthcare guidance to Makhdumpur for over a decade.
          </p>
        </div>

        {/* Business Story & Hero Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-sans font-bold text-2xl text-[#0A8F6A] tracking-wide">
              The Journey of Dev Medical
            </h2>
            
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              <p>
                In the heart of Makhdumpur, Bihar, families often struggled to find 100% genuine medications, chronic illness pills, and medical-grade home devices locally. Seeing this community pain-point, <strong>Dev Medical</strong> was founded in Titaiganj with a simple yet absolute vision: <em>to provide instant access to authenticated healthcare products under professional supervision.</em>
              </p>
              <p>
                Over the years, we have grown from a basic chemist shelf to a comprehensive health hub. We didn't expand by marketing slogans, but through the recommendations of local physicians, doctors, and satisfied patients who experienced our honest rates and absolute dedication.
              </p>
              <p>
                We handle every single pill under correct storage parameters, ensuring temperature-sensitive medications like insulin vaccines do not lose their efficacy. We believe that a pharmacy is more than a commercial shop; it is an essential pillar of local trust.
              </p>
            </div>

            {/* Minor highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-2.5 items-start bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-850">
                <ShieldCheck className="h-5 w-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Fully licensed with the Bihar Drugs Control department.
                </p>
              </div>
              <div className="flex gap-2.5 items-start bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-850">
                <Users className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Trusted medical store for over 5,000+ local families.
                </p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-[380px] group">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop" 
                alt="Dev Medical Store Team" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A8F6A]">Licensed Pharmacy Counter</span>
                <h4 className="font-sans font-bold text-lg mt-1">Dev Medical, Titaiganj</h4>
                <p className="text-xs text-slate-300 mt-1 font-sans">Serving daily healthcare needs with professional integrity.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Mission & Vision Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-xs space-y-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A8F6A]"></div>
            <div className="p-3 bg-[#0A8F6A]/10 text-[#0A8F6A] rounded-xl inline-block">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-sans font-bold text-xl text-blue-900 dark:text-blue-400">
              Our Pharmacy Mission
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              To safeguard the health of our community in Makhdumpur by ensuring uninterrupted, extremely reliable, and completely ethical distribution of 100% genuine pharmaceuticals, baby care essentials, surgical devices, and chronic illness care.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-xs space-y-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/50 text-blue-600 rounded-xl inline-block">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="font-sans font-bold text-xl text-blue-900 dark:text-blue-400">
              Our Vision
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              To be recognized as the absolute benchmark for trusted community pharmacies in Bihar, bridging the gap between high-end modern medicine facilities and convenient rural accessibility using smart integrations like rapid WhatsApp diagnostics logistics.
            </p>
          </div>

        </div>

        {/* Our Values */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-sans font-bold text-2xl text-blue-900 dark:text-blue-400">
              Our Core Pharmacy Values
            </h3>
            <p className="text-xs text-slate-400">
              The ethical guidelines governing every package we seal and hand over.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-850 shadow-xs text-center space-y-3"
              >
                <div className="p-2.5 bg-slate-50 dark:bg-slate-850 rounded-lg inline-block text-slate-700">
                  {v.icon}
                </div>
                <h4 className="font-sans font-bold text-base text-slate-900 dark:text-white">
                  {v.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Store Growth Timeline */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-sans font-bold text-2xl text-blue-900 dark:text-blue-400">
              Dev Medical Milestones Timeline
            </h3>
            <p className="text-xs text-slate-400">
              Our evolutionary step towards building an unshakeable health network.
            </p>
          </div>

          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-8 max-w-4xl mx-auto">
            {milestones.map((mil, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                {/* Timeline node */}
                <div className="absolute left-0 top-1.5 -translate-x-1/2 p-1.5 bg-[#0A8F6A] text-white rounded-full border-4 border-slate-50 dark:border-slate-950 group-hover:scale-110 transition-transform">
                  <Calendar className="h-3 w-3" />
                </div>
                <div className="space-y-1.5">
                  <span className="font-mono text-xs font-extrabold text-[#0A8F6A]">
                    {mil.year}
                  </span>
                  <h4 className="font-sans font-bold text-lg text-slate-900 dark:text-white">
                    {mil.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {mil.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Owner message */}
        <div id="owner-message-block" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-blue-500/10 dark:text-blue-500/5 select-none pointer-events-none">
            <Users className="h-36 w-36" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop" 
              alt="Store Pharmacist & Owner" 
              className="h-36 w-36 rounded-2xl object-cover shadow-md border border-slate-100 dark:border-slate-850 shrink-0" 
            />

            <div className="space-y-4 flex-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A8F6A] font-mono block">
                Warm Welcome from our Founder
              </span>
              
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-blue-900 dark:text-blue-400">
                "Your Health is Our Sole Responsibility"
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                <p>
                  "As the chief administrator at Dev Medical, I assure you that patient care and authentic drugs distribution are the core cornerstones of our establishment. We check every expiration date and dosage structure thoroughly before dispensing medications. Our integration of WhatsApp prescription submission represents our promise to simplify medical logistics for Makhdumpur, making healthcare convenient and trustworthy. Walk into our Titaiganj storefront or drop us a WhatsApp; we are here for you."
                </p>
              </div>

              <div>
                <span className="block font-bold text-slate-800 dark:text-slate-100 text-sm">
                  Mukesh Kumar
                </span>
                <span className="block text-xs text-[#0A8F6A] font-mono uppercase tracking-wider">
                  Lead Pharmacist & Owner, Dev Medical Store
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Why Local Customers Trust Us Section */}
        <div className="space-y-8 bg-blue-50/50 dark:bg-blue-950/20 p-6 sm:p-8 rounded-2xl border border-blue-100/50 dark:border-blue-900/10">
          <h3 className="font-sans font-bold text-xl text-blue-900 dark:text-blue-400 text-center">
            Why Local Patients in Makhdumpur Trust Dev Medical
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {[
              'Direct cold-chain management for sensitive insulins and pediatric liquids.',
              '100% compliance with prescription regulatory frameworks.',
              'A wide variety of niche surgical, orthopedic supports, and baby care items.',
              'Helpful guidance regarding correct scheduling intervals and generic drug equivalents.',
              'Fast counter packaging, minimizing patient waiting times during rush hours.',
              'Direct connection on WhatsApp to pre-arrange orders without prior shop visits.'
            ].map((pt, idx) => (
              <div key={idx} className="flex gap-2 items-start bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-850">
                <Check className="h-4.5 w-4.5 text-[#0A8F6A] shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
