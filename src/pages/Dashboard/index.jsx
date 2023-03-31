import React from "react"
import { Card, Col, Row } from "antd"
import styles from "./index.module.scss"
// import { Store } from "../../store"// zustand 状态管理
// import { useSnapshot } from "valtio"
// import { state, inc } from "../../store"
import Linechart from "./charts/linechart"

export default function index() {
  // const { count, inc } = Store()// zustand 状态管理
  // const { count } = useSnapshot(state)
  return <div id={styles.dashbox}>welcome</div>
}
