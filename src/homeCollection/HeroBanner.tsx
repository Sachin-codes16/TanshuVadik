import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '../assets/collection/homedog.png';

const SLIDE_COUNT = 3;

export const HeroBanner: React.FC<{ onExploreCollections: () => void }> = ({ onExploreCollections }) => {
  return (
    <section className="relative min-h-[520px] sm:min-h-[600px] flex items-center overflow-hidden bg-[#FAF8F5]">
      {/* Full-bleed background image with gradient overlay for legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Crafted collections for every lifestyle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-[#FAF8F5] from-70% to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-16 sm:py-20 w-full">
        <div className="flex flex-col gap-5 max-w-lg">
          <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#8F533C] uppercase">
            Handcrafted with Care
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2C2623] font-medium leading-[1.1]">
            Crafted Collections
            <br />
            for <em className="italic text-[#8F533C]">Every</em> Lifestyle
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed max-w-md">
            Thoughtfully designed home décor and pet essentials, inspired by nature and made for
            modern living.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={onExploreCollections}
              className="px-7 py-3 bg-[#16294B] hover:bg-[#0E1B33] text-white font-button text-xs tracking-widest uppercase transition-colors cursor-pointer"
            >
              Explore Collections
            </button>
            <button className="flex items-center gap-2 font-sans text-xs font-bold tracking-widest uppercase text-[#2C2623] hover:text-[#16294B] transition-colors cursor-pointer">
              <span className="w-8 h-8 rounded-full border border-[#2C2623]/30 flex items-center justify-center">
                <Play size={12} fill="currentColor" />
              </span>
              Watch Our Story
            </button>
          </div>

          {/* Decorative slide indicator */}
          <div className="flex items-center gap-2 mt-6">
            {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full ${index === 0 ? 'w-6 bg-[#16294B]' : 'w-2 bg-[#2C2623]/20'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative prev / next controls */}
      <button
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#2C2623] hover:text-[#16294B] transition-colors cursor-pointer"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/25 backdrop-blur-sm border border-white/50 shadow-md flex items-center justify-center text-white hover:bg-black/40 transition-colors cursor-pointer"
      >
        <ChevronRight size={18} />
      </button>
    </section>
  );
};
