import { Spin } from "antd"

import { Suspense } from "react"

const lazyload = (Comp) => {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        />
      }
    >
      <Comp />
    </Suspense>
  )
}

export default lazyload
