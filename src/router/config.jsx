import { lazy } from "react"

const routes = [
  {
    path: "/login",
    component: lazy(() => import("@/pages/Login/index")),
    meta: {
      title: "登录页面",
    },
  },
  {
    path: "/home",
    component: lazy(() => import("@/pages/Home/index")),
  },
]

export default routes
