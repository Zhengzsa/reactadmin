import React, { Suspense } from "react"
import { useRoutes } from "react-router-dom"

import routes from "./index副本"

export const RouterView = () => {
  return <Suspense>{useRoutes(routes)}</Suspense>
}
