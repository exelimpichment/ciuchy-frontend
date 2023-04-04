import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface ICounterState {
  isMember: boolean;
}

const initialState: ICounterState = {
  isMember: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setIsMember: (state, action: PayloadAction<boolean>) => {
      state.isMember = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsMember } = authenticationSlice.actions;

export default authenticationSlice.reducer;
