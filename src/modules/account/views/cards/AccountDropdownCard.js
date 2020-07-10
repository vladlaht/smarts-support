import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {DropdownButton, Dropdown} from "react-bootstrap";
import {IconContext} from "react-icons";
import {IoMdLogOut, IoMdClipboard} from "react-icons/io"
import {FaUser} from "react-icons/fa"
import {MdSettings} from "react-icons/md"
import AccountCard from "./AccountCard";
import {OPEN_PROFILE_ACTION} from "../../constants/ReducerConstants";
import {changeField} from "../../../../global/actions/StandardActions";
import ProfileModal from "../modals/ProfileModal";

class AccountDropdownCard extends Component {

    toggleModal = () => {
        const {profileDetails} = this.props;
        this.props.changeField(OPEN_PROFILE_ACTION, "modalIsOpen", !profileDetails.modalIsOpen)
    };

    render() {
        return (
            <div className="account-card">
                <DropdownButton className="account-card-body" id="dropdown-basic-button"
                                title={
                                    <AccountCard fullName={this.props.account.profileName}/>}>
                    <Dropdown.Item onClick={this.toggleModal}>
                        <IconContext.Provider value={{className: "account-card-items-logo profile-icon"}}>
                            <FaUser/>
                        </IconContext.Provider>
                        My profile
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        <IconContext.Provider value={{className: "account-card-items-logo"}}>
                            <IoMdClipboard/>
                        </IconContext.Provider>
                        Tasks
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        <IconContext.Provider value={{className: "account-card-items-logo"}}>
                            <MdSettings/>
                        </IconContext.Provider>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item href="/">
                        <IconContext.Provider value={{className: "account-card-items-logo"}}>
                            <IoMdLogOut/>
                        </IconContext.Provider>
                        Log out
                    </Dropdown.Item>
                </DropdownButton>
                <ProfileModal/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        account: state.accountCard,
        profileDetails: state.profileDetails
});

const mapDispatchToProps = dispatch => (
     bindActionCreators({changeField}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AccountDropdownCard);
