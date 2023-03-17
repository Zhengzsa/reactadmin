import React from "react"
import { Menu } from "antd"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { context } from "../AppPeovider"
/**
 * 查找当前选中的menu菜单的值
 * @param key
 * @returns
 */
const findOpenkey = (key, menus) => {
  const result = []
  const findinfo = (arr) => {
    arr.forEach((item) => {
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
  const { menus } = useContext(context)
  console.log(menus)
  const navigate = useNavigate()
  // 获取路由地址，'/.../'
  const { pathname } = useLocation()
  const [tmpOpenkey, setTmpOpenkey] = useState(findOpenkey(pathname, menus))
  // console.log(tmpOpenkey)
  // 监听路由变化
  // useEffect(() => {
  //   setTmpOpenkey(findOpenkey(pathname, menus))
  // }, [pathname])
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
