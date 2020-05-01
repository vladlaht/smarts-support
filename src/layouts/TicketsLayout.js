import React, {Component} from "react";
import NewTicketButton from "../modules/tickets/views/cards/NewTicketButton";
import TicketsTable from "../modules/tickets/views/tables/TicketsTable";
import {Container, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Navigation from "../global/navigation/Navigation";
import {TICKETS_ROUTE} from "../global/constants/routes";
import AccountDropdownCard from "../modules/account/views/cards/AccountDropdownCard";

class TicketsLayout extends Component {

    render() {
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
                                            <div><span className="tickets-table-issues">Issues for solving:</span>45
                                            </div>
                                        </div>


                                        <div className="button-search-elements">
                                            <NewTicketButton/>
                                            <input className="smarts-input" type="text" placeholder="Search ticket"/>
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

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketsLayout);