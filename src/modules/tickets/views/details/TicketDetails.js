import React, {Component} from "react";
import {changeField} from "../../../../global/actions/StandardActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Row, Col, Button} from "react-bootstrap";
import AccountCard from "../../../account/views/cards/AccountCard";

class TicketsTable extends Component {

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

                {/*<div className="details-group">*/}
                {/*    <div className="details-item main-column">*/}
                {/*        <div className="module">*/}
                {/*            <div className="module-header">*/}
                {/*                Details*/}
                {/*            </div>*/}
                {/*            <div className="module-content">*/}
                {/*                <ul className="module-list two-cols">*/}
                {/*                    <li className="item">*/}
                {/*                        <span className="name">Ticket number:</span>*/}
                {/*                        <span className="value">54011</span>*/}
                {/*                    </li>*/}
                {/*                    <li className="item item-right">*/}
                {/*                        <span className="name">Type:</span>*/}
                {/*                        <span className="value">Payment</span>*/}
                {/*                    </li>*/}
                {/*                    <li className="item">*/}
                {/*                        <span className="name">Ticket name:</span>*/}
                {/*                        <span className="value">Payed twice</span>*/}
                {/*                    </li>*/}
                {/*                    <li className="item item-right">*/}
                {/*                        <span className="name">Priority:</span>*/}
                {/*                        <span className="value">CRITICAL</span>*/}
                {/*                    </li>*/}
                {/*                    <li className="item full-width">*/}
                {/*                        <span className="name">Invoice number:</span>*/}
                {/*                        <span className="value">123123123123</span>*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="details-item side-column">*/}
                {/*        <div className="module">*/}
                {/*            <div className="module-header">*/}
                {/*                People*/}
                {/*            </div>*/}
                {/*            <div className="module-content">*/}
                {/*                <ul className="module-list">*/}
                {/*                    <li className="item">*/}
                {/*                        <span className="name">Created by</span>*/}
                {/*                        <span className="value">Vlad Laht</span>*/}
                {/*                    </li>*/}
                {/*                    <li className="item">*/}
                {/*                        <span className="name">Assignee</span>*/}
                {/*                        <span className="value">Kristo Truu</span>*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

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
                            <div className="module-content description">
                                {this.props.details.description}
                            </div>
                        </div>
                        <div className="module">
                            <div className="module-header">Comments</div>
                            <div className="module-content">
                                {this.props.details.comments && this.props.details.comments.map((comment, key) => {
                                    return(
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
                            </div>
                            <div className="module-footer ">
                                <textarea rows="3" className=" comment-textarea smarts-textarea" placeholder='Comment here'/>
                                <div className="button-area">
                                    <Button className="smarts-button ticket-new-button comment-button">
                                        COMMENT
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/*<div className="module">*/}
                        {/*    <ul className="module-list column">*/}
                        {/*        <li className="item">*/}
                        {/*            <span className="name">Description:</span>*/}
                        {/*            <span className="value-v">Money was withdrawn twice from a bank.*/}
                        {/*        The amount was high and the client asks to hurry up with the return of funds.*/}
                        {/*            </span>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
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
                                                fullname= {this.props.details.createdBy}/>
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
    changeField
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketsTable);
