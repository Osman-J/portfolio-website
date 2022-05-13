import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import {GrMenu, GrClose} from "react-icons/gr";
import './MobileNav.css';
import {useState} from "react";

function MobileNav() {
    const [showMenu, setShowMenu] = useState(false);
    const [menuClass, setMenuClass] = useState("mobileNavBar");

    function closeMenu(){
        setShowMenu(false);
        setMenuClass("mobileNavBar");
    }

    function openMenu() {
        setShowMenu(true);
        setMenuClass("mobileNavBar-opened");
    }
    
    const openIcon = <GrMenu className="grMenu" onClick={openMenu}/>
    const closeIcon = <GrClose className="grClose" onClick={closeMenu}/>

    return (
        <div className={menuClass}>
            {showMenu ? closeIcon : openIcon}
            {showMenu && <NavLinks closeMenu={closeMenu}/>}
        </div>
    );
}

export default MobileNav;