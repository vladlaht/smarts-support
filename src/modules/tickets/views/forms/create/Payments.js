import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Button, Col, Row, Form} from "react-bootstrap"
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
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <label className="smarts-ticket-selector-label"> Assignee</label>
                            <select className="smarts-select"
                                    defaultValue="default"
                                    onChange={(e) => this.handleFieldChange("assignee", e.target.value)}>
                                <option value="default" disabled>Ticket assignee</option>
                                <option>Kristo Truu</option>
                                <option>Ilja Andrejev</option>
                                <option>Vladislav Lahtarin</option>
                            </select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <label className="smarts-ticket-selector-label"> Priority</label>
                            <select className="smarts-select"
                                    defaultValue="default"
                                    onChange={(e) => this.handleFieldChange("priority", e.target.value)}>
                                <option value="default" disabled>Ticket priority</option>
                                <option>Critical</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">

                            <input type="text" className="smarts-input"
                                   required
                                   onChange={(e) => this.handleFieldChange("ticketName", e.target.value)}/>
                            <label className="smarts-ticket-label"> Ticket name</label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <input type="text" className="smarts-input"
                                   required
                                   onChange={(e) => this.handleFieldChange("clientName", e.target.value)}/>
                            <label className="smarts-ticket-label"> Client name</label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <input type="text" className="smarts-input"
                                   required
                                   onChange={(e) => this.handleFieldChange("invoiceNumber", e.target.value)}/>
                            <label className="smarts-ticket-label">Invoice number</label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <textarea rows="3" className="smarts-textarea"
                                      required
                                      onChange={(e) => this.handleFieldChange("description", e.target.value)}/>
                            <label className="smarts-ticket-label"> Description</label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="ticket-create-button-area">
                            <Button className="smarts-button ticket-create-button"
                                    onClick={this.createTicket}>Create</Button>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        form: state.createPaymentTicketForm,
    }
}


const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changeField,
    createPaymentTicket: createPaymentTicket,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Payments);