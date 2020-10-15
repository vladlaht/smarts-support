import {PROFILE_ROUTE, INVOICES_ROUTE, TICKETS_ROUTE} from "../constants/routes";
import {FaHome, FaTasks, FaFileInvoiceDollar} from "react-icons/fa"
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import React from "react";

function NavigationLinks(props) {

    const linkActive = "navigation-link active";
    const link = "navigation-link";

    return (
        <Nav>
            <div className={props.hasOwnProperty("active") && props.active === PROFILE_ROUTE ? linkActive : link}>
                <Link className="navigation-link-content" to="/">
                    <FaHome className="navigation-link-content__logo"/>
                    My profile
                </Link>
            </div>
            <div className={props.hasOwnProperty("active") && props.active === TICKETS_ROUTE ? linkActive : link}>
                <Link className="navigation-link-content" to="/tickets">
                    <FaTasks className="navigation-link-content__logo"/>
                    Tickets
                </Link>
            </div>
            {/*<div className={props.hasOwnProperty("active") && props.active === CLIENTS_ROUTE ? linkActive : link}>*/}
            {/*    <Link className="navigation-link-content" to="/clients">*/}
            {/*        <FaUsers className="navigation-link-content__logo"/>*/}
            {/*        Clients*/}
            {/*    </Link>*/}
            {/*</div>*/}
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