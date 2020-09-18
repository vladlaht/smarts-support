import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeField, reset} from "../../../../global/actions/StandardActions";
import {CREATE_TICKET_ACTION} from "../../constants/ReducerConstants";
import {Container, Modal} from "react-bootstrap";
import Create from "../forms/create/Create";
import {fetchTicketsAction} from "../../actions/FetchTicketsAction";

class CreateTicketModal extends React.Component {

    toggleModal = () => {
        const {createTicket} = this.props;
        this.props.changeField(CREATE_TICKET_ACTION, "modalIsOpen", !createTicket.modalIsOpen)
    };

    resetHandler = () => {
        this.props.reset(CREATE_TICKET_ACTION);
        this.props.fetchTicketsAction();
    };

    render() {
        const {createTicket} = this.props;
        return (
            <Modal className="ticket-modal-content"
                   show={createTicket.modalIsOpen}
                   onHide={this.toggleModal}
                   onExit={this.resetHandler}
                   backdrop="static"
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
        )
    }
}

const mapStateToProps = state => ({
        createTicket: state.createTicket
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField,
    reset,
    fetchTicketsAction
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicketModal);