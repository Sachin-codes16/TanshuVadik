import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Component,
  Diamond,
  Square,
  Layers,
  ShoppingBasket,
  Sprout,
  Waves,
  UtensilsCrossed,
  ChefHat,
  ShoppingBag,
  Frame,
  Sparkles,
} from 'lucide-react';
import { ProductShowcaseModal } from '../components/ProductShowcaseModal';
import { homeCategories, getProductsForHomeCategory } from './HomeCollectionClick';
import { RugsDetailsPage } from './RugsDetailsPage';
import heroImage from '../assets/collection/homecollection1.png';

interface HomeCollectionDetailPageProps {
  onBack: () => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  Rugs: <Component size={18} />,
  Carpets: <Diamond size={18} />,
  Cushions: <Square size={18} />,
  Throws: <Layers size={18} />,
  Basket: <ShoppingBasket size={18} />,
  Planters: <Sprout size={18} />,
  'Bath Mats': <Waves size={18} />,
  'Table Linen': <UtensilsCrossed size={18} />,
  'Kitchen Linen': <ChefHat size={18} />,
  'Tote Bags': <ShoppingBag size={18} />,
  'Wall Décor': <Frame size={18} />,
  'Home Accessories': <Sparkles size={18} />,
};

export const HomeCollectionDetailPage: React.FC<HomeCollectionDetailPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showRugsDetail, setShowRugsDetail] = useState(false);

  const activeProducts = useMemo(
    () => (selectedCategory ? getProductsForHomeCategory(selectedCategory) : []),
    [selectedCategory]
  );

  const handleCategoryClick = (categoryName: string) => {
    if (categoryName === 'Rugs') {
      setShowRugsDetail(true);
    } else {
      setSelectedCategory(categoryName);
    }
  };

  if (showRugsDetail) {
    return <RugsDetailsPage onBack={() => setShowRugsDetail(false)} />;
  }

  return (
    <div className="pt-16 sm:pt-[76px] bg-[#FAF8F5]">
      {/* Hero */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-end overflow-hidden bg-[#2C2623]">
        <img
          src={heroImage}
          alt="Home Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_75%_at_0%_100%,_rgba(44,38,35,0.88)_0%,_rgba(44,38,35,0.5)_40%,_transparent_75%)]" />

        <button
          onClick={onBack}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-white/90 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} />
          Back to Collections
        </button>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-10 sm:pb-14 w-full">
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-medium">Home Collection</h1>
          <div className="h-[2px] w-14 bg-[#8F533C] my-3" />
          <p className="font-sans text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
            Timeless handcrafted home décor designed to elevate modern interiors worldwide.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section className="pt-6 pb-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-1 mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-medium tracking-tight">
              Explore Our Home Categories
            </h2>
            <p className="font-sans text-sm text-[#615751]">
              Discover thoughtfully crafted products for every corner of your home.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {homeCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onClick={() => handleCategoryClick(category.name)}
                className="group cursor-pointer flex flex-col bg-[#FAF8F5] border border-[#EBE4DC] shadow-xs hover:border-[#8F533C]/40 hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F4EFEA]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Icon badge straddling the image / body seam */}
                <div className="relative flex justify-center">
                  <div className="absolute -top-6 w-12 h-12 rounded-full bg-white border border-[#EBE4DC] shadow-sm flex items-center justify-center text-[#8F533C]">
                    {categoryIcons[category.name]}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col items-center text-center gap-1 px-4 pt-8 pb-5">
                  <h3 className="font-serif text-lg text-[#2C2623] font-bold">{category.name}</h3>
                  <p className="font-sans text-xs text-[#615751] leading-relaxed font-medium line-clamp-2 min-h-[2.2em]">
                    {category.description}
                  </p>
                  <ArrowRight
                    size={14}
                    className="mt-1 text-[#8F533C] group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product listing modal for the selected category */}
      <AnimatePresence>
        {selectedCategory && (
          <ProductShowcaseModal
            heading={`${selectedCategory} Collection`}
            products={activeProducts}
            onClose={() => setSelectedCategory(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
