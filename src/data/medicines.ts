import { Medicine } from '../types';

export const POPULAR_MEDICINES: Medicine[] = [
  {
    id: 'med-1',
    name: 'Paracetamol 650mg (Dolo)',
    category: 'Tablets',
    dosage: '1 tablet as advised by doctor',
    manufacturer: 'Micro Labs Ltd',
    price: '₹30 per strip',
    description: 'Effective for reducing fever and managing mild to moderate pain (such as headaches, body aches).',
    type: 'Tablet',
    requiresPrescription: false
  },
  {
    id: 'med-2',
    name: 'Amoxicillin 500mg (Novamox)',
    category: 'Capsules',
    dosage: 'As prescribed by the physician',
    manufacturer: 'Cipla Ltd',
    price: '₹120 per strip',
    description: 'An antibiotic used to treat bacterial infections of the lungs, throat, airways, and urinary tract.',
    type: 'Capsule',
    requiresPrescription: true
  },
  {
    id: 'med-3',
    name: 'Pantoprazole 40mg (Pan-40)',
    category: 'Tablets',
    dosage: '1 tablet daily before breakfast',
    manufacturer: 'Alkem Laboratories',
    price: '₹150 per strip',
    description: 'Reduces the amount of acid produced in your stomach. Used to treat acid reflux, heartburn, and ulcers.',
    type: 'Tablet',
    requiresPrescription: true
  },
  {
    id: 'med-4',
    name: 'Cetirizine 10mg (Alerid)',
    category: 'Tablets',
    dosage: '1 tablet at bedtime',
    manufacturer: 'Cipla Ltd',
    price: '₹18 per strip',
    description: 'An antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, and sneezing.',
    type: 'Tablet',
    requiresPrescription: false
  },
  {
    id: 'med-5',
    name: 'Cough Syrup (Ascoril LS)',
    category: 'Syrups',
    dosage: '5ml thrice a day or as advised',
    manufacturer: 'Glenmark Pharmaceuticals',
    price: '₹115 per bottle',
    description: 'A combination medicine used to treat cough with mucus, helping to loosen congestion and ease breathing.',
    type: 'Syrup',
    requiresPrescription: true
  },
  {
    id: 'med-6',
    name: 'Digene Acidity & Gas Relief',
    category: 'Syrups',
    dosage: '10ml after meals as needed',
    manufacturer: 'Abbott India',
    price: '₹140 per bottle',
    description: 'Provides quick relief from acidity, gas, heartburn, and stomach discomfort. Cool mint flavor.',
    type: 'Syrup',
    requiresPrescription: false
  },
  {
    id: 'med-7',
    name: 'Multi-Vitamin & Zinc (Becosules)',
    category: 'Capsules',
    dosage: '1 capsule daily after food',
    manufacturer: 'Pfizer India',
    price: '₹55 per strip',
    description: 'Vitamin B-Complex with Vitamin C and Zinc. Boosts cell metabolism, supports tissue repair, and enhances immunity.',
    type: 'Capsule',
    requiresPrescription: false
  },
  {
    id: 'med-8',
    name: 'Digital Blood Pressure Monitor',
    category: 'Medical Equipment',
    dosage: 'N/A',
    manufacturer: 'Omron Healthcare',
    price: '₹2,450',
    description: 'Fully automatic, high-precision upper arm blood pressure monitor with Intellisense technology for quick readings.',
    type: 'Equipment',
    requiresPrescription: false
  },
  {
    id: 'med-9',
    name: 'Accu-Chek Active Glucometer Kit',
    category: 'Medical Equipment',
    dosage: 'N/A',
    manufacturer: 'Roche Diabetes Care',
    price: '₹1,599',
    description: 'Easy-to-use blood glucose monitoring system to track and manage blood sugar levels at home.',
    type: 'Equipment',
    requiresPrescription: false
  },
  {
    id: 'med-10',
    name: 'Himalaya Baby Massage Oil',
    category: 'Baby Products',
    dosage: 'Gently massage before bath',
    manufacturer: 'Himalaya Wellness',
    price: '₹185 per bottle',
    description: 'Clinically tested massage oil with Olive and Winter Cherry to nourish baby\'s skin and support muscle growth.',
    type: 'Baby Care',
    requiresPrescription: false
  },
  {
    id: 'med-11',
    name: 'Pampers Active Baby Diapers (M)',
    category: 'Baby Products',
    dosage: 'N/A',
    manufacturer: 'Procter & Gamble',
    price: '₹699 per pack',
    description: 'Soft, tape-style medium diapers with wetness indicators and magic gel locks for up to 12 hours of dryness.',
    type: 'Baby Care',
    requiresPrescription: false
  },
  {
    id: 'med-12',
    name: 'Moisturizing Skin Cream (Cetaphil)',
    category: 'Skin Care',
    dosage: 'Apply daily on dry skin areas',
    manufacturer: 'Galderma Laboratories',
    price: '₹420 per pack',
    description: 'Intense, long-lasting moisture protection for sensitive, dry skin. Fragrance-free and hypoallergenic.',
    type: 'Skin Care',
    requiresPrescription: false
  },
  {
    id: 'med-13',
    name: 'Metformin 500mg (Glycomet)',
    category: 'Diabetic Care',
    dosage: '1 tablet with dinner or as prescribed',
    manufacturer: 'USV Private Ltd',
    price: '₹25 per strip',
    description: 'An oral anti-diabetic drug that helps control blood sugar levels in patients with type 2 diabetes.',
    type: 'Diabetic',
    requiresPrescription: true
  },
  {
    id: 'med-14',
    name: 'Dettol Antiseptic Liquid',
    category: 'Personal Hygiene',
    dosage: 'Dilute before use as antiseptic wash',
    manufacturer: 'Reckitt Benckiser',
    price: '₹98 per bottle',
    description: 'Trusted protection from germs. Used for first aid wound cleaning, personal hygiene, and surface disinfection.',
    type: 'Personal Hygiene',
    requiresPrescription: false
  },
  {
    id: 'med-15',
    name: 'Volini Pain Relief Gel',
    category: 'Orthopedic Support',
    dosage: 'Apply 3-4 times daily on affected area',
    manufacturer: 'Sun Pharmaceutical',
    price: '₹165 per tube',
    description: 'Quick-absorbing pain relief formula with diclofenac, methyl salicylate, and menthol for muscle and joint pain.',
    type: 'Orthopedic',
    requiresPrescription: false
  },
  {
    id: 'med-16',
    name: 'Insulin Glargine 100 IU/ml (Lantus)',
    category: 'Injection',
    dosage: 'Inject subcutaneously once daily',
    manufacturer: 'Sanofi India Ltd',
    price: '₹680 per pen',
    description: 'Long-acting insulin used to control high blood sugar in adults and children with diabetes mellitus.',
    type: 'Injection',
    requiresPrescription: true
  }
];

