import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {DropdownButton, Dropdown} from "react-bootstrap";
import {IoMdLogOut, IoMdClipboard} from "react-icons/io"
import {MdSettings} from "react-icons/md"
import Username from "./Username";
import {OPEN_PROFILE_ACTION} from "../../constants/ReducerConstants";
import {changeField} from "../../../../global/actions/StandardActions";
import ProfileModal from "../modals/ProfileModal";

class AccountDropdownCard extends React.Component {

    toggleModal = () => {
        this.props.changeField(OPEN_PROFILE_ACTION, "modalIsOpen", !this.props.profileModal.modalIsOpen)
    };

    render() {
        const {accountDetails} = this.props;

        return (
            <div className="dropdown-card">
                <DropdownButton id="dropdown-basic-button" alignRight
                                title={<Username fullname={accountDetails.userDetails.fullName} photo={accountDetails.userDetails.photo}/>}>
                    {/*<Dropdown.Item href="#/action-2">*/}
                    {/*    <IoMdClipboard className="dropdown-card__items-logo"/>*/}
                    {/*    Tasks*/}
                    {/*</Dropdown.Item>*/}
                    {/*<Dropdown.Item href="#/action-3">*/}
                    {/*    <MdSettings className="dropdown-card__items-logo"/>*/}
                    {/*    Settings*/}
                    {/*</Dropdown.Item>*/}
                    <Dropdown.Item href="#/authorize">
                        <IoMdLogOut className="dropdown-card__items-logo"/>
                        Log out
                    </Dropdown.Item>
                </DropdownButton>
                <ProfileModal toggle={this.toggleModal}
                              profileModal={this.props.profileModal}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    accountDetails: state.accountDetails,
    profileModal: state.profileModal
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({changeField}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AccountDropdownCard);
