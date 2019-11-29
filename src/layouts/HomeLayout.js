import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Navigation from "../global/navigation/Navigation";
import {HOME_ROUTE} from "../global/constants/routes";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import AccountDropdownCard from "../modules/account/views/cards/AccountDropdownCard";

class HomeLayout extends Component {
    render() {
        return (
                <React.Fragment>
                    <Navigation activeRoute={HOME_ROUTE}/>
                    <Container fluid>
                        <Row>
                            <Col sm={12}>
                                <div className="tickets-layout-content">
                                    <Row>
                                        <Col>
                                            <div className="tickets-top-component">
                                                <AccountDropdownCard/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                           <h1>Home Page</h1>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);