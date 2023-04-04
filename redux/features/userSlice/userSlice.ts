import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IUser {
  // this should be replaced
  isMember: boolean;
}

const initialState: IUser = {
  // this should be replaced
  isMember: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<boolean>) => {
      state.isMember = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
