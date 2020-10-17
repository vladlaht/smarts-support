import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import {TICKETS_ROUTE} from "../global/constants/routes";
import TopMenu from "../global/navigation/TopMenu";
import CreateTicketModal from "../modules/tickets/views/modals/CreateTicketModal";
import TicketsTable from "../modules/tickets/views/tables/TicketsTable";
import TicketSearch from "../modules/tickets/views/cards/TicketSearch";

class TicketsLayout extends React.Component {

    countUnsolvedIssues() {
        const unsolvedIssues = this.props.tickets.data.filter(ticket => ticket.status === "Open").length;
        return unsolvedIssues;
    }

    render() {
        const totalIssues = this.props.tickets.data.length;
        const unsolvedIssues = this.countUnsolvedIssues();

        return (
            <React.Fragment>
                <div className="layout">
                    <div className="layout-header">
                        <Container>
                            <TopMenu active={TICKETS_ROUTE}/>
                        </Container>
                    </div>
                    <div className="layout-content">
                        <Container>
                            <div className="layout-content__title">
                                <h3>Customer support tickets</h3>
                                <div className="tickets-table-issue">
                                    <span className="tickets-table-issue-text">Total count of issues :</span>
                                    {totalIssues}
                                </div>
                                <div className="tickets-table-issue">
                                    <span className="tickets-table-issue-text">Issues for solving:</span>
                                    {unsolvedIssues}
                                </div>
                            </div>
                            <div className="layout-content__elements">
                                <CreateTicketModal/>
                                <TicketSearch/>
                            </div>
                            <div className="layout-content__body tickets-table-content">
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