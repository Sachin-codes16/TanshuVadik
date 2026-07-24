import React from 'react';
import { Layers, Users, ClipboardList, Globe } from 'lucide-react';
import worldMapImage from '../assets/images/WhatsApp Image 2026-07-23 at 12.24.23.jpeg';

const stats = [
  { icon: <Layers size={26} className="text-[#8F533C]" strokeWidth={1.5} />, value: '20+', label: 'Product Categories' },
  { icon: <Users size={26} className="text-[#8F533C]" strokeWidth={1.5} />, value: '100+', label: 'Skilled Artisans' },
  { icon: <ClipboardList size={26} className="text-[#8F533C]" strokeWidth={1.5} />, value: 'OEM', label: 'Private Label Solutions' },
  { icon: <Globe size={26} className="text-[#8F533C]" strokeWidth={1.5} />, value: 'Global', label: 'Shipping & Delivery' },
];

interface MapPin {
  label: string;
  sub?: string;
  top: string;
  left: string;
}

const pins: MapPin[] = [
  { label: 'INDIA', sub: 'Manufacturing', top: '33%', left: '62%' },
  { label: 'AUSTRALIA', sub: 'Head Office', top: '70%', left: '83%' },
];

export const AboutStats: React.FC = () => {
  return (
    <section className="py-4 sm:py-5 bg-[#FAF8F5]">
      <div className="w-full px-[20px] flex flex-col gap-6">
        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 bg-[#EBE4DC] px-6 py-6"
            >
              <div className="shrink-0">{s.icon}</div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-[#2C2623] font-bold leading-none">{s.value}</span>
                <span className="font-sans text-xs text-[#615751] mt-1">{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global markets map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 relative w-full aspect-[1600/794] select-none overflow-hidden bg-[#FAF8F5]">
            <img
              src={worldMapImage}
              alt="Tanshu Vaidik global markets map"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {pins.map((pin) => (
              <div
                key={pin.label}
                style={{ top: pin.top, left: pin.left }}
                className="absolute -translate-x-1/2 flex flex-col items-center"
              >
                <span className="w-3 h-3 rounded-full bg-[#8F533C] border-2 border-white shadow-sm" />
                <span className="mt-1 font-sans text-[11px] font-bold text-[#2C2623] uppercase tracking-wide whitespace-nowrap">
                  {pin.label}
                </span>
                {pin.sub && (
                  <span className="font-sans text-[9px] text-[#615751] leading-none whitespace-nowrap">
                    {pin.sub}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-medium uppercase tracking-tight">
              Delivering Craftsmanship to Global Markets
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed">
              With world-class manufacturing facilities in Panipat, India, and a strategic head office in
              Australia, Tanshu Vaidik proudly delivers premium handcrafted home décor, textiles, and
              lifestyle products to customers across the globe. Our strong international presence enables
              us to serve buyers in the USA, Europe, the Middle East, Japan, Australia, and many other
              global markets with reliability and consistency.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed">
              We combine the rich heritage of Indian craftsmanship with modern production techniques, strict
              quality control, and efficient supply chain management. From concept development and product
              customization to manufacturing, packaging, and worldwide shipping, we provide complete
              end-to-end solutions tailored to each client's unique requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
