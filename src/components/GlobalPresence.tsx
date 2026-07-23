import React from 'react';
import { MapPin } from 'lucide-react';
import worldMapImage from '../assets/images/WhatsApp Image 2026-07-23 at 12.24.23.jpeg';

interface RoutePin {
  label: string;
  sub?: string;
  top: string;
  left: string;
}

const pins: RoutePin[] = [
  { label: 'USA', top: '32%', left: '23%' },
  { label: 'EUROPE', top: '29%', left: '52%' },
  { label: 'MIDDLE EAST', top: '38%', left: '62%' },
  { label: 'JAPAN', top: '34%', left: '80%' },
  { label: 'AUSTRALIA', sub: 'Head Office', top: '64%', left: '83%' },
  { label: 'NEW ZEALAND', top: '79%', left: '91%' },
];

export const GlobalPresence: React.FC = () => {
  return (
    <section id="presence" className="pt-8 pb-0 bg-[#FAF8F5]">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT: Heading & CTA */}
        <div className="lg:col-span-4 flex flex-col items-start gap-4">
          <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#8F533C] uppercase">
            GLOBAL NETWORK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2623] tracking-tight font-bold leading-none uppercase">
            GLOBAL PRESENCE.<br />
            LOCAL COMMITMENT.
          </h2>
          <p className="font-sans text-base text-[#5C544F] max-w-xs">
            Proudly manufacturing in India and serving buyers across the world.
          </p>
          <a
            href="#footer-root"
            className="mt-2 inline-block px-6 py-3 border border-[#2C2623] text-[#2C2623] hover:bg-[#2C2623] hover:text-white font-sans text-xs font-bold tracking-widest uppercase transition-colors"
          >
            View Our Global Network &rarr;
          </a>
        </div>

        {/* RIGHT: Route Map */}
        <div className="lg:col-span-8 relative w-full aspect-[1600/1131] select-none overflow-hidden bg-[#FAF8F5]">
          <div className="absolute inset-0">
            <img
              src={worldMapImage}
              alt="World trade route map"
              className="absolute inset-0 w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />

            {/* Each marker is centered directly above its country label. */}
            {pins.map((pin) => (
              <div
                key={pin.label}
                style={{ top: pin.top, left: pin.left }}
                className="absolute -translate-x-1/2 flex flex-col items-center"
              >
                <MapPin size={29} className="text-[#955039]" fill="#955039" strokeWidth={1} />
                <span className="mt-1 font-sans text-[11px] font-light text-[#2C2623] uppercase tracking-wide whitespace-nowrap">
                  {pin.label}
                </span>
                {pin.sub && (
                  <span className="font-sans text-[8px] text-[#615751] leading-none whitespace-nowrap">
                    {pin.sub}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
