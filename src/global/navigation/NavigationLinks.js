import {CLIENTS_ROUTE, HOME_ROUTE, INVOICES_ROUTE, TICKETS_ROUTE} from "../constants/routes";
import {FaHome, FaTasks, FaUsers, FaFileInvoiceDollar} from "react-icons/fa"
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import React from "react";

function NavigationLinks(props) {

    const linkActive = "navigation-link active";
    const link = "navigation-link";

    return (
        <Nav>
            <div className={props.hasOwnProperty("active") && props.active === HOME_ROUTE ? linkActive : link}>
                <Link className="navigation-link-content" to="/">
                    <FaHome className="navigation-link-content__logo"/>
                    Home
                </Link>
            </div>
            <div className={props.hasOwnProperty("active") && props.active === TICKETS_ROUTE ? linkActive : link}>
                <Link className="navigation-link-content" to="/tickets">
                    <FaTasks className="navigation-link-content__logo"/>
                    Tickets
                </Link>
            </div>
            <div className={props.hasOwnProperty("active") && props.active === CLIENTS_ROUTE ? linkActive : link}>
                <Link className="navigation-link-content" to="/tickets/details/5ec1e2852e54c7392692457c">
                    <FaUsers className="navigation-link-content__logo"/>
                    Details
                </Link>
            </div>
            <div className={props.hasOwnProperty("active") && props.active === INVOICES_ROUTE ? linkActive : link}>
                <Link className="navigation-link-content" to="/invoices">
                    <FaFileInvoiceDollar className="navigation-link-content__logo"/>
                    Invoices
                </Link>
            </div>
        </Nav>
    )
}

export default NavigationLinks;