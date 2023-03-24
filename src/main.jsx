import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "@/store/store"
import "antd/dist/reset.css"
import { ConfigProvider } from "antd"
import zhCN from "antd/locale/zh_CN"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>
)
