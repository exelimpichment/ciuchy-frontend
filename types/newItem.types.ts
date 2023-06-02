import { IItem } from './user.types';

export interface ISellItemForm {
  title: string;
  description: string;
  category: 'woman' | 'men' | 'kids' | 'about' | '';
  brand:
    | 'Nike'
    | 'Louis Vuitton'
    | 'Hermes'
    | 'Gucci'
    | 'Tiffany & Co.'
    | 'Zara'
    | 'H&M'
    | 'Burberry'
    | 'Adidas'
    | '';
  type: 'Shoes' | 'Clothes' | 'Accessories' | '';
  condition: 'New' | 'Very Good' | 'Good' | 'Poor' | '';
  price: number | '';
  [key: string]: string | number | undefined;
}

export interface ShowcaseProps {
  suggestions: {
    bestPrice: IItem[];
    forHim: IItem[];
    latestItems: IItem[];
  };
}
