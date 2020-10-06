import React from "react";
import {FaUserCircle} from "react-icons/fa"

export default props => {
    return (
        <div className="username-card">
            <FaUserCircle className="username-card__logo"/>
            <span className="username-card__name">{props.fullname}</span>
        </div>
    )
};



