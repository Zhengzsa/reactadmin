import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import React from "react"
import { Navigate } from "react-router-dom"
const Dashboard = React.lazy(() => import("../pages/Dashboard/index"))
const User = React.lazy(() => import("../pages/Usermanager/user"))
const Userlist = React.lazy(() => import("../pages/Usermanager/userlist"))
const router = [
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/dashboard",
    icon: <UserOutlined />,
    label: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/usermanage",
    icon: <VideoCameraOutlined />,
    label: "用户管理",
    element: <User />,
    roles: ["admin", "editor"],
    children: [
      {
        path: "/usermanage/user",
        label: "用户信息",
        element: <User />,
        roles: ["admin", "editor"],
      },
      {
        path: "/usermanage/list",
        label: "用户列表",
        element: <Userlist />,
        roles: ["admin"],
      },
    ],
  },
  // {
  //   path: "/*",
  //   element: "404",
  // },
]
export default router
