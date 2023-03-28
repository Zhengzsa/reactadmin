//权限相关的处理

import { createContext, useState } from "react"
import menudata from "../router/config"

export const context = createContext({})
/**
 * 根据role角色生成侧边栏菜单
 * @param role
 * @returns
 */
const findRoles = (role) => {
  const arr = []
  findinfo(menudata)
  function findinfo(data, parent = null) {
    data.forEach((item) => {
      const { children, ...info } = item
      if (children) {
        info.children = []
        findinfo(children, info.children)
        info.children.length == 0 ? delete info.children : null
      }
      if (info.roles) {
        if (info.roles?.includes(role))
          parent ? parent.push(info) : arr.push(info)
      } else {
        parent ? parent.push(info) : arr.push(info)
      }
    })
  }
  return arr
}

/**
 * 根据侧边栏实现路由信息的扁平化处理
 * @param menu
 * @returns
 */
function flatRoute(menus) {
  const arr = []
  function findInfo(data) {
    data.forEach((item) => {
      const { children, ...info } = item
      arr.push(info)
      if (children) {
        findInfo(children)
      }
    })
  }
  findInfo(menus)
  return arr
}

function AppPeovider({ children }) {
  // 初始化的时候从本地存储获取角色信息
  let defaultMenus = []
  let defaultRoutes = []
  const oldrole = sessionStorage.getItem("role")
  if (oldrole) {
    defaultMenus = findRoles(oldrole)
    defaultRoutes = flatRoute(defaultMenus)
  }
  const [menus, setMenus] = useState(defaultMenus)
  const [routes, setRoutes] = useState(defaultRoutes)
  // 根据角色设置路由和菜单（可以在登陆时用）
  const resetMenus = (role) => {
    sessionStorage.setItem("role", role)
    const tmpmenu = findRoles(role)
    setMenus(tmpmenu)
    setRoutes(flatRoute(tmpmenu))
  }

  return (
    <context.Provider value={{ menus, routes, resetMenus }}>
      {children}
    </context.Provider>
  )
}
export default AppPeovider