export const FEATURED_CATEGORIES = [
  { id: 'cat-tabs', name: 'Tablets', icon: 'Pills', count: '120+ Brands' },
  { id: 'cat-caps', name: 'Capsules', icon: 'Sparkle', count: '90+ Brands' },
  { id: 'cat-syrups', name: 'Syrups', icon: 'GlassWater', count: '60+ Types' },
  { id: 'cat-inject', name: 'Injections', icon: 'Syringe', count: '45+ Essential' },
  { id: 'cat-equip', name: 'Medical Equipment', icon: 'HeartPulse', count: '15+ Devices' },
  { id: 'cat-protein', name: 'Protein Supplements', icon: 'Dumbbell', count: '25+ Brands' },
  { id: 'cat-vitamins', name: 'Vitamins', icon: 'Activity', count: '40+ Options' },
  { id: 'cat-skin', name: 'Skin Care', icon: 'Smile', count: '50+ Products' },
  { id: 'cat-baby', name: 'Baby Products', icon: 'Baby', count: '30+ Essentials' },
  { id: 'cat-hygiene', name: 'Personal Hygiene', icon: 'ShieldAlert', count: '35+ items' },
  { id: 'cat-ortho', name: 'Orthopedic Support', icon: 'Accessibility', count: '20+ Supports' },
  { id: 'cat-diab', name: 'Diabetic Care', icon: 'TrendingUp', count: '30+ Essentials' }
];
