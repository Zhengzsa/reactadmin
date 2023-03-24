import React from "react"
import { RouterView } from "./router/RouterView"
import { BrowserRouter } from "react-router-dom"
import AuthRoute from "./components/AuthRouter"
export default function App() {
  return (
    <BrowserRouter>
      <AuthRoute>
        <RouterView />
      </AuthRoute>
    </BrowserRouter>
  )
}
