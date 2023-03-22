import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import React from "react"
const Dashboard = React.lazy(() => import("../pages/Dashboard/index"))
const User = React.lazy(() => import("../pages/Usermanager/user"))
const Userlist = React.lazy(() => import("../pages/Usermanager/userlist"))
const menudata = [
  {
    key: "/dashboard",
    icon: <UserOutlined />,
    label: "Dashboard",
    element: <Dashboard />,
  },
  {
    key: "/usermanage",
    icon: <VideoCameraOutlined />,
    label: "用户管理",
    roles: ["admin", "editor"],
    children: [
      {
        key: "/usermanage/user",
        label: "用户信息",
        element: <User />,
        roles: ["admin", "editor"],
      },
      {
        key: "/usermanage/list",
        label: "用户列表",
        element: <Userlist />,
        roles: ["admin"],
      },
    ],
  },
]
export default menudata
