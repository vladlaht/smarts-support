import React from "react";
import {FaHome, FaTasks, FaUsers, FaFileInvoiceDollar} from "react-icons/fa"
import {IconContext} from "react-icons/lib/esm/index";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HOME_ROUTE, TICKETS_ROUTE, CLIENTS_ROUTE, INVOICES_ROUTE} from "../constants/routes";


export default props => {

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={process.env.PUBLIC_URL + "/img/small_nav_logo.png"} alt="small-nav-logo"/>
            </div>
            <div className={props.hasOwnProperty("activeRoute") && props.activeRoute === HOME_ROUTE ? "sidebar-link active" : "sidebar-link"}>
                <Link className="sidebar-link-content" to="/">
                    <IconContext.Provider value={{className: "sidebar-link-content__logo"}}>
                        <FaHome/>
                    </IconContext.Provider>
                    Home
                </Link>
            </div>
            <div className={props.hasOwnProperty("activeRoute") && props.activeRoute === TICKETS_ROUTE ? "sidebar-link active" : "sidebar-link"}>
                <Link className="sidebar-link-content" to="/tickets">
                    <IconContext.Provider value={{className: "sidebar-link-content__logo"}}>
                        <FaTasks/>
                    </IconContext.Provider>
                    Tickets
                </Link>
            </div>
            <div className={props.hasOwnProperty("activeRoute") && props.activeRoute === CLIENTS_ROUTE ? "sidebar-link active" : "sidebar-link"}>
                <Link className="sidebar-link-content" to="/clients">
                    <IconContext.Provider value={{className: "sidebar-link-content__logo"}}>
                        <FaUsers/>
                    </IconContext.Provider>
                    Clients
                </Link>
            </div>
            <div className={props.hasOwnProperty("activeRoute") && props.activeRoute === INVOICES_ROUTE ? "sidebar-link active" : "sidebar-link"}>
                <Link className="sidebar-link-content" to="/invoices">
                    <IconContext.Provider value={{className: "sidebar-link-content__logo"}}>
                        <FaFileInvoiceDollar/>
                    </IconContext.Provider>
                    Invoices
                </Link>
            </div>
        </div>
    )
}
