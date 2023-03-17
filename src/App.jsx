import React from "react"
import MyLayout from "./components/MyLayout/index"
import Routes from "./router/index"
export default function App() {
  return (
    <MyLayout>
      <Routes />
    </MyLayout>
  )
}
