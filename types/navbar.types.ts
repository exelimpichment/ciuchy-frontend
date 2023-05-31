import { IItem } from './user.types';

export interface IFetchedUser {
  image: string;
  _id: string;
  name: string;
  email: string;
  images: string[];
  country: string;
  gender: string;
  role: string;
  dateOfBirth: string;
  language: string;
  holidayMode: boolean;
  items: IItem[];
  rating: number;
}

export type ResponseData = {
  listOfUsers: IFetchedUser[];
  [key: string]: any;
};
