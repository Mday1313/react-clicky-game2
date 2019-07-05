import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <span className="navbar-text">
                <div>Clicky Game</div>
               
                <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
            </span>
        </nav>
    );
}

export default Nav;