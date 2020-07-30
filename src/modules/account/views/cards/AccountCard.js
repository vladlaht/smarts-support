import React from "react";
import {IconContext} from "react-icons";
import {FaUserCircle} from "react-icons/fa"

export default props => {
    return (
        <React.Fragment>
                <IconContext.Provider value={{className: "account-card__logo"}}>
                    <FaUserCircle/>
                </IconContext.Provider>
                <span className="account-card__button">{props.fullname}</span>
            </React.Fragment>
    )
};



