import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import cards from "./cards.json";
import PlayingCards from "./components/PlayingCards";
import "./index.css";


class App extends Component {

    state = {
        cards,
        score: 0,
        highscore: 0
    };

    // function to change the state of score
    // if clicked once add to score then randomly move the cards,
    // if clicked a second time, "you lose", save high score, restart game
    // setState and changeOnClick


    render() {
        return (
            <div>
                <Nav></Nav>
                <Title></Title>
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