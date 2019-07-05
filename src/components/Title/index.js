import React from "react";
import "./style.css";

function Title(props) {
    return ( 
    <div>
        <h1 className="title"> Clicky Game<p className="sub-title">Click on an image to earn points, but don't click on any more than once!</p><p className="message">{props.children}</p></h1>
    </div>
    );
}

export default Title;