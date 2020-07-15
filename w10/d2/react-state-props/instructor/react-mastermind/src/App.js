import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';


// Add this array above the App class
const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  // START WITH ALL MY APP STATE HERE IN APP.js

  constructor(){
    // JS requires that super be called before accessing 'this'
    super();
     // this.state is an object that holds "state" in its properties
    this.state = {
      selectedColorIndex: 0,
      // Call getNewGuess to create a starting guess object
       // For development, let's initialize with two guess objects
       guesses: [this.getNewGuess(), this.getNewGuess()], // we need an empty array in order to not get a undefined error on app startup
      code: this.genCode()

    };

    // instance variable
    this.myVar = "hello"

    console.log("I ONLY RUN ONCE !!!! ");

  }

  // Add this method below the constructor method
  getNewGuess() {
    return {
      // Comment out until done testing
      // code: [null, null, null, null],
      code: [3, 2, 1, 0], // for testing purposes
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  // DO # 2 between line 18 and render(){}
  genCode = () => new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));

  handleNextColor = () => this.setState( (state) => {

    if (this.state.guesses.length > 0 ){
      console.log("YAY we have a guess")
    }else{
      console.log("Nothing has been guessed yet");
    }
    // MUST RETURN A POJO ** NO EXCEPTIONS!!!!!!!
    return {selectedColorIndex: ++state.selectedColorIndex % 4 }
  })

  render() {
    let { selectedColorIndex, guesses } = this.state;
    const {myVar} = this;
     // ES6 Destructuring

    // TOTALLY EQ to this.state.selectedColorIndex
    console.log("Render function is called")

    console.log(myVar);

    return (
      <div className="App">
        {/* Add this before the header */}
        The Selected Color is: {colors[selectedColorIndex]}
        <header className="App-header">React Mastermind</header>


{/*
One Way of declaring a state change

        <button onClick={
            ()=> this.setState({selectedColorIndex: ++selectedColorIndex % 4 }) }>
            Next Color
          </button> */}

        <button onClick={this.handleNextColor}>
          Next Color
        </button>

        <div className="flex-h">
          <GameBoard handleNextColor={this.handleNextColor} colors={colors} guesses={guesses} />
          <div>
            <ColorPicker colors={colors} selectedColorIndex={selectedColorIndex} />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
