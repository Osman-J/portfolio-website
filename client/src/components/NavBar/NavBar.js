import React from "react";
import MobileNav from "./MobileNav/MobileNav";
import WebNav from "./WebNav/WebNav";

function NavBar() {
    return(
        <div>
            <WebNav />
            <MobileNav />
        </div>
    );
}

export default NavBar;