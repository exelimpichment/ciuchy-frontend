import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './features/authenticationSlice/authenticationSlice';
import userReducer from './features/userSlice/userSlice';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
