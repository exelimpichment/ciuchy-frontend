import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface ICounterState {
  isMember: boolean;
  user: {
    country: string;
    dateOfBirth: string;
    email: string;
    gender: string;
    holidayMode: boolean;
    id: string;
    image: string;
    language: string;
    name: string;
    role: string;
    rating: number;
  };
}

export interface IUser {
  country: string;
  dateOfBirth: string;
  email: string;
  gender: string;
  holidayMode: boolean;
  id: string;
  image: string;
  language: string;
  name: string;
  role: string;
  rating: number;
}

const initialState: ICounterState = {
  user: {
    country: '',
    dateOfBirth: '',
    email: '',
    gender: '',
    holidayMode: false,
    id: '',
    image: '',
    language: '',
    name: '',
    role: '',
    rating: 0,
  },
  isMember: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setIsMember: (state, action: PayloadAction<boolean>) => {
      state.isMember = action.payload;
    },

    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = { ...action.payload };
    },
  },
});

export const { setIsMember, setUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;
