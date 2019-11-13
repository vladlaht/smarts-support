import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Navigation from "../global/navigation/Navigation";
import {INVOICES_ROUTE} from "../global/constants/routes";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class InvoicesLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation activeRoute={INVOICES_ROUTE}/>
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                            <h1>Invoices page</h1>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesLayout);