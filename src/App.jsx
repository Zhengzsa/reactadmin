import React from "react"
import { RouterView } from "./router/RouterView"
import { BrowserRouter } from "react-router-dom"
export default function App() {
  return (
    <BrowserRouter>
      <RouterView />
    </BrowserRouter>
  )
}
