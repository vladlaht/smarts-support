import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Row, Col, Form} from "react-bootstrap";
import {AVAILABLE_TICKET_TYPES, TICKET_TYPE_PAYMENTS, TICKET_TYPE_SOFTWARE} from "../../../constants";
import {capitalizeFirstLetter} from "../../../../../global/utils/StringUpdates";
import {changeField} from "../../../../../global/actions/StandardActions";
import {CREATE_TICKET_ACTION} from "../../../constants/ReducerConstants";
import Payments from "./Payments";
import Software from "./Software";

class Create extends Component {

    handleFieldChange = (e) => {
        this.props.changeField(CREATE_TICKET_ACTION, "ticketType", e.target.value );
    };

    renderSelection() {
        return (
            <Row>
                <Col>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="smarts-ticket-box">
                                    <label className="smarts-selector-label"> Type</label>
                                    <select className="smarts-select"
                                            data-placeholder="Select type"
                                            onChange={this.handleFieldChange}
                                            defaultValue="default"
                                    >
                                        <option value="default" disabled>Select ticket type</option>
                                        {AVAILABLE_TICKET_TYPES.map(
                                            type => <option key={type}
                                                            value={type}>{capitalizeFirstLetter(type).replace(/_/, " ")}</option>)}
                                    </select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        )
    }

    renderTicketContent() {
        const {createTicket} = this.props;
        switch (createTicket.ticketType) {
            case TICKET_TYPE_PAYMENTS:
                return <Payments/>;
            case TICKET_TYPE_SOFTWARE:
                return <Software/>
            default:
                return null;
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderSelection()}
                {this.renderTicketContent()}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        createTicket: state.createTicket,
    }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changeField
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Create);
