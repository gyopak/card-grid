import { configureStore } from '@reduxjs/toolkit'
import { cardContentApi } from './features/cardContentApiSlice'

export const store = configureStore({
  reducer: {
    [cardContentApi.reducerPath]: cardContentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardContentApi.middleware),
})