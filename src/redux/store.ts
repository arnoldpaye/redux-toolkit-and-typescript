import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import productsReducer from "./reducers/productsReducer";

const preloadedState = {
  cart: {
    items: [
      {
        id: 1,
        price: 50,
        details: { manufacturer: "FFF", warranty: "1 year" },
      },
    ],
    totalPrice: 50,
  },
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productsList: productsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
