import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeField} from "../../../../global/actions/StandardActions";

class TicketSearch extends Component {

    render() {
        return (
            <React.Fragment>

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

export default connect(mapStateToProps, mapDispatchToProps)(TicketSearch);
