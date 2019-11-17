import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {changeField} from "../../../../../global/actions/StandardActions";
import {CREATE_PAYMENTS_TICKET} from "../../../constants/ReducerConstants";
import {createPaymentsTicket} from "../../../actions/create/CreatePaymentsTicket";

class Payments extends Component {

    handleFieldChange = (field, value) => {
        this.props.changeField(CREATE_PAYMENTS_TICKET, field, value)
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <label className="smarts-selector-label"> Assignee</label>
                            <select className="smarts-select"
                                    defaultValue="default"
                            onChange={(e)=> this.handleFieldChange("assignee", e.currentTarget.value)}>
                                <option value="default" disabled>Ticket assignee</option>
                                <option>Kristo Truu</option>
                                <option>Ilja Andrejev</option>
                                <option>Vladislav Lahtarin</option>
                            </select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <label className="smarts-selector-label"> Priority</label>
                            <select className="smarts-select"
                                    defaultValue="default"
                                    onChange={(e)=> this.handleFieldChange("priority", e.currentTarget.value)}>
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
                            <br/>
                            <input type="text" className="smarts-input"
                                   required
                                   onChange={(e)=> this.handleFieldChange("ticketName", e.target.value)}/>
                            <label className="smarts-ticket-label"> Ticket name</label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <br/>
                            <input type="text" className="smarts-input"
                                   required
                                   onChange={(e)=> this.handleFieldChange("client", e.target.value)}/>
                            <label className="smarts-ticket-label"> Client</label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <br/>
                            <input type="text" className="smarts-input"
                                   required
                                   onChange={(e)=> this.handleFieldChange("invoiceNumber", e.target.value)}/>
                            <label className="smarts-ticket-label">Invoice number</label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <br/>
                            <textarea rows="3" className="smarts-textarea"
                                      required
                                      onChange={(e)=> this.handleFieldChange("description", e.target.value)}/>
                            <label className="smarts-ticket-label"> Description</label>
                        </Form.Group>
                    </Col>
                </Row>
                {console.log("Ticket form:" + JSON.stringify(this.props.form))}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        form: state.createPaymentsTicketForm,
    }
}


const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changeField,
    createPaymentsTicket,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Payments);