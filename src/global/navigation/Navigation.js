import React from "react";
import {FaHome, FaTasks, FaUsers, FaFileInvoiceDollar} from "react-icons/fa"
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HOME_ROUTE, TICKETS_ROUTE, CLIENTS_ROUTE, INVOICES_ROUTE} from "../constants/routes";


export default props => {

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={process.env.PUBLIC_URL + "/img/small_nav_logo.png"} alt="small-nav-logo"/>
            </div>
            <Nav>
                <div className={props.hasOwnProperty("activeRoute") && props.activeRoute === HOME_ROUTE ? "sidebar-link active" : "sidebar-link"}>
                    <Link className="sidebar-link-content" to="/">
                        <FaHome className="sidebar-link-content__logo"/>
                        Home
                    </Link>
                </div>
                <div className={props.hasOwnProperty("activeRoute") && props.activeRoute === TICKETS_ROUTE ? "sidebar-link active" : "sidebar-link"}>
                    <Link className="sidebar-link-content" to="/tickets">
                        <FaTasks className="sidebar-link-content__logo"/>
                        Tickets
                    </Link>
                </div>
                <div className={props.hasOwnProperty("activeRoute") && props.activeRoute === CLIENTS_ROUTE ? "sidebar-link active" : "sidebar-link"}>
                    <Link className="sidebar-link-content" to="/clients">
                        <FaUsers className="sidebar-link-content__logo"/>
                        Clients
                    </Link>
                </div>
                <div className={props.hasOwnProperty("activeRoute") && props.activeRoute === INVOICES_ROUTE ? "sidebar-link active" : "sidebar-link"}>
                    <Link className="sidebar-link-content" to="/invoices">
                        <FaFileInvoiceDollar className="sidebar-link-content__logo"/>
                        Invoices
                    </Link>
                </div>
            </Nav>
        </div>
    )
}
