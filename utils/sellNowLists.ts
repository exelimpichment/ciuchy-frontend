export interface IList {
  key: number;
  value: string;
  group: string;
}
[];

export const brand = [
  { key: 1, value: 'Nike', group: 'brand' },
  { key: 2, value: 'Louis Vuitton', group: 'brand' },
  { key: 3, value: 'Hermes', group: 'brand' },
  { key: 4, value: 'Gucci', group: 'brand' },
  { key: 5, value: 'Tiffany & Co.', group: 'brand' },
  { key: 6, value: 'Zara', group: 'brand' },
  { key: 7, value: 'H&M', group: 'brand' },
  { key: 8, value: 'Burberry', group: 'brand' },
  { key: 9, value: 'Adidas', group: 'brand' },
];

export const color = [
  { key: 1, value: 'red', group: 'color' },
  { key: 2, value: 'black', group: 'color' },
  { key: 3, value: 'blue', group: 'color' },
  { key: 4, value: 'green', group: 'color' },
  { key: 5, value: 'grey', group: 'color' },
  { key: 6, value: 'brown', group: 'color' },
  { key: 7, value: 'violet', group: 'color' },
  { key: 8, value: 'orange', group: 'color' },
];

export const condition = [
  { key: 1, value: 'New', group: 'condition' },
  { key: 2, value: 'Very Good', group: 'condition' },
  { key: 3, value: 'Good', group: 'condition' },
  { key: 4, value: 'Poor', group: 'condition' },
];

export const category = [
  { key: 1, value: 'woman', group: 'category' },
  { key: 2, value: 'men', group: 'category' },
  { key: 3, value: 'kids', group: 'category' },
];
export const type = [
  { key: 1, value: 'Shoes', group: 'type' },
  { key: 2, value: 'Clothes', group: 'type' },
  { key: 3, value: 'Accessories', group: 'type' },
];
export const sortby = [
  { key: 1, value: 'Price: high to low', group: 'sortby' },
  { key: 2, value: 'Price: low to high', group: 'sortby' },
  { key: 3, value: 'Newest first', group: 'sortby' },
];

export const price = [
  { key: 1, value: 'From', group: 'price' },
  { key: 2, value: 'To', group: 'price' },
];

const lists = {
  brand,
  color,
  condition,
  category,
  type,
  sortby,
  price,
};

export default lists;
