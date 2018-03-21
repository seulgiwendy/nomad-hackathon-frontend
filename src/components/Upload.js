import React from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router";

import {
  Form,
  Input,
  Button,
  TimePicker,
  Switch,
  Upload,
  Icon,
  message
} from "antd";

import "./Upload.css";

let fileName = "";

@inject(({ store }) => ({ store }))
@observer
class DocUpload extends React.Component {
  constructor(props) {
    super(props);

    this.bucket = new window.AWS.S3({
      region: "ap-northeast-2",
      params: {
        Bucket: "printboard-documents"
      }
    });

    this.uploadOption = {
      name: "file",
      multiple: true,
      action: "http://printapi.wheejuni.com/api/v1/dumbfile",

      onChange({ file }) {
        if (file.status === "done") {
          message.success(`${file.name} file uploaded successfully.`);

          const params = {
            Key: `${file.name}`, // 경로
            ContentType: "application/octet-stream", // 파일 타입
            Body: file.originFileObj, // 파일 본문
            ACL: "public-read" // 접근 권한
          };

          fileName = file.name;

          this.bucket.putObject(params, function(err, data) {
            console.dir(data);
          });
        } else if (file.status === "error") {
          message.error(`${file.name} file upload failed.`);
        }
      }
    };
  }

  componentDidMount() {
    if (this.props.store.verify.isLogin) {
      fetch("http://printapi.wheejuni.com/api/v1/awscredentials", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;utf8",
          Authorization: `Bearer ${this.props.store.verify.access_token}`
        }
      })
        .then(data => data.json())
        .then(this.props.store.setCredential);
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("handleSubmit", values);

        fetch("http://printapi.wheejuni.com/api/v1/papers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;utf8",
            Authorization: `Bearer ${this.props.store.verify.access_token}`
          },
          body: JSON.stringify({
            title: values.Title,
            duedate: values["time-picker"].format("YYYY.MM.DD HH:MM"),
            urgent: values.switch ? true : false,
            filesrc: `https://s3.ap-northeast-2.amazonaws.com/printboard-documents/${fileName}`
          })
        });
      }
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

    if (!this.props.store.verify.isLogin) return <Redirect to="/" />;

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

              <Upload.Dragger {...this.uploadOption}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </Upload.Dragger>

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

const WrappedUpload = Form.create()(DocUpload);

export default WrappedUpload;
