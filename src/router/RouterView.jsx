import React from "react"
import { useRoutes } from "react-router-dom"

import routes from "."

export const RouterView = () => {
  return <div>{useRoutes(routes)}</div>
}
