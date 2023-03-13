import React from "react"
import AnimateText from "@/utils/animateText/index"
import styles from "./index.scss"

export default function index() {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.moderate}>
          <AnimateText
            texts={[
              " Moderate admin react",
              "基于React18+AntdDesign5+Mobx+Vite+Ts开发",
            ]}
          ></AnimateText>
        </div>
        <div className={styles.loginPanel}></div>
      </div>
    </div>
  )
}
