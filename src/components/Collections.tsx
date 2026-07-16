import React, { useState, useMemo } from 'react';
import { products } from '../data';
import { Product } from '../types';
import { useInquiry } from '../context/InquiryContext';
import { TrustStats } from './TrustStats';
import { Certifications } from './Certifications';
import tableRunner from "../assets/images/tableRunner.jpeg"
import springCollection from "../assets/images/Spring.png"
import fallCollection from "../assets/images/Fall.png"
import {
  Sparkles,
  Layers,
  Check,
  Plus,
  X,
  FileSpreadsheet,
  Settings,
  Grid,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CategoryCard {
  name: string;
  image: string;
  itemCount: number;
  subtitle?: string;
}

export const Collections: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Custom Swatch Visualizer State
  const [weftColor, setWeftColor] = useState('#8F533C'); // Terracotta copper
  const [warpColor, setWarpColor] = useState('#2C2623'); // Earth charcoal
  const [patternType, setPatternType] = useState<'herringbone' | 'plaid' | 'waffle'>('herringbone');
  const [weaveDensity, setWeaveDensity] = useState<'standard' | 'double-tension'>('double-tension');
  const [customSize, setCustomSize] = useState('Medium Dining (160x230cm)');
  const [swatchInquired, setSwatchInquired] = useState(false);

  const { addToCart, isInCart, removeFromCart, setIsPortalOpen } = useInquiry();

  // Define Home Decor categories with counts and exact mockup images
  const homeDecorCategories: CategoryCard[] = useMemo(() => [
    {
      name: 'Rugs',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATrToO0vT5DjdiIY3o0eIyzjxqWxy0qvf1URLnf0a8R1F96LL7IEkXdZqnYCyHvyrtDzJLU_3SYZRVU1532myS-VrIbDbveLLPdFHekV4-5jLd3RYyX-SXCEDlBO4ZW7Ndk4ia2dEYFDCw26xy-ztWcCORZPdl34jz14n1RL_NpURdnoKgccKrTcX9PI1UYR683fu7J6xKeMu5OGErdY2VEqU8VoMxH1pisdSbuDt3TMuLLUgKu2gy_UghdZ7KW41ZSt6mAS7FjXA',
      itemCount: products.filter(p => p.subcategory === 'Rugs').length
    },
    {
      name: 'Carpets',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsPlfL1NGV_uz3NLYgrSniRCBhyLaEAY7g4m-VGltPLiYLjKD4zl2GRZIc2sxuxCymftPgZvuWJ9xtoeraur2NZKDV9RkI-1KPUclzGcnTMMpGr0pPNCigL5XthDY_5ETpUSgDVJSGpmtueqy3WyQzZgrn9BxgO5Jt0P99JjZYfR7KRQLGk2XHBsbLW-RvIChkFpJg4wBzE05SeI01PBxh4Ri-JVQPlgzf3yy6MxCdQra39Z2cZ9c3DGXdHFGQ0N8EGbLdWzrSKfs',
      itemCount: products.filter(p => p.subcategory === 'Carpets').length
    },
    {
      name: 'Cushions',
      image: '/src/assets/images/cushion_cover_fringe_1783702222647.jpg',
      itemCount: products.filter(p => p.subcategory === 'Cushions').length
    },
    {
      name: 'Throws',
    
      image: tableRunner,
      itemCount: products.filter(p => p.subcategory === 'Kitchen Towel').length
    },
    {
      name: 'Basket',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7Le82mV7Pp_UY_dNHQOEnzKExz7Bq2BrwdrtxT2WLrDeqVU2clE5s-S_KB_RCl1ZWGXG0Zhfz1iDG_JIarEof3_JjkNHh9A1Uh1hX6LAKEUjgRgHd2o0LdGbNhXIbMHIuxDtArNJ6HaZ_4ACeleHYYvQytwTDn-tJbLXMMqVgbA_V5CgXmGqxbWaSo2LOOCFem0NLgfwFHtN85xTtCBubF4GdeiYrxnb8OwYDhtmbZERyjIt0FwxqoXFqUJKgXfXrRxRVluXhBo8',
      itemCount: products.filter(p => p.subcategory === 'Basket').length
    },
    {
      name: 'Planters',
      image: '/src/assets/images/basket_laundry_lid_1783701221640.jpg',
      itemCount: products.filter(p => p.subcategory === 'Pet Baskets').length
    },
    ,
    {
      name: 'Bath Mat',
      image: '/src/assets/images/bath_mat_elevated_1783702711259.jpg',
      itemCount: products.filter(p => p.subcategory === 'Bath Mat').length
    },
    {
      name: 'Table Linen',
      image: '/src/assets/images/table_cloth_blue_1783701149774.jpg',
      itemCount: products.filter(p => p.subcategory === 'Table Linen').length
    },
    {
      name: 'Kitchen Linen',
      image: '/src/assets/images/KitchenLinen.jpeg',
      itemCount: products.filter(p => p.subcategory === 'Apron').length
    },
    {
      name: 'Tote Bags',
      image: '/src/assets/images/tote_cork_printed_1783702802046.jpg',
      itemCount: products.filter(p => p.subcategory === 'Tote Bags').length
    },
    {
      name: 'Wall Décor',
      image: '/src/assets/images/wall_decor_macrame_1783701205440.jpg',
      itemCount: products.filter(p => p.subcategory === 'Wall Décor').length
    },
    {
      name: 'Seasonal Collections',
      image: '/src/assets/images/SeasonalCollections.jpeg',
      itemCount: products.filter(p => p.subcategory === 'Table Placemat').length
    }
  ], []);

  // Define Pet Living categories with counts and exact mockup images
  const petLivingCategories: CategoryCard[] = useMemo(() => [
    {
      name: 'Pet Beds',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiugj9V-Quo1PozNT5q1D1iancbI_mURD7GiOxGKWhC7ubGzoDRR7ABJKYIKapIQOhndU8DiBERRXR_FZJJqYzP7MH5I5DjVI67tyd--_W8zC_zqeP_uzBnEnpadDJG5Lk9pySdX2G3T7jePtZXgEqH2OE3Tot3eM5V99hvIu6hThtM_sp7Z5J5IGK3dWKpH9Kuw6b3iZG4DywroXWzJCI00dJ89KHf_wjkHbtXkPkC6XcHLKtWqm4pmGZUOLruH1xzHjW8okHeb0',
      itemCount: products.filter(p => p.subcategory === 'Pet Beds').length
    },
      {
      name: 'Pet Mat',
      image: '/src/assets/images/pet_jute_mat_1783701244799.jpg',
      itemCount: products.filter(p => p.subcategory === 'Pet Mat').length
    },
   
    {
      name: 'Pet Toy Baskets',
      image: '/src/assets/images/basket_rope_twotone_1783702315626.jpg',
      itemCount: products.filter(p => p.subcategory === 'Pet Toy Baskets').length
    },
   {
      name: 'Pet Accessories',
      image: '/src/assets/images/petAccessories.jpeg',
      itemCount: products.filter(p => p.subcategory === 'Pet Accessories').length
    },
  ], []);

  // Define Seasonal categories with counts and newly generated collection images
  const seasonalCategories: CategoryCard[] = useMemo(() => [
    {
      name: 'SPRING / SUMMER COLLECTION',
      image: springCollection,
      itemCount: products.filter(p => p.subcategory === 'Christmas Collection').length,
      subtitle: 'Bright, Breezy, Beautiful.'
    },
    {
      name: 'FALL / WINTER COLLECTION',
      image: fallCollection,
      itemCount: products.filter(p => p.subcategory === 'Fall Collection').length,
      subtitle: 'Warm, Cozy, Timeless.'
    }
  ], []);

  // Filter products by selected category
  const activeProducts = useMemo(() => {
    if (!selectedCategory) return [];
    const lowerSel = selectedCategory.toLowerCase();
    if (lowerSel.includes('spring') || lowerSel.includes('summer')) {
      return products.filter((p) => p.subcategory === 'Christmas Collection');
    }
    if (lowerSel.includes('fall') || lowerSel.includes('winter')) {
      return products.filter((p) => p.subcategory === 'Fall Collection');
    }
    return products.filter((p) => p.subcategory.toLowerCase() === lowerSel);
  }, [selectedCategory]);

  const handleRequestCustomSwatch = (e: React.FormEvent) => {
    e.preventDefault();
    setSwatchInquired(true);

    const swatchProduct: Product = {
      id: `custom-swatch-${Date.now()}`,
      name: `Bespoke Swatch (${patternType.toUpperCase()} - ${weftColor === '#8F533C' ? 'Terracotta' : 'Deep Ink'} / ${warpColor === '#2C2623' ? 'Charcoal' : 'Sand'})`,
      collection: 'home-decor',
      subcategory: 'Custom Swatch Request',
      image: '/input_file_15.png',
      description: `Bespoke organic swatch sample. Pattern: ${patternType}. Density: ${weaveDensity}. Base warp color: ${warpColor}. Primary weft color: ${weftColor}. Intended showroom dimensions: ${customSize}`,
      material: '80% Recycled Cotton, 20% Jute & Botanical Dye',
      dimensions: '30x30 cm Sample Swatch',
      leadTime: '14 Days Express Looming',
      minOrderQuantity: '1 Unit (Sample)'
    };

    addToCart(swatchProduct);
    setTimeout(() => {
      setSwatchInquired(false);
      setIsPortalOpen(true);
    }, 1200);
  };

  return (
    <section id="collections" className="py-0 bg-[#FAF8F5]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Editorial Heading Section exactly styled like the mockup */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">

          <div className="flex items-center gap-6 w-full">
            <div className="h-px bg-[#8F533C]/20 flex-1" />
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2C2623] tracking-tight font-medium leading-tight whitespace-nowrap shrink-0">
              OUR COLLECTIONS
            </h2>
            <div className="h-px bg-[#8F533C]/20 flex-1" />
          </div>


          {/* Mockup Ornament divider (brown line with diamond) */}
          <div className="flex items-center gap-4 w-full justify-center my-3">

            <div className="h-[1px] bg-[#8F533C]/30 w-24 sm:w-40" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#8F533C]" />
            <div className="h-[1px] bg-[#8F533C]/30 w-24 sm:w-40" />

          </div>
          
        </div>

        {/* 1. HOME DECOR SECTION */}
        <div className="mb-24">
          <div className="flex flex-col items-start mb-6 border-b border-[#EBE4DC] pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-medium tracking-wide">
              HOME DÉCOR COLLECTION
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#615751] italic mt-1">
              Timeless designs for every space.
            </p>
          </div>

          {/* 12 Grid Layout precisely matched */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {homeDecorCategories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedCategory(cat.name)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container with high contrast and hover zooms */}
                <div className="relative aspect-video overflow-hidden bg-[#F4EFEA] border border-[#EBE4DC] shadow-xs group-hover:border-[#8F533C]/40 group-hover:shadow-md transition-all duration-300">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Subcategory Label below card */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-sans text-[13px] font-bold tracking-[0.12em] text-[#2C2623] uppercase group-hover:text-[#8F533C] transition-colors">
                    {cat.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#8F533C]/80 font-semibold bg-[#8F533C]/5 px-2 py-0.5 border border-[#8F533C]/10">
                    {cat.itemCount > 0 ? `${cat.itemCount} Items` : 'Catalog'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. PET LIVING SECTION */}
        <div className="mb-4">
          <div className="flex flex-col items-start mb-6 border-b border-[#EBE4DC] pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-medium tracking-wide">
              PET LIVING COLLECTION
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#615751] italic mt-1">
              Comfort, care and style for pets.
            </p>
          </div>

          {/* 4 Grid Layout precisely matched */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {petLivingCategories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedCategory(cat.name)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container with high contrast and hover zooms */}
                <div className="relative aspect-video overflow-hidden bg-[#F4EFEA] border border-[#EBE4DC] shadow-xs group-hover:border-[#8F533C]/40 group-hover:shadow-md transition-all duration-300">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Subcategory Label below card */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-sans text-[13px] font-bold tracking-[0.12em] text-[#2C2623] uppercase group-hover:text-[#8F533C] transition-colors">
                    {cat.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#8F533C]/80 font-semibold bg-[#8F533C]/5 px-2 py-0.5 border border-[#8F533C]/10">
                    {cat.itemCount > 0 ? `${cat.itemCount} Items` : 'Catalog'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seasonal & Holiday images, fixed directly below Pet Living (heading removed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 mb-24">
          {seasonalCategories.map((category) => (
            <div
              key={category.name}
              className="relative group overflow-hidden cursor-pointer w-full aspect-[2/1]"
              onClick={() => setSelectedCategory(category.name)}
            >
              {/* 1. Image Background */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {category.image.endsWith('.png') ? null : (
                <>
                  {/* 2. Dark Tint Overlay for Readable Text */}
                  <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />

                  {/* 3. Centered Absolute Content Box */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
                    <h3 className="font-serif text-2xl md:text-3xl tracking-widest uppercase mb-2">
                      {category.name}
                    </h3>

                    {category.subtitle && (
                      <p className="font-serif italic text-sm md:text-base opacity-90 mb-6 tracking-wide">
                        {category.subtitle}
                      </p>
                    )}

                    {/* Bordered Button Element */}
                    <button className="px-6 py-2.5 border border-white text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black">
                      Explore Now &rarr;
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Trust & Certification badges, fixed directly below Pet Living */}
      <TrustStats />
      <Certifications />

      {/* MODAL 1: SUBCATEGORY PRODUCTS SLIDER/MODAL (GRID OF RELEVANT WHOLESALE ITEMS) */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="absolute inset-0 bg-[#2C2623]/80 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-[#FAF8F5] border border-[#EBE4DC] p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 p-2 bg-white border border-[#EBE4DC] text-[#2C2623] hover:text-[#8F533C] transition-colors rounded-none cursor-pointer z-10"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="mb-6 flex flex-col gap-1 pr-10">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#8F533C] uppercase">
                  Wholesale Selection
                </span>
                <h3 className="font-serif text-3xl text-[#2C2623] font-medium tracking-wide flex items-center gap-2">
                  {selectedCategory} Collection
                </h3>
                <div className="h-[2px] w-12 bg-[#8F533C] mt-2" />
              </div>

              {/* Body: Product listing */}
              <div className="overflow-y-auto flex-grow pr-2">
                {activeProducts.length === 0 ? (
                  <div className="py-16 text-center text-sm text-[#615751] flex flex-col items-center gap-3">
                    <Info size={32} className="text-[#8F533C]/60" />
                    <p>No catalog items found in the {selectedCategory} category right now.</p>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="mt-2 px-6 py-2 border border-[#8F533C] text-[#8F533C] font-button text-xs tracking-wider hover:bg-[#8F533C] hover:text-white transition-colors"
                    >
                      Browse Other Categories
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-2">
                    {activeProducts.map((product) => {
                      const inCart = isInCart(product.id);
                      return (
                        <div
                          key={product.id}
                          className="bg-white border border-[#EBE4DC] hover:border-[#8F533C]/40 p-4 sm:p-5 flex flex-col sm:flex-row gap-5 shadow-xs transition-all"
                        >
                          {/* Image */}
                          <div className="w-full sm:w-1/3 aspect-square bg-[#F4EFEA] overflow-hidden border border-[#EBE4DC] relative group">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          {/* Detail summary */}
                          <div className="w-full sm:w-2/3 flex flex-col justify-between">
                            <div className="flex flex-col gap-1.5">
                              <h4 className="font-serif text-lg text-[#2C2623] font-medium leading-tight">
                                {product.name}
                              </h4>
                              <p className="font-sans text-xs text-[#615751] leading-relaxed line-clamp-3">
                                {product.description}
                              </p>
                              
                              {/* Specification indicators */}
                              <div className="grid grid-cols-2 gap-y-1 gap-x-2 border-t border-b border-[#FAF8F5] py-2 mt-2 text-[10px] text-[#615751]">
                                <div>
                                  <span className="font-bold text-[#2C2623]">MOQ:</span> {product.minOrderQuantity}
                                </div>
                                <div>
                                  <span className="font-bold text-[#2C2623]">Lead Time:</span> {product.leadTime}
                                </div>
                                <div className="col-span-2 line-clamp-1">
                                  <span className="font-bold text-[#2C2623]">Material:</span> {product.material}
                                </div>
                                <div className="col-span-2 line-clamp-1">
                                  <span className="font-bold text-[#2C2623]">Dimensions:</span> {product.dimensions}
                                </div>
                              </div>
                            </div>

                            {/* Action Row */}
                            <div className="flex items-center gap-2 mt-4">
                              <button
                                onClick={() => setSelectedProduct(product)}
                                className="flex-1 py-2 border border-[#2C2623] text-[#2C2623] hover:bg-[#FAF8F5] font-button text-[11px] tracking-wider text-center transition-colors rounded-none cursor-pointer"
                              >
                                Full Specs
                              </button>
                              <button
                                onClick={() => inCart ? removeFromCart(product.id) : addToCart(product)}
                                className={`flex-1 py-2 font-button text-[11px] tracking-wider text-center transition-colors rounded-none cursor-pointer border ${
                                  inCart
                                    ? 'bg-[#EBE4DC] border-[#8F533C] text-[#8F533C]'
                                    : 'bg-[#8F533C] hover:bg-[#2C2623] border-[#8F533C] text-white'
                                }`}
                              >
                                {inCart ? 'Selected' : 'Add to RFQ'}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-[#EBE4DC] flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="font-sans text-xs text-[#615751] flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#8F533C]" />
                  Need a bespoke dye matching or sizing spec? Contact our design floor.
                </span>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setIsPortalOpen(true);
                  }}
                  className="px-6 py-3 bg-[#2C2623] hover:bg-[#8F533C] text-white font-button text-xs tracking-widest cursor-pointer rounded-none transition-colors w-full sm:w-auto"
                >
                  Configure Inquiry
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DETAIL MODAL 2: DETAILED PRODUCT VIEWING */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-[#2C2623]/80 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl bg-[#FAF8F5] border border-[#EBE4DC] grid grid-cols-1 md:grid-cols-2 shadow-2xl overflow-y-auto max-h-[90vh] rounded-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white border border-[#EBE4DC] text-[#2C2623] hover:text-[#8F533C] transition-colors rounded-none cursor-pointer"
                aria-label="Close details"
              >
                <X size={18} />
              </button>

              {/* Modal Left: High Res Image */}
              <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] bg-[#F4EFEA] border-r border-[#EBE4DC]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#2C2623]/95 text-white py-1 px-3 text-[10px] font-bold tracking-widest uppercase">
                  {selectedProduct.subcategory}
                </div>
              </div>

              {/* Modal Right: Specs & Description */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  {/* Category breadcrumb */}
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#8F533C] uppercase">
                    {selectedProduct.collection === 'home-decor' ? 'Home Décor' : 'Pet Living'} Catalog
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-medium tracking-tight mt-1 mb-4 leading-snug">
                    {selectedProduct.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#615751] leading-relaxed font-light mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Specifications Matrix */}
                  <div className="border-t border-[#EBE4DC] pt-4 flex flex-col gap-3 text-xs text-[#2C2623] mb-6">
                    <div className="grid grid-cols-12 py-1 border-b border-[#FAF8F5]">
                      <span className="col-span-4 text-[#615751] font-bold uppercase text-[9px] tracking-wide">Base Material:</span>
                      <span className="col-span-8 font-light">{selectedProduct.material}</span>
                    </div>
                    <div className="grid grid-cols-12 py-1 border-b border-[#FAF8F5]">
                      <span className="col-span-4 text-[#615751] font-bold uppercase text-[9px] tracking-wide">Sizing:</span>
                      <span className="col-span-8 font-light">{selectedProduct.dimensions}</span>
                    </div>
                    <div className="grid grid-cols-12 py-1 border-b border-[#FAF8F5]">
                      <span className="col-span-4 text-[#615751] font-bold uppercase text-[9px] tracking-wide">Standard MOQ:</span>
                      <span className="col-span-8 font-bold text-[#8F533C]">{selectedProduct.minOrderQuantity}</span>
                    </div>
                    <div className="grid grid-cols-12 py-1 border-b border-[#FAF8F5]">
                      <span className="col-span-4 text-[#615751] font-bold uppercase text-[9px] tracking-wide">Port Lead Time:</span>
                      <span className="col-span-8 font-light">{selectedProduct.leadTime}</span>
                    </div>
                  </div>

                  {/* Safety & Compliance Checklist */}
                  <div className="flex flex-col gap-2 p-4 bg-[#F4EFEA]/60 border border-[#EBE4DC]/50 text-xs text-[#615751] font-sans">
                    <div className="font-semibold text-[#2C2623] uppercase text-[10px] tracking-wider flex items-center gap-1.5">
                      <Sparkles size={12} className="text-[#8F533C]" />
                      Wholesale Compliance Guarantees
                    </div>
                    <div className="flex flex-col gap-1.5 mt-1 text-[11px] font-light">
                      <div className="flex items-center gap-2">
                        <Check size={12} className="text-[#8F533C]" />
                        100% AZO-Free Non-Toxic Veg Pigment Dyes
                      </div>
                      <div className="flex items-center gap-2">
                        <Check size={12} className="text-[#8F533C]" />
                        Machine Washable & Shrink-Resistant Pre-washed Fibers
                      </div>
                      <div className="flex items-center gap-2">
                        <Check size={12} className="text-[#8F533C]" />
                        Sedex Social Audit Fair Trade Certification Included
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer Controls */}
                <div className="mt-8 pt-6 border-t border-[#EBE4DC] flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      if (isInCart(selectedProduct.id)) {
                        removeFromCart(selectedProduct.id);
                      } else {
                        addToCart(selectedProduct);
                      }
                    }}
                    className={`flex-grow py-3.5 font-button text-xs tracking-widest text-center transition-colors rounded-none cursor-pointer border ${
                      isInCart(selectedProduct.id)
                        ? 'border-red-600 hover:bg-red-50 text-red-600 bg-white'
                        : 'bg-[#2C2623] hover:bg-[#8F533C] border-[#2C2623] hover:border-[#8F533C] text-white'
                    }`}
                  >
                    {isInCart(selectedProduct.id) ? 'Remove Selection' : 'Select for Wholesale Inquiry'}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      setIsPortalOpen(true);
                    }}
                    className="py-3.5 px-6 border border-[#2C2623] hover:bg-[#2C2623] hover:text-white text-[#2C2623] font-button text-xs tracking-widest text-center transition-colors rounded-none cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Layers size={14} />
                    Check RFQ List
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
