import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "@/store/store"
import "antd/dist/reset.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ConfigProvider } from "antd"
import zhCN from "antd/locale/zh_CN"
import AppProvider from "./components/AppPeovider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Router>
  </Provider>
)
