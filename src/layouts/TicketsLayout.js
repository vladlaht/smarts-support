import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import {TICKETS_ROUTE} from "../global/constants/routes";
import Navigation from "../global/navigation/Navigation";

import CreateTicketModal from "../modules/tickets/views/modals/CreateTicketModal";
import TicketsTable from "../modules/tickets/views/tables/TicketsTable";
import TicketSearch from "../modules/tickets/views/cards/TicketSearch";

class TicketsLayout extends React.Component {

    render() {
        const unsolvedIssues = this.props.tickets.data.length;
        return (
            <React.Fragment>

                <div className="layout">
                    <div className="layout-header">
                        <Container>
                            <Navigation activeRoute={TICKETS_ROUTE}/>
                        </Container>
                    </div>
                    <div className="layout-content">
                        <Container>
                            <div className="layout-content__title">
                                <h3>Customer support tickets</h3>
                                <span className="tickets-table-issues">Issues for solving:</span>
                                {unsolvedIssues}
                            </div>
                            <div className="layout-content-elements">
                                <CreateTicketModal/>
                                <TicketSearch/>
                            </div>
                            <div className="layout-content__body">
                                <TicketsTable/>
                            </div>
                        </Container>
                    </div>
                </div>
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