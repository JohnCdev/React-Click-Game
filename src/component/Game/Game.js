import React from 'react';
import Board from '../board/board';
import Header from '../Header/Header'
import Images from './images.json';
import Hero from '../Hero/Hero';

class Game extends React.Component {

    state = {
        images: Images.images,
        lost: false,
        currentScore: 0,
        highScore: 0
    }

    componentDidMount() {
        console.log(this.state.images ? "loaded" : "Images failed to load")
    }

    handleClick = event => {
        const index = event.target.attributes.getNamedItem("data-index").value;
        const newImageState = this.state.images;
        if (newImageState[index].clicked) {
            this.setState({
                lost: true,
                currentScore: 0,
                highScore: (this.state.currentScore > this.state.highScore
                    ? this.state.currentScore
                    : this.state.highScore)
            })
            this.resetBoard()
        } else {
            newImageState[index].clicked = true;
            this.setState({
                images: newImageState,
                currentScore: this.state.currentScore + 1
            })
        }
        this.randomMizeImages();
    }

    randomMizeImages() {

    }

    resetBoard() {
        
    }

    render() {

        return (
            <div style={{ minHeight: "100%", paddingBottom: "100px" }} >
                <Header
                    currentScore={this.state.currentScore}
                    highScore={this.state.highScore}
                    lost={this.state.lost}
                />
                <Hero>
                    <h1>Clicker Game!</h1>
                    <h2>Click on an image to get points, but don't click on the same one twice!</h2>
                </Hero>
                <div className="container">
                    <Board
                        images={this.state.images}
                        handleClick={this.handleClick}
                    />
                </div>
            </ div>
        );
    }
}

export default Game;