import React from "react";
import {connect} from "react-redux";
import {MdLocationOn, MdPhoneAndroid} from "react-icons/md"
import {IoIosMail} from "react-icons/io"
import {fetchTicketsAction} from "../../tickets/actions/FetchTicketsAction";
import {bindActionCreators} from "redux";

class ProfileDetails extends React.Component {

    componentDidMount() {
        const {tickets} = this.props;
        if (!tickets.isFetching && !tickets.isLoaded) {
            //this.props.fetchTicketsAction();
        }
    }

    countFinishedTickets() {
        const filterVal = this.props.tickets.data.filter(ticket => ticket.assignee === "Vladislav Lahtarin" && ticket.status === "Closed");
        return filterVal.length;
    }

    countOpenTickets() {
        const filterVal = this.props.tickets.data.filter(ticket => ticket.assignee === "Vladislav Lahtarin" && ticket.status === "Open");
        return filterVal.length;
    }

    countAssigneeTickets() {
        const filterVal = this.props.tickets.data.filter(ticket => ticket.assignee === "Vladislav Lahtarin");
        return filterVal.length;
    }

    render() {
        const {accountDetails} = this.props;

        const finishedTickets = this.countFinishedTickets();
        const openTickets = this.countOpenTickets();
        const assigneeTickets = this.countAssigneeTickets();


        console.log("finishedTickets", finishedTickets);
        console.log("openTickets", openTickets);
        console.log("assigneeTickets", assigneeTickets);

        return (
            <div className="profile">
                <div className="profile-details">
                    <div className="profile-details__picture">
                        <div className="profile-details__picture-content">
                            <img src={accountDetails.userDetails.photo} alt="logo"/>
                        </div>
                    </div>
                    <div className="profile-details__name"> {accountDetails.userDetails.fullName} </div>
                    <div className="profile-details__contact">
                        <div className="profile-details__contact-email">
                            <IoIosMail className="profile-details__contact-logo"/>
                            {accountDetails.userDetails.email}
                        </div>
                        <div className="profile-details__contact-phone">
                            <MdPhoneAndroid className="profile-details__contact-logo"/>
                            {accountDetails.userDetails.phoneNumber}
                        </div>
                        <div className="profile-details__contact-location">
                            <MdLocationOn className="profile-details__contact-logo"/>
                            {accountDetails.userDetails.location}
                        </div>
                    </div>
                </div>
                <div className="profile-stats">
                    <div className="profile-stats__related-tickets">
                        <div className="profile-stats__title">
                            Connected tickets:
                        </div>
                        <div className="profile-stats__amount">
                            <div className="profile-stats__amount-type">
                                <div className="count">{finishedTickets}</div>
                                <div className="name">Completed</div>
                            </div>
                            <div className="profile-stats__amount-type">
                                <div className="count">{openTickets}</div>
                                <div className="name">In progress</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        accountDetails: state.accountDetails,
        tickets: state.tickets,
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    fetchTicketsAction
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
