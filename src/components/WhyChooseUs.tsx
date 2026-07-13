import React from 'react';
import { Palette, Landmark, ShieldCheck, Leaf, Tag, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <Palette className="w-6 h-6 text-[#8F533C]" strokeWidth={1.5} />,
      title: 'DESIGN & PRODUCT DEVELOPMENT',
      description: 'Trend-driven designs and custom collections tailored to your brand.',
    },
    {
      icon: <Landmark className="w-6 h-6 text-[#8F533C]" strokeWidth={1.5} />,
      title: 'AUSTRALIAN HEAD OFFICE',
      description: 'Seamless communication and dedicated support for global buyers.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#8F533C]" strokeWidth={1.5} />,
      title: 'MANUFACTURING EXCELLENCE',
      description: 'Skilled craftsmanship with scalable production capabilities.',
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#8F533C]" strokeWidth={1.5} />,
      title: 'SUSTAINABLE MATERIALS',
      description: 'Natural, eco-friendly fibers and responsible manufacturing.',
    },
    {
      icon: <Tag className="w-6 h-6 text-[#8F533C]" strokeWidth={1.5} />,
      title: 'PRIVATE LABEL SOLUTIONS',
      description: 'End-to-end private label services from concept to shelf.',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#8F533C]" strokeWidth={1.5} />,
      title: 'EXPORT EXPERTISE',
      description: 'Documentation, compliance and logistics support for smooth exports.',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#EBE4DC]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2623] font-medium tracking-tight">
            Why Global Buyers Choose TanshU
          </h2>
          <div className="h-[1px] bg-[#8F533C]/30 w-16 my-1" />
          <p className="font-sans text-sm sm:text-base text-[#615751] italic">
            Partner with a manufacturer that understands your market and grows with your brand.
          </p>
        </div>

        {/* 6-Column Grid in a straight left-to-right row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4 lg:gap-6 text-center justify-center items-start">
          {benefits.map((b, index) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center gap-3.5 group"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full border border-[#EBE4DC] bg-white flex items-center justify-center shadow-xs group-hover:border-[#8F533C]/40 group-hover:shadow-sm transition-all duration-300 shrink-0">
                {b.icon}
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-sans text-[10px] lg:text-xs font-bold tracking-[0.08em] text-[#2C2623] leading-snug">
                  {b.title}
                </h3>
                <p className="font-sans text-[10px] lg:text-xs text-[#615751] leading-relaxed max-w-[150px] mx-auto font-light">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
