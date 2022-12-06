import { createSlice } from "@reduxjs/toolkit";

const slugFromLoacal = localStorage.getItem("slug");

const initialState = {
  brandSlug: slugFromLoacal,
  brandId: "",
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    slug: (state, action) => {
      localStorage.setItem("slug", action.payload);
      state.brandSlug = action.payload;
    },
  },
});

export const { slug } = brandSlice.actions;

export default brandSlice.reducer;
