import React from "react";
import {connect} from "react-redux";
import {MdLocationOn} from "react-icons/md"
import {IoIosMail, IoIosPhonePortrait} from "react-icons/io"

class Profile extends React.Component {

    render() {
        return (
            <div className="profile">
                <div className="profile-top">
                    <div className="profile-top__picture">
                        <img src={`${process.env.PUBLIC_URL}/img/profile_default.png`} alt="logo"/>
                    </div>
                    <div className="profile-top__contact">
                        <div className="profile-top__contact-name">Vladislav Lahtarin</div>
                        <div className="profile-top__contact-email">
                            <IoIosMail className="profile-top__contact-logo"/>
                            vlad.laht@gmail.com
                        </div>
                        <div className="profile-top__contact-phone">
                            <IoIosPhonePortrait className="profile-top__contact-logo"/>
                            +372 55667788
                        </div>
                        <div className="profile-top__contact-location">
                            <MdLocationOn className="profile-top__contact-logo"/>
                            Tallinn, EE
                        </div>
                    </div>
                </div>
                <div className="profile-bottom">
                    <div className="profile-bottom__title">
                        Connected tickets:
                    </div>
                    <div className="profile-bottom__amount">
                        <div className="profile-bottom__amount-type">
                            <div className="count">8</div>
                            <div className="name">Finished</div>
                        </div>
                        <div className="profile-bottom__amount-type">
                            <div className="count">12</div>
                            <div className="name">In progress</div>
                        </div>
                        <div className="profile-bottom__amount-type">
                            <div className="count">20</div>
                            <div className="name">All</div>
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
