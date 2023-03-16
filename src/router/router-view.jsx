import { Switch, Redirect, Route } from "react-router-dom"
// Suspense配合lazy懒加载页面使用
import React, { Suspense } from "react"
const NotFound = React.lazy(() => import("@/pages/NotFound/index"))
const Login = React.lazy(() => import("@/pages/Login/index"))
import { islogin } from "../utils/islogin"
import MyLayout from "../components/Layout/MyLayout"
const RouterView = (props) => {
  let { route } = props
  return islogin() ? (
    // 这里是组件懒加载没加载出来之前显示loading
    <MyLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Redirect exact from="/" to="/admin" />
          {route.map((item) => {
            return (
              <Route
                exact
                key={item.path}
                path={item.path}
                component={item.component}
              />
            )
          })}
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Suspense>
    </MyLayout>
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      {/* 这里做重定向以防用户没有登录直接输入路由地址跳转 */}
      <Redirect exact from="" to="/login" />
      <Switch>
        <Route exact key={"login"} path="/login" component={Login} />
      </Switch>
    </Suspense>
  )
}

export default RouterView
