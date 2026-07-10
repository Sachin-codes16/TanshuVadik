import React, { useState } from 'react';
import { Mail, Phone, MapPin, ClipboardCheck, Sparkles, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes('@')) {
      setSuccess(true);
      setTimeout(() => {
        setEmailInput('');
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <footer id="footer-root" className="bg-[#2C2623] text-white/90 pt-20 pb-12 border-t border-[#8F533C]/20">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16 mb-12">
        
        {/* Brand Column (4 Cols) */}
        <div className="md:col-span-4 flex flex-col items-start gap-4 text-white">
          <div className="flex flex-col select-none">
            <span className="font-serif text-2xl font-bold tracking-wider text-white">
              TANSHU VAIDIK
            </span>
            <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#8F533C] uppercase">
              Ethical Artistry in Textiles
            </span>
          </div>
          
          <p className="font-sans text-xs text-[#EBE4DC]/80 leading-relaxed font-light max-w-sm">
            We operate fully audited integrated handloom facilities in Panipat, India, weaving premium organic home furnishings and sustainable pet comfort beds for international brands and global designers.
          </p>

          <div className="flex flex-col gap-2.5 mt-2 text-xs text-[#EBE4DC]/70">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#8F533C] shrink-0" />
              Sector 25 HUDA, Panipat - 132103, Haryana, India
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#8F533C] shrink-0" />
              +91 180 266 4230
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#8F533C] shrink-0" />
              factory@tanshuvaidik.com
            </div>
          </div>
        </div>

        {/* Quick Links Column (2.5 Cols) */}
        <div className="md:col-span-2 md:col-offset-1 flex flex-col items-start gap-4">
          <h4 className="font-serif text-sm font-bold tracking-widest text-[#8F533C] uppercase">
            Navigation
          </h4>
          <div className="flex flex-col gap-2.5 text-xs text-[#EBE4DC]/70">
            <a href="#hero-root" className="hover:text-[#8F533C] transition-colors">Top Overview</a>
            <a href="#heritage" className="hover:text-[#8F533C] transition-colors">Our Weaving Heritage</a>
            <a href="#collections" className="hover:text-[#8F533C] transition-colors">Conscious Catalog</a>
            <a href="#presence" className="hover:text-[#8F533C] transition-colors">Global Logistics Map</a>
            <a href="#inquiry-form" className="hover:text-[#8F533C] transition-colors">Wholesale Inquiry Hub</a>
          </div>
        </div>

        {/* Regional Specialists Contacts (2.5 Cols) */}
        <div className="md:col-span-3 flex flex-col items-start gap-4">
          <h4 className="font-serif text-sm font-bold tracking-widest text-[#8F533C] uppercase">
            Regional Specialists
          </h4>
          <div className="flex flex-col gap-4 text-xs text-[#EBE4DC]/70 font-light">
            <div>
              <span className="block font-semibold text-white">North America Liaison</span>
              <span className="text-[11px] block text-white/60">Sarah Connor &bull; usa@tanshuvaidik.com</span>
            </div>
            <div>
              <span className="block font-semibold text-white">European Union Liaison</span>
              <span className="text-[11px] block text-white/60">Hans Dieter &bull; eu@tanshuvaidik.com</span>
            </div>
            <div>
              <span className="block font-semibold text-white">Oceania Trade Representative</span>
              <span className="text-[11px] block text-white/60">Liam Hemsworth &bull; au@tanshuvaidik.com</span>
            </div>
          </div>
        </div>

        {/* B2B Newsletter / Sample Reservation (3 Cols) */}
        <div className="md:col-span-3 flex flex-col items-start gap-4">
          <h4 className="font-serif text-sm font-bold tracking-widest text-[#8F533C] uppercase">
            Seasonal Outlooks
          </h4>
          <p className="font-sans text-xs text-[#EBE4DC]/80 leading-relaxed font-light">
            Subscribe to receive our seasonal print lookbooks, raw yarn dye samples, and direct invitations to regional B2B trade alignments.
          </p>

          {success ? (
            <div className="text-[#8F533C] text-xs font-semibold flex items-center gap-1.5 bg-[#8F533C]/10 p-2 border border-[#8F533C]/30 w-full rounded-none">
              <ClipboardCheck size={14} />
              Lookbook Reserved! Check inbox.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="buyer@corporate.com"
                className="bg-white/5 border border-white/10 text-xs p-2.5 focus:outline-[#8F533C] text-white font-sans flex-grow rounded-none placeholder:text-[#EBE4DC]/40"
              />
              <button
                type="submit"
                className="bg-[#8F533C] hover:bg-white hover:text-[#2C2623] text-white px-3 transition-colors rounded-none cursor-pointer border border-[#8F533C]"
                aria-label="Subscribe"
              >
                <Send size={14} />
              </button>
            </form>
          )}
          <span className="font-sans text-[9px] text-white/40 italic mt-0.5">
            *We value privacy. No spam. B2B communications only.
          </span>
        </div>

      </div>

      {/* Footer Bottom Credentials and Disclaimers */}
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-[#EBE4DC]/60 text-[11px] font-sans">
        <div className="flex flex-col sm:items-start text-center sm:text-left gap-1">
          <span>&copy; {new Date().getFullYear()} Tanshu Vaidik Heritage. All Rights Reserved.</span>
          <span className="text-[10px] text-white/30 font-light">
            Plot No. 423-424, Sector 25 Part-II, HUDA, Panipat, Haryana, India.
          </span>
        </div>

        {/* Global Compliance Badges brief */}
        <div className="text-[10px] text-white/30 font-semibold uppercase tracking-wider">
          Handloomed Heritage &bull; Made in India
        </div>
      </div>
    </footer>
  );
};
