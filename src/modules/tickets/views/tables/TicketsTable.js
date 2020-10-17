import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import _ from "lodash";
import {changeField, reset} from "../../../../global/actions/StandardActions";
import {fetchTicketsAction} from "../../actions/FetchTicketsAction";
import {BiDownArrowAlt, BiUpArrowAlt} from 'react-icons/bi';
import {TICKET_TABLE_ACTION, REORDER_TICKETS_ACTION} from "../../constants/ReducerConstants";
import TicketTablePagination from "../cards/TicketTablePagination";
import {LoopCircleLoading} from 'react-loadingg';

class TicketsTable extends React.Component {

    componentDidMount() {
        const {tickets, reset, fetchTicketsAction} = this.props;
        reset(TICKET_TABLE_ACTION);
        if (!tickets.isFetching && !tickets.isLoaded) {
            fetchTicketsAction()
        }
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
        changeField(REORDER_TICKETS_ACTION, "data", orderedData);
        changeField(TICKET_TABLE_ACTION, "sortField", sortField);
    };

    getFilteredData() {
        const {ticketsTableData, tickets} = this.props;
        const filterField = ticketsTableData.filterField;
        const sortField = ticketsTableData.sortField === "ticketNumber" ? "ticketNumber" : ticketsTableData.sortField;
        const sortType = ticketsTableData.sortType === "desc" ? "desc" : "asc";
        if (!filterField) {
            return _.orderBy(tickets.data, sortField, sortType);
        } else {
            return tickets.data.filter(item => {
                return item["ticketName"].toLowerCase().includes(filterField.toLowerCase())
                    || item["clientName"].toLowerCase().includes(filterField.toLowerCase())
                    || item["assignee"].toLowerCase().includes(filterField.toLowerCase())
                    || item["status"].toLowerCase().includes(filterField.toLowerCase())
            })
        }
    }

    render() {
        const {ticketsTableData} = this.props;
        const pageSize = 10;
        const filteredData = this.getFilteredData();
        const pageCount = Math.ceil(filteredData.length / pageSize);
        const displayedData = _.chunk(filteredData, pageSize)[ticketsTableData.currentPage];
        const iconType = ticketsTableData.sortType === "asc" ?
            <BiDownArrowAlt className="table-sort-icon"/> : <BiUpArrowAlt className="table-sort-icon"/>;

        return (
            <React.Fragment>
                {!displayedData ? <LoopCircleLoading/> : null}
                <Table className="ticket-table" hover striped>
                    <thead className="ticket-table__head">
                    <tr>
                        <th onClick={() => this.onSort("ticketNumber")}>
                            <span className="ticket-table__head-col-name">
                               Number {ticketsTableData.sortField === "ticketNumber" ? iconType : null}
                            </span>

                        </th>
                        <th onClick={() => this.onSort("ticketName")}>
                            <span className="ticket-table__head-col-name">
                                  Ticket name {ticketsTableData.sortField === "ticketName" ? iconType : null}
                            </span>

                        </th>
                        <th onClick={() => this.onSort("clientName")}>
                            <span className="ticket-table__head-col-name">
                                Client name {ticketsTableData.sortField === "clientName" ? iconType : null}
                            </span>

                        </th>
                        <th onClick={() => this.onSort("assignee")}>
                            <span className="ticket-table__head-col-name">
                                 Assignee {ticketsTableData.sortField === "assignee" ? iconType : null}
                            </span>

                        </th>
                        <th onClick={() => this.onSort("createdAt")}>
                            <span className="ticket-table__head-col-name">
                                 Created at {ticketsTableData.sortField === "createdAt" ? iconType : null}
                            </span>

                        </th>
                        <th onClick={() => this.onSort("status")}>
                            <span className="ticket-table__head-col-name">
                                Status {ticketsTableData.sortField === "status" ? iconType : null}
                            </span>

                        </th>
                    </tr>
                    </thead>

                    <tbody className="ticket-table__body">
                    {
                        displayedData && displayedData.map((ticket) => (
                                <tr key={ticket.id}>
                                    <td>
                                        <Link
                                            to={`/tickets/details/${ticket.id}`}>
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
        ticketsTableData: state.ticketsTableData,
        tickets: state.tickets,
        details: state.ticketDetails
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    reset,
    fetchTicketsAction
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketsTable);
