import React, {useState} from "react";
import AccountDropdownCard from "../../modules/account/views/cards/AccountDropdownCard";
import SidebarButton from "./SidebarButton";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
import NavigationLinks from "./NavigationLinks";

function TopMenu(props) {

    const [sidebar, setSidebar] = useState(false);
    const handleClick = () => setSidebar(!sidebar);
    const handleClose = () => setSidebar(false);

    return (
        <div className="top-menu">
            <SidebarButton click={handleClick}/>
            <div className="top-menu-logo">
                <img src={process.env.PUBLIC_URL + "/img/small_logo_white.png"} alt="small_logo_white"/>
                <img src={process.env.PUBLIC_URL + "/img/logo_white.png"} alt="logo_white"/>
            </div>
            <div className="top-menu-links">
                <NavigationLinks active={props.active}/>
            </div>
            <AccountDropdownCard/>
            <Sidebar show={sidebar} handleClose={handleClose} active={props.active}/>
            {sidebar ? <Backdrop/> : null}
        </div>
    )
}

export default TopMenu;

