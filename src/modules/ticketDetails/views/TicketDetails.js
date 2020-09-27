import React from "react";
import {changeField} from "../../../global/actions/StandardActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import AccountCard from "../../account/views/cards/AccountCard";
import {addComment} from "../actions/TicketDetailsAction";
import EdiText from "react-editext";
import {TICKET_DETAILS_ACTION} from "../../tickets/constants/ReducerConstants";
import {AVAILABLE_TICKET_PRIORITY_TYPES, AVAILABLE_TICKET_STATUS_TYPES} from "../../tickets/constants";

class TicketsTable extends React.Component {

    componentDidUpdate() {
        this.commentText.value = "";
    }

    saveComment = () => {
        this.props.addComment(this.commentText.value);
    };

    handleFieldChange(field, value) {
        this.props.changeField(TICKET_DETAILS_ACTION, field, value);
    };

    render() {
        const {account, details} = this.props;

        return (
            <div className="details">
                <div className="details-main">
                    <div className="details-main-half">
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
                    <div className="details-main-half">
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
                                            <AccountCard fullname={details.createdBy}/>
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
                                        <div className="module-list-item__value">{details.createdAt}</div>
                                    </li>
                                    {details.updatedAt ?
                                        <li className="module-list-item">
                                            <div className="module-list-item__title">Updated at:</div>
                                            <div className="module-list-item__value">{details.updatedAt}</div>
                                        </li>
                                        : null}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details-secondary">
                    <div className="details-secondary-description">
                        <div className="module">
                            <div className="module-header">Description</div>
                            <div className="module-content">
                                <EdiText type="textarea" showButtonsOnHover editOnViewClick={true}
                                         value={details.description}
                                         onSave={(value) => this.handleFieldChange("description", value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="details-secondary-comments">
                        <div className="module">
                            <div className="module-header">Comments ({details.comments.length})</div>
                            <div className="module-content">
                                {details.comments && details.comments.map((comment, key) => {
                                    return (
                                        <ul key={key} className="module-list comment">
                                            <li className="author">
                                                <AccountCard fullname={account.profileName}/>
                                            </li>
                                            <li className="date-time">
                                                {comment.datetime}
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
        account: state.accountCard,
        details: state.ticketDetails
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    addComment
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketsTable);
