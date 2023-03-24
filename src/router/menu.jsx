import { DashboardOutlined, DesktopOutlined } from "@ant-design/icons"
const menu = [
  {
    path: "/",
  },
  {
    path: "/dashboard",
    label: "dashboard",
    icon: <DashboardOutlined />,
  },
  {
    path: "/usermanager",
    label: "用户管理",
    icon: <DesktopOutlined />,
    children: [
      {
        path: "/usermanager/user",
        label: "用户信息",
      },
      {
        path: "/usermanager/list",
        label: "用户列表",
      },
    ],
  },
]
export default menu
