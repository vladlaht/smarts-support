import React, {Component} from "react";
import {changeField} from "../../../../global/actions/StandardActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Table} from "react-bootstrap";
import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class TicketsTable extends Component {
    render() {
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
            <div>
                <Row>
                    <Col>
                        <div className="tickets-page-header">
                            <h4>Customer support tickets</h4>
                            <div><span className="tickets-table-issues">Issues for solving:</span>45</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="ticket-search-input">
                            <input className="smarts-input " type="text" placeholder="Search ticket"/>
                        </div>
                    </Col>
                </Row>
                <Table>
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
                            <Link to="/invoices/details">
                                {this.props.details.ticketNumber}
                            </Link>
                        </td>
                        <td>{this.props.details.ticketName}</td>
                        <td>{this.props.details.clientName}</td>
                        <td>{this.props.details.assignee}</td>
                        <td>{this.props.details.createdAt}</td>
                        <td>{this.props.details.status}</td>
                    </tr>
                    {rows}
                    </tbody>
                </Table>
            </div>
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
