export interface IUser {
  user: {
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
  };
}

export interface IItem {
  _id: string;
  owner: string;
  ownerImage: string;
  ownerName: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  color: string;
  type: string;
  condition: string;
  price: number;
  images: string[];
  state: string;
  createdAt: string;
  updatedAt: string;
  ownerRating: string;
}

export interface IServerSideProps {
  data: IUser;
}
