import { lazy } from "react"
import { Navigate } from "react-router-dom"
import lazyload from "./LazyLoad"
import {
  DashboardOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons"
const MyLayout = lazy(() => import("@/components/MyLayout/index"))
const Login = lazy(() => import("../pages/Login/index"))
const Dashboard = lazy(() => import("../pages/Dashboard/index"))
const User = lazy(() => import("../pages/Usermanager/user"))
const UserList = lazy(() => import("../pages/Usermanager/userlist"))
const NotFound = lazy(() => import("../pages/NotFound/index"))
const NoEorr403 = lazy(() => import("../pages/Exception/403"))
const NoEorr500 = lazy(() => import("../pages/Exception/500"))

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
        icon: <UserOutlined />,
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
        path: "/exception",
        label: "异常页面",
        icon: <ExclamationCircleOutlined />,
        roles: ["admin", "user"],
        children: [
          {
            path: "/exception/404",
            element: lazyload(NotFound),
            label: "404",
            roles: ["admin", "user"],
          },
          {
            path: "/exception/403",
            element: lazyload(NoEorr403),
            label: "403",
            roles: ["admin", "user"],
          },
          {
            path: "/exception/other",
            label: "其他",
            icon: <ExclamationCircleOutlined />,
            roles: ["admin", "user"],
            children: [
              {
                element: lazyload(NoEorr500),
                path: "/exception/other/500",
                label: "500",
                roles: ["admin", "user"],
              },
            ],
          },
        ],
      },
      {
        path: "/*",
        element: lazyload(NotFound),
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
