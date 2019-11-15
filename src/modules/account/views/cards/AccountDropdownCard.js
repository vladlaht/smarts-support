import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {DropdownButton, Dropdown} from "react-bootstrap";
import {IconContext} from "react-icons";
import {IoMdLogOut, IoMdClipboard} from "react-icons/io"
import {MdSettings} from "react-icons/md"

import AccountCard from "./AccountCard";
class AccountDropdownCard extends Component {

    render() {
        return (
            <div className="account-card">
                <DropdownButton className="account-card-body" id="dropdown-basic-button"
                                title={<AccountCard
                                    fullname={'Vladsialv Lahtarin'}/>}>
                    <Dropdown.Item href="#/action-1">
                        <IconContext.Provider value={{className: "account-card-items-logo"}}>
                            <MdSettings/>
                        </IconContext.Provider>
                        Account settings
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        <IconContext.Provider value={{className: "account-card-items-logo"}}>
                            <IoMdClipboard/>
                        </IconContext.Provider>
                        Tasks
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        <IconContext.Provider value={{className: "account-card-items-logo"}}>
                            <IoMdLogOut/>
                        </IconContext.Provider>
                        Log out
                    </Dropdown.Item>
                </DropdownButton>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(AccountDropdownCard);