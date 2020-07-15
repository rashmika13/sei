import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {name:"Bob"}
  }

  render(){
    return (
      <div className="App">
        <GameBoard/>
        <ColorPicker/>
      </div>
    );
  }
}



