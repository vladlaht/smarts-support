import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Form from "react-bootstrap/Form";
import {AVAILABLE_TICKET_PRIORITY_TYPES} from "../../../constants";
import {capitalizeFirstLetter} from "../../../../../global/utils/StringUpdates";


class Software extends React.Component {


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
                    </Form.Group>
                    <Form.Group className="smarts-ticket-form">
                        <label className="smarts-ticket-selector-label"> Priority</label>
                        <select className="smarts-select"
                                defaultValue="default"
                                onChange={(e) => this.handleFieldChange("ticketType", e.target.value)}>
                            <option value="default" disabled>Priority</option>
                            {AVAILABLE_TICKET_PRIORITY_TYPES.map(
                                type => <option key={type}
                                                value={type}>{capitalizeFirstLetter(type).replace(/_/, " ")}</option>)}
                        </select>
                    </Form.Group>
                </div>
                <Form.Group className="smarts-ticket-form">
                    <input type="text" className="smarts-input" required/>
                    <label className="smarts-ticket-label"> Ticket name</label>
                </Form.Group>
                <Form.Group className="smarts-ticket-form">
                    <input type="text" className="smarts-input" required/>
                    <label className="smarts-ticket-label"> Client name</label>
                </Form.Group>
                <Form.Group className="smarts-ticket-form">
                    <textarea rows="3" className="smarts-textarea" required/>
                    <label className="smarts-ticket-label"> Description</label>
                </Form.Group>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(null, mapDispatchToProps)(Software);