import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Navigation from "../global/navigation/Navigation";
import {CLIENTS_ROUTE} from "../global/constants/routes";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import AccountDropdownCard from "../modules/account/views/cards/AccountDropdownCard";

class ClientsLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navigation activeRoute={CLIENTS_ROUTE}/>
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                            <div className="layout">
                                <div className="layout__header">
                                    <AccountDropdownCard/>
                                </div>
                                <div className="layout__title">
                                    <h3>Clients page</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(null, mapDispatchToProps)(ClientsLayout);