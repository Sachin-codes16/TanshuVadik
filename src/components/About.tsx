import React, { useState } from 'react';
import { Heart, User, Sparkles, Sprout } from 'lucide-react';
import { artisans } from '../data';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'legacy' | 'process' | 'sustainability'>('legacy');
  const leadArtisan = artisans[0];

  const infoBlocks = {
    legacy: {
      title: 'Centuries of Looming Knowledge',
      subtitle: 'Passed from mother to daughter, father to son.',
      content:
        'Panipat, Haryana has remained India’s traditional heartland of heavy-weaving artistry for generations. Our workshop acts as a safe haven where ancient techniques—like raw tie-dyeing, manual warp-sizing, and shuttle setting—are preserved and compensated fairly, keeping authentic handlooms competitive in a modern industrial world.',
      stat: '22+',
      statLabel: 'Years Head-Weaver Tenure',
    },
    process: {
      title: 'Zero-Carbon Hand Spinning',
      subtitle: 'Pure tension, pure natural fiber.',
      content:
        'We refuse high-speed pneumatic weaving machines that crush fibers. Instead, our weavers use traditional wooden pit-looms and frame looms where they regulate structural tension completely by hand. This results in heavy-weight, irregular, and beautiful organic drapes that are impossible for modern factories to replicate.',
      stat: '100%',
      statLabel: 'Handcrafted Integrity',
    },
    sustainability: {
      title: 'Unbleached Organic Yarns',
      subtitle: 'Nourished by the soil, free of toxic dyes.',
      content:
        'Every cotton and jute thread we loom enters our floor in its raw, unbleached, cream or sandy state. We source all dye pigments from local vegetation, indigo bushes, and marigold gardens. Water discharge from our dye lab is 100% bio-remediated and reused on local farmlands, leaving a clean footprint for future weavers.',
      stat: '0%',
      statLabel: 'Toxic Effluents Discharged',
    },
  };

  return (
    <section
      id="heritage"
      className="py-24 bg-[#FAF8F5] border-t border-[#EBE4DC]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Editorial Title Header exactly matching mockup theme */}
        <div className="flex flex-col items-start gap-3 mb-16 max-w-2xl">
          <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#8F533C] uppercase">
            OUR LEGACY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2623] tracking-tight font-medium leading-tight">
            The Heart Behind Every Piece
          </h2>
          <div className="h-0.5 w-16 bg-[#8F533C]" />
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Narrative, Tabbed Exploration */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8">
            <p className="font-sans text-lg text-[#615751] font-light leading-relaxed">
              Tanshu Vaidik represents the absolute harmony of high ethical standards and bespoke artistic quality. We believe that home decor and pet essentials should not just occupy a room—they should carry a history, support a life, and leave the earth untroubled.
            </p>

            {/* Selector Tabs */}
            <div className="flex border-b border-[#EBE4DC] w-full gap-2 sm:gap-6 overflow-x-auto pb-px">
              {(Object.keys(infoBlocks) as Array<keyof typeof infoBlocks>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`py-3 text-xs font-semibold tracking-widest uppercase transition-all border-b-2 whitespace-nowrap cursor-pointer ${
                    activeTab === key
                      ? 'border-[#8F533C] text-[#2C2623]'
                      : 'border-transparent text-[#615751] hover:text-[#2C2623]'
                  }`}
                >
                  {key === 'legacy' && 'Heritage Looming'}
                  {key === 'process' && 'The Handloom Method'}
                  {key === 'sustainability' && 'Eco Stewardship'}
                </button>
              ))}
            </div>

            {/* Tab Content Card */}
            <div className="min-h-[220px] flex flex-col gap-4">
              <span className="font-sans text-[11px] font-bold tracking-[0.1em] text-[#8F533C] uppercase">
                {infoBlocks[activeTab].subtitle}
              </span>
              <h3 className="font-serif text-2xl text-[#2C2623] font-medium">
                {infoBlocks[activeTab].title}
              </h3>
              <p className="font-sans text-sm text-[#615751] leading-relaxed max-w-xl font-light">
                {infoBlocks[activeTab].content}
              </p>

              {/* Mini Stat display styled with high contrast warmth */}
              <div className="flex items-center gap-4 mt-4 p-4 bg-[#F4EFEA] border-l-4 border-[#8F533C] w-fit">
                <span className="font-serif text-3xl font-bold text-[#2C2623]">
                  {infoBlocks[activeTab].stat}
                </span>
                <span className="font-sans text-xs font-semibold text-[#615751] uppercase tracking-wider">
                  {infoBlocks[activeTab].statLabel}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Visual Tribute to Weaver */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-white border border-[#EBE4DC] p-6 shadow-xs">
            
            {/* The Image Wrapper with zoom effect */}
            <div className="relative overflow-hidden aspect-4/5 w-full bg-[#FAF8F5] border border-[#EBE4DC]">
              <img
                src={leadArtisan.image}
                alt="Portrait of Sharmila Devi at a traditional wooden handloom"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#2C2623]/95 text-white py-1 px-3 text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
                <User size={12} className="text-[#8F533C]" />
                Featured Master Artisan
              </div>
            </div>

            {/* Artisan Bio */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl font-bold text-[#2C2623]">
                  {leadArtisan.name}
                </span>
                <span className="font-sans text-xs font-semibold text-[#8F533C] uppercase tracking-wider">
                  {leadArtisan.role}
                </span>
              </div>
              
              <p className="font-sans text-xs text-[#615751] leading-relaxed font-light italic bg-[#FAF8F5] p-4 border border-[#EBE4DC]">
                "{leadArtisan.quote}"
              </p>
              
              <p className="font-sans text-xs text-[#615751] leading-relaxed">
                {leadArtisan.bio}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Quote Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#EBE4DC]">
          <div className="flex flex-col gap-3 p-4">
            <div className="text-[#8F533C]"><Sprout size={28} /></div>
            <h4 className="font-serif text-lg font-medium text-[#2C2623]">100% Traceability</h4>
            <p className="font-sans text-xs text-[#615751] leading-relaxed font-light">
              We trace every batch of organic cotton and jute right back to individual verified farming collectives in northern India.
            </p>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <div className="text-[#8F533C]"><Heart size={28} /></div>
            <h4 className="font-serif text-lg font-medium text-[#2C2623]">Direct Benefit Wages</h4>
            <p className="font-sans text-xs text-[#615751] leading-relaxed font-light">
              By removing trading middlemen, we payout 35% higher wages directly to weavers, funding local girls' primary schooling.
            </p>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <div className="text-[#8F533C]"><Sparkles size={28} /></div>
            <h4 className="font-serif text-lg font-medium text-[#2C2623]">Uptight Double-Weave</h4>
            <p className="font-sans text-xs text-[#615751] leading-relaxed font-light">
              Our unique tension setting adds 40% more thread density per inch, creating rugged home decor and bite-resistant pet fabrics.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
