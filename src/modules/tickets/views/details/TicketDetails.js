import React, {Component} from "react";
import {changeField} from "../../../../global/actions/StandardActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Row, Col, Button} from "react-bootstrap";
import AccountCard from "../../../account/views/cards/AccountCard";
import {addComment} from "../../actions/TicketDetailsAction";
import EdiText from "react-editext";
import {EDIT_TICKET_DETAILS_VALUE} from "../../constants/ReducerConstants";


class TicketsTable extends Component {

    componentDidUpdate() {
        this.commentText.value = '';
    }

    handleClick = () => {
        if (this.commentText !== null && this.commentText !== undefined) {
            this.props.addComment(this.commentText.value);
        }
    };

    onSave = (event) => {
        console.log('Edited Value -> ' + event)
    };

    changeMode = () => {
        this.props.changeField(EDIT_TICKET_DETAILS_VALUE, "changeEditMode", !this.props.details.changeEditMode)
    }

    closeEdit = () => {
        this.props.changeField(EDIT_TICKET_DETAILS_VALUE, "changeEditMode", false)
    };

    handleFieldChange = (field, value) => {
        this.props.changeField(EDIT_TICKET_DETAILS_VALUE, field, value)
    };


    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <div className="tickets-page-header">
                            <h4>Customer support tickets</h4>
                            {this.props.details.ticketName}
                        </div>
                    </Col>
                </Row>
                <div className="details-group">
                    <div className="details-column main-column">
                        <div className="module">
                            <div className="module-header">Details</div>
                            <div className="module-content two-columns">
                                <ul className="module-list column">
                                    <li className="item">
                                        <div className="name">Ticket number:</div>
                                        {console.log("old" + this.props.details.ticketNumber)}
                                        {this.props.details.changeEditMode ?
                                            (<div>
                                                <input className="value editable-value"
                                                       type="text"
                                                       defaultValue={this.props.details.ticketNumber}
                                                       onChange={(e) => this.handleFieldChange("ticketNumber", e.currentTarget.value)}/>
                                                <button onClick={this.closeEdit}>X</button>
                                            </div>)
                                            :
                                            (<div className="value editable-value"
                                                  onClick={this.changeMode}>
                                                {this.props.details.ticketNumber}
                                            </div>)
                                        }
                                    </li>
                                    {console.log("new" + this.props.details.ticketNumber)}
                                    <li className="item">
                                        <div className="name">Ticket name:</div>
                                        {this.props.details.changeEditMode ?
                                            (<div>
                                                <input className="value editable-value"
                                                       type="text"
                                                       defaultValue={this.props.details.ticketName}
                                                       onChange={(e) => this.handleFieldChange("ticketName", e.currentTarget.value)}/>
                                                <button onClick={this.closeEdit}>X</button>
                                            </div>)
                                            :
                                            (<div className="value editable-value"
                                                  onClick={this.changeMode}>
                                                {this.props.details.ticketName}
                                            </div>)
                                        }

                                    </li>
                                    <li className="item">
                                        <div className="name">Invoice number:</div>
                                        <EdiText
                                            showButtonsOnHover
                                            editOnViewClick={true}
                                            type='text'
                                            value={this.props.details.invoiceNumber}
                                            onSave={this.onSave}/>
                                    </li>
                                    <li className="item">
                                        <div className="name">Client:</div>
                                        <EdiText
                                            showButtonsOnHover
                                            editOnViewClick={true}
                                            type='text'
                                            value={this.props.details.clientName}
                                            onSave={this.onSave}/>
                                    </li>
                                </ul>
                                <ul className="module-list column short-name">
                                    <li className="item">
                                        <div className="name">Type:</div>
                                        <div className="value">{this.props.details.type}</div>
                                    </li>
                                    <li className="item">
                                        <div className="name">Priority:</div>

                                            <EdiText
                                                viewProps={{
                                                    className: 'details-custom-priority'
                                                }}
                                                showButtonsOnHover
                                                editOnViewClick={true}
                                                type='text'
                                                value={this.props.details.priority}
                                                onSave={this.onSave}/>

                                    </li>
                                    <li className="item">
                                        <div className="name">Status:</div>
                                        <EdiText
                                            showButtonsOnHover
                                            editOnViewClick={true}
                                            type='text'
                                            value={this.props.details.status}
                                            onSave={this.onSave}/>
                                    </li>
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
                                        value={this.props.details.description}
                                        onSave={this.onSave}/>
                                </div>
                            </div>
                        </div>
                        <div className="module">
                            <div className="module-header">Comments</div>
                            <div className="module-content">
                                {this.props.details.comments && this.props.details.comments.map((comment, key) => {
                                    return (
                                        <ul key={key} className="module-list comment">
                                            <li className="author">
                                                <AccountCard
                                                    fullname={this.props.account.profileName}
                                                />
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
                                                      ref={(ref) => this.commentText = ref}

                                            />
                                <div className="button-area">
                                    <Button className="smarts-button ticket-new-button comment-button"
                                            onClick={this.handleClick}>
                                        COMMENT
                                    </Button>
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
                                                fullname={this.props.details.createdBy}/>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div className="name">Assignee:</div>
                                        <EdiText
                                            showButtonsOnHover
                                            editOnViewClick={true}
                                            type='text'
                                            value={<AccountCard
                                                fullname={this.props.details.assignee}/>}
                                            onSave={this.onSave}/>
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
                                        <div className="value">{this.props.details.createdAt}</div>
                                    </li>
                                    <li className="item">
                                        <div className="name">Updated at:</div>
                                        <div className="value">{this.props.details.updatedAt}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        details: state.ticketDetails,
        account: state.accountCard
    }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changeField,
    addComment
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketsTable);
