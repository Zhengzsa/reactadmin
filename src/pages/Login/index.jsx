import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { context } from "@/components/AppPeovider"
import styles from "./index.module.scss"

const Login = () => {
  const navigator = useNavigate()
  const { resetMenus } = useContext(context)
  const [loading, setLoading] = useState(false)
  const onFinish = async (values) => {
    console.log(values)
    try {
      setLoading(true)
      const userinfo = JSON.stringify(values)
      sessionStorage.setItem("USER_INFO", userinfo)
      resetMenus(values.username)
      // await signIn(dispatch, token)
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
          />
        </Form.Item>
        {/* <Form.Item>
          <Form.Item noStyle name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="#">
            Forgot password
          </a>
        </Form.Item> */}

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
          {/* Or{" "}
          <a
            onClick={() => {
              form.resetFields()
            }}
          >
            register now!
          </a> */}
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
