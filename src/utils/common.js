// 将路由数组改造成组件需要的样式
export const treeRouter = (list) => {
  return list.map((item) => {
    return {
      path: item.path,
      name: item.label,
      icon: item.icon,
      routes:
        "children" in item
          ? item.children.map(({ children, icon, label, path }) => {
              return {
                path: path,
                name: label,
                icon: icon,
                routes: children,
              }
            })
          : undefined,
    }
  })
}
