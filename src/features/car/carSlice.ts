import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import { Car } from "../../model";
import { cars } from "../../cars";
interface CarState {
  cars: Car[];
  search: string;
}

const initialState: CarState = {
  cars,
  search: "",
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = carSlice.actions;
export const selectCars = (state: RootState) => state.cars;
export default carSlice.reducer;
