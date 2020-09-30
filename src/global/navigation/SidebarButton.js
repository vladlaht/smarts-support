import React from "react";

export default props => {
    return (
        <div className="sidebar-hamburger">
            <button className="sidebar-button" onClick={props.click}>
                <div className="sidebar-button__line"> </div>
                <div className="sidebar-button__line"> </div>
                <div className="sidebar-button__line"> </div>
            </button>
        </div>
    )
};