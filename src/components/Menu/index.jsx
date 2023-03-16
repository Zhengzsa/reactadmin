import React from "react"
import { Menu } from "antd"
import menus from "@/router/config"
import { useNavigate, useLocation } from "react-router-dom"

/**
 * 查找当前选中的menu菜单的值
 * @param key
 * @returns
 */
const findOpenkey = (key) => {
  const result = []
  const findinfo = (arr) => {
    arr.forEach((item) => {
      console.log(key)
      if (key.includes(item.key)) {
        result.push(item.key)
        if (item.children) {
          findinfo(item.children) // 递归方式查询子节点
        }
      }
    })
  }
  findinfo(menus)
  return result
}

const Menus = () => {
  const navigate = useNavigate()
  // 获取路由地址，'/.../'
  const localtion = useLocation()
  const { pathname } = localtion
  const tmpOpenkey = findOpenkey(pathname)
  console.log(tmpOpenkey)
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={tmpOpenkey}
      defaultOpenKeys={tmpOpenkey}
      onClick={({ key }) => {
        navigate(key)
      }}
      items={menus}
    />
  )
}

export default Menus
