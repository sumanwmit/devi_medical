import { X, Shield, FileText, Scale } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  if (!isOpen || !type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      icon: <Shield className="h-6 w-6 text-emerald-600" />,
      body: (
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p>
            At <strong>Dev Medical</strong> (located in Titaiganj, Makhdumpur, Bihar), we highly value the confidentiality and privacy of our patients and customers. This Privacy Policy details how we handle the personal information you supply through our website and WhatsApp ordering system.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100">1. Information We Collect</h4>
          <p>
            When you use our WhatsApp Order Form or contact us, we collect details necessary to verify your order and prepare your prescription:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your Name and mobile phone number.</li>
            <li>Your physical delivery or pick-up address.</li>
            <li>Copies or photos of your doctor’s prescriptions (strictly for prescription-only medicines).</li>
            <li>Inquiry details about specific vitamins, OTC pills, or equipment.</li>
          </ul>
          <h4 className="font-bold text-slate-800 dark:text-slate-100">2. How We Use Your Data</h4>
          <p>
            We process your information exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Review prescriptions by a registered pharmacist as mandated by the Drugs and Cosmetics Act of India.</li>
            <li>Pack and prepare the exact dosages required.</li>
            <li>Contact you via WhatsApp or telephone for order confirmations or payment coordination.</li>
            <li>Verify local delivery coordinates.</li>
          </ul>
          <h4 className="font-bold text-slate-800 dark:text-slate-100">3. Information Protection</h4>
          <p>
            We do not sell, rent, or lease your private patient logs, names, or contact data to third-party marketing companies. Prescription photos uploaded through our mock-file uploader are processed locally on your device or packaged safely into a secure chat format to launch directly into your personal WhatsApp, keeping it confidential and within end-to-end encrypted chats.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100">4. Compliance with Drugs Control Guidelines</h4>
          <p>
            We adhere strictly to state and national drugs control laws in Bihar. All personal patient logs can be shared only under legal subpoena by certified medical inspectoral staff or national law enforcement.
          </p>
        </div>
      )
    },
    terms: {
      title: 'Terms & Conditions',
      icon: <Scale className="h-6 w-6 text-blue-600" />,
      body: (
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p>
            By visiting or ordering from the <strong>Dev Medical</strong> website, you agree to comply with and be bound by the following Terms and Conditions:
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100">1. Verification of Prescriptions</h4>
          <p>
            Dev Medical reserves the right to deny the sale of any Schedule H, Schedule H1, or Schedule X drugs without a valid, original prescription issued by a registered medical practitioner (RMP). Uploading a prescription photo through our WhatsApp support form does not guarantee drug dispensation. Our physical counter pharmacist must verify the validity before final handover.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100">2. Pricing and Availability</h4>
          <p>
            While we strive to ensure pricing accuracy, drug prices are subject to frequent updates determined by the National Pharmaceutical Pricing Authority (NPPA) or manufacturers. The price written on the physical packaging (M.R.P.) at our retail counter in Titaiganj shall be considered the final binding transaction price.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100">3. Local Delivery & Pick-Up</h4>
          <p>
            All delivery orders via WhatsApp are restricted to Makhdumpur and proximate local areas in Bihar. Outstation courier delivery is not supported. Customers must be over 18 years of age to order medications.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100">4. Return Policy</h4>
          <p>
            To ensure patient safety, medications once sold cannot be returned or exchanged if the protective security seal or blister packaging has been torn, cut, or damaged. Life-saving cold-chain items (such as insulin) are strictly non-returnable.
          </p>
        </div>
      )
    },
    disclaimer: {
      title: 'Medical Disclaimer',
      icon: <FileText className="h-6 w-6 text-amber-600" />,
      body: (
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            Please Read This Medical Disclaimer Carefully Before Relying on Any Information:
          </p>
          <p>
            All content, images, medical equipment descriptions, health blogs, FAQs, and medicine catalogs listed on this website are compiled for general, public educational informational purposes only.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100">1. No Professional Medical Advice</h4>
          <p>
            Our website is not a doctor, telehealth platform, or diagnostic clinic. The lists of vitamins, tablets, and healthcare devices are not professional medical advice, prescription guides, or clinical diagnoses. Never ignore certified professional advice from your doctor or delay seeking immediate care because of something you read here.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100">2. Brand & Generic Alternatives</h4>
          <p>
            Any discussion regarding generic alternatives or branded drugs is for comparison purposes only. Do not switch prescribed medications or alter your active dosages without consulting your primary consulting physician.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100">3. Liability Disclaimer</h4>
          <p>
            Dev Medical and its employees are not responsible or liable for any adverse side effects, allergic reactions, or medical emergencies arising from self-medicating, misinterpreting our catalog, or using medical diagnostic devices sold at our store without professional guidance.
          </p>
        </div>
      )
    }
  };

  const activeContent = contentMap[type];

  return (
    <div id="legal-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        id="legal-modal-container"
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-850 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-2.5">
            {activeContent.icon}
            <h2 className="font-sans font-bold text-xl text-slate-900 dark:text-white">
              {activeContent.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="h-5.5 w-5.5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh] space-y-4">
          {activeContent.body}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
