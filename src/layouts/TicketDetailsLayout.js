import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Navigation from "../global/navigation/Navigation";
import TicketDetails from "../modules/ticketDetails/views/TicketDetails";
import AccountDropdownCard from "../modules/account/views/cards/AccountDropdownCard";
import {TICKETS_ROUTE} from "../global/constants/routes";

class TicketDetailsLayout extends Component {
    render() {
        const {details} = this.props;
        return (
            <React.Fragment>
                <Navigation activeRoute={TICKETS_ROUTE}/>
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                            <div className="layout">
                                <Row>
                                    <Col>
                                        <div className="layout-head">
                                            <AccountDropdownCard/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="page-title">
                                            <h3>Ticket details</h3>
                                            <div className="page-subtitle">
                                                {details.ticketName}
                                            </div>
                                        </div>
                                        <div className="layout-body">
                                            <TicketDetails/>
                                        </div>
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

const mapStateToProps = state => ({
        details: state.ticketDetails
    }
)

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetailsLayout);