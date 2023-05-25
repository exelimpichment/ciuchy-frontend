export interface IInitialState {
  [key: string]: boolean;
  Category: boolean;
  Brand: boolean;
  Color: boolean;
  Type: boolean;
  Condition: boolean;
  Price: boolean;
  SortBy: boolean;
}

export interface IInitialFilterState {
  [key: string]: string | object;
  category: string;
  brand: string;
  color: string;
  type: string;
  condition: string;
  price: {
    from: number;
    to: number;
  };
  sortby: string;
}
