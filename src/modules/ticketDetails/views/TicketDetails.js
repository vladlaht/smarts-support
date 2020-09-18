import React from "react";
import {changeField} from "../../../global/actions/StandardActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import AccountCard from "../../account/views/cards/AccountCard";
import {addComment} from "../actions/TicketDetailsAction";
import EdiText from "react-editext";
import {EDIT_TICKET_DETAILS_VALUE} from "../../tickets/constants/ReducerConstants";


class TicketsTable extends React.Component {

    componentDidUpdate() {
        this.commentText.value = '';
    }

    saveComment = () => {
        this.props.addComment(this.commentText.value);
    };

    handleFieldChange(field, value) {
        this.props.changeField(EDIT_TICKET_DETAILS_VALUE, field, value);
    };

    getTicket () {

    }

    render() {
        const {details, account} = this.props;
        return (
            <div className="details-group">
                <div className="details-column main-column">
                    <div className="module">
                        <div className="module-header">Details</div>
                        <div className="module-content two-columns">
                            <ul className="module-list column">
                                <li className="item">
                                    <div className="name">Ticket number:</div>
                                    {console.log("Ticket number from Route props:" + this.props.ticketNumber)}
                                    <EdiText
                                        showButtonsOnHover
                                        editOnViewClick={true}
                                        type='text'
                                        value={details.ticketNumber}
                                        onSave={(value) => this.handleFieldChange("ticketNumber", value)}/>
                                </li>
                                <li className="item">
                                    <div className="name">Ticket name:</div>
                                    <EdiText
                                        showButtonsOnHover
                                        editOnViewClick={true}
                                        type='text'
                                        value={details.ticketName}
                                        onSave={(value) => this.handleFieldChange("ticketName", value)}/>
                                </li>
                                <li className="item">
                                    <div className="name">Invoice number:</div>
                                    <EdiText
                                        showButtonsOnHover
                                        editOnViewClick={true}
                                        type='text'
                                        value={details.invoiceNumber}
                                        onSave={(value) => this.handleFieldChange("invoiceNumber", value)}/>
                                </li>
                                <li className="item">
                                    <div className="name">Client:</div>
                                    <EdiText
                                        showButtonsOnHover
                                        editOnViewClick={true}
                                        type='text'
                                        value={details.clientName}
                                        onSave={(value) => this.handleFieldChange("clientName", value)}/></li>
                            </ul>
                            <ul className="module-list column short-name">
                                <li className="item">
                                    <div className="name">Type:</div>
                                    <div className="value">{details.type}</div>
                                </li>
                                <li className="item">
                                    <div className="name">Priority:</div>

                                    <EdiText
                                        viewProps={{className: 'details-custom-priority'}}
                                        showButtonsOnHover
                                        editOnViewClick={true}
                                        type='text'
                                        value={details.priority}
                                        onSave={(value) => this.handleFieldChange("priority", value)}/>
                                </li>
                                <li className="item">
                                    <div className="name">Status:</div>
                                    <EdiText
                                        showButtonsOnHover
                                        editOnViewClick={true}
                                        type='text'
                                        value={details.status}
                                        onSave={(value) => this.handleFieldChange("status", value)}/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="module">
                        <div className="module-header">Description</div>
                        <div className="module-content">
                            <div className="description">
                                <EdiText
                                    type='textarea'
                                    showButtonsOnHover
                                    editOnViewClick={true}
                                    value={details.description}
                                    onSave={(value) => this.handleFieldChange("description", value)}/></div>
                        </div>
                    </div>
                    <div className="module">
                        <div className="module-header">Comments</div>
                        <div className="module-content">
                            {details.comments && details.comments.map((comment, key) => {
                                return (
                                    <ul key={key} className="module-list comment">
                                        <li className="author">
                                            <AccountCard
                                                fullname={account.profileName}/>
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
                        <div className="module-footer ">
                                            <textarea rows="3"
                                                      className="smarts-textarea"
                                                      placeholder='Comment here'
                                                      ref={(ref) => this.commentText = ref}/>
                            <div className="button-area">
                                <button className="smarts-button comment-button"
                                        onClick={this.saveComment}>
                                    Add comment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details-column side-column">
                    <div className="module">
                        <div className="module-header">People</div>
                        <div className="module-content">
                            <ul className="module-list short-name">
                                <li className="item">
                                    <div className="name">Created by:</div>
                                    <div className="value">
                                        <AccountCard
                                            fullname={details.createdBy}/>
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="name">Assignee:</div>
                                    <AccountCard
                                        fullname={details.assignee}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="module">
                        <div className="module-header">Dates</div>
                        <div className="module-content">
                            <ul className="module-list short-name">
                                <li className="item">
                                    <div className="name">Created at:</div>
                                    <div className="value">{details.createdAt}</div>
                                </li>
                                <li className="item">
                                    <div className="name">Updated at:</div>
                                    <div className="value">{details.updatedAt}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = state => ({
        details: state.ticketDetails,
        account: state.accountCard
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    addComment
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketsTable);
