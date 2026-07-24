import React from 'react';

const weavingImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDAgdEoJ388LYmLORQcLJNBrO3JtaR3-S-DyJB-hesRiPrvyrIBm3_Cqb38k7mKj2EL0pYUdsloUVvN4WdPpZWo9GZVnRHlX51HXdVSY-ydP7t7UClRXp7DjFvdEPaCWp_CGrPBwJ3xqhwzOkTDpMhJ_LAuHEHZ3-GHXbegT5K1Huu4T_Usb0AHedf-Jhy7xjAIyVHmGlCuWr4IJeOtxKvCjTjIB67dRkDAa-f1T9inhnqi6avKF6UvjAEBV5zzqkY7LLLmgv3-KVQ';

export const AboutIntro: React.FC = () => {
  return (
    <section id="about-intro" className="py-14 sm:py-16 bg-[#FAF8F5]">
      <div className="w-full px-[20px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="flex flex-col gap-4">
          <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#8F533C] uppercase">
            OUR STORY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2623] font-medium tracking-tight uppercase">
            About Tanshu Vaidik
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed">
            Tanshu Vaidik India Pvt. Ltd. is a leading manufacturer and exporter of premium handcrafted
            home décor, home furnishing, and pet lifestyle products based in Panipat, India. With years of
            expertise in traditional weaving and modern manufacturing, we bring together the finest
            craftsmanship, innovative designs, and global quality standards to create products that add
            value to homes and brands worldwide.
          </p>
          <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed">
            Our journey is built on the dedication of skilled artisans who preserve generations of Indian
            craftsmanship while embracing contemporary techniques and sustainable production methods.
            Every product is thoughtfully designed, carefully handcrafted, and rigorously inspected to
            ensure exceptional quality, durability, and aesthetic appeal.
          </p>
          <p className="font-sans text-sm sm:text-base text-[#615751] leading-relaxed">
            At Tanshu Vaidik, quality, transparency, ethical manufacturing, and customer satisfaction are
            at the heart of everything we do. Our commitment to timely deliveries, competitive pricing,
            sustainable practices, and long-term partnerships has helped us build a strong presence in
            the USA, Europe, Australia, the Middle East, Japan, and many other international markets. We
            continue to connect the timeless beauty of Indian craftsmanship with the evolving demands of
            the global marketplace.
          </p>
        </div>

        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <img
            src={weavingImage}
            alt="Artisan hands weaving on a handloom"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};
