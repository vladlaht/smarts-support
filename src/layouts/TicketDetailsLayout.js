import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Navigation from "../global/navigation/Navigation";
import TicketDetails from "../modules/ticketDetails/views/TicketDetails";
import AccountDropdownCard from "../modules/account/views/cards/AccountDropdownCard";
import {TICKETS_ROUTE} from "../global/constants/routes";

class TicketDetailsLayout extends React.Component {
    render() {
        const {details} = this.props;
        return (
            <React.Fragment>
                <Navigation activeRoute={TICKETS_ROUTE}/>
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                            <div className="layout">
                                <div className="layout__header">
                                    <AccountDropdownCard/>
                                </div>
                                <div className="layout__title">
                                    <h3>Ticket details</h3>
                                    <h6 className="layout__title-subtitle">{details.ticketName}</h6>
                                </div>
                                <div className="layout__body">
                                    <TicketDetails ticketNumber={this.props.match.params.number}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
        details: state.ticketDetails
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetailsLayout);