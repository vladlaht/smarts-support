import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeField} from "../../../../global/actions/StandardActions";
import {CREATE_TICKET_ACTION} from "../../constants/ReducerConstants";
import {Container} from "react-bootstrap";
import Create from "../forms/create/Create";

class CreateTicketModal extends Component {

    toggleModal = () => {
        const {createTicket} = this.props;
        this.props.changeField(CREATE_TICKET_ACTION, "modalIsOpen", !createTicket.modalIsOpen)
    };

    create = () => {
        this.props.createPaymentsTicket();
    };

    render() {
        const {createTicket} = this.props;
        return (
            <Modal className="ticket-modal-content"
                   show={createTicket.modalIsOpen}
                   onHide={this.toggleModal}
                   backdrop="static"
                   centered>
                <Container>
                    <Modal.Header className="modal-underline-selector" closeButton>
                        <Modal.Title>New ticket</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Create/>
                    </Modal.Body>
                    <Modal.Footer className="modal-underline-selector">
                        <Button className="smarts-button ticket-create-button"
                                onClick={this.toggleModal}>Create</Button>
                    </Modal.Footer>
                </Container>
            </Modal>

        )
    }
}

function mapStateToProps(state) {
    return {
        createTicket: state.createTicket,
    }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changeField
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps) (CreateTicketModal);
