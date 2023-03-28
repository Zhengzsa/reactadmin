import routes from "."
const menu = routes[0].children

/**
 * 根据role角色生成侧边栏菜单
 * @param role
 * @returns
 */
export const findRoles = (role) => {
  const arr = []
  findinfo(menu)
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
