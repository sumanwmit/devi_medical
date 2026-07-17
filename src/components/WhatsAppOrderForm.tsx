import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { Send, Phone, Upload, CheckCircle2, Trash2, Clock, CalendarDays } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export default function WhatsAppOrderForm() {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [message, setMessage] = useState('');
  const [preferredTime, setPreferredTime] = useState('Any Time (08:00 AM - 09:30 PM)');
  
  // Prescription upload state
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleFileSelection = (file: File) => {
    setPrescriptionFile(file);
    // Create image preview if it is an image
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setPrescriptionPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPrescriptionPreview(null); // PDF or other file
    }
  };

  const removeFile = () => {
    setPrescriptionFile(null);
    setPrescriptionPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!customerName || !mobileNumber || !medicineName || !address) {
      alert('Please fill in Name, Phone, Medicine Required, and Delivery Address.');
      return;
    }

    const hasPrescription = prescriptionFile ? 'Yes (Attached & sharing on Chat)' : 'No';

    // Format WhatsApp message
    const formattedText = `Hello Dev Medical,

I would like to place an order for medicines. Here are my details:

*Customer Name:* ${customerName}
*Phone:* ${mobileNumber}
*Email:* ${email || 'Not Provided'}
*Medicine Required:* ${medicineName}
*Delivery Address:* ${address}
*Preferred Time:* ${preferredTime}
*Prescription Uploaded:* ${hasPrescription}
*Message:* ${message || 'None'}`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedText}`;

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div 
      id="whatsapp-order-card"
      className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800/80 p-6 md:p-8 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0A8F6A]"></div>

      {isSuccess ? (
        <div className="py-12 text-center space-y-4 animate-fade-in">
          <div className="inline-flex p-4 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] rounded-full">
            <CheckCircle2 className="h-12 w-12 animate-pulse" />
          </div>
          <h3 className="font-sans font-bold text-2xl text-slate-900 dark:text-white">
            Order Form Formatted!
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Opening WhatsApp to send your secure order. Please check your chat box and click send.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-sans font-bold text-2xl text-blue-900 dark:text-blue-400">
              WhatsApp Medicine Order Form
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Submit your list of requirements below. It generates a formatted template to message our Titaiganj counter instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div className="space-y-1">
              <label htmlFor="customer-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="customer-name"
                required
                placeholder="Enter your full name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl font-sans text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] transition-all"
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-1">
              <label htmlFor="mobile-number" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobile-number"
                required
                placeholder="Enter 10-digit mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl font-sans text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="customer-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Email Address <span className="text-slate-400">(Optional)</span>
              </label>
              <input
                type="email"
                id="customer-email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl font-sans text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] transition-all"
              />
            </div>

            {/* Preferred Delivery/Pick-up Time */}
            <div className="space-y-1">
              <label htmlFor="preferred-time" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-blue-600" />
                  Preferred Delivery/Pick-up Time
                </span>
              </label>
              <select
                id="preferred-time"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl font-sans text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] transition-all cursor-pointer"
              >
                <option value="Any Time (08:00 AM - 09:30 PM)">Any Time (08:00 AM - 09:30 PM)</option>
                <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                <option value="Evening (04:00 PM - 09:30 PM)">Evening (04:00 PM - 09:30 PM)</option>
              </select>
            </div>
          </div>

          {/* Medicines required */}
          <div className="space-y-1">
            <label htmlFor="medicines-list" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
              Medicines Required <span className="text-red-500">*</span>
            </label>
            <textarea
              id="medicines-list"
              required
              rows={3}
              placeholder="List down medicine names with quantities. Example:&#10;1. Dolo 650mg - 2 strips&#10;2. Multivitamin caps - 1 strip"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl font-sans text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] transition-all"
            />
          </div>

          {/* Delivery Address */}
          <div className="space-y-1">
            <label htmlFor="delivery-address" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
              Delivery / Store Pick-up Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="delivery-address"
              required
              placeholder="Enter complete address in Makhdumpur or write 'Store Self Pick-up'"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl font-sans text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] transition-all"
            />
          </div>

          {/* Custom Prescription Uploader (Highly interactive) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
              Upload Prescription <span className="text-slate-400 font-normal">(Required for prescription drugs)</span>
            </label>
            
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all flex flex-col items-center justify-center ${
                isDragging
                  ? 'border-[#0A8F6A] bg-[#0A8F6A]/5'
                  : 'border-slate-200 dark:border-slate-800 hover:border-[#0A8F6A]/70 dark:hover:border-[#0A8F6A]/50 hover:bg-slate-50/50 dark:hover:bg-slate-900/30'
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*,application/pdf"
                className="hidden"
              />

              {prescriptionFile ? (
                <div className="w-full space-y-3" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-950 p-2.5 rounded-lg border border-slate-100 dark:border-slate-850 text-left">
                    <div className="flex items-center space-x-2 overflow-hidden mr-2">
                      <div className="p-1.5 bg-emerald-50 dark:bg-emerald-950/50 text-[#0A8F6A] rounded-md shrink-0">
                        <CheckCircle2 className="h-4.5 w-4.5" />
                      </div>
                      <div className="truncate text-xs font-sans">
                        <p className="font-semibold text-slate-800 dark:text-slate-200 truncate">{prescriptionFile.name}</p>
                        <p className="text-slate-400">{(prescriptionFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors shrink-0"
                      title="Remove file"
                    >
                      <Trash2 className="h-4.5 w-4.5" />
                    </button>
                  </div>
                  {prescriptionPreview && (
                    <div className="relative mx-auto max-w-[120px] max-h-[120px] rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
                      <img src={prescriptionPreview} alt="Prescription preview" className="object-cover w-full h-full" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-2 pointer-events-none">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-full inline-block">
                    <Upload className="h-6 w-6" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-700 dark:text-slate-300">
                      Drag & Drop Prescription or <span className="text-blue-600 underline">Browse</span>
                    </p>
                    <p className="text-slate-400 mt-1">Supports PNG, JPG, JPEG, and PDF</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Special Message */}
          <div className="space-y-1">
            <label htmlFor="special-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
              Special Message / Delivery Instructions <span className="text-slate-400">(Optional)</span>
            </label>
            <input
              type="text"
              id="special-message"
              placeholder="e.g., Leave with security guard, call before reaching, generic alternative preferred"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl font-sans text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] transition-all"
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#0A8F6A] hover:bg-[#087b5b] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Send className="h-4.5 w-4.5" />
              <span>Send Order via WhatsApp</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold rounded-xl border border-slate-200 dark:border-slate-700 transition-all text-center"
            >
              <Phone className="h-4.5 w-4.5 text-blue-600" />
              <span>Call store to order</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
