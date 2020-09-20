import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {CREATE_TICKET_ACTION} from "../../constants/ReducerConstants";
import {changeField, reset} from "../../../../global/actions/StandardActions";
import {Container, Modal} from "react-bootstrap";
import Create from "../forms/create/Create";

class CreateTicketModal extends React.Component {

    toggleModal = () => {
        this.props.changeField(CREATE_TICKET_ACTION, "modalIsOpen", !this.props.createTicket.modalIsOpen)
    };

    resetHandler = () => {
        this.props.reset(CREATE_TICKET_ACTION);
    };

    render() {
        return (
            <React.Fragment>

                <button className="smarts-button new-ticket-button" onClick={this.toggleModal}>
                    New ticket
                </button>

                <Modal className="ticket-modal-content"
                       show={this.props.createTicket.modalIsOpen}
                       onHide={this.toggleModal}
                       onExit={this.resetHandler}
                       backdrop="static"
                       keyboard={false}
                       centered>
                    <Container>
                        <Modal.Header className="modal-underline-selector" closeButton>
                            <Modal.Title>New ticket</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Create/>
                        </Modal.Body>
                    </Container>
                </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
        createTicket: state.createTicket
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    reset
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicketModal);
