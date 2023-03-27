import { lazy } from "react"
import { Navigate } from "react-router-dom"
import lazyload from "./LazyLoad"
import { DashboardOutlined, DesktopOutlined } from "@ant-design/icons"
const MyLayout = lazy(() => import("@/components/MyLayout/index"))
const Login = lazy(() => import("../pages/Login/index"))
const Dashboard = lazy(() => import("../pages/Dashboard/index"))
const User = lazy(() => import("../pages/Usermanager/user"))
const UserList = lazy(() => import("../pages/Usermanager/userlist"))
const NotFound = lazy(() => import("../pages/NotFound/index"))

const routes = [
  {
    path: "/",
    element: lazyload(MyLayout),
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: lazyload(Dashboard),
        label: "dashboard",
        icon: <DashboardOutlined />,
      },
      {
        path: "/usermanager",
        label: "用户管理",
        icon: <DesktopOutlined />,
        roles: ["admin", "user"],
        children: [
          {
            path: "/usermanager/user",
            element: lazyload(User),
            label: "用户信息",
            roles: ["admin"],
          },
          {
            path: "/usermanager/list",
            element: lazyload(UserList),
            label: "用户列表",
            roles: ["admin", "user"],
          },
        ],
      },
      {
        path: "/*",
        element: "404",
      },
    ],
  },
  {
    path: "/login",
    element: lazyload(Login),
    title: "登录",
  },
]

export default routes
