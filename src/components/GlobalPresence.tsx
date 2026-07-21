import React from 'react';
import { MapPin } from 'lucide-react';
import worldMapImage from '../assets/images/ChatGPT Image Jul 20, 2026, 02_30_02 PM.png';

interface RoutePin {
  label: string;
  sub?: string;
  top: string;
  left: string;
  isHub?: boolean;
  bend?: number;
  control?: { x: number; y: number };
  showLabel?: boolean;
}

const pins: RoutePin[] = [
  { label: 'USA', top: '32%', left: '27%', bend: 30 },
  { label: 'EUROPE', top: '30%', left: '51%', bend: 20 },
  { label: 'MIDDLE EAST', top: '38%', left: '61%', showLabel: true, bend: 16 },
  { label: 'JAPAN', top: '35%', left: '81%', bend: 16 },
  { label: 'AUSTRALIA', sub: 'Head Office', top: '60%', left: '78%', isHub: true },
  { label: 'NEW ZEALAND', top: '71%', left: '84%', bend: 16 },
];

const hub = pins.find((p) => p.isHub)!;
const routes = pins.filter((p) => !p.isHub);

// Anchor route lines at the top of each pin's head (not its tip) so a line never crosses the label sitting below it
const ICON_TOP_OFFSET = 5;

export const GlobalPresence: React.FC = () => {
  return (
    <section id="presence" className="pt-8 pb-0 bg-[#FAF8F5]">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

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
        <div className="lg:col-span-7 relative w-full aspect-[3/2] select-none overflow-hidden bg-[#FAF8F5]">
          <img
            src={worldMapImage}
            alt="World trade route map"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          {/* Route Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="routeArrow"
                markerWidth="6"
                markerHeight="6"
                refX="3"
                refY="3"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L6,3 L0,6 Z" fill="#000000" />
              </marker>
            </defs>
            {routes.map((p) => {
              // Anchor at the top of each pin's head (not its tip) so the line never crosses the label below it
              const x1 = parseFloat(p.left);
              const y1 = parseFloat(p.top) - ICON_TOP_OFFSET;
              const x2 = parseFloat(hub.left);
              const y2 = parseFloat(hub.top) - ICON_TOP_OFFSET;
              const cx = p.control?.x ?? (x1 + x2) / 2;
              const cy = p.control?.y ?? Math.min(y1, y2) - (p.bend ?? 14);
              return (
                <path
                  key={p.label}
                  d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1"
                  strokeDasharray="1.5 1.5"
                  opacity="1"
                  vectorEffect="non-scaling-stroke"
                  markerEnd="url(#routeArrow)"
                />
              );
            })}
          </svg>

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
    </section>
  );
};
