import React from 'react';
import heartBehindImage from '../assets/images/heartbehind.png';

export const About: React.FC = () => {
  return (
    <section
      id="heritage"
      className="pt-14 sm:pt-16 bg-[#FAF8F5] border-t border-[#EBE4DC]"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] items-start">

        {/* LEFT SIDE: Artisan Image */}
        <div className="relative w-full h-56 sm:h-72 lg:h-auto overflow-hidden">
          <img
            src={heartBehindImage}
            alt="Master artisan hand-detailing a woven rug"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* RIGHT SIDE: Editorial Content */}
        <div className="flex flex-col justify-start gap-4 px-6 sm:px-12 lg:px-16 pt-6 lg:pt-0 pb-8 sm:pb-6 lg:pb-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2623] tracking-tight font-medium leading-tight">
            The Heart Behind Every Piece
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed font-medium">
            Our artisans bring generations of skill, care and passion to everything we create.
          </p>
          <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed font-medium">
            Every product is made with care in every detail, designed to last long.
          </p>
          <a
            href="#heritage"
            className="mt-2 w-fit px-6 py-3 border border-[#8F533C] text-[#8F533C] hover:bg-[#8F533C] hover:text-white transition-all duration-300 font-sans text-xs tracking-widest uppercase font-semibold"
          >
            MEET OUR ARTISANS &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
