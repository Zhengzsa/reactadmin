import { Navigate, useLocation } from "react-router-dom"
import { getToken } from "../../utils/token"

/**
 * @de 路由守卫组件
 * */
const AuthRoute = ({ children }) => {
  console.log(children)
  const { pathname } = useLocation()

  if (getToken() && pathname === "/login") {
    return <Navigate to="/dashboard" replace />
  }
  if (pathname === "/login") {
    return children
  }

  if (!getToken()) return <Navigate to="/login" replace />

  return children
}

export default AuthRoute
