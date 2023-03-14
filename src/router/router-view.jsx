import { Switch, Redirect, Route } from "react-router-dom"
// Suspense配合lazy懒加载页面使用
import React, { Suspense } from "react"
const NotFound = React.lazy(() => import("@/pages/NotFound/index"))
const RouterView = (props) => {
  let { route } = props
  return (
    // 这里是组件懒加载没加载出来之前显示loading
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Redirect exact from="/" to="/login" />
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
  )
}

export default RouterView
