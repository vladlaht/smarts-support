import React from "react";

import {Container, Modal} from "react-bootstrap";
import Profile from "../../../accountDetails/views/ProfileDetails";


const ProfileModal = props => {
    return (
        <Modal className="ticket-modal-content"
               show={props.profileModal.modalIsOpen}
               onHide={props.toggle}
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
};

export default ProfileModal;
