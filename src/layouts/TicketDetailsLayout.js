import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Navigation from "../global/navigation/Navigation";
import TicketDetails from "../modules/tickets/views/details/TicketDetails";
import AccountCard from "../modules/account/views/cards/AccountDropdownCard";
import {TICKETS_ROUTE} from "../global/constants/routes";

class TicketDetailsLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation  activeRoute={TICKETS_ROUTE}/>
                <Container fluid>
                    <Row>
                        <Col  sm={12}>
                            <div className="tickets-layout-content">
                                <Row>
                                    <Col>
                                        <div className="tickets-top-component">
                                            <AccountCard/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TicketDetails/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetailsLayout);