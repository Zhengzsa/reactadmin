import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: "",
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setname: (state, action) => {
      console.log(action)
      state.value = action.payload
    },
  },
})

export const { setname } = counterSlice.actions

export default counterSlice.reducer
