import React from 'react'
import { Button, Row, Form, Input } from 'antd'

const FormItem = Form.Item

const Login = (props) => {
  function handleOk(){
    console.log("ok")
  }

  return (
    <div>
      <div>
        <img src="" alt="logo"/>
        <span>AntD Admin</span>
      </div>
      <form>
        <FormItem hasFeedback>
          <Input onPressEnter={handleOk} placeholder="username"/>
        </FormItem>
        <FormItem hasFeedback>
          <Input onPressEnter={handleOk} placeholder="password"/>
        </FormItem>
        <Row>
          <Button type="primary" onClick={handleOk}>
            Sign in
          </Button>
          <p>
            <span>username:guest</span>
            <span>password:guest</span>
          </p>
        </Row>
      </form>
    </div>
  )
}

export default Login