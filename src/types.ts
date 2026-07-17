export interface Medicine {
  id: string;
  name: string;
  category: string;
  dosage: string;
  manufacturer: string;
  price: string;
  description: string;
  type: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Supplement' | 'Baby Care' | 'Personal Hygiene' | 'Diabetic' | 'Orthopedic' | 'Skin Care';
  requiresPrescription: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  platform: 'Google' | 'Direct';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'equipment' | 'front';
  imageUrl: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  iconName: string;
  longDescription: string;
  features: string[];
  image: string;
}

// Business Constant Information
export const BUSINESS_INFO = {
  name: 'Dev Medical',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  phone: '09708172728',
  phoneDisplay: '+91 97081 72728',
  whatsapp: '919708172728',
  email: 'devmedical.makhdumpur@gmail.com',
  address: 'Titaiganj, Makhdumpur, Bihar 804422',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.5997992982464!2d84.9754162!3d24.979803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32386926f74df%3A0x8e8eb467008cf26f!2sTitaiganj%2C%20Makhdumpur%2C%20Bihar%20804422!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  mapDirectionUrl: 'https://maps.google.com/?q=Dev+Medical+Titaiganj+Makhdumpur+Bihar+804422',
  hours: {
    weekdays: '08:00 AM - 09:30 PM',
    sunday: '08:00 AM - 02:00 PM',
    emergency: '24/7 Support Available for Emergencies',
  }
};

// SEO Meta Data Config
export const SEO_CONFIG = {
  title: 'Dev Medical | Trusted Medical Store in Makhdumpur, Bihar',
  description: 'Dev Medical in Titaiganj, Makhdumpur, Bihar provides 100% genuine medicines, healthcare products, surgical supplies, and baby care. Easy order via WhatsApp or Call now!',
  keywords: 'Dev Medical, Pharmacy in Makhdumpur, Medical Store Makhdumpur Bihar, Chemists in Titaiganj, Genuine Medicines Makhdumpur, Surgical supplies Bihar, Baby care products, WhatsApp medicine delivery Bihar, Makhdumpur Pharmacy, Dev Medical Bihar 804422',
  ogTitle: 'Dev Medical - Pharmacy & Healthcare Store in Makhdumpur, Bihar',
  ogDescription: 'Providing genuine medicines, daily essentials, and quick surgical supplies at Dev Medical, Titaiganj. Order directly on WhatsApp for super-fast store pick-up.',
  ogImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
  twitterCard: 'summary_large_image',
  canonicalUrl: 'https://ais-dev-rgdxk4nbkqisyukoqg5ucy-220823126696.asia-southeast1.run.app/',
};

// FAQ list (10 Common Pharmacy FAQs)
export const FAQS: FAQ[] = [
  {
    question: 'How do I order medicines through WhatsApp?',
    answer: 'It’s extremely easy! Go to our "WhatsApp Order" section, fill in your name, contact details, address, list of medicines, and upload a photo of your prescription. Click "Send via WhatsApp" and it will open your WhatsApp with a ready-made, professionally formatted message which you can send directly to us.'
  },
  {
    question: 'Are all medicines sold at Dev Medical 100% genuine?',
    answer: 'Yes, absolutely. We source all our prescription drugs, OTC medicines, and surgical equipment directly from authorized distributors and verified pharmaceutical manufacturers. Quality and trust are our prime focus.'
  },
  {
    question: 'Do you require a doctor’s prescription for medicine sales?',
    answer: 'For Schedule H, Schedule X, and other prescription-only medications, a valid doctor’s prescription is strictly required. OTC (Over-the-counter) medications, supplements, baby care, and daily hygiene products do not require a prescription.'
  },
  {
    question: 'What are the store timings of Dev Medical in Makhdumpur?',
    answer: 'We are open from Monday to Saturday, 08:00 AM to 09:30 PM. On Sundays, we serve our community from 08:00 AM to 02:00 PM. We also offer quick response for critical emergency calls after hours.'
  },
  {
    question: 'Do you stock surgical items and diabetic care products?',
    answer: 'Yes! We stock a wide variety of medical items including Blood Pressure Monitors, Glucometers, Diabetic lancets, nebulizers, thermal bandages, orthopedic knee pads, cervical collars, and other essential surgical supplies.'
  },
  {
    question: 'Can I pay online when picking up or ordering medicines?',
    answer: 'Yes, we support all major digital payments including UPI (Google Pay, PhonePe, Paytm), BHIM, debit/credit cards, and cash payments at the counter.'
  },
  {
    question: 'Do you offer home delivery in the Makhdumpur area?',
    answer: 'Yes, we provide local delivery in Titaiganj and surrounding areas of Makhdumpur for elderly patients or urgent care requests. Please coordinate with us over WhatsApp or call 09708172728.'
  },
  {
    question: 'Do you offer generic medicine options?',
    answer: 'Yes, we stock both high-quality branded medicines and highly reliable generic alternatives that offer identical therapeutic efficacy at a more affordable price point. Our trained staff can help guide you.'
  },
  {
    question: 'What baby care and personal care brands do you carry?',
    answer: 'We stock premium baby care products (Himalaya, Johnson\'s, Pampers, diapers, baby formulas) and personal care essentials (skincare, dermatological creams, hand sanitizers, antiseptic soaps, hair care) from trusted global and national brands.'
  },
  {
    question: 'What should I do if a medicine I need is currently out of stock?',
    answer: 'If a specific medicine is out of stock, we can order it specially for you through our direct distributor network. Typically, we can arrange for it within 12 to 24 hours. Just drop your prescription on WhatsApp!'
  }
];

