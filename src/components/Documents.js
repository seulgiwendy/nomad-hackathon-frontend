import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router";

import { Alert, Panel, Glyphicon, Table } from "react-bootstrap";
import { Button } from "antd";

import "./Documents.css";

@inject(({ store }) => ({ store }))
@observer
class Documents extends Component {
  componentDidMount() {
    if (this.props.store.verify.isLogin) {
      fetch("http://printapi.wheejuni.com/api/v1/papers", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;utf8",
          Authorization: `Bearer ${this.props.store.verify.access_token}`
        }
      })
        .then(data => data.json())
        .then(this.props.store.setDocs);
    }
  }

  render() {
    if (!this.props.store.verify.isLogin) return <Redirect to="/" />;

    const filterdData = this.props.store.docs.filter(v =>
      v.title.includes(this.props.store.query)
    );

    const urgentData = filterdData.filter(({ urgent }) => urgent);
    const notUrgentData = filterdData.filter(({ urgent }) => !urgent);

    return (
      <div className="container-fluid">
        <Panel>
          <Panel.Body>
            <h3 className="document-list panel-title text-center">
              Your Documents.
            </h3>
            <Alert bsStyle="warning">
              <strong>Keep eyes on the important things!</strong> Urgent
              documents were placed on the top of list.
            </Alert>
            <Panel bsStyle="danger">
              <Panel.Heading>
                <Panel.Title componentClass="h3">
                  <Glyphicon glyph="flash" />Urgent documents
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Due date</th>
                      <th>File Download</th>
                      <th>Posted at:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td id="table-item">Background Image</td>
                      <td>2018.03.20</td>
                      <td>
                        <a
                          download
                          href="https://images.unsplash.com/photo-1515125520141-3e3b67bc0a88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c6884e42b8230aac24afbd82df73974&auto=format&fit=crop&w=1951&q=80"
                        >
                          <Button
                            type="primary"
                            shape="circle"
                            icon="download"
                            size="small"
                          />
                        </a>
                      </td>
                      <td>2018.03.19 14:30</td>
                    </tr>

                    {urgentData.map((v, i) => (
                      <tr>
                        <td>{i + 2}</td>
                        <td id="table-item">{v.title}</td>
                        <td>{v.duedate}</td>
                        <td>
                          <a download href={v.filesrc}>
                            <Button
                              type="primary"
                              shape="circle"
                              icon="download"
                              size="small"
                            />
                          </a>
                        </td>
                        <td>{v.registeredTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Panel.Body>
            </Panel>
            <Panel bsStyle="success">
              <Panel.Heading>
                <Panel.Title componentClass="h3">
                  <Glyphicon glyph="cloud-upload" /> Other documents
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Due date</th>
                      <th>File Download</th>
                      <th>Posted at:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notUrgentData.map(
                      (
                        { title, duedate, filesrc, urgent, registeredTime },
                        i
                      ) => (
                        <tr>
                          <td>{i + 2}</td>
                          <td id="table-item">{title}</td>
                          <td>{duedate}</td>
                          <td>
                            <Button
                              type="primary"
                              shape="circle"
                              icon="download"
                              size="small"
                            />
                          </td>
                          <td>{registeredTime}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
              </Panel.Body>
            </Panel>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Documents;
