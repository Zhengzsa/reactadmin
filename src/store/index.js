// zustand 状态管理
// import { create } from "zustand"
// // persist, createJSONStorage做持久化
// import { devtools, persist, createJSONStorage } from "zustand/middleware"

// export const Store = create(
//   devtools(
//     persist(
//       (set, get) => ({
//         count: 1,
//         inc: (val) => set({ count: get().count + val }),
//       }),
//       {
//         name: "storage",
//         storage: createJSONStorage(() => sessionStorage),
//       }
//     )
//   )
// )

// valtio状态管理方式 暂且不知道如何做数据持久化
import { proxy, subscribe } from "valtio"
import { devtools } from "valtio/utils" // 浏览器开发工具

export const state = proxy({
  count: 1,
})
devtools(state, { name: "state", enabled: true })
export const inc = (val) => {
  state.count += val
}
// 可以用来监听变化
subscribe(state, () => {
  console.log("state has changed to", state)
})
