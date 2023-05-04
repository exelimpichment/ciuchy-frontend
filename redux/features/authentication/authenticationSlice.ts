import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface ICounterState {
  isMember: boolean;
  user: { name: string; role: string; userId: string };
}

export interface IUser {
  name: string;
  role: string;
  userId: string;
}

const initialState: ICounterState = {
  isMember: false,
  user: { name: '', role: '', userId: '' },
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setIsMember: (state, action: PayloadAction<boolean>) => {
      state.isMember = action.payload;
    },

    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setIsMember, setUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;
