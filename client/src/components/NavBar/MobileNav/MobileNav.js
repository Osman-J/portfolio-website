import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import {GrMenu, GrClose} from "react-icons/gr";
import './MobileNav.css';
import {useState} from "react";

function MobileNav() {
    const [showMenu, setShowMenu] = useState(false);
    const [menuClass, setMenuClass] = useState("mobileNavBar");
    const openIcon = <GrMenu className="grMenu" onClick={() => {
        setShowMenu(true)
        setMenuClass("mobileNavBar-opened")
    }}/>
    const closeIcon = <GrClose className="grClose" onClick={() => {
        setShowMenu(false)
        setMenuClass("mobileNavBar")
    }}/>

    return (
        <div className={menuClass}>
            {showMenu ? closeIcon : openIcon}
            {showMenu && <NavLinks />}
        </div>
    );
}

export default MobileNav;