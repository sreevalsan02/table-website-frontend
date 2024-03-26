import { configureStore } from '@reduxjs/toolkit'
import imageSelectedReducer from "../features/imageSelected/imageSelectedSlice"

export const store = configureStore({
  reducer: {
    imageSelected : imageSelectedReducer
  }
})