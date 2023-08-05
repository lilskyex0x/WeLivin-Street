import { configureStore } from "@reduxjs/toolkit";
import creditSlice from "./Slices/creditSlice";

export const store = configureStore({
  reducer: {
    credit: creditSlice,
  },
});
