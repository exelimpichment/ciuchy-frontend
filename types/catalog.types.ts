import { ChangeEvent, MouseEvent } from 'react';

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
  [key: string]: string | number;
  category: string;
  brand: string;
  color: string;
  type: string;
  condition: string;
  from: number | string;
  to: number | string;
  sortby: string;
}

export type CombinedEvent<T = HTMLElement> = ChangeEvent<T> | MouseEvent<T>;
