import { Routes, Route } from "react-router-dom"
// Suspense配合lazy懒加载页面使用
import React, { Suspense } from "react"
import { useContext } from "react"
const NotFound = React.lazy(() => import("@/pages/NotFound/index"))
import { context } from "../components/AppPeovider"
import routes from "./index副本"
import { useRoutes } from "react-router-dom"
const RouterView = () => {
  // const { routes } = useContext(context)
  // console.log(routes)
  return (
    // 这里是组件懒加载没加载出来之前显示loading

    <Suspense fallback={<div>Loading...</div>}>{useRoutes(routes)}</Suspense>
  )
}

export default RouterView
