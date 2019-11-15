import React, {Component} from "react";
import TicketHeadComponent from "../modules/tickets/views/cards/TicketHeadComponent";
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
                <Navigation activeRoute={TICKETS_ROUTE}/>
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                            <div className="tickets-layout-content">
                                <Row>
                                    <Col>
                                        <TicketHeadComponent/>
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