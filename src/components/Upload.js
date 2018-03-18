import React from "react";
import { Form, Input, Button, TimePicker, Switch } from "antd";

import Uploader from "./Uploader";
import "./Upload.css";

class Upload extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === "male" ? "man" : "lady"}!`
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <div className="container-fluid">
        <div className="panel panel-default">
          <Form onSubmit={this.handleSubmit} className="panel-body">
            <div className="container-fluid">
              <Form.Item
                label="제목"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
                id="form-items"
              >
                {getFieldDecorator("Title", {
                  rules: [
                    { required: true, message: "Please input your title!" }
                  ]
                })(<Input />)}
              </Form.Item>

              <Form.Item {...formItemLayout} label="시간">
                {getFieldDecorator("time-picker", {
                  rules: [
                    {
                      type: "object",
                      required: true,
                      message: "Please select time!"
                    }
                  ]
                })(<TimePicker />)}
              </Form.Item>

              <Form.Item {...formItemLayout} label="긴급">
                {getFieldDecorator("switch", { valuePropName: "checked" })(
                  <Switch />
                )}
              </Form.Item>

              <Uploader />

              <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" htmlType="submit">
                  제출
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedUpload = Form.create()(Upload);

export default WrappedUpload;
