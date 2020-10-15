import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Form} from "react-bootstrap"
import {changeField, clearErrors, reset} from "../../../../../global/actions/StandardActions";
import {CREATE_PAYMENTS_TICKET_ACTION} from "../../../constants/ReducerConstants";
import {AVAILABLE_TICKET_PRIORITY_TYPES} from "../../../constants";
import {capitalizeFirstLetter} from "../../../../../global/utils/StringUpdates";
import {createPaymentTicketDemo} from "../../../actions/create/CreatePaymentTicketDemoAction";

class Payments extends React.Component {

    componentDidMount() {
        this.props.reset(CREATE_PAYMENTS_TICKET_ACTION);
    }

    handleFieldChange(field, value) {
        this.props.changeField(CREATE_PAYMENTS_TICKET_ACTION, field, value);
    };

    validate = () => {
        this.props.clearErrors(CREATE_PAYMENTS_TICKET_ACTION);
        const validationField = "assignee";
        // const validationFields = ["assignee", "priority", "ticketNumber", "clientName", "invoiceNumber", "description"];
        // validationField.forEach(field => {
        //
        //     console.log("true");
        //     return true;
        // });
        if (this.props.createPaymentTicketForm[validationField] === null) {
            this.props.changeField(CREATE_PAYMENTS_TICKET_ACTION, validationField+"Error", "Please select");
            console.log("false");
            return false;
        }
    };

    createTicket = () => {
        const isValid = this.validate();
        if (isValid) {
            this.props.createPaymentTicketDemo();
        }
        //this.props.createPaymentTicket();
    };

    render() {
        return (
            <React.Fragment>
                <div className="payments-form-selectors">
                    <Form.Group className="smarts-ticket-form">
                        <label className="smarts-ticket-selector-label"> Assignee</label>
                        <select className="smarts-select"
                                defaultValue="default"
                                onChange={(e) => this.handleFieldChange("assignee", e.target.value)}>
                            <option value="default" disabled>Assignee</option>
                            <option>Kristo Truu</option>
                            <option>Ilja Andrejev</option>
                            <option>Vladislav Lahtarin</option>
                        </select>
                        <div>{this.props.createPaymentTicketForm.assigneeError}</div>
                    </Form.Group>
                    <Form.Group className="smarts-ticket-form">
                        <label className="smarts-ticket-selector-label"> Priority</label>
                        <select className="smarts-select"
                                defaultValue="default"
                                onChange={(e) => this.handleFieldChange("priority", e.target.value)}>
                            <option value="default" disabled>Priority</option>
                            {AVAILABLE_TICKET_PRIORITY_TYPES.map(
                                type => <option key={type}
                                                value={type}>{capitalizeFirstLetter(type).replace(/_/, " ")}</option>)}
                        </select>
                        <div>{this.props.createPaymentTicketForm.priorityError}</div>
                    </Form.Group>
                </div>
                <Form.Group className="smarts-ticket-form">
                    <input className="smarts-input" type="text"
                           onChange={(e) => this.handleFieldChange("ticketName", e.target.value)}/>
                    <label className="smarts-ticket-label"> Ticket name</label>
                </Form.Group>
                <Form.Group className="smarts-ticket-form">
                    <input className="smarts-input" type="text"
                           onChange={(e) => this.handleFieldChange("clientName", e.target.value)}/>
                    <label className="smarts-ticket-label"> Client name</label>
                </Form.Group>
                <Form.Group className="smarts-ticket-form">
                    <input className="smarts-input" type="text"
                           onChange={(e) => this.handleFieldChange("invoiceNumber", e.target.value)}/>
                    <label className="smarts-ticket-label">Invoice number</label>
                </Form.Group>
                <Form.Group className="smarts-ticket-form">
                            <textarea className="smarts-textarea" rows="3"
                                      onChange={(e) => this.handleFieldChange("description", e.target.value)}/>
                    <label className="smarts-ticket-label"> Description</label>
                </Form.Group>
                <div className="ticket-create-button-area">
                    <button className="smarts-button ticket-create-button"
                            onClick={this.createTicket}>Create
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        createPaymentTicketForm: state.createPaymentTicketForm
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    clearErrors,
    reset,
    // createPaymentTicket: createPaymentTicketAction,
    createPaymentTicketDemo
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Payments);