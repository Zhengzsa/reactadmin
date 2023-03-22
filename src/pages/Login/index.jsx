import React, { useContext } from "react"
import AnimateText from "@/utils/animateText/index"
import styles from "./index.scss?"
import { useNavigate } from "react-router-dom"
import { context } from "@/components/AppPeovider"
export default function index() {
  const navigate = useNavigate()
  const { resetMenus } = useContext(context)
  console.log(resetMenus)
  return (
    <div>
      <button
        onClick={() => {
          resetMenus("admin")
          sessionStorage.setItem("token", 12321)
          navigate("/dashboard")
        }}
      >
        登录
      </button>
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
