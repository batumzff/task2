import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from './cartSlice.ts';

export interface RootState {
  cart: CartState;
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch; 