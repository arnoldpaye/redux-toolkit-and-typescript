import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../reducers/productsReducer";

// Basic selector to retrieve all products
export const selectAllProducts = (state: RootState) => state.products.products;

// Basic selector to retrieve the loading state of the products lists API call
export const selectProductListStatus = (state: RootState) =>
  state.products.status;

// Memoized selector to filter expensive products
export const selectExpensiveProducts = createSelector(
  [selectAllProducts],
  (products: Product[]) => products.filter((product) => product.price > 1000),
);
