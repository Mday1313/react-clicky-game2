import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";

class App extends Component {



    render() {
        return(
            <div>
            <Nav></Nav>
            <Wrapper>
                <Title>Clicky Game</Title>
            </Wrapper>
            </div>
        );
    }

}

export default App;