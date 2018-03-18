import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router-dom";

import { Form, Icon, Input, Button } from "antd";
import "./Login.css";

@inject(({ store }) => ({ store }))
@observer
class Login extends Component {
  compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== this.props.form.getFieldValue("signup-password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  handleLoginSubmit = e => {
    e.preventDefault();

    fetch("http://printapi.wheejuni.com/login", {
      method: "POST",
      body: JSON.stringify({
        loginEmail: e.target[0].value,
        password: e.target[1].value
      })
    })
      .then(data => data.json())
      .then(this.props.store.setVerify);
  };

  handleSignupSubmit = e => {
    e.preventDefault();

    fetch("http://printapi.wheejuni.com/api/v1/userjoin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;utf8"
      },
      body: JSON.stringify({
        memberEmail: e.target[0].value,
        password: e.target[1].value,
        name: e.target[3].value
      })
    })
      .then(data => data.json())
      .then(console.error);
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    if (this.props.store.verify.isLogin) return <Redirect to="/docs" />;

    return (
      <div>
        <div className="jumbo-text text-center">
          <h2 id="login-center-text">Welcome to PrintBoard.</h2>
          <h4 id="login-center-text-medium">
            PrintBoard is a service that organizes your messed-up documents, all
            at once.
          </h4>
          <span id="login-center-text-small">
            Please sign in, or sign up to proceed.
          </span>
          <hr id="login-center-line" />
        </div>
        <div className="wrap_cont">
          <Form onSubmit={this.handleLoginSubmit} className="login-form login">
            <Form.Item>
              {getFieldDecorator("login-email", {
                rules: [
                  { required: true, message: "Please input your Email!" },
                  {
                    type: "email",
                    message: "userId is not a valid email"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Your registered email.."
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("login-password", {
                rules: [
                  { required: true, message: "Please input your Password!" },
                  { min: 8, message: "password must be at least 8 characters" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
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

          <Form
            onSubmit={this.handleSignupSubmit}
            className="login-form signup"
          >
            <Form.Item>
              {getFieldDecorator("signup-email", {
                rules: [
                  { required: true, message: "Please input your Email!" },
                  {
                    type: "email",
                    message: "userId is not a valid email"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Your Email"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("signup-password", {
                rules: [
                  { required: true, message: "Please input your Password!" },
                  { min: 8, message: "password must be at least 8 characters" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("confirm-password", {
                rules: [
                  { required: true, message: "Please input your Password!" },
                  { min: 8, message: "password must be at least 8 characters" },
                  { validator: this.compareToFirstPassword }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="confirm your password...."
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your UserName!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
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
  }
}

const WrappedLogin = Form.create()(Login);

export default WrappedLogin;
