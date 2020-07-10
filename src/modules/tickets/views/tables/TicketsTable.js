import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import _ from "lodash";
import {changeField} from "../../../../global/actions/StandardActions";
import {fetchTicketsAction} from "../../actions/FetchTicketsAction";
import {SORT_TICKET_ACTION} from "../../constants/ReducerConstants";
import TicketTablePagination from "../cards/TicketTablePagination";

class TicketsTable extends Component {

    componentDidMount() {
        this.props.fetchTicketsAction();
    }

    typeHandler() {
        const {ticketsData, changeField} = this.props;
        if (ticketsData.sortType.indexOf("asc") > -1) {
            changeField(SORT_TICKET_ACTION, "sortType", "desc");
            return "desc"
        } else {
            changeField(SORT_TICKET_ACTION, "sortType", "asc");
            return "asc"
        }
    };

    onSort = sortField => {
        const {ticketsData, changeField} = this.props;
        const sortType = this.typeHandler();
        const orderedData = _.orderBy(ticketsData.data, sortField, sortType);
        changeField(SORT_TICKET_ACTION, "data", orderedData);
        changeField(SORT_TICKET_ACTION, "sortField", sortField);
    };

    render() {
        const {details, ticketsData} = this.props;
        const pageSize = 10;
        const displayedData = _.chunk(ticketsData.data, pageSize)[ticketsData.currentPage];
        return (
            <React.Fragment>
                <Table hover striped>
                    <thead className="ticket-table-head">
                    <tr>
                        <th onClick={() => this.onSort("ticketNumber")}>
                            Number {ticketsData.sortField === "ticketNumber" ?
                            <small> {ticketsData.sortType}</small> : null}
                        </th>
                        <th onClick={() => this.onSort("ticketName")}>
                            Ticket name {ticketsData.sortField === "ticketName" ?
                            <small> {ticketsData.sortType}</small> : null}
                        </th>
                        <th onClick={() => this.onSort("clientName")}>
                            Client name {ticketsData.sortField === "clientName" ?
                            <small> {ticketsData.sortType}</small> : null}
                        </th>
                        <th onClick={() => this.onSort("assignee")}>
                            Assignee {ticketsData.sortField === "assignee" ?
                            <small> {ticketsData.sortType}</small> : null}
                        </th>
                        <th onClick={() => this.onSort("createdAt")}>
                            Created at {ticketsData.sortField === "createdAt" ?
                            <small> {ticketsData.sortType}</small> : null}
                        </th>
                        <th onClick={() => this.onSort("status")}>
                            Status {ticketsData.sortField === "status" ? <small> {ticketsData.sortType}</small> : null}
                        </th>
                    </tr>
                    </thead>
                    <tbody className="ticket-table-body">
                    {
                        displayedData && displayedData.map((ticket, key) => (
                                <tr key={key}>
                                    <td>{ticket.ticketNumber}</td>
                                    <td>{ticket.ticketName}</td>
                                    <td>{ticket.clientName}</td>
                                    <td>{ticket.assignee}</td>
                                    <td>{new Date(ticket.createdAt).toLocaleString()}</td>
                                    <td>{ticket.status}</td>
                                </tr>
                            )
                        )
                    }
                    <tr>
                        <td>
                            <Link to="/tickets/details">
                                {details.ticketNumber}
                            </Link>
                        </td>
                        <td>{details.ticketName}</td>
                        <td>{details.clientName}</td>
                        <td>{details.assignee}</td>
                        <td>{details.createdAt}</td>
                        <td>{details.status}</td>
                    </tr>
                    </tbody>
                </Table>
                {ticketsData.data.length > pageSize ? <TicketTablePagination/> : null}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
        details: state.ticketDetails,
        ticketsData: state.ticketsData
    }
)

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    fetchTicketsAction
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketsTable);
