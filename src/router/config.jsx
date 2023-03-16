import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
const menus = [
  {
    key: "/dashboard",
    icon: <UserOutlined />,
    label: "Dashboard",
  },
  {
    key: "/usermanage",
    icon: <VideoCameraOutlined />,
    label: "用户管理",
    children: [
      {
        key: "/usermanage/user",
        label: "用户信息",
      },
      {
        key: "/usermanage/userlist",
        label: "用户列表",
      },
    ],
  },
]
export default menus
