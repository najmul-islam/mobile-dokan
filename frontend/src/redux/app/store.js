import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { mobileApi } from "../api/mobileApi";
import { brandApi } from "../api/brandApi";

export const store = configureStore({
  reducer: {
    [mobileApi.reducerPath]: mobileApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(mobileApi.middleware)
      .concat(brandApi.middleware),
});

setupListeners(store.dispatch);
