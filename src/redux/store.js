import { configureStore } from "@reduxjs/toolkit";
import { camperReducer } from "./slice.js";

export const store = configureStore({
  reducer: {
    camper: camperReducer,
  },
});
