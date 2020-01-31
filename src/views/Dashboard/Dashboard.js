import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Card,CardHeader,CardBody,Col,Container,Row} from 'reactstrap';


class Dashboard extends Component {
    state = {}

    render() {
        return (<React.Fragment>

                <Container fluid>
                    <Row>
                        <Col lg="6">
                          <Card>
                                    <CardHeader className="border-0">
                                        <div className="d-flex justify-content-between">
                                            <h3 className="card-title">Online Store Visitors</h3>
                                            <a href="javascript:void(0);">View Report</a>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="d-flex">
                                            <p className="d-flex flex-column">
                                                <span className="text-bold text-lg">820</span>
                                                <span>Visitors Over Time</span>
                                            </p>
                                            <p className="ml-auto d-flex flex-column text-right">
                                                <span className="text-success">
                                                  <i className="fas fa-arrow-up"></i> 12.5%
                                                </span>
                                                <span className="text-muted">Since last week</span>
                                            </p>
                                        </div>

                                        <div className="position-relative mb-4">
                                            <canvas id="visitors-chart" height="200"></canvas>
                                        </div>

                                        <div className="d-flex flex-row justify-content-end">
                                          <span className="mr-2">
                                            <i className="fas fa-square text-primary"></i> This Week
                                          </span>

                                            <span>
                                                <i className="fas fa-square text-gray"></i> Last Week
                                              </span>
                                        </div>
                                    </CardBody>
                                </Card>
                        </Col>
                        <div className="col-lg-6">

                                <Card>
                                <div className="card-header border-0">
                                    <div className="d-flex justify-content-between">
                                        <h3 className="card-title">Sales</h3>
                                        <a href="javascript:void(0);">View Report</a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex">
                                        <p className="d-flex flex-column">
                                            <span className="text-bold text-lg">$18,230.00</span>
                                            <span>Sales Over Time</span>
                                        </p>
                                        <p className="ml-auto d-flex flex-column text-right">
                            <span className="text-success">
                              <i className="fas fa-arrow-up"></i> 33.1%
                            </span>
                                            <span className="text-muted">Since last month</span>
                                        </p>
                                    </div>

                                    <div className="position-relative mb-4">
                                        <canvas id="sales-chart" height="200"></canvas>
                                    </div>

                                    <div className="d-flex flex-row justify-content-end">
                          <span className="mr-2">
                            <i className="fas fa-square text-primary"></i> This year
                          </span>

                                        <span>
                            <i className="fas fa-square text-gray"></i> Last year
                          </span>
                                    </div>
                                </div>
                                </Card>

                            <div className="card">
                                <div className="card-header border-0">
                                    <h3 className="card-title">Online Store Overview</h3>
                                    <div className="card-tools">
                                        <a href="#" className="btn btn-sm btn-tool">
                                            <i className="fas fa-download"></i>
                                        </a>
                                        <a href="#" className="btn btn-sm btn-tool">
                                            <i className="fas fa-bars"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                        <p className="text-success text-xl">
                                            <i className="ion ion-ios-refresh-empty"></i>
                                        </p>
                                        <p className="d-flex flex-column text-right">
                            <span className="font-weight-bold">
                              <i className="ion ion-android-arrow-up text-success"></i> 12%
                            </span>
                                            <span className="text-muted">CONVERSION RATE</span>
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                        <p className="text-warning text-xl">
                                            <i className="ion ion-ios-cart-outline"></i>
                                        </p>
                                        <p className="d-flex flex-column text-right">
                            <span className="font-weight-bold">
                              <i className="ion ion-android-arrow-up text-warning"></i> 0.8%
                            </span>
                                            <span className="text-muted">SALES RATE</span>
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-0">
                                        <p className="text-danger text-xl">
                                            <i className="ion ion-ios-people-outline"></i>
                                        </p>
                                        <p className="d-flex flex-column text-right">
                            <span className="font-weight-bold">
                              <i className="ion ion-android-arrow-down text-danger"></i> 1%
                            </span>
                                            <span className="text-muted">REGISTRATION RATE</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
        </React.Fragment>
    );
    }
    }

    export default Dashboard;