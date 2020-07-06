import React from "react";
import {IconContext} from "react-icons";
import {FaUserCircle} from "react-icons/fa"

const AccountCardd = props => {
    return (
        <span>
                <IconContext.Provider value={{className: "account-card-logo"}}>
                    <FaUserCircle/>
                </IconContext.Provider>
                <span className="account-button-title">{props.fullName}</span>
            </span>
    )
}

export default AccountCardd

