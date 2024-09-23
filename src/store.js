
import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './Services/api/productService'


export const store = configureStore({
  reducer: {
    // info: infoSlice
    [productApi.reducerPath]:productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([productApi.middleware])
  ,
  
})