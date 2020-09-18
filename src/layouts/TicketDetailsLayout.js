import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import Navigation from "../global/navigation/Navigation";
import TicketDetails from "../modules/ticketDetails/views/TicketDetails";
import AccountDropdownCard from "../modules/account/views/cards/AccountDropdownCard";
import {TICKETS_ROUTE} from "../global/constants/routes";
import {EDIT_TICKET_DETAILS_VALUE} from "../modules/tickets/constants/ReducerConstants";
import {changeField} from "../global/actions/StandardActions";
import {bindActionCreators} from "redux";


class TicketDetailsLayout extends React.Component {

    componentDidMount() {
        let selectedTicket =   this.props.tickets.filter(ticket => ticket.id === this.props.match.params.id);
        this.props.changeField(EDIT_TICKET_DETAILS_VALUE, "selectedTicket", selectedTicket[0]);
    }

    render() {
        const {details} = this.props;
         return (
            <React.Fragment>
                <Navigation activeRoute={TICKETS_ROUTE}/>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="layout">
                                <div className="layout__header">
                                    <AccountDropdownCard/>
                                </div>
                                <div className="layout__title">
                                    <h3>Ticket details</h3>
                                    <h6 className="layout__title-subtitle">{details.selectedTicket.ticketName}</h6>
                                </div>
                                <div className="layout__body">
                                    <TicketDetails selectedTicket={details.selectedTicket}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
        details: state.ticketDetails,
        tickets: state.tickets.data
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetailsLayout);