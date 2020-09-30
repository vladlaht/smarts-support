import React from "react";
import {FaUserCircle} from "react-icons/fa"

export default props => {
    return (
        <React.Fragment>
            <FaUserCircle className="account-card__logo"/>
            <span className="account-card__name">{props.fullname}</span>
        </React.Fragment>
    )
};



