import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data';
import { Product } from '../types';
import { ProductShowcaseModal } from '../components/ProductShowcaseModal';
import homeCollectionImage from '../assets/collection/HomeCollection.png';
import petUtilityImage from '../assets/collection/Petutility.png';
import seasonalCollectionImage from '../assets/collection/SesonalCollection.png';
import homeIcon from '../assets/Icons/HomeCollection.png';
import petIcon from '../assets/Icons/Petutility.png';
import seasonalIcon from '../assets/Icons/Sesonal.png';

interface CardConfig {
  key: Product['collection'];
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const cards: CardConfig[] = [
  {
    key: 'home-decor',
    title: 'Home Collection',
    description: 'Elevate your living spaces with timeless handcrafted home décor.',
    image: homeCollectionImage,
    icon: <img src={homeIcon} alt="" className="w-7 h-7 object-contain" />,
  },
  {
    key: 'pet-living',
    title: 'Pet Utility',
    description: 'Premium pet essentials that blend comfort, quality and style.',
    image: petUtilityImage,
    icon: <img src={petIcon} alt="" className="w-7 h-7 object-contain" />,
  },
  {
    key: 'seasonal',
    title: 'Seasonal Collection',
    description: 'Curated collections inspired by every season and celebration.',
    image: seasonalCollectionImage,
    icon: <img src={seasonalIcon} alt="" className="w-7 h-7 object-contain" />,
  },
];

interface CollectionCardsSectionProps {
  onOpenHomeCollection: () => void;
  onOpenSeasonalCollection: () => void;
}

export const CollectionCardsSection: React.FC<CollectionCardsSectionProps> = ({
  onOpenHomeCollection,
  onOpenSeasonalCollection,
}) => {
  const [activeCollection, setActiveCollection] = useState<CardConfig | null>(null);

  const activeProducts = useMemo(
    () => (activeCollection ? products.filter((p) => p.collection === activeCollection.key) : []),
    [activeCollection]
  );

  const handleCardClick = (card: CardConfig) => {
    if (card.key === 'home-decor') {
      onOpenHomeCollection();
    } else if (card.key === 'seasonal') {
      onOpenSeasonalCollection();
    } else {
      setActiveCollection(card);
    }
  };

  return (
    <section className="bg-[#FAF8F5] pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-3 mb-7">
          <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#8F533C] uppercase">
            Explore Our Collections
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-medium tracking-tight">
            Designed for Your Home. Loved by Your Pets.
          </h2>
          <div className="h-[2px] w-14 bg-[#8F533C]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => handleCardClick(card)}
              className="group cursor-pointer relative overflow-hidden rounded-xl border border-[#EBE4DC] hover:border-[#16294B]/30 hover:shadow-lg transition-all duration-300 aspect-[16/9]"
            >
              {/* Background image with gradient overlay, same treatment as the hero */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Icon + text overlaid on top of the image */}
              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#EBE4DC] flex items-center justify-center text-[#16294B]">
                  {card.icon}
                </div>

                <div className="flex flex-col gap-2 max-w-[75%]">
                  <h3 className="font-serif text-xl text-black font-bold">{card.title}</h3>
                  <p className="font-sans text-sm text-black/80 leading-relaxed font-semibold">
                    {card.description}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-widest uppercase text-[#16294B] group-hover:gap-2.5 transition-all">
                    Discover More
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product listing modal for the selected collection */}
      <AnimatePresence>
        {activeCollection && (
          <ProductShowcaseModal
            heading={activeCollection.title}
            products={activeProducts}
            onClose={() => setActiveCollection(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
