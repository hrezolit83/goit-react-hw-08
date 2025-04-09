import { createSlice } from "@reduxjs/toolkit";

export const selectTextFilter = (state) => state.filters.name;

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default slice.reducer;
export const { changeFilter } = slice.actions;
