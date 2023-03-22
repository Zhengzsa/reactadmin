import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Layout, theme } from "antd"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./layout.scss"
import Menus from "../Menu"
const { Header, Sider, Content } = Layout
const MyLayout = ({ children }) => {
  console.log(children)
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const naviagte = useNavigate()
  return (
    <Layout
      style={{ height: "100vh", width: "100%" }}
      id="components-layout-demo-custom-trigger"
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menus />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <span
            onClick={() => {
              naviagte("/login")
              sessionStorage.clear()
            }}
          >
            退出
          </span>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
export default MyLayout
