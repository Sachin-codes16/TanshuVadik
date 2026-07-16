import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';

const PinterestIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0a12 12 0 0 0-4.373 23.178c-.035-.947-.007-2.086.235-3.115.26-1.104 1.732-7.34 1.732-7.34s-.442-.883-.442-2.19c0-2.05 1.19-3.582 2.67-3.582 1.258 0 1.866.944 1.866 2.077 0 1.265-.805 3.157-1.222 4.91-.347 1.467.735 2.663 2.18 2.663 2.618 0 4.396-3.362 4.396-7.35 0-3.03-2.04-5.296-5.75-5.296-4.19 0-6.804 3.124-6.804 6.615 0 1.204.354 2.05.912 2.706.256.302.29.424.198.77-.067.253-.219.87-.282 1.113-.093.354-.375.48-.69.35-1.926-.786-2.822-2.898-2.822-5.271 0-3.92 3.305-8.623 9.86-8.623 5.27 0 8.74 3.815 8.74 7.91 0 5.418-3.005 9.465-7.436 9.465-1.49 0-2.89-.804-3.368-1.72l-.917 3.593c-.332 1.216-.98 2.432-1.575 3.383A12 12 0 1 0 12 0z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { setIsPortalOpen } = useInquiry();
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

  const quickLinks = [
    { label: 'About Us', href: '#heritage' },
    { label: 'Collections', href: '#collections' },
    { label: 'Capabilities', href: '#collections' },
    { label: 'Sustainability', href: '#presence' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer id="footer-root" className="bg-[#FAF8F5] text-[#2C2623]/90 py-16 border-t border-[#8F533C]/20">
      <div className="max-w-[1280px] mx-auto px-6">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Bestselling Collection CTA Column */}
        <div className="w-full h-full flex flex-col justify-start items-start gap-5 bg-[#2C2623] pl-5 pr-8 py-8 md:pl-6 md:pr-10 md:py-10">
          <h4 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white leading-tight">
            Let's Build Your Next Bestselling Collection
          </h4>
          <p className="font-sans text-xs text-[#EBE4DC]/80 leading-relaxed font-light">
            Whether you are launching a new brand or expanding your existing range, we are here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <button
              onClick={() => setIsPortalOpen(true)}
              className="px-3 py-2 bg-[#8F533C] hover:bg-[#723F2B] text-white font-sans text-[9px] font-bold tracking-wide uppercase transition-colors cursor-pointer whitespace-nowrap"
            >
              Request Catalogue
            </button>
            <a
              href="mailto:info@tanshuvaidik.com.au?subject=Meeting%20Request"
              className="px-3 py-2 border border-white/40 text-white hover:bg-white hover:text-[#2C2623] font-sans text-[9px] font-bold tracking-wide uppercase transition-colors whitespace-nowrap"
            >
              Book a Meeting
            </a>
          </div>
        </div>

        {/* Stay Updated Column */}
        <div className="flex flex-col items-start gap-4 md:pl-24">
          <h4 className="font-serif text-lg font-bold tracking-wide text-[#2C2623]">
            Stay Updated
          </h4>
          <p className="font-sans text-xs text-[#615751] leading-relaxed font-light">
            Subscribe to our newsletter for new arrivals, trends and exclusive insights.
          </p>

          {success ? (
            <div className="text-[#8F533C] text-xs font-semibold flex items-center gap-1.5 bg-[#8F533C]/10 p-2 border border-[#8F533C]/30 w-full rounded-none">
              Subscribed! Check inbox.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email"
                className="bg-white border border-[#8F533C]/25 text-xs p-2.5 focus:outline-[#8F533C] text-[#2C2623] font-sans flex-grow rounded-none placeholder:text-[#615751]/50"
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

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-1">
            <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#8F533C]/30 text-[#2C2623]/70 hover:border-[#8F533C] hover:text-[#8F533C] transition-colors">
              <Facebook size={15} />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#8F533C]/30 text-[#2C2623]/70 hover:border-[#8F533C] hover:text-[#8F533C] transition-colors">
              <Instagram size={15} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#8F533C]/30 text-[#2C2623]/70 hover:border-[#8F533C] hover:text-[#8F533C] transition-colors">
              <Linkedin size={15} />
            </a>
            <a href="#" aria-label="Pinterest" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#8F533C]/30 text-[#2C2623]/70 hover:border-[#8F533C] hover:text-[#8F533C] transition-colors">
              <PinterestIcon />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col items-start gap-4 md:pl-40">
          <h4 className="font-serif text-lg font-bold tracking-wide text-[#2C2623]">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2.5 text-xs text-[#615751]">
            {quickLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-[#8F533C] transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Us Column */}
        <div className="flex flex-col items-start gap-4 md:pl-32">
          <h4 className="font-serif text-lg font-bold tracking-wide text-[#2C2623]">
            Contact Us
          </h4>
          <div className="flex flex-col gap-3 text-xs text-[#615751]">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#8F533C] shrink-0" />
              +61 2 9999 9166
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#8F533C] shrink-0" />
              info@tanshuvaidik.com.au
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#8F533C] shrink-0" />
              Panipat, Haryana, India
            </div>
          </div>
        </div>

      </div>

      </div>
    </footer>
  );
};
