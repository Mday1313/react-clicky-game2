import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import cards from "./cards.json";
import PlayingCards from "./components/PlayingCards";
import "./index.css";


class App extends Component {

    state = {
        cards
      };

    render() {
        return(
            <div>
            <Nav></Nav>
            <Title>Clicky Game</Title>
            <Wrapper>
               
                
                
                {this.state.cards.map(card => (
                    <PlayingCards
                    id={card.id}
                    key={card.id}
                    image={card.image} 
                    />
                ))}
               
            </Wrapper>
            </div>
        );
    }

}

export default App;