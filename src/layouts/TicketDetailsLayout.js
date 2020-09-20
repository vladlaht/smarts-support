import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import Navigation from "../global/navigation/Navigation";
import TicketDetails from "../modules/ticketDetails/views/TicketDetails";
import {TICKETS_ROUTE} from "../global/constants/routes";
import {TICKET_DETAILS_ACTION} from "../modules/tickets/constants/ReducerConstants";
import {changeField, reset} from "../global/actions/StandardActions";
import {bindActionCreators} from "redux";

class TicketDetailsLayout extends React.Component {

    componentDidMount() {
        let selectedTicket =   this.props.tickets.filter(ticket => ticket.id === this.props.match.params.id);
        if(!selectedTicket.length > 0) {
            console.log("1) selected ticket lenght: " , selectedTicket.length);
            this.props.history.push('/tickets');
            this.props.reset(TICKET_DETAILS_ACTION);
        }
        console.log("2) selected ticket lenght: " , selectedTicket.length);
        this.props.changeField(TICKET_DETAILS_ACTION, "selectedTicket", selectedTicket[0]);
        console.log("3)selected ticket lenght: " , selectedTicket.length);
    }

    render() {
        const {details} = this.props;
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
                                <h6 className="layout__title-subtitle">{details.selectedTicket.ticketName}</h6>
                            </div>
                            <div className="layout-content__body">
                                <TicketDetails selectedTicket={details.selectedTicket}/>
                            </div>
                        </Container>
                    </div>
                </div>
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
    reset
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetailsLayout);