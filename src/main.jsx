import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "@/store/store"
import "antd/dist/reset.css"
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { ConfigProvider } from "antd"
import zhCN from "antd/locale/zh_CN"
import Login from "./pages/Login/index"
import AppProvider from "./components/AppPeovider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppProvider>
      <Router>
        <ConfigProvider locale={zhCN}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<App />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </ConfigProvider>
      </Router>
    </AppProvider>
  </Provider>
)
