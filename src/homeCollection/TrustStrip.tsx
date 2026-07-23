import React from 'react';
import { HeartHandshake, Leaf, ShieldCheck, Globe, PenLine } from 'lucide-react';

const items = [
  {
    icon: <HeartHandshake size={30} />,
    title: 'Handmade Excellence',
    description: 'Skilled artisans crafting with passion and care.',
  },
  {
    icon: <Leaf size={30} />,
    title: 'Sustainable Materials',
    description: 'Responsibly sourced for a better tomorrow.',
  },
  {
    icon: <ShieldCheck size={30} />,
    title: 'Export Quality',
    description: 'Manufactured to meet global quality standards.',
  },
  {
    icon: <Globe size={30} />,
    title: 'Worldwide Delivery',
    description: 'Reliable shipping and support across the globe.',
  },
  {
    icon: <PenLine size={30} />,
    title: 'Custom Solutions',
    description: 'Custom designs, private label and bulk production.',
  },
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5] border-t border-[#EBE4DC] pt-8 pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="text-[#16294B] shrink-0 mt-0.5">{item.icon}</span>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-sans text-xs font-bold text-[#2C2623]">{item.title}</h3>
                <p className="font-sans text-[11px] text-[#615751] leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
