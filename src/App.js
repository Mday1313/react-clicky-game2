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
            highscore: 0,
            message: "Start the Game",
            clicked: []
        };
    
        randomImage = () => {
            const newImgArr = [];
              while(newImgArr.length !== cards.length){
                let card = cards[Math.floor(Math.random()*cards.length)];
                if(newImgArr.indexOf(card)<0){
                  newImgArr.push(card)
                }
              }
            return newImgArr
          }

  
    imageClick = name => {
        if(this.state.clicked.indexOf(name)>-1){
    
          this.setState({ 
            clicked: [],
            message: "You lost! Game Restarted."
            
         })
    
          if(this.state.score > this.state.highscore){
            this.setState({ 
              highscore: this.state.score 
            })
          }
    
          this.setState({ 
            score: 0,
            })
         
          
          return;
    
        } else {
          var score = this.state.score;
          score++;
    
          if(score > this.state.highscore){
            this.setState({ 
              highscore: score 
            })
          }
          this.setState({ 
            score: score, 
            message: "Choose another image"
          })
        }
    
        let clicked = this.state.clicked
        clicked.push(name )    
        this.setState({ 
          clicked 
        })
        console.log(this.state.clicked)
      }
    // function to change the state of score
    // if clicked once add to score then randomly move the cards,
    // if clicked a second time, "you lose", save high score, restart game
   


    render() {
        return (
            <div>
                <Nav><span>Score: {this.state.score}  / Highscore: {this.state.highscore}</span></Nav>
                <Title>{this.state.message}</Title>
                <Wrapper>
                    {this.randomImage().map(card => (
                        <PlayingCards
                            imageClick={this.imageClick}
                            id={card.id}
                            key={card.id}
                            name={card.name}
                            image={card.image}

                        />
                    ))}
                </Wrapper>
            </div>
        );
    }

}

export default App;