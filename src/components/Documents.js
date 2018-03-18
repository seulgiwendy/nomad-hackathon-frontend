import React, { Component } from "react";
import { Alert, Panel, Glyphicon, Table } from "react-bootstrap";
import { Button } from "antd";
import "./Documents.css";

class Documents extends Component {
  render() {
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
                      <td id="table-item">Understanding Broadcasting Media</td>
                      <td>2018.03.19</td>
                      <td>
                        <Button
                          type="primary"
                          shape="circle"
                          icon="download"
                          size="small"
                        />
                      </td>
                      <td>2018.03.17 14:00</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td id="table-item">
                        Develop SPA with React.js and Django Rest Framework
                      </td>
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
                    <tr>
                      <td>1</td>
                      <td id="table-item">괴짜가족 3</td>
                      <td>2018.03.19</td>
                      <td>
                        <Button
                          type="primary"
                          shape="circle"
                          icon="download"
                          size="small"
                        />
                      </td>
                      <td>2018.03.17 14:00</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td id="table-item">MLB 2018 스카우팅 리포트</td>
                      <td>2018.03.20</td>
                      <td>
                        <Button
                          type="primary"
                          shape="circle"
                          icon="download"
                          size="small"
                        />
                      </td>
                      <td>2018.03.19 14:30</td>
                    </tr>
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
