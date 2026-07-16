import React from 'react';
import { MapPin } from 'lucide-react';

interface RoutePin {
  label: string;
  sub?: string;
  top: string;
  left: string;
  isHub?: boolean;
}

const pins: RoutePin[] = [
  { label: 'USA', top: '28%', left: '10%' },
  { label: 'EUROPE', top: '14%', left: '40%' },
  { label: 'MIDDLE EAST', top: '32%', left: '54%' },
  { label: 'JAPAN', top: '18%', left: '78%' },
  { label: 'AUSTRALIA', sub: 'Head Office', top: '66%', left: '73%', isHub: true },
  { label: 'NEW ZEALAND', top: '78%', left: '92%' },
];

const hub = pins.find((p) => p.isHub)!;
const routes = pins.filter((p) => !p.isHub);

export const GlobalPresence: React.FC = () => {
  return (
    <section id="presence" className="pt-3 pb-10 bg-[#FAF8F5]">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT: Heading & CTA */}
        <div className="lg:col-span-5 flex flex-col items-start gap-4">
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
        <div className="lg:col-span-7 relative w-full aspect-[16/9] select-none overflow-hidden bg-[#FAF8F5]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKoBaZ0rlNuVgvn47qrRsUDQbdiBYpjU-81mJ_vel0IDu420_Ch2NDLggsvqUgXzBkfiTkhHB0Tj82HiqlpVXvQ0mKc6n4nuHOgHFodeDf4nJZyQDAP0p3S0tD2OIXoTdeIETmeJ64XHo54RsL7Uuo7ysZp7xh-KXmVKAFWMxdZEb6x-nA4vPRReQTpWg0ruQz09s5_DFhgLWR3NQ87YU8MLP9Zhxg9SCXS6TiEdf1unyi-g8NH1KhJQv14ixzON7lUVtlazRBJ4A"
            alt="World trade route map"
            className="absolute left-0 w-full object-cover opacity-5"
            referrerPolicy="no-referrer"
            style={{
              filter: 'grayscale(1) brightness(1.6)',
              top: '-22%',
              height: '140%',
            }}
          />

          {/* Route Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {routes.map((p) => {
              const x1 = parseFloat(hub.left);
              const y1 = parseFloat(hub.top);
              const x2 = parseFloat(p.left);
              const y2 = parseFloat(p.top);
              const cx = (x1 + x2) / 2;
              const cy = Math.min(y1, y2) - 12;
              return (
                <path
                  key={p.label}
                  d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.5"
                  strokeDasharray="1.5 1.5"
                  opacity="0.85"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          {/* Pins */}
          {pins.map((pin) => (
            <div
              key={pin.label}
              style={{ top: pin.top, left: pin.left }}
              className="absolute -translate-x-1/2 -translate-y-full flex flex-col items-center gap-0.5"
            >
              <MapPin size={26} className="text-[#8F533C]" fill="#8F533C" strokeWidth={1} />
              <span className="font-sans text-[10px] font-bold text-[#2C2623] uppercase tracking-wide whitespace-nowrap mt-0.5">
                {pin.label}
              </span>
              {pin.sub && (
                <span className="font-sans text-[9px] text-[#615751] whitespace-nowrap">
                  {pin.sub}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
