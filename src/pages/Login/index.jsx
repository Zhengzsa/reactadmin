import React from "react"
import AnimateText from "@/utils/animateText/index"
import styles from "./index.scss?"

export default function index() {
  return (
    <div>
      1111111
      <div className={styles.content}>
        <div className={styles.moderate}>
          <AnimateText
            texts={["这里是测试练习用的react后台管理系统，功能还不是很完善"]}
          ></AnimateText>
        </div>
        <div className={styles.loginPanel}></div>
      </div>
    </div>
  )
}
