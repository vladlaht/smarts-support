import React, {Component} from "react";
import {changeField} from "../../../../global/actions/StandardActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Row, Col, Button} from "react-bootstrap";
import AccountCard from "../../../account/views/cards/AccountCard";
import {addComment} from "../../actions/TicketDetailsAction";
import {SAVE_TICKET_DETAILS_COMMENT} from "../../constants/ReducerConstants";

class TicketsTable extends Component {

    componentDidUpdate() {
        this.commentText.value = '';
    }

    handleClick = () => {
        if (this.commentText !== null && this.commentText !== undefined) {
            this.props.addComment(this.commentText.value);
        }
    }

    handleChange = () => {
        // if (this.commentText !== null || this.commentText !== undefined || this.commentText > 0) {
        //     this.props.changeField(SAVE_TICKET_DETAILS_COMMENT, "btnDisabled", false)
        // } else if (this.commentText == null || this.commentText == undefined || this.commentText < 1){
        //     this.props.changeField(SAVE_TICKET_DETAILS_COMMENT, "btnDisabled", true)
        // }
    }

    // handleClick = () => {
    //     this.props.addComment();
    // };
    // handleFieldChange(field, value) {
    //     this.props.changeField(SAVE_TICKET_DETAILS_COMMENT, field, value);
    //     if (this.props.details.newComment && this.props.details.newComment.length > 0) {
    //         {console.log('more ' + this.props.details.btnDisabled)}
    //         this.props.changeField(SAVE_TICKET_DETAILS_COMMENT, "btnDisabled", false);
    //     } else if (this.props.details.newComment == null || this.props.details.newComment.length === 1) {
    //         {console.log('less ' + this.props.details.btnDisabled)}
    //         this.props.changeField(SAVE_TICKET_DETAILS_COMMENT, "btnDisabled", true);
    //     }
    // }

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
                                        <span className="name">Ticket number:</span>
                                        <span className="value">{this.props.details.ticketNumber} </span>
                                    </li>
                                    <li className="item">
                                        <span className="name">Ticket name:</span>
                                        <span className="value">{this.props.details.ticketName}</span>
                                    </li>
                                    <li className="item">
                                        <span className="name">Invoice number:</span>
                                        <span className="value">{this.props.details.invoiceNumber}</span>
                                    </li>
                                    <li className="item">
                                        <span className="name">Client:</span>
                                        <span className="value">{this.props.details.clientName}</span>
                                    </li>
                                </ul>
                                <ul className="module-list column short-name">
                                    <li className="item">
                                        <span className="name">Type:</span>
                                        <span className="value">{this.props.details.type}</span>
                                    </li>
                                    <li className="item">
                                        <span className="name">Priority:</span>
                                        <span className="value priority">{this.props.details.priority}</span>
                                    </li>
                                    <li className="item">
                                        <span className="name">Status:</span>
                                        <span className="value">{this.props.details.status}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="module">
                            <div className="module-header">Description</div>
                            <div className="module-content">
                                <div className="description">
                                    {this.props.details.description}
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
                                                    fullname={comment.author}
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

                                {/*<div>*/}
                                {/*    {this.props.details.testComment && this.props.details.testComment.map((comment, key) => {*/}
                                {/*        return (*/}
                                {/*            <ul key={key} className="module-list">*/}
                                {/*                <li>*/}
                                {/*                    {comment.author}*/}
                                {/*                </li>*/}
                                {/*                <li>*/}
                                {/*                    {comment.datetime}*/}
                                {/*                </li>*/}
                                {/*                <li>*/}
                                {/*                    {comment.text}*/}
                                {/*                </li>*/}
                                {/*            </ul>*/}
                                {/*        )*/}
                                {/*    })}*/}
                                {/*</div>*/}
                                {/*{console.log(this.props.details.newComment && this.props.details.newComment)}*/}
                                {/*{console.log(this.props.details.testComment.length)}*/}

                            </div>
                            <div className="module-footer ">
                                            <textarea rows="3"
                                                      className="smarts-textarea"
                                                      placeholder='Comment here'
                                                      ref={(ref) => this.commentText = ref}
                                                      onChange={this.handleChange}
                                                // onChange={(e) => this.handleFieldChange("newComment", e.currentTarget.value)}
                                            />
                                <div className="button-area">
                                    <Button className="smarts-button ticket-new-button comment-button"
                                            onClick={this.handleClick}
                                            //disabled={this.props.details.btnDisabled}
                                    >
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
                                        <span className="name">Created by:</span>
                                        <span className="value">
                                            <AccountCard
                                                fullname={this.props.details.createdBy}/>
                                        </span>
                                    </li>
                                    <li className="item">
                                        <span className="name">Assignee:</span>
                                        <span className="value">
                                            <AccountCard
                                                fullname={this.props.details.assignee}/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="module">
                            <div className="module-header">Dates</div>
                            <div className="module-content">
                                <ul className="module-list short-name">
                                    <li className="item">
                                        <span className="name">Created at:</span>
                                        <span className="value">{this.props.details.createdAt}</span>
                                    </li>
                                    <li className="item">
                                        <span className="name">Updated at:</span>
                                        <span className="value">{this.props.details.updatedAt}</span>
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
        details: state.ticketDetails
    }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changeField,
    addComment
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketsTable);
