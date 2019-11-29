import React, {Component} from "react";
import { Modal} from "react-bootstrap";
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
