export interface ISellItemForm {
  title: string;
  description: string;
  category: 'woman' | 'men' | 'kids' | 'about' | undefined;
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
  condition: 'New' | 'Very Good' | 'Good' | 'Poor' | undefined;
  price: number | undefined;
}
