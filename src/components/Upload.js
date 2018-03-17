import React from "react";
import { Form, Select, Input, Button, TimePicker } from "antd";

import Uploader from "./Uploader";

const Option = Select.Option;

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
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          label="Title"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("Title", {
            rules: [{ required: true, message: "Please input your title!" }]
          })(<Input />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="TimePicker">
          {getFieldDecorator("time-picker", {
            rules: [
              { type: "object", required: true, message: "Please select time!" }
            ]
          })(<TimePicker />)}
        </Form.Item>

        <Uploader />

        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedUpload = Form.create()(Upload);

export default WrappedUpload;
