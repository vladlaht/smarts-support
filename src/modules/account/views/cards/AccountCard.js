import React, {Component} from "react";
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

export default AccountCard;
