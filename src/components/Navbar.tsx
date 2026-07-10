import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ClipboardList } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, setIsPortalOpen } = useInquiry();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'ABOUT US', href: '#heritage' },
    { label: 'COLLECTIONS', href: '#collections' },
    { label: 'CAPABILITIES', href: '#collections' }, // Navigates to weave simulator & info
    { label: 'SUSTAINABILITY', href: '#presence' },
    { label: 'CERTIFICATIONS', href: '#certifications' },
    { label: 'CONTACT US', href: '#contact' },
  ];

  return (
    <nav
      id="navbar-root"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EBE4DC] py-4 shadow-xs'
          : 'bg-[#FAF8F5]/70 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo exactly as requested */}
        <a href="#" className="flex items-baseline gap-2 select-none group">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.05em] text-[#2C2623] group-hover:text-[#8F533C] transition-colors">
            TANSHU VAIDIK
          </span>
          <span className="font-sans text-[10px] font-medium tracking-[0.1em] text-[#615751] uppercase border-l border-[#EBE4DC] pl-2 hidden sm:inline">
            India Pvt. Ltd.
          </span>
        </a>

        {/* Desktop Links with active underline micro-interactions */}
        <div className="hidden lg:flex items-center gap-7">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative font-sans text-xs font-semibold text-[#2C2623] hover:text-[#8F533C] tracking-widest transition-colors py-1 nav-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button & Inquiry Badge */}
        <div className="flex items-center gap-4">
          
          {/* Envelope/Mail Icon */}
          <a
            href="mailto:info@tanshuvaidik.com.au"
            className="text-[#2C2623] hover:text-[#8F533C] p-1.5 transition-colors hidden sm:block"
            title="Email us directly"
          >
            <Mail size={18} />
          </a>

          {/* REQUEST CATALOGUE CTA (with optional badge) */}
          <button
            id="rfq-trigger-btn"
            onClick={() => setIsPortalOpen(true)}
            className="relative flex items-center gap-1.5 sm:gap-2 border border-[#8F533C] bg-[#8F533C] hover:bg-[#2C2623] hover:border-[#2C2623] text-white px-3 sm:px-5 py-2 sm:py-2.5 font-button text-[10px] sm:text-[11px] tracking-widest transition-all duration-300 rounded-none cursor-pointer shadow-xs shrink-0"
          >
            <ClipboardList size={13} className="shrink-0" />
            <span className="hidden min-[380px]:inline">REQUEST CATALOGUE</span>
            <span className="inline min-[380px]:hidden">CATALOGUE</span>
            {cart.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#2C2623] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-[#FAF8F5]">
                {cart.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#2C2623] hover:text-[#8F533C] p-1 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-[72px] left-0 w-full bg-[#FAF8F5] border-b border-[#EBE4DC] px-6 py-8 flex flex-col gap-6 z-40 shadow-lg"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-xs font-bold text-[#2C2623] hover:text-[#8F533C] tracking-widest border-b border-[#F4EFEA] pb-2 transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex items-center gap-4 pt-2">
              <a
                href="mailto:info@tanshuvaidik.com.au"
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 border border-[#EBE4DC] text-[#2C2623] text-center font-button text-[11px] tracking-wider flex items-center justify-center gap-2"
              >
                <Mail size={14} />
                EMAIL DIRECT
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsPortalOpen(true);
                }}
                className="flex-1 py-3 bg-[#8F533C] hover:bg-[#2C2623] text-white font-button text-[11px] tracking-wider flex items-center justify-center gap-2"
              >
                <ClipboardList size={14} />
                CATALOGUE ({cart.length})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
