// @reduxjs/toolkit方案
import { configureStore } from "@reduxjs/toolkit"
import counteReducer from "./Slice/counterSlice"
export const store = configureStore({
  reducer: {
    counter: counteReducer,
  },
})
