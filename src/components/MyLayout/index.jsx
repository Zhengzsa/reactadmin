import React from "react"
import { ProBreadcrumb, ProConfigProvider } from "@ant-design/pro-components"
import ProLayout from "@ant-design/pro-layout"
import { Switch, Tooltip } from "antd"
import ErrorBoundary from "antd/es/alert/ErrorBoundary"
import { useState } from "react"
import { Link } from "react-router-dom"
import { treeRouter } from "../../utils/common"
import { findRoles } from "../../router/menu"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
export default () => {
  const [dark, setDark] = useState(false)
  const location = useLocation()
  const settings = {
    layout: "mix",
  }
  const role = sessionStorage.getItem("role")
  const menu = findRoles(role)
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
          // route 菜单渲染 treeRouter将路由样式渲染成antd所需要的样式
          route={{
            routes: treeRouter([...menu]),
          }}
          {...settings}
          avatarProps={{
            size: "small",
            title: "admin",
          }}
          // headerContentRender自定义头内容的方法,<ProBreadcrumb />根据路径自动计算面包屑 要有location，const location = useLocation()
          headerContentRender={() => <ProBreadcrumb />}
          // actionsRender自定义操作列表
          actionsRender={(props) => {
            return [
              <Tooltip placement="bottom" title={"Sign Out"}>
                退出
              </Tooltip>,
            ]
          }}
          // menuFooterRender在 layout 底部渲染一个块 就是左边底部内容
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
          // menuItemRender自定义菜单项的 render 方法 ，这里是点击更换菜单选项和路由
          menuItemRender={(item, dom) => <Link to={item?.path}>{dom}</Link>}
        >
          {/* 在这里嵌入Outlet ，先占用子路由渲染位置，和vue的用法一样*/}
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </ProLayout>
      </div>
    </ProConfigProvider>
  )
}
