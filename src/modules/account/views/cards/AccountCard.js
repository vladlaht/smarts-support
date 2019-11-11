import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {IconContext} from "react-icons";
import {FaUserCircle} from "react-icons/fa"


class AccountCard extends Component {

    render() {
        return (
            <span>
                <IconContext.Provider value={{className: "account-card-logo"}}>
                    <FaUserCircle/>
                </IconContext.Provider>
                <span className="account-button-title">{this.props.fullname}</span>
            </span>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(AccountCard);
