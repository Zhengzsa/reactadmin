import React from "react"
// import Routes from "./router"
// import MyLayout from "./components/Layout/MyLayout"
import MyLayout from "./components/Mylayout"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/index"
import User from "./pages/Usermanager/user"
import Userlist from "./pages/Usermanager/userlist"

export default function App() {
  return (
    <MyLayout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="usermanage/user" element={<User />} />
        <Route path="usermanage/userlist" element={<Userlist />} />
      </Routes>
    </MyLayout>
  )
}
