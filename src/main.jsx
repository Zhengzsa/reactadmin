import React from "react"
import ReactDOM from "react-dom/client"
import App from "@/App"
import { Provider } from "react-redux"
import { store } from "@/store/store"
import "antd/dist/reset.css"
import { BrowserRouter } from "react-router-dom"
import { ConfigProvider } from "antd"
import zhCN from "antd/locale/zh_CN"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>
)
