import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";

class AccountActivities extends React.Component {

    render() {
        const {accountDetails} = this.props;

        accountDetails.userActivities.sort((a, b) => {
            let dateA = new Date(a.dateTime);
            let dateB = new Date(b.dateTime);
            return dateB - dateA;
        });

        return (
            <div className="activities">
                <h6 className="activities-header">Latest activities</h6>
                <div className="activities-body">
                    {
                        accountDetails && accountDetails.userActivities.map((action, index) => (
                            <div key={index} className="activities-body-item">
                                <div
                                    className="activities-body-item__date">{new Date(action.dateTime).toLocaleString()}</div>
                                <div className="activities-body-item__text">
                                    <span
                                        className="activities-body-item__text-username">{accountDetails.userDetails.fullName}</span>
                                    <span
                                        className="activities-body-item__text-action">{action.actionType} </span>
                                    <span className="activities-body-item__text-number">
                                        <Link
                                            to={`/tickets/details/${action.ticketNumber}`}>
                                             #{action.ticketNumber}
                                        </Link>
                                    </span>
                                </div>
                                <span className="activities-body-item__circle"> </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        accountDetails: state.accountDetails,
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(AccountActivities);
