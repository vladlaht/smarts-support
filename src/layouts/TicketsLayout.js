import React, {Component} from "react";
import CreateTicket from "../modules/tickets/views/cards/CreateTicketButton";
import TicketsTable from "../modules/tickets/views/tables/TicketsTable";
import CreateTicketModal from "../modules/tickets/views/modals/CreateTicketModal";
import {Container, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Navigation from "../global/navigation/Navigation";
import {TICKETS_ROUTE} from "../global/constants/routes";

class TicketsLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col lg={1} md={1} sm={1}>
                            <Navigation activeRoute={TICKETS_ROUTE}/>
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                            <div className="tickets-layout-content">
                                <Row>
                                    <Col>
                                        <CreateTicket/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TicketsTable/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CreateTicketModal/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TicketsLayout);