import React from "react";
import "./style.css";

function PlayingCards(props) {
    return (
       
        <div className="card">
            
            <div className="img-container grow">
                <img onClick={() => props.imageClick(props.name)} name={props.name}alt={props.name} src={props.image} />
            </div>
            </div>
        
    );
}
 
export default PlayingCards;