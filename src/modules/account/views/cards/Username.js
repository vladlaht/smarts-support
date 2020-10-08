import React from "react";
import {FaUserCircle} from "react-icons/fa"

export default props => {
    return (
        <div className="username-card">
            {
                props.photo ? <img className="username-card__logo" src={props.photo} alt="logo"/> : <FaUserCircle className="username-card__logo"/>

            }

            <span className="username-card__name">{props.fullname}</span>
        </div>
    )
};