// Testimonials (6 reviews)
export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Ravi Shankar Singh',
    rating: 5,
    date: '10 days ago',
    text: 'Dev Medical is the best pharmacy in Makhdumpur. I regularly get my father’s diabetes and high blood pressure medicines from here. The prices are very reasonable, and they always have fresh stock. The WhatsApp ordering is super convenient!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    platform: 'Google'
  },
  {
    id: 'rev-2',
    name: 'Anjali Kumari',
    rating: 5,
    date: '3 weeks ago',
    text: 'Extremely polite staff and quick service. I needed a specific nebulizer and baby care essentials. They explained the features patiently and gave me a good discount. 100% genuine medicines, would highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    platform: 'Google'
  },
  {
    id: 'rev-3',
    name: 'Dr. Manish Kumar',
    rating: 5,
    date: '1 month ago',
    text: 'As a local medical practitioner, I recommend Dev Medical to my patients because of their commitment to stocking genuine pharmaceuticals. They handle medical guidelines very professionally and maintain proper storage temperatures for insulin and vaccines.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&auto=format&fit=crop',
    platform: 'Direct'
  },
  {
    id: 'rev-4',
    name: 'Vikash Yadav',
    rating: 5,
    date: '2 months ago',
    text: 'Great experience! I simply uploaded my prescription on WhatsApp, and when I arrived at the store in Titaiganj, they had everything neatly packed and ready. Saved me so much time. Very fast and trustworthy pharmacy.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    platform: 'Google'
  },
  {
    id: 'rev-5',
    name: 'Savitri Devi',
    rating: 5,
    date: '2 months ago',
    text: 'Very helpful and honest pharmacist. They pointed out high-quality affordable generic alternatives for my vitamins which saved me money. I am very grateful to Dev Medical for their excellent service in Makhdumpur.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
    platform: 'Direct'
  },
  {
    id: 'rev-6',
    name: 'Rajeev Ranjan',
    rating: 5,
    date: '3 months ago',
    text: 'Excellent pharmacy in Titaiganj. They stock everything from simple Band-Aids to complex lifesaving medications. Their staff is experienced and knows the dosage guidelines well. Very tidy store as well!',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop',
    platform: 'Google'
  }
];

// Gallery Images
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Dev Medical Store Front',
    category: 'front',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop',
    description: 'Clean, well-lit, and professionally organized store entrance in Titaiganj, Makhdumpur.'
  },
  {
    id: 'gal-2',
    title: 'Medicine Shelves & Cold Storage',
    category: 'shelves',
    imageUrl: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=800&auto=format&fit=crop',
    description: 'Neatly organized racks categorizing life-saving pills, pediatric liquids, and respiratory care.'
  },
  {
    id: 'gal-3',
    title: 'Healthcare & Wellness Products',
    category: 'products',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop',
    description: 'A wide range of baby formulas, skincare creams, and multivitamin supplements.'
  },
  {
    id: 'gal-4',
    title: 'Surgical Equipment & Monitors',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    description: 'Modern blood pressure kits, digital thermometers, and blood sugar checkers.'
  },
  {
    id: 'gal-5',
    title: 'Patient Consultations & Service',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    description: 'Our experienced pharmacists explaining dosing schedules to local patients.'
  },
  {
    id: 'gal-6',
    title: 'Dermatology & Skin Care Racks',
    category: 'products',
    imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop',
    description: 'Quality dermatological products, organic sanitizers, and medicated soaps.'
  }
];

