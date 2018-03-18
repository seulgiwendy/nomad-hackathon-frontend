import React, {Component} from 'react';
import {Panel, Alert, Glyphicon, Table} from 'react-bootstrap';
import './Documents.css';

class Documents extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Panel>
                    <Panel.Body>
                        <h3 className="document-list panel-title text-center">Your Documents.</h3>
                        <Alert bsStyle="warning">
                            <strong>Keep eyes on the important things!</strong> Urgent documents were placed on the top of list.
                        </Alert>
                        <Panel bsStyle="danger">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3"><Glyphicon glyph="flash"/>Urgent documents</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Due date</th>
                                        <th>URGENT</th>
                                        <th>File Download</th>
                                        <th>Posted at:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td id="table-item">Understanding Broadcasting Media</td>
                                            <td>2018.03.19</td>
                                            <td>YES</td>
                                            <td>link-to-s3</td>
                                            <td>2018.03.17 14:00</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td id="table-item">Develop SPA with React.js and Django Rest Framework</td>
                                            <td>2018.03.20</td>
                                            <td>YES</td>
                                            <td>link-to-s3</td>
                                            <td>2018.03.19 14:30</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Panel.Body>
                        </Panel>
                        <Panel bsStyle="success">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3"><Glyphicon glyph="cloud-upload"/> Other documents</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Due date</th>
                                        <th>URGENT</th>
                                        <th>File Download</th>
                                        <th>Posted at:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td id="table-item">괴짜가족 3</td>
                                            <td>2018.03.19</td>
                                            <td>NO</td>
                                            <td>link-to-s3</td>
                                            <td>2018.03.17 14:00</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td id="table-item">MLB 2018 스카우팅 리포트</td>
                                            <td>2018.03.20</td>
                                            <td>NO</td>
                                            <td>link-to-s3</td>
                                            <td>2018.03.19 14:30</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Panel.Body>
                        </Panel>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default Documents;