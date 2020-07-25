import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import _ from "lodash";
import {changeField} from "../../../../global/actions/StandardActions";
import {fetchTicketsAction} from "../../actions/FetchTicketsAction";
import {TICKET_TABLE_ACTION} from "../../constants/ReducerConstants";
import TicketTablePagination from "../cards/TicketTablePagination";


class TicketsTable extends Component {

    componentDidMount() {
        this.props.fetchTicketsAction();
    }

    typeHandler() {
        const {ticketsTableData, changeField} = this.props;
        if (ticketsTableData.sortType.indexOf("asc") > -1) {
            changeField(TICKET_TABLE_ACTION, "sortType", "desc");
            return "desc"
        } else {
            changeField(TICKET_TABLE_ACTION, "sortType", "asc");
            return "asc"
        }
    };

    onSort = sortField => {
        const {tickets, changeField} = this.props;
        const sortType = this.typeHandler();
        const orderedData = _.orderBy(tickets.data, sortField, sortType);
        changeField(TICKET_TABLE_ACTION, "data", orderedData);
        changeField(TICKET_TABLE_ACTION, "sortField", sortField);
    };

    getFilteredData() {
        const {ticketsTableData, tickets} = this.props;
        const filterField = ticketsTableData.filterField;
        if (!filterField) {
            return tickets.data;
        }
        return tickets.data.filter(item => {
            return item["ticketName"].toLowerCase().includes(filterField.toLowerCase())
                || item["clientName"].toLowerCase().includes(filterField.toLowerCase())
                || item["assignee"].toLowerCase().includes(filterField.toLowerCase())
                || item["status"].toLowerCase().includes(filterField.toLowerCase())
        })
    }

    render() {
        const {details, ticketsTableData} = this.props;
        const pageSize = 10;
        const filteredData = this.getFilteredData();
        const pageCount = Math.ceil(filteredData.length / pageSize);
        const displayedData = _.chunk(filteredData, pageSize)[ticketsTableData.currentPage];

        return (
            <React.Fragment>
                <Table hover striped>
                    <thead className="ticket-table-head">
                    <tr>
                        <th onClick={() => this.onSort("ticketNumber")}>
                            Number {ticketsTableData.sortField === "ticketNumber" ?
                            <small> {ticketsTableData.sortType}</small> : null}
                        </th>
                        <th onClick={() => this.onSort("ticketName")}>
                            Ticket name {ticketsTableData.sortField === "ticketName" ?
                            <small> {ticketsTableData.sortType}</small> : null}
                        </th>
                        <th onClick={() => this.onSort("clientName")}>
                            Client name {ticketsTableData.sortField === "clientName" ?
                            <small> {ticketsTableData.sortType}</small> : null}
                        </th>
                        <th onClick={() => this.onSort("assignee")}>
                            Assignee {ticketsTableData.sortField === "assignee" ?
                            <small> {ticketsTableData.sortType}</small> : null}
                        </th>
                        <th onClick={() => this.onSort("createdAt")}>
                            Created at {ticketsTableData.sortField === "createdAt" ?
                            <small> {ticketsTableData.sortType}</small> : null}
                        </th>
                        <th onClick={() => this.onSort("status")}>
                            Status {ticketsTableData.sortField === "status" ? <small> {ticketsTableData.sortType}</small> : null}
                        </th>
                    </tr>
                    </thead>
                    <tbody className="ticket-table-body">
                    {
                        displayedData && displayedData.map((ticket, key) => (
                                <tr key={key}>
                                    <td>
                                        <Link
                                            to={`/tickets/details/${ticket.ticketNumber}`}>
                                            {ticket.ticketNumber}
                                        </Link>
                                    </td>
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
                            <Link
                                to={`/tickets/details/${details.ticketNumber}`}>
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
                {filteredData.length > pageSize
                    ? <TicketTablePagination pageCount={pageCount}
                                             ticketsTableData={ticketsTableData}/>
                    : null}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
        details: state.ticketDetails,
        ticketsTableData: state.ticketsTableData,
        tickets: state.tickets
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    fetchTicketsAction
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketsTable);
