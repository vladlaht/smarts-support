import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";


class Software extends Component{


    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <br/>
                            <select className="smarts-select">
                                <option disabled>Assignee</option>
                                <option>Kristo Truu</option>
                                <option>Ilja Andrejev</option>
                                <option>Vladislav Lahtarin</option>
                            </select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <br/>
                            <input type="text" className="smarts-input" required/>
                            <label className="smarts-ticket-label"> Ticket name</label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <br/>
                            <input type="text" className="smarts-input" required/>
                            <label className="smarts-ticket-label"> Client</label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="smarts-ticket-box">
                            <br/>
                            <textarea rows="3" className="smarts-textarea" required/>
                            <label className="smarts-ticket-label"> Description</label>
                        </Form.Group>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}
const mapDispatchToProps = (dispatch) => (bindActionCreators({

}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Software);