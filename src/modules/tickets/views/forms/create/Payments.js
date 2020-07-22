import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Button, Form} from "react-bootstrap"
import {changeField} from "../../../../../global/actions/StandardActions";
import {CREATE_PAYMENTS_TICKET} from "../../../constants/ReducerConstants";
import {createPaymentTicket} from "../../../actions/create/CreatePaymentTicket";

class Payments extends Component {

    handleFieldChange(field, value) {
        this.props.changeField(CREATE_PAYMENTS_TICKET, field, value);
    };

    createTicket = () => {
        this.props.createPaymentTicket();
    };

    render() {
        return (
            <React.Fragment>
                <div className="payments-form-selectors">
                    <Form.Group className="smarts-ticket-box">
                        <label className="smarts-ticket-selector-label"> Assignee</label>
                        <select className="smarts-select"
                                defaultValue="default"
                                onChange={(e) => this.handleFieldChange("assignee", e.target.value)}>
                            <option value="default" disabled>Assignee</option>
                            <option>Kristo Truu</option>
                            <option>Ilja Andrejev</option>
                            <option>Vladislav Lahtarin</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="smarts-ticket-box">
                        <label className="smarts-ticket-selector-label"> Priority</label>
                        <select className="smarts-select"
                                defaultValue="default"
                                onChange={(e) => this.handleFieldChange("priority", e.target.value)}>
                            <option value="default" disabled>Priority</option>
                            <option>Critical</option>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </Form.Group>
                </div>

                <Form.Group className="smarts-ticket-box">
                    <input className="smarts-input" type="text"
                           required
                           onChange={(e) => this.handleFieldChange("ticketName", e.target.value)}/>
                    <label className="smarts-ticket-label"> Ticket name</label>
                </Form.Group>
                <Form.Group className="smarts-ticket-box">
                    <input className="smarts-input" type="text"
                           required
                           onChange={(e) => this.handleFieldChange("clientName", e.target.value)}/>
                    <label className="smarts-ticket-label"> Client name</label>
                </Form.Group>
                <Form.Group className="smarts-ticket-box">
                    <input className="smarts-input" type="text"
                           required
                           onChange={(e) => this.handleFieldChange("invoiceNumber", e.target.value)}/>
                    <label className="smarts-ticket-label">Invoice number</label>
                </Form.Group>
                <Form.Group className="smarts-ticket-box">
                            <textarea className="smarts-textarea" rows="3"
                                      required
                                      onChange={(e) => this.handleFieldChange("description", e.target.value)}/>
                    <label className="smarts-ticket-label"> Description</label>
                </Form.Group>
                <div className="ticket-create-button-area">
                    <Button className="smarts-button ticket-create-button"
                            onClick={this.createTicket}>Create</Button>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    createPaymentTicket,
}, dispatch));

export default connect(mapDispatchToProps)(Payments);