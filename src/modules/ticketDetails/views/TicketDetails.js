import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import AccountCard from "../../account/views/cards/Username";
import {changeField, reset} from "../../../global/actions/StandardActions";
import {addComment} from "../actions/ticketDetailsAction";
import {addAction} from "../../accountDetails/actions/accountDetailsAction";
import EdiText from "react-editext";
import {TICKET_DETAILS_ACTION} from "../constants/reducerConstants";
import {AVAILABLE_TICKET_PRIORITY_TYPES, AVAILABLE_TICKET_STATUS_TYPES} from "../../tickets/constants/ticketConstants";
import {ADDED_COMMENT, CLOSED_TICKET, EDITED_TICKET, OPENED_TICKET}
    from "../../accountDetails/constants/activityConstants";
import {fetchTicketDetails} from "../actions/fetchTicketDetailsAction";
import {updateTicket} from "../../tickets/actions/create/updateTicketAction";


class TicketDetails extends React.Component {

    componentDidMount() {
        const {reset, selectedTicket, fetchTicketDetails} = this.props;
        reset(TICKET_DETAILS_ACTION);
        fetchTicketDetails(selectedTicket);
    }

    componentDidUpdate() {
        this.commentText.value = "";
    }

    saveComment = () => {
        const {addAction, addComment, details} = this.props;
        if (this.commentText.value.length > 0) {
            addComment(this.commentText.value);
            addAction({actionType: ADDED_COMMENT, ticketNumber: details.id});
        }
    };

    handleFieldChange(field, value) {
        const {changeField, addAction, details, updateTicket} = this.props;
        if (details[field] !== value) {
            changeField(TICKET_DETAILS_ACTION, field, value);
            if (field === "status" && value === "Closed") {
                addAction({actionType: CLOSED_TICKET, ticketNumber: details.id});
            } else if (field === "status" && value === "Open") {
                addAction({actionType: OPENED_TICKET, ticketNumber: details.id});
            } else {
                addAction({actionType: EDITED_TICKET, ticketNumber: details.id});
            }
            updateTicket(field,value);
        }
    };

