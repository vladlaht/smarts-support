import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Form} from "react-bootstrap"
import {changeField, clearErrors, reset} from "../../../../../global/actions/StandardActions";
import {CREATE_PAYMENTS_TICKET_ACTION} from "../../../constants/ReducerConstants";
import {AVAILABLE_TICKET_PRIORITY_TYPES} from "../../../constants";
import {capitalizeFirstLetter, countCharacters, splitOnUpperCase} from "../../../../../global/utils/StringUpdates";
import {createPaymentTicketDemo} from "../../../actions/create/CreatePaymentTicketDemoAction";

class Payments extends React.Component {

    componentDidMount() {
        this.props.reset(CREATE_PAYMENTS_TICKET_ACTION);
    }

    handleFieldChange = (field, value) => {
        const {changeField} = this.props;
        changeField(CREATE_PAYMENTS_TICKET_ACTION, field, value);
        if (countCharacters(value) > 0) {
            changeField(CREATE_PAYMENTS_TICKET_ACTION, field + "Error", null);
        }
    };

    validate = () => {
        const {clearErrors, createPaymentTicketForm, changeField} = this.props;

        clearErrors(CREATE_PAYMENTS_TICKET_ACTION);
        const validationFields = ["assignee", "priority", "ticketName", "clientName", "invoiceNumber", "description"];
        let isValid = true;
        validationFields.forEach(field => {
            if (createPaymentTicketForm[field] === null || countCharacters(createPaymentTicketForm[field]) <= 0) {
                if (field === "assignee" || field === "priority") {
                    changeField(CREATE_PAYMENTS_TICKET_ACTION, field + "Error", "Please select " + field);
                } else {
                    changeField(CREATE_PAYMENTS_TICKET_ACTION, field + "Error", "Please enter " + splitOnUpperCase(field));
                }
                isValid = false;
            }
        });
        return isValid;
    };

    createTicket = e => {
        const {createPaymentTicketDemo} = this.props;
        e.preventDefault();

        const isValid = this.validate();
        if (isValid) {
            createPaymentTicketDemo();
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
                        <span
                            className="smarts-ticket-error-text">{this.props.createPaymentTicketForm.assigneeError}</span>
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
                        <span
                            className="smarts-ticket-error-text">{this.props.createPaymentTicketForm.priorityError}</span>
                    </Form.Group>
                </div>
                <Form.Group className="smarts-ticket-form">
                    <input className="smarts-input" type="text"
                           onChange={(e) => this.handleFieldChange("ticketName", e.target.value)}/>
                    <label className="smarts-ticket-label"> Ticket name</label>
                    <span
                        className="smarts-ticket-error-text">{this.props.createPaymentTicketForm.ticketNameError}</span>
                </Form.Group>
                <Form.Group className="smarts-ticket-form">
                    <input className="smarts-input" type="text"
                           onChange={(e) => this.handleFieldChange("clientName", e.target.value)}/>
                    <label className="smarts-ticket-label"> Client name</label>
                    <span
                        className="smarts-ticket-error-text">{this.props.createPaymentTicketForm.clientNameError}</span>
                </Form.Group>
                <Form.Group className="smarts-ticket-form">
                    <input className="smarts-input" type="text"
                           onChange={(e) => this.handleFieldChange("invoiceNumber", e.target.value)}/>
                    <label className="smarts-ticket-label">Invoice number</label>
                    <span
                        className="smarts-ticket-error-text">{this.props.createPaymentTicketForm.invoiceNumberError}</span>
                </Form.Group>
                <Form.Group className="smarts-ticket-form">
                            <textarea className="smarts-textarea" rows="3"
                                      onChange={(e) => this.handleFieldChange("description", e.target.value)}/>
                    <label className="smarts-ticket-label"> Description</label>
                    <span
                        className="smarts-ticket-error-text">{this.props.createPaymentTicketForm.descriptionError}</span>
                </Form.Group>
                <div className="ticket-create-button-area">
                    <button className="ticket-create-button smarts-button "
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