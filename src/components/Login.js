import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "./Login.css";

const Login = ({ form }) => {
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = e => {
    e.preventDefault();

    validateFields((err, values) => {
      if (!err) console.dir(values);
    });
  };

  return (
    <div>
    <div className="jumbo-text text-center">
      <h2 id="login-center-text">Welcome to PrintBoard.</h2>
      <h4 id="login-center-text-medium">PrintBoard is a service that organizes your messed-up documents, all at once.</h4>
      <span id="login-center-text-small">Please sign in, or sign up to proceed.</span>
      <hr id="login-center-line"/>
    </div>
    <div className="wrap_cont">
      <Form onSubmit={handleSubmit} className="login-form login">
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
              placeholder="Your registered email.."
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
              placeholder="password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
      <Form onSubmit={handleSubmit} className="login-form signup">
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
              placeholder="Your Email"
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
              placeholder="password"
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
              placeholder="confirm your password...."
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
              placeholder="Your real-world name"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};

const WrappedLogin = Form.create()(Login);

export default WrappedLogin;
