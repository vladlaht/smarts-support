import React from "react";
import {IconContext} from "react-icons";
import {FaUserCircle} from "react-icons/fa"

export default props => {
    return (
        <React.Fragment>
                <IconContext.Provider value={{className: "account-card-logo"}}>
                    <FaUserCircle/>
                </IconContext.Provider>
                <span className="account-button-title">{props.fullName}</span>
            </React.Fragment>
    )
};



