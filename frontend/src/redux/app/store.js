import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// api
import { mobileApi } from "../api/mobileApi";
import { brandApi } from "../api/brandApi";

// slice
import brandReducer from "../features/brands/brandSlice";

export const store = configureStore({
  reducer: {
    [mobileApi.reducerPath]: mobileApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    brand: brandReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(mobileApi.middleware)
      .concat(brandApi.middleware),
});

setupListeners(store.dispatch);
