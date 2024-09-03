import { configureStore } from "@reduxjs/toolkit";
import favoritReducer from './favorites';
export const store = configureStore({
  reducer: {
    favoriteMeals: favoritReducer
  }
});