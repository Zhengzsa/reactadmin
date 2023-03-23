import React from "react"
import { DashboardOutlined } from "@ant-design/icons"
import { ProBreadcrumb, ProConfigProvider } from "@ant-design/pro-components"
import ProLayout from "@ant-design/pro-layout"
import { Switch, Tooltip } from "antd"
import ErrorBoundary from "antd/es/alert/ErrorBoundary"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { context } from "../AppPeovider"
import { useContext } from "react"
import menudata from "../../router/config"
import { treeRouter } from "../../utils/common"

export const baseRouterList = [
  {
    label: "Dashboard",
    key: "dashboard",
    path: "dashboard",
    icon: <DashboardOutlined />,
    filepath: "pages/dashboard/index.tsx",
  },
]
export default ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [pathname, setPathname] = useState(location.pathname)
  const { menus } = useContext(context)
  const [dark, setDark] = useState(false)

  const settings = {
    layout: "mix",
  }
  return (
    <ProConfigProvider dark={dark}>
      <div
        id="admin-pro-layout"
        style={{
          height: "100vh",
        }}
      >
        <ProLayout
          siderWidth={200}
          route={{
            path: "/",
            routes: treeRouter([...menudata]),
          }}
          {...settings}
          avatarProps={{
            size: "small",
            title: "admin",
          }}
          headerContentRender={() => <ProBreadcrumb />} // 根据路径自动计算面包屑
          actionsRender={(props) => {
            console.log(props)
            return [
              <Tooltip placement="bottom" title={"Sign Out"}>
                退出
              </Tooltip>,
            ]
          }}
          menuFooterRender={(props) => {
            if (props?.collapsed || props?.isMobile) return undefined
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Switch
                  checkedChildren="🌜"
                  unCheckedChildren="🌞"
                  checked={dark}
                  onChange={(v) => setDark(v)}
                />
              </div>
            )
          }}
          menuItemRender={(item, dom) => (
            <Link
              to={item?.path || "/"}
              onClick={() => {
                setPathname(item.path || "/")
              }}
            >
              {dom}
            </Link>
          )}
        >
          <ErrorBoundary>{children}</ErrorBoundary>
        </ProLayout>
      </div>
    </ProConfigProvider>
  )
}
