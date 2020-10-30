import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeField} from "../../../../global/actions/StandardActions";
import {FILTER_TABLE_ACTION} from "../../constants/reducerConstants";

class TicketSearch extends React.Component {

    handleFieldChange(field, value) {
        this.props.changeField(FILTER_TABLE_ACTION, field, value);
    };

    render() {
        return (
            <React.Fragment>
                <input className="smarts-input"
                       type="text"
                       placeholder="Search ticket"
                       onChange={(e) => this.handleFieldChange("filterField", e.target.value)}/>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField
}, dispatch));

export default connect(null, mapDispatchToProps)(TicketSearch);
