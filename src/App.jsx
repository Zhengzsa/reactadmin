import MyLayout from "./components/Layout/MyLayout"
import React from "react"
import Routes from "./router"

export default function App() {
  return (
    <MyLayout>
      <Routes />
    </MyLayout>
  )
}
