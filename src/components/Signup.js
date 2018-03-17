import React from "react";
import { Form, Icon, Input, Button } from "antd";

import "./Background.css";

const Signup = ({ form }) => {
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = e => {
    e.preventDefault();

    validateFields((err, values) => {
      if (!err) console.log(`Received values of form: ${values}`);
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("email", {
          rules: [
            { required: true, message: "Please input your Email!" },
            {
              type: "email",
              message: "userId is not a valid email"
            }
          ]
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="User Id"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [
            { required: true, message: "Please input your Password!" },
            { min: 8, message: "password must be at least 8 characters" }
          ]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("userName", {
          rules: [{ required: true, message: "Please input your UserName!" }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="user"
            placeholder="User Name"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedSignup = Form.create()(Signup);

export default WrappedSignup;
