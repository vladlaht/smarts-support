import React from "react";
import NavigationLinks from "./NavigationLinks";

export default props => (

    <div className={!props.show ? "sidebar" : "sidebar open"}>
        {props.show ? <button className="sidebar-close-button" onClick={props.handleClose}>X</button> : null}
        <NavigationLinks active={props.active}/>
    </div>
);

