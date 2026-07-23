import { products } from '../data';
import { Product } from '../types';
import springSummerImage from '../assets/collection/SpringSummar.png';
import autumnWinterImage from '../assets/collection/Antumansesoanal.png';
import christmasImage from '../assets/collection/Chrismast.png';
import easterImage from '../assets/collection/Easter.png';
import halloweenImage from '../assets/collection/Halloen.png';
import festivalImage from '../assets/collection/Festival.png';

export interface SeasonalCategory {
  name: string;
  image: string;
  description: string;
  subcategory: string | null;
}

export const seasonalCategories: SeasonalCategory[] = [
  {
    name: 'Spring Summer',
    image: springSummerImage,
    description: 'Light, fresh and vibrant collections for warmer days and bright spaces.',
    subcategory: null,
  },
  {
    name: 'Autumn Winter',
    image: autumnWinterImage,
    description: 'Warm, cozy and comforting designs for the colder season.',
    subcategory: 'Fall Collection',
  },
  {
    name: 'Christmas',
    image: christmasImage,
    description: 'Festive décor and gifts to celebrate the joy of Christmas.',
    subcategory: 'Christmas Collection',
  },
  {
    name: 'Easter',
    image: easterImage,
    description: 'Charming and playful designs for a delightful Easter celebration.',
    subcategory: null,
  },
  {
    name: 'Halloween',
    image: halloweenImage,
    description: 'Spooky, fun and unique décor for a memorable Halloween.',
    subcategory: null,
  },
  {
    name: 'Festival Collection',
    image: festivalImage,
    description: 'Celebrate every festival with beautifully crafted handmade products.',
    subcategory: null,
  },
];

export const getProductsForSeasonalCategory = (category: SeasonalCategory): Product[] => {
  if (!category.subcategory) return [];
  return products.filter((p) => p.subcategory === category.subcategory);
};
