import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input, message } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setToken } from "../../utils/token"
import styles from "./index.module.scss"

const Login = () => {
  const navigator = useNavigate()
  const [loading, setLoading] = useState(false)
  const onFinish = async (values) => {
    try {
      setLoading(true)
      const userinfo = JSON.stringify(values)
      sessionStorage.setItem("USER_INFO", userinfo)
      sessionStorage.setItem("role", values.username)
      setToken(values.username)
      message.success("登录成功")
      navigator("/dashboard")
    } finally {
      setLoading(false)
    }
  }
  const [form] = Form.useForm()
  return (
    <div id={styles.loginContainer}>
      <div className={styles.loginTop}>
        <h2>react-admin-vite-antd5</h2>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        size="large"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            allowClear
            prefix={<UserOutlined />}
            placeholder="admin or user"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="any password"
            autoComplete="true"
          />
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            登&nbsp;&nbsp;&nbsp;&nbsp;录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
