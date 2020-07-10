import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {OPEN_PROFILE_ACTION} from "../../constants/ReducerConstants";
import {changeField} from "../../../../global/actions/StandardActions";
import {Container, Modal} from "react-bootstrap";
import Profile from "../cards/Profile";


class ProfileModal extends Component {

    toggleModal = () => {
        const {profileDetails} = this.props;
        this.props.changeField(OPEN_PROFILE_ACTION, "modalIsOpen", !profileDetails.modalIsOpen )
    };

    render() {
        const {profileDetails} = this.props;
        return (
            <Modal className="ticket-modal-content"
                   show={profileDetails.modalIsOpen}
                   onHide={this.toggleModal}
                   backdrop="static"
                   centered>
                <Container>
                    <Modal.Header className="modal-underline-selector" closeButton>
                    </Modal.Header>
                    <Modal.Body className="profile-body">
                       <Profile/>
                    </Modal.Body>
                </Container>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
        profileDetails: state.profileDetails
    }
)

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);
