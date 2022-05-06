import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import { FaBars, FaWindowClose } from "react-icons/fa";
import './MobileNav.css';
import {useState} from "react";

function MobileNav() {
    const [showMenu, setShowMenu] = useState(false);
    const openIcon = <FaBars className="faBars" onClick={() => {setShowMenu(true)}}/>
    const closeIcon = <FaWindowClose className="faWindowClose" onClick={() => {setShowMenu(false)}}/> 
    return (
        <div className="mobileNavBar">
            {showMenu ? closeIcon : openIcon}
            {showMenu && <NavLinks />}
        </div>
    );
}

export default MobileNav;