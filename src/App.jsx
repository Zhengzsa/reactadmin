import React from "react";
import { Button,DatePicker,Space,version } from "antd";


export default function App() {
  return <div>
    <h1>antd version:{version}</h1>
    <Space>
      <DatePicker/>
      <Button type="primary">按钮</Button>
    </Space>
  </div>;
}
