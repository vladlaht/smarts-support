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
        const {ticketsData, changeField} = this.props;
        if (ticketsData.sortType.indexOf("asc") > -1) {
            changeField(TICKET_TABLE_ACTION, "sortType", "desc");
            return "desc"
        } else {
            changeField(TICKET_TABLE_ACTION, "sortType", "asc");
            return "asc"
        }
    };

    onSort = sortField => {
        const {ticketsData, changeField} = this.props;
        const sortType = this.typeHandler();
        const orderedData = _.orderBy(ticketsData.data, sortField, sortType);
        changeField(TICKET_TABLE_ACTION, "data", orderedData);
        changeField(TICKET_TABLE_ACTION, "sortField", sortField);
    };

    getFilteredData() {
        const {ticketsData} = this.props;
        const filterField = ticketsData.filterField;
        if (!filterField) {
            return ticketsData.data;
        }
        return ticketsData.data.filter(item => {
            return item["ticketName"].toLowerCase().includes(filterField.toLowerCase())
            || item["clientName"].toLowerCase().includes(filterField.toLowerCase())
            || item["assignee"].toLowerCase().includes(filterField.toLowerCase())
            || item["status"].toLowerCase().includes(filterField.toLowerCase())
        })
    }

    render() {
        const {details, ticketsData} = this.props;
        const pageSize = 10;
        const filteredData = this.getFilteredData();
        const pageCount = Math.ceil(filteredData.length / pageSize);
        const displayedData = _.chunk(filteredData, pageSize)[ticketsData.currentPage];

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
                {filteredData.length > pageSize
                    ? <TicketTablePagination pageCount={pageCount}
                                             ticketsData={ticketsData}/>
                    : null}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
        details: state.ticketDetails,
        ticketsData: state.ticketsData
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    fetchTicketsAction
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketsTable);
