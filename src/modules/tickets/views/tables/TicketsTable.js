import React, {Component} from "react";
import {changeField} from "../../../../global/actions/StandardActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

class TicketsTable extends Component {
    render() {
        const {details} = this.props;
        let rows = [];
        let number = 12345;
        for (let i = 0; i < 11; i++) {
            rows.push(
                <tr key={i}>
                    <td>{++number}</td>
                    <td>Ticket name</td>
                    <td>Client name</td>
                    <td>Assignee name</td>
                    <td>Ticket creation date</td>
                    <td>Ticket status</td>
                </tr>
            )
        }

        return (
                <Table hover striped >
                    <thead className="ticket-table-head">
                    <tr>
                        <th>Number</th>
                        <th>Ticket name</th>
                        <th>Client name</th>
                        <th>Assignee</th>
                        <th>Created at</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody className="ticket-table-body">
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
                    {rows}
                    </tbody>
                </Table>
        )
    }
}


function mapStateToProps(state) {
    return {
        details: state.ticketDetails
    }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changeField
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketsTable);
