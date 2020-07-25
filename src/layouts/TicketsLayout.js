import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {TICKETS_ROUTE} from "../global/constants/routes";
import Navigation from "../global/navigation/Navigation";
import AccountDropdownCard from "../modules/account/views/cards/AccountDropdownCard";
import NewTicketButton from "../modules/tickets/views/cards/NewTicketButton";
import TicketsTable from "../modules/tickets/views/tables/TicketsTable";
import TicketSearch from "../modules/tickets/views/cards/TicketSearch";

class TicketsLayout extends Component {

    render() {
        const unsolvedIssues = this.props.tickets.data.length;
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
                                            <h3>Customer support tickets</h3>
                                            <div>
                                                <span className="tickets-table-issues">Issues for solving:</span>
                                                {unsolvedIssues}
                                            </div>
                                        </div>
                                        <div className="tickets-layout-elements">
                                            <NewTicketButton/>
                                            <TicketSearch/>
                                        </div>
                                        <div className="layout-body">
                                            <TicketsTable/>
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
        ticketsTableData: state.ticketsTableData,
        tickets: state.tickets
    }
);

export default connect(mapStateToProps, null)(TicketsLayout);