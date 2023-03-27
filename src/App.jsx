import React from "react"
import { RouterView } from "./router/RouterView"
import { HashRouter } from "react-router-dom"
import AuthRoute from "./components/AuthRouter"
export default function App() {
  return (
    <HashRouter>
      <AuthRoute>
        <RouterView />
      </AuthRoute>
    </HashRouter>
  )
}
