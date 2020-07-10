import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {CREATE_TICKET_ACTION} from "../../constants/ReducerConstants";
import {changeField} from "../../../../global/actions/StandardActions";
import CreateTicketModal from "../modals/CreateTicketModal";

class NewTicketButton extends Component {

    toggleModal = () => {
        const {createTicket} = this.props;
        this.props.changeField(CREATE_TICKET_ACTION, "modalIsOpen", !createTicket.modalIsOpen)
    };

    render() {
        return (
            <React.Fragment>
                <Button className="smarts-button new-ticket-button" onClick={this.toggleModal}>
                    New ticket
                </Button>
                <CreateTicketModal/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
        createTicket: state.createTicket
    }
)

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(NewTicketButton);
