import React from 'react';
import { MapPin } from 'lucide-react';
import worldMapImage from '../assets/images/ChatGPT Image Jul 20, 2026, 02_30_02 PM.png';

interface RoutePin {
  label: string;
  sub?: string;
  top: string;
  left: string;
  showLabel?: boolean;
}

const pins: RoutePin[] = [
  { label: 'USA', top: '32%', left: '27%' },
  { label: 'EUROPE', top: '30%', left: '51%' },
  { label: 'MIDDLE EAST', top: '38%', left: '61%', showLabel: true },
  { label: 'JAPAN', top: '35%', left: '81%' },
  { label: 'AUSTRALIA', sub: 'Head Office', top: '60%', left: '78%' },
  { label: 'NEW ZEALAND', top: '71%', left: '84%' },
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
        <div className="lg:col-span-8 relative w-full aspect-[3/2] select-none overflow-hidden bg-[#FAF8F5]">
          {/* Zoom wrapper: scales the map image and its pins together so the
              baked-in empty margin of the source artwork shrinks while every
              landmass and pin stays fully in view (no cropping). */}
          <div
            className="absolute inset-0"
            style={{ transform: 'scale(1.3) translateY(10%)', transformOrigin: 'center' }}
          >
            <img
              src={worldMapImage}
              alt="World trade route map"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Pins */}
            {pins.map((pin) => (
              <div
                key={pin.label}
                style={{ top: pin.top, left: pin.left }}
                className="absolute -translate-x-1/2 -translate-y-full"
              >
                <MapPin size={26} className="text-[#8F533C]" fill="#8F533C" strokeWidth={1} />
              </div>
            ))}

            {/* Pin name/sub-labels (kept out of the pin's own translate so it doesn't shift the route anchor) */}
            {pins.map((pin) => (pin.sub || pin.showLabel) && (
              <div
                key={`${pin.label}-sub`}
                style={{ top: pin.top, left: pin.left }}
                className="absolute -translate-x-1/2 mt-1 flex flex-col items-center gap-0.5"
              >
                {pin.showLabel && (
                  <span className="font-sans text-[10px] font-bold text-[#2C2623] uppercase tracking-wide whitespace-nowrap">
                    {pin.label}
                  </span>
                )}
                {pin.sub && (
                  <span className="font-sans text-[9px] text-[#615751] whitespace-nowrap">
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
