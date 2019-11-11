import React, {Component} from "react";
import {FaHome, FaTasks, FaUsers, FaFileInvoiceDollar} from "react-icons/fa"
import {IconContext} from "react-icons/lib/esm/index";
import logo from "../../other/img/V2IKELOGO.png";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {HOME_ROUTE, TICKETS_ROUTE, CLIENTS_ROUTE, INVOICES_ROUTE} from "../constants/routes";


class Navigation extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-logo">
                    <img src={logo} alt=""/>
                </div>
                <Nav className="flex-column sidebar-links">
                    <div className={this.props.hasOwnProperty("activeRoute") && this.props.activeRoute === HOME_ROUTE ? "active" : ""}>
                        <Link className="sidebar-link" to="/">
                        <IconContext.Provider value={{className: "sidebar-link-logo"}}>
                            <FaHome/>
                        </IconContext.Provider>
                        Home
                    </Link>
                    </div>
                    <div className={this.props.hasOwnProperty("activeRoute") && this.props.activeRoute === TICKETS_ROUTE ? "active" : ""}>
                        <Link className="sidebar-link" to="/tickets">
                        <IconContext.Provider value={{className: "sidebar-link-logo"}}>
                            <FaTasks/>
                        </IconContext.Provider>
                        Tickets
                    </Link>
                    </div>
                    <div className={this.props.hasOwnProperty("activeRoute") && this.props.activeRoute === CLIENTS_ROUTE ? "active" : ""}>
                        <Link className="sidebar-link" to="/clients">
                        <IconContext.Provider value={{className: "sidebar-link-logo"}}>
                            <FaUsers/>
                        </IconContext.Provider>
                        Clients
                    </Link>
                    </div>
                    <div className={this.props.hasOwnProperty("activeRoute") && this.props.activeRoute === INVOICES_ROUTE ? "active" : ""}>
                        <Link className="sidebar-link" to="/invoices">
                        <IconContext.Provider value={{className: "sidebar-link-logo"}}>
                            <FaFileInvoiceDollar/>
                        </IconContext.Provider>
                        Invoices
                    </Link>
                    </div>
                </Nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Navigation);