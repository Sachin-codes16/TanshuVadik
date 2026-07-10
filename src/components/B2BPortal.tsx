import React, { useState } from 'react';
import { useInquiry } from '../context/InquiryContext';
import {
  X,
  ClipboardList,
  Calendar,
  Send,
  Trash2,
  CheckCircle,
  FileText,
  Mail,
  Building,
  User,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const B2BPortal: React.FC = () => {
  const { cart, removeFromCart, clearCart, isPortalOpen, setIsPortalOpen } = useInquiry();

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('USA');
  const [inquiryType, setInquiryType] = useState<'catalog' | 'meeting' | 'samples'>('samples');
  const [message, setMessage] = useState('');
  
  // Meeting Schedule State
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');

  // UI Status
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const countriesList = [
    { code: 'USA', name: 'United States', officer: 'Sarah Connor', email: 'usa@tanshuvaidik.com' },
    { code: 'Europe', name: 'Germany / Europe', officer: 'Hans Dieter', email: 'eu@tanshuvaidik.com' },
    { code: 'Australia', name: 'Australia / NZ', officer: 'Liam Hemsworth', email: 'au@tanshuvaidik.com' },
    { code: 'India', name: 'India / Asia', officer: 'Rajesh Sharma', email: 'factory@tanshuvaidik.com' },
  ];

  const activeOfficerObj = countriesList.find((c) => c.code === country) || countriesList[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Validations
    if (!name.trim()) return setValidationError('Full name is required.');
    if (!email.trim() || !email.includes('@')) return setValidationError('Valid corporate email is required.');
    if (!company.trim()) return setValidationError('Company/Wholesale business name is required.');
    if (!message.trim()) return setValidationError('Please write a brief note about your wholesale volume.');

    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setCountry('USA');
    setInquiryType('samples');
    setMessage('');
    setMeetingDate('');
    setMeetingTime('');
    setValidationError('');
    setSubmitted(false);
    clearCart();
    setIsPortalOpen(false);
  };

  return (
    <>
      {/* 1. COMPACT ON-PAGE INTEGRATED FORM SECTION (Always Visible on the Page) */}
      <section id="inquiry-form" className="py-24 bg-[#F4EFEA]">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context Text */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#8F533C] uppercase">
                B2B INQUIRY HUB
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2623] tracking-tight font-medium leading-tight">
                Partner with Tanshu Vaidik
              </h2>
              <div className="h-0.5 w-16 bg-[#8F533C]" />
            </div>

            <p className="font-sans text-sm text-[#615751] leading-relaxed font-light">
              Submit your private label specifications, schedule a wholesale alignment meeting, or request custom physical swatches. Our trade compliance officer from your respective region will contact you directly.
            </p>

            <div className="flex flex-col gap-4 border-t border-[#EBE4DC] pt-6 text-xs text-[#615751]">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 border border-[#8F533C]/30 text-[#8F533C]">
                  <FileText size={16} />
                </div>
                <div>
                  <span className="font-bold text-[#2C2623] block">Instant Spec Sheets</span>
                  Get complete high-res product catalogues with packaging dimensions.
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white p-2 border border-[#8F533C]/30 text-[#8F533C]">
                  <Calendar size={16} />
                </div>
                <div>
                  <span className="font-bold text-[#2C2623] block">Video Consultations</span>
                  Discuss custom weave structures directly with our factory weavers in India.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="lg:col-span-7 bg-white border border-[#EBE4DC] p-8 md:p-10 shadow-xs">
            {submitted ? (
              <div className="text-center py-8 flex flex-col items-center gap-4">
                <div className="text-green-600"><CheckCircle size={48} /></div>
                <h3 className="font-serif text-2xl text-[#2C2623] font-medium">Inquiry Received Successfully</h3>
                
                <div className="bg-[#FAF8F5] border border-[#EBE4DC] p-6 text-xs text-[#615751] max-w-md leading-relaxed mt-2 text-left flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 font-bold uppercase text-[10px] text-[#8F533C] tracking-widest border-b border-[#EBE4DC] pb-2">
                    <Sparkles size={12} />
                    Regional Dispatch Notice
                  </div>
                  <p>
                    Your trade inquiry has been logged in our factory. To provide rapid assistance, we have routed your profile to:
                  </p>
                  <div>
                    <span className="block font-semibold text-[#2C2623]">{activeOfficerObj.officer}</span>
                    <span className="block text-[#615751]">Senior Account Specialist ({activeOfficerObj.code})</span>
                    <span className="block text-[#8F533C]">{activeOfficerObj.email}</span>
                  </div>
                  <p className="italic text-[10px] text-[#615751] border-t border-[#EBE4DC] pt-2">
                    *A confirmation docket and digital catalog has been sent to {email}. Expected follow up within 4 hours.
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-6 px-6 py-2.5 bg-[#2C2623] hover:bg-[#8F533C] text-white font-button text-xs tracking-widest transition-colors cursor-pointer rounded-none"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Form header */}
                <div className="flex items-center gap-2 border-b border-[#EBE4DC] pb-3 mb-2">
                  <ClipboardList size={18} className="text-[#8F533C]" />
                  <span className="font-sans text-xs font-semibold tracking-wider text-[#2C2623] uppercase">
                    Integrated RFQ Dispatch Form
                  </span>
                  {cart.length > 0 && (
                    <span className="ml-auto bg-[#8F533C] text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                      {cart.length} items in RFQ
                    </span>
                  )}
                </div>

                {validationError && (
                  <div className="bg-red-50 border-l-4 border-red-600 p-3 text-xs text-red-700">
                    {validationError}
                  </div>
                )}

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-[11px] font-semibold text-[#615751] uppercase tracking-wider">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-3 text-[#615751]/60" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Johnathan Doe"
                        className="w-full pl-9 pr-3 py-2 text-xs font-sans border border-[#EBE4DC] bg-[#FAF8F5] text-[#2C2623] focus:outline-[#8F533C] rounded-none focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-[11px] font-semibold text-[#615751] uppercase tracking-wider">
                      Corporate Email
                    </label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-3 text-[#615751]/60" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="buyer@departmentstore.com"
                        className="w-full pl-9 pr-3 py-2 text-xs font-sans border border-[#EBE4DC] bg-[#FAF8F5] text-[#2C2623] focus:outline-[#8F533C] rounded-none focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-[11px] font-semibold text-[#615751] uppercase tracking-wider">
                      Company / Showroom Name
                    </label>
                    <div className="relative">
                      <Building size={14} className="absolute left-3 top-3 text-[#615751]/60" />
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Heritage living Group Pty"
                        className="w-full pl-9 pr-3 py-2 text-xs font-sans border border-[#EBE4DC] bg-[#FAF8F5] text-[#2C2623] focus:outline-[#8F533C] rounded-none focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-[11px] font-semibold text-[#615751] uppercase tracking-wider">
                      Regional Location
                    </label>
                    <div className="relative">
                      <MapPin size={14} className="absolute left-3 top-3 text-[#615751]/60" />
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs font-sans border border-[#EBE4DC] bg-[#FAF8F5] text-[#2C2623] focus:outline-[#8F533C] rounded-none focus:bg-white transition-colors"
                      >
                        {countriesList.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Inquiry Type and Meeting schedule toggle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[11px] font-semibold text-[#615751] uppercase tracking-wider">
                      Inquiry Target Objectives
                    </label>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { id: 'samples', label: 'Request Swatches & Samples' },
                        { id: 'catalog', label: 'Request PDF Catalog Sheets' },
                        { id: 'meeting', label: 'Book Wholesale Virtual Meeting' },
                      ].map((t) => (
                        <label key={t.id} className="flex items-center gap-2 text-xs font-sans text-[#615751] cursor-pointer">
                          <input
                            type="radio"
                            name="inquiry-obj"
                            checked={inquiryType === t.id}
                            onChange={() => setInquiryType(t.id as any)}
                            className="accent-[#8F533C]"
                          />
                          {t.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Date Time picker if meeting is selected */}
                  <AnimatePresence>
                    {inquiryType === 'meeting' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col gap-2 bg-[#FAF8F5] p-3 border border-[#EBE4DC]"
                      >
                        <span className="font-sans text-[10px] font-bold text-[#8F533C] uppercase tracking-wider">
                          Schedule Alignment Consultation
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="date"
                            value={meetingDate}
                            onChange={(e) => setMeetingDate(e.target.value)}
                            className="p-1.5 border border-[#EBE4DC] text-[11px] font-sans bg-white focus:outline-[#8F533C]"
                            required
                          />
                          <input
                            type="time"
                            value={meetingTime}
                            onChange={(e) => setMeetingTime(e.target.value)}
                            className="p-1.5 border border-[#EBE4DC] text-[11px] font-sans bg-white focus:outline-[#8F533C]"
                            required
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message / Specifications */}
                <div className="flex flex-col gap-1">
                  <label className="font-sans text-[11px] font-semibold text-[#615751] uppercase tracking-wider">
                    Volume Requirements & Custom Requests
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Describe your target purchase volumes, private labeling needs, packaging custom designs, or target ports..."
                    className="w-full p-3 text-xs font-sans border border-[#EBE4DC] bg-[#FAF8F5] text-[#2C2623] focus:outline-[#8F533C] rounded-none focus:bg-white transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full mt-4 py-4 bg-[#2C2623] hover:bg-[#8F533C] text-white font-button text-xs tracking-widest transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  Submit Consolidate RFQ
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* 2. SLIDING DRAWER MODAL (Triggered via Navbar Badge / Header clicks) */}
      <AnimatePresence>
        {isPortalOpen && (
          <div className="fixed inset-y-0 right-0 z-[100] flex justify-end w-full max-w-full">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPortalOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-xs cursor-pointer"
            />

            {/* Modal Drawer Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="relative w-full max-w-md bg-[#FAF8F5] border-l border-[#EBE4DC] shadow-2xl flex flex-col h-full z-10 p-6 md:p-8"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-[#EBE4DC] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <ClipboardList size={20} className="text-[#8F533C]" />
                  <h3 className="font-serif text-lg font-bold text-[#2C2623]">RFQ Inquiry Desk</h3>
                </div>
                <button
                  onClick={() => setIsPortalOpen(false)}
                  className="p-1.5 hover:bg-[#F4EFEA] text-[#615751] hover:text-[#2C2623] transition-colors rounded-none cursor-pointer"
                  aria-label="Close desk"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Cart Items listing */}
              <div className="flex-grow overflow-y-auto pr-1 flex flex-col gap-4">
                {cart.length === 0 ? (
                  <div className="text-center py-16 flex flex-col items-center gap-3">
                    <ClipboardList size={36} className="text-[#E0D7CD] animate-pulse" />
                    <h4 className="font-serif text-base text-[#2C2623] font-medium">Your inquiry desk is empty</h4>
                    <p className="font-sans text-xs text-[#615751] leading-relaxed max-w-xs font-light">
                      Browse our Home Decor and Pet Living catalogs, clicking "Add to RFQ" to select products for dynamic bulk rate analysis.
                    </p>
                    <button
                      onClick={() => setIsPortalOpen(false)}
                      className="mt-4 px-5 py-2 border border-[#2C2623] text-[#2C2623] font-button text-[11px] tracking-wider transition-all hover:bg-[#2C2623] hover:text-white cursor-pointer rounded-none"
                    >
                      Browse Catalogues
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between text-[11px] font-sans font-bold text-[#615751] uppercase tracking-wider mb-1">
                      <span>Selected products for quote</span>
                      <button
                        onClick={clearCart}
                        className="text-red-600 hover:underline cursor-pointer flex items-center gap-1 font-semibold"
                      >
                        <Trash2 size={12} /> Clear List
                      </button>
                    </div>

                    <div className="flex flex-col gap-3">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start gap-3 bg-white border border-[#EBE4DC] p-3 relative group"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover border border-[#EBE4DC] shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex flex-col gap-0.5 pr-6">
                            <span className="font-sans text-[9px] font-bold text-[#8F533C] uppercase tracking-wider">
                              {item.subcategory}
                            </span>
                            <h4 className="font-serif text-sm font-medium text-[#2C2623] line-clamp-1">
                              {item.name}
                            </h4>
                            <span className="font-sans text-[10px] text-[#615751]">
                              MOQ: {item.minOrderQuantity} | Lead Time: {item.leadTime}
                            </span>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="absolute top-2 right-2 p-1 text-[#615751] hover:text-red-600 transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Next step visual indicator */}
                    <div className="bg-[#F4EFEA] border-l-2 border-[#8F533C] p-4 text-[11px] leading-relaxed text-[#615751] font-light mt-4 flex items-start gap-2">
                      <Sparkles size={14} className="text-[#8F533C] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-sans font-bold text-[#2C2623] block uppercase text-[9px] tracking-wider mb-0.5">
                          Consolidated Quotation Active
                        </span>
                        We compile these {cart.length} items into a unified bulk specification and coordinate logistics for a single FOB delivery port.
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Drawer Footer Submission Form (If there are items) */}
              {cart.length > 0 && (
                <div className="border-t border-[#EBE4DC] pt-6 mt-6">
                  <a
                    href="#inquiry-form"
                    onClick={() => setIsPortalOpen(false)}
                    className="w-full inline-block py-4 bg-[#2C2623] hover:bg-[#8F533C] text-white font-button text-xs tracking-widest text-center transition-colors rounded-none cursor-pointer border border-[#2C2623]"
                  >
                    Proceed to Dispatch Form &rarr;
                  </a>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