    render() {
        const {details, accountDetails} = this.props;
        details.comments && details.comments.sort((a, b) => {
            let dateA = new Date(a.datetime);
            let dateB = new Date(b.datetime);
            return dateB - dateA;
        });

        return (
            <div className="ticket-details">
                <div className="ticket-details-main">
                    <div className="ticket-details-main-half">
                        <div className="module">
                            <div className="module-header">Details</div>
                            <div className="module-content">
                                <ul className="module-list">
                                    <li className="module-list-item">
                                        <div className="module-list-item__title">Ticket number:</div>
                                        <EdiText viewProps={{className: "module-list-item__value"}}
                                                 showButtonsOnHover editOnViewClick={true} type="number"
                                                 value={`${details.ticketNumber}`}
                                                 onSave={(value) => this.handleFieldChange("ticketNumber", value)}/>
                                    </li>
                                    <li className="module-list-item">
                                        <div className="module-list-item__title">Ticket name:</div>
                                        <EdiText viewProps={{className: "module-list-item__value"}}
                                                 showButtonsOnHover editOnViewClick={true} type="text"
                                                 value={details.ticketName}
                                                 onSave={(value) => this.handleFieldChange("ticketName", value)}/>
                                    </li>
                                    <li className="module-list-item">
                                        <div className="module-list-item__title">Invoice number:</div>
                                        <EdiText viewProps={{className: "module-list-item__value"}}
                                                 showButtonsOnHover editOnViewClick={true} type="text"
                                                 value={details.invoiceNumber}
                                                 onSave={(value) => this.handleFieldChange("invoiceNumber", value)}/>
                                    </li>
                                    <li className="module-list-item">
                                        <div className="module-list-item__title">Type:</div>
                                        <div className="module-list-item__value">{details.type}</div>
                                    </li>
                                    <li className="module-list-item">
                                        <div className="module-list-item__title">Priority:</div>
                                        <select defaultValue="default"
                                                className={["module-list-item__value", "ticket-priority", `priority-${details.priority}`.toLowerCase()].join(" ")}
                                                onChange={(e) => this.handleFieldChange("priority", e.target.value)}>
                                            <option value="default"
                                                    disabled>{details.priority}</option>
                                            {AVAILABLE_TICKET_PRIORITY_TYPES.map(
                                                type => <option key={type} value={type}>{type}</option>)}
                                        </select>
                                    </li>
                                    <li className="module-list-item">
                                        <div className="module-list-item__title">Status:</div>
                                        <select defaultValue="default"
                                                onChange={(e) => this.handleFieldChange("status", e.target.value)}>
                                            <option value="default" disabled>{details.status}</option>
                                            {AVAILABLE_TICKET_STATUS_TYPES.map(
                                                status => <option key={status} value={status}>{status}</option>)}
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-details-main-half">
                        <div className="module">
                            <span className="module-header">People</span>
                            <div className="module-content">
                                <ul className="module-list">
                                    <li className="module-list-item">
                                        <div className="module-list-item__title">Client:</div>
                                        <EdiText viewProps={{className: "module-list-item__value"}} showButtonsOnHover
                                                 editOnViewClick={true} type="text" value={details.clientName}
                                                 onSave={(value) => this.handleFieldChange("clientName", value)}/>
                                    </li>
                                    <li className="module-list-item">
                                        <div className="module-list-item__title">Created by:</div>
                                        <div className="module-list-item__value">
                                            <AccountCard fullname={details.createdBy}
                                                         photo={accountDetails.userDetails.photo}/>
                                        </div>
                                    </li>
                                    <li className="module-list-item">
                                        <div className="module-list-item__title">Assignee:</div>
                                        <div className="module-list-item__value">
                                            <AccountCard fullname={details.assignee}/>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="module">
                            <div className="module-header">Dates</div>
                            <div className="module-content">
                                <ul className="module-list">
                                    <li className="module-list-item">
                                        <div className="module-list-item__title">Created at:</div>
                                        <div
                                            className="module-list-item__value">{new Date(details.createdAt).toLocaleString()}</div>
                                    </li>
                                    {details.updatedAt ?
                                        <li className="module-list-item">
                                            <div className="module-list-item__title">Updated at:</div>
                                            <div
                                                className="module-list-item__value">{new Date(details.updatedAt).toLocaleString()}</div>
                                        </li>
                                        : null}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ticket-details-secondary">
                    <div className="ticket-details-secondary-description">
                        <div className="module">
                            <div className="module-header">Description</div>
                            <div className="module-content">
                                <EdiText type="textarea" showButtonsOnHover editOnViewClick={true}
                                         value={details.description}
                                         onSave={(value) => this.handleFieldChange("description", value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-details-secondary-comments">
                        <div className="module">
                            <div className="module-header">Comments
                                ({details.comments ? details.comments.length : "0"})
                            </div>
                            <div className="module-content">
                                {details && details.comments && details.comments.map((comment, key) => {
                                    return (
                                        <ul key={key} className="module-list comment">
                                            <li className="author">
                                                <AccountCard fullname={accountDetails.userDetails.fullName}
                                                             photo={accountDetails.userDetails.photo}/>
                                            </li>
                                            <li className="date-time">
                                                {new Date(comment.datetime).toLocaleString()}
                                            </li>
                                            <li className="text">
                                                {comment.text}
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className="module-footer">
                                <textarea className="smarts-textarea" placeholder="Comment here"
                                          ref={(ref) => this.commentText = ref}/>
                                <div className="button-area">
                                    <button className="smarts-button comment-button" onClick={this.saveComment}>
                                        Add comment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        accountDetails: state.accountDetails,
        details: state.ticketDetails,
        tickets: state.tickets,
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    addComment,
    addAction,
    updateTicket,
    fetchTicketDetails,
    reset
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetails);
