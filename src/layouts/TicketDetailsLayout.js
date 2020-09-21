import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import Navigation from "../global/navigation/Navigation";
import {TICKETS_ROUTE} from "../global/constants/routes";
import {changeField} from "../global/actions/StandardActions";
import {bindActionCreators} from "redux";
import {fetchTicketsAction} from "../modules/tickets/actions/FetchTicketsAction";
import TicketDetails from "../modules/ticketDetails/views/TicketDetails";

class TicketDetailsLayout extends React.Component {

    componentDidMount() {
        this.props.fetchTicketsAction();
    }

    getSelectedTicket() {
        const selectedTicket = this.props.tickets.data.filter(ticket => ticket.id === this.props.match.params.id);
        return selectedTicket[0];
    }

    render() {
        const selectedTicket = this.getSelectedTicket();

        return (
            <React.Fragment>
                <div className="layout">
                    <div className="layout-header">
                        <Container>
                            <Navigation activeRoute={TICKETS_ROUTE}/>
                        </Container>
                    </div>
                    <div className="layout-content">
                        <Container>
                            <div className="layout-content__title">
                                <h3>Ticket details</h3>
                                <h6 className="layout__title-subtitle">{selectedTicket && selectedTicket.ticketName}</h6>
                            </div>
                            <div className="layout-content__body">
                                <TicketDetails selectedTicket={selectedTicket ? selectedTicket : ""}/>
                            </div>
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
        tickets: state.tickets,
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    fetchTicketsAction,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetailsLayout);