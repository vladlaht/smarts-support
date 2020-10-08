import React from "react";
import {connect} from "react-redux";
import {MdLocationOn, MdPhoneAndroid} from "react-icons/md"
import {IoIosMail} from "react-icons/io"

class ProfileDetails extends React.Component {

    render() {
        const {accountDetails} = this.props;

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
                                <div className="count">8</div>
                                <div className="name">Completed</div>
                            </div>
                            <div className="profile-stats__amount-type">
                                <div className="count">12</div>
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
        accountDetails: state.accountDetails
    }
);

export default connect(mapStateToProps, null)(ProfileDetails);
