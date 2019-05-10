import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Row1: [0, 0, 0, 0, 0, 0, 0],
      Row2: [0, 0, 0, 0, 0, 0, 0],
      Row3: [0, 0, 0, 0, 0, 0, 0],
      Row4: [0, 0, 0, 0, 0, 0, 0],
      Row5: [0, 0, 0, 0, 0, 0, 0],
      Row6: [0, 0, 0, 0, 0, 0, 0],
      counter: 0,
    };

    this.onTileClick = this.onTileClick.bind(this);
  }

  onTileClick(event) {
    event.preventDefault();
    let clicked = event.target.id;
    let column = (clicked % 7) + 1;
    let newState = this.state;
    let changedRow = 0;
    let incrementCounter = this.state.counter + 1;
    for (let i = 6; i >= 1; i--) {
      if (newState[`Row${i}`][column - 1] === 0) {
        if (this.state.counter % 2 === 0) {
          newState[`Row${i}`][column - 1] = 1;
          changedRow = i;
        } else {
          newState[`Row${i}`][column - 1] = -1;
          changedRow = i;
        }
        break;
      }
    }
    this.setState({
      [`Row${changedRow}`]: newState[`Row${changedRow}`],
      counter: incrementCounter,
    })
    this.checkForWinner();
  }

  checkForWinner() {
    let blackInARow = 0;
    let redInARow = 0;
    for (let i = 1; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (this.state[`Row${i}`][j] === 1) {
          redInARow += 1;
          if (redInARow === 4) {
            alert("Red Player is the winner!");
          }
          continue;
        }
        if (this.state[`Row${i}`][j] === -1) {
          blackInARow += 1;
          if (blackInARow === 4) {
            alert("Black Player is the winner!");
          }
          continue;
        }
        else {
          blackInARow = 0;
          redInARow = 0;
        } 
      }
    }

  }
  render() {
    return (
      <div>
        <Board onTileClick={this.onTileClick} state={this.state} />
      </div>
    )
  }
}

export default App;

