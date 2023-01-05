import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  filterValue: [];
  FilterBox: boolean;
  isLoggedIn: boolean;
  sideBar: boolean;
}

const initialState: CounterState = {
  filterValue: [],
  FilterBox: false,
  isLoggedIn: false,
  sideBar: false,
};

export const lendsqrSlice = createSlice({
  name: "lendsqr",
  initialState,
  reducers: {
    handleFilterValue: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.filterValue = action.payload;
    },
    handleFilterBox: (state, action: PayloadAction<boolean>) => {
      state.FilterBox = action.payload;
    },
    handleIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    handleSidebar: (state, action: PayloadAction<boolean>) => {
      state.sideBar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  handleFilterValue,
  handleFilterBox,
  handleSidebar,
  handleIsLoggedIn,
} = lendsqrSlice.actions;

export default lendsqrSlice.reducer;
