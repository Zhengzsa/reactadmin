import routes from "."
export const menus = routes[0].children

// 根据role角色生成最终菜单
export const findRoles = (role) => {
  const arr = []
  findinfo(menus)
  function findinfo(menus, parent = null) {
    menus.forEach((item) => {
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
