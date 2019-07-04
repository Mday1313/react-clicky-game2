import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <span className="navbar-text">
                Navbar text with an inline element
            </span>
        </nav>
    );
}

export default Nav;