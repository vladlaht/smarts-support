import React from "react";
import {connect} from "react-redux";
import {MdLocationOn} from "react-icons/md"
import {IoIosMail, IoIosPhonePortrait} from "react-icons/io"

class Profile extends React.Component {

    render() {
        return (
            <div className="profile">
                <div className="profile-info">
                    <div className="profile-info__picture">
                        <img src={`${process.env.PUBLIC_URL}/img/profile_default.png`} alt="logo"/>
                    </div>
                    <div className="profile-info__name">Vladislav Lahtarin</div>
                    <div className="profile-info__contact">
                        <div className="profile-info__contact-email">
                            <IoIosMail className="profile-info__contact-logo"/>
                            vlad.laht@gmail.com
                        </div>
                        <div className="profile-info__contact-phone">
                            <IoIosPhonePortrait className="profile-info__contact-logo"/>
                            +372 55667788
                        </div>
                        <div className="profile-info__contact-location">
                            <MdLocationOn className="profile-info__contact-logo"/>
                            Tallinn, EE
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
                    <div className="profile-stats__related-tickets">
                        <div className="profile-stats__title">
                            Ticket types:
                        </div>
                        <div className="profile-stats__amount">
                            <div className="profile-stats__amount-type">
                                <div className="count">20</div>
                                <div className="name">Payments</div>
                            </div>
                            <div className="profile-stats__amount-type">
                                <div className="count">0</div>
                                <div className="name">Software</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        profileDetails: state.profileDetails
    }
);

export default connect(mapStateToProps, null)(Profile);
