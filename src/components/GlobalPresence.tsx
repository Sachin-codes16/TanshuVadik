import React, { useState } from 'react';
import { offices } from '../data';
import { MapPin, Globe, Phone, Mail, Building } from 'lucide-react';

export const GlobalPresence: React.FC = () => {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>('india-factory');

  const activeOffice = offices.find((o) => o.id === selectedOfficeId) || offices[0];

  return (
    <section id="presence" className="py-24 bg-[#FAF8F5] border-b border-[#EBE4DC]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-3xl mx-auto">
          <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#8F533C] uppercase">
            GLOBAL NETWORK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2623] tracking-tight font-bold leading-none uppercase">
            GLOBAL PRESENCE.<br />
            LOCAL COMMITMENT.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#5C544F] max-w-2xl">
            Proudly manufacturing in India and serving buyers across the world.
          </p>
          <div className="h-0.5 w-16 bg-[#8F533C]" />
        </div>

        {/* Dynamic Map and Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* MAP CANVAS (Interactive Overlays) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative border border-[#EBE4DC] bg-[#FAF8F5] w-full aspect-16/10 overflow-hidden select-none">
              
              {/* World Map Background */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKoBaZ0rlNuVgvn47qrRsUDQbdiBYpjU-81mJ_vel0IDu420_Ch2NDLggsvqUgXzBkfiTkhHB0Tj82HiqlpVXvQ0mKc6n4nuHOgHFodeDf4nJZyQDAP0p3S0tD2OIXoTdeIETmeJ64XHo54RsL7Uuo7ysZp7xh-KXmVKAFWMxdZEb6x-nA4vPRReQTpWg0ruQz09s5_DFhgLWR3NQ87YU8MLP9Zhxg9SCXS6TiEdf1unyi-g8NH1KhJQv14ixzON7lUVtlazRBJ4A"
                alt="Integrated global trade routes map showing sea and air corridors"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />

              {/* Absolute Positioned Map Pins */}
              {offices.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setSelectedOfficeId(office.id)}
                  style={{ top: office.coords.top, left: office.coords.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 group transition-all duration-300 z-10 cursor-pointer ${
                    selectedOfficeId === office.id ? 'scale-125' : 'scale-100'
                  }`}
                >
                  {/* Pin Circle Pulsar */}
                  <div className="relative">
                    <span
                      className={`absolute inset-0 rounded-full h-full w-full opacity-75 ${
                        selectedOfficeId === office.id
                          ? 'animate-ping bg-red-600'
                          : 'group-hover:animate-ping bg-[#8F533C]'
                      }`}
                    />
                    <div
                      className={`h-5 w-5 rounded-full flex items-center justify-center border-2 border-white shadow-md transition-colors ${
                        selectedOfficeId === office.id ? 'bg-red-600' : 'bg-[#8F533C]'
                      }`}
                    >
                      <MapPin size={10} className="text-white" />
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 bg-[#2C2623] text-white text-[9px] font-bold tracking-wider py-1 px-2 whitespace-nowrap rounded-none opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {office.country.toUpperCase()}
                  </div>
                </button>
              ))}

              <div className="absolute bottom-3 left-3 bg-white/95 border border-[#EBE4DC] py-1 px-3 text-[9px] font-bold text-[#615751] uppercase tracking-widest flex items-center gap-1 shadow-xs">
                <Globe size={11} className="text-[#8F533C]" />
                Interactive Coordinates Map
              </div>
            </div>

            {/* Quick map helpers list */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {offices.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setSelectedOfficeId(office.id)}
                  className={`py-2 px-3 border font-sans text-xs transition-colors cursor-pointer text-center rounded-none font-medium truncate ${
                    selectedOfficeId === office.id
                      ? 'bg-[#2C2623] text-white border-[#2C2623]'
                      : 'bg-white border-[#EBE4DC] hover:border-[#615751] text-[#615751]'
                  }`}
                >
                  {office.country}
                </button>
              ))}
            </div>
          </div>

          {/* CONTACT INFO CARD (Selected Office Details) */}
          <div className="lg:col-span-5 bg-white border border-[#EBE4DC] p-8 md:p-10 flex flex-col justify-between min-h-[380px] shadow-xs">
            <div className="flex flex-col gap-5">
              
              {/* Card Title */}
              <div className="flex items-center gap-3 border-b border-[#EBE4DC] pb-4">
                <div className="bg-[#F4EFEA] p-2.5 text-[#8F533C] border border-[#EBE4DC]/30">
                  <Building size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#2C2623] font-medium leading-tight">
                    {activeOffice.name}
                  </h3>
                  <span className="font-sans text-[10px] font-bold tracking-widest text-[#8F533C] uppercase mt-0.5 block">
                    Region: {activeOffice.country} Operations
                  </span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#8F533C] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] font-bold text-[#615751] uppercase tracking-wider">
                    Full Address
                  </span>
                  <p className="font-sans text-xs text-[#615751] leading-relaxed font-light mt-0.5">
                    {activeOffice.address}
                  </p>
                </div>
              </div>

              {/* Operation Details */}
              <div className="bg-[#F4EFEA]/60 border-l-2 border-[#8F533C] p-4 text-xs leading-relaxed text-[#615751] font-light">
                <span className="font-sans text-[9px] font-bold text-[#615751] uppercase block tracking-wider mb-1">
                  Logistics & Operations Scope
                </span>
                {activeOffice.highlight}
              </div>

              {/* Contact methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 border-t border-[#FAF8F5] pt-4">
                <div className="flex items-center gap-2 text-xs">
                  <Phone size={14} className="text-[#8F533C]" />
                  <a href={`tel:${activeOffice.phone}`} className="text-[#615751] hover:text-[#8F533C] font-sans font-light">
                    {activeOffice.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Mail size={14} className="text-[#8F533C]" />
                  <a href={`mailto:${activeOffice.email}`} className="text-[#615751] hover:text-[#8F533C] font-sans font-light">
                    {activeOffice.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Action Button */}
            <div className="mt-8 pt-6 border-t border-[#EBE4DC]">
              <a
                href="#inquiry-form"
                className="w-full inline-block py-3 bg-[#2C2623] hover:bg-[#8F533C] text-white font-button text-xs tracking-widest text-center transition-all duration-300 rounded-none shadow-xs"
              >
                Inquire With This Hub
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