// Service Details
export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: 'srv-1',
    title: 'Prescription Medicines',
    description: '100% genuine prescribed drugs managed by licensed pharmacists.',
    iconName: 'FileText',
    longDescription: 'At Dev Medical, we understand that prescription drugs are vital for recovery. We strictly maintain ethical selling practices and stock authentic drugs for chronic diseases, infections, cardiac care, neurology, gastroenterology, and more.',
    features: ['Double-checked for accurate dosages', 'Sourced from authorized pharmaceutical distributors', 'Cold-chain maintained vaccines and insulin', 'Valid prescription counseling'],
    image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'srv-2',
    title: 'General & OTC Medicines',
    description: 'Daily healthcare essentials, pain relievers, and first-aid syrups.',
    iconName: 'Pills',
    longDescription: 'We carry a comprehensive range of Over-The-Counter (OTC) treatments. From common cold remedies, allergic support, pain management, stomach relief, to rehydration solutions, find all immediate relief medications here.',
    features: ['Instant accessibility without long queues', 'Wide choice of brand names and generics', 'Clear guidelines on dosage printed on request', 'Top-selling pain & allergy relievers always ready'],
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'srv-3',
    title: 'Health Supplements & Vitamins',
    description: 'Boost your daily energy with premium protein and multivitamin supplies.',
    iconName: 'Activity',
    longDescription: 'Prevent nutritional deficiencies and support your immunity with our extensive range of health supplements. We stock premium protein powders, daily multivitamin tablets, calcium tablets, Omega-3 fish oils, and immune system boosters.',
    features: ['Authentic supplements from certified brands', 'Specialty formulas for children, adults, and seniors', 'Dietary supplements for athletic fitness', 'Plant-based herbal and organic vitamins'],
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'srv-4',
    title: 'Baby Care Products',
    description: 'Safe formulas, clinical diapers, baby oils, and baby hygiene brands.',
    iconName: 'Baby',
    longDescription: 'We understand that your little ones deserve nothing but the gentlest touch. We store high-quality baby care products ranging from nutritious baby formulas and feeding bottles to skin-friendly lotions, talcs, diapers, and organic wipes.',
    features: ['Pediatrician-recommended brands (Himalaya, Johnson\'s)', 'Dermatologically tested gentle baby soaps and oils', 'Infant formulas and milk supplements', 'Ultra-absorbent medical grade diapers'],
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'srv-5',
    title: 'Personal Care & Hygiene',
    description: 'Dermato-creams, hair solutions, organic sanitizers, and oral care.',
    iconName: 'Sparkles',
    longDescription: 'Promote healthy living with our curated line of personal care and hygiene essentials. Find everything you need for daily skincare, hair wash, body hygiene, specialized medicated soaps, mouthwash, and feminine care products.',
    features: ['Hypoallergenic creams and medicated solutions', 'Oral hygiene (pastes, brushes, mouthwashes)', 'Feminine hygiene and antiseptic washes', 'Seasonal hand sanitizers and masks'],
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'srv-6',
    title: 'Medical Equipment & Devices',
    description: 'High precision digital blood pressure devices, nebulizers, and glucometers.',
    iconName: 'HeartPulse',
    longDescription: 'Keep track of your vital metrics in the comfort of your home. We sell easy-to-use clinical diagnostic gear including digital BP monitors, rapid glucometers, medical nebulizers, steam inhalers, and precise digital thermometers.',
    features: ['User-friendly calibrated devices', 'Warranty coverage and replacement guidance', 'Trusted brands (Omron, Dr Trust, Accu-Chek)', 'In-store demonstration by our medical staff'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'srv-7',
    title: 'Surgical Supplies',
    description: 'Bandages, surgical tape, splints, gauze, and wound dressing tools.',
    iconName: 'Scissors',
    longDescription: 'Our surgical supplies cater to minor wound dressings, clinics, and surgical home recovery. We carry high-quality cotton rolls, sterile gauze pads, medical micro-pore tapes, antiseptic fluids, and clinical gloves.',
    features: ['100% sterile and vacuum-packed supplies', 'Adhesive strips and rapid liquid bandages', 'Physiotherapy hot/cold gel packs', 'Splints, slings, and clinical compression socks'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'srv-8',
    title: 'First Aid Products',
    description: 'Emergency travel first aid kits, antiseptic creams, and burn gels.',
    iconName: 'Heart',
    longDescription: 'Prepare for unexpected emergencies at home, in school, or on the road. We supply professional first aid boxes stocked with immediate treatment items like burn lotions, antiseptic sprays, scissors, band-aids, and micro-sprays.',
    features: ['Fully pre-assembled first-aid kits available', 'Custom assembly based on your family size', 'Wound antiseptic washes (Betadine, Savlon)', 'Emergency emergency contacts sheet included'],
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'srv-9',
    title: 'Diabetic Care',
    description: 'Sugars diagnostic lancets, testing strips, insulin cooler bags, sugar-free syrups.',
    iconName: 'TrendingUp',
    longDescription: 'Diabetes management requires daily care and precision. We stock a complete range of diabetic essentials including rapid test strips, lancing devices, sugar-free health drinks, and protective footwear for diabetic patients.',
    features: ['High accuracy test strips with long expiry dates', 'Insulin syringes and painless micro-needles', 'Sugar-free cookies, drops, and natural sweeteners', 'Neuropathy comforting creams'],
    image: 'https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'srv-10',
    title: 'Healthcare Essentials',
    description: 'Face shields, premium triple-layer surgical masks, sanitizers, heating pads.',
    iconName: 'Shield',
    longDescription: 'Protect yourself and your loved ones from seasonal viral infections and air pollution. We provide clinical face masks, protective surgical shields, heavy-duty disinfectant sprays, hand washes, and electrical heating belts for back relief.',
    features: ['N95 and 3-ply meltblown masks', 'Alcohol-based high efficacy sanitizers', 'Orthopedic knee belts and lumbar belts', 'Quality hot water bags and heat pads'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop'
  }
];
