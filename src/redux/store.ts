import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
