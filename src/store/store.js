import { configureStore } from "@reduxjs/toolkit"
import counteReducer from "@/features/counterSlice"
export const store = configureStore({
  reducer: {
    counter: counteReducer,
  },
})
