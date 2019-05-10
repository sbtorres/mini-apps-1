import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Row1: [null, null, 0, 0, 0, 0, 0, 0, 0, null, null],
      Row2: [null, null, 0, 0, 0, 0, 0, 0, 0, null, null],
      Row3: [null, null, 0, 0, 0, 0, 0, 0, 0, null, null],
      Row4: [null, null, 0, 0, 0, 0, 0, 0, 0, null, null],
      Row5: [null, null, 0, 0, 0, 0, 0, 0, 0, null, null],
      Row6: [null, null, 0, 0, 0, 0, 0, 0, 0, null, null],
      counter: 0,
    };

    this.onTileClick = this.onTileClick.bind(this);
  }

  onTileClick(event) {
    event.preventDefault();
    let clicked = event.target.id;
    let column = clicked % 11;
    let newState = this.state;
    let changedRow = 0;
    let incrementCounter = this.state.counter + 1;
    for (let i = 8; i >= 3; i--) {
      if (newState[`Row${i - 2}`][column] === 0) {
        if (this.state.counter % 2 === 0) {
          newState[`Row${i - 2}`][column] = 1;
          changedRow = i;
        } else {
          newState[`Row${i - 2}`][column] = -1;
          changedRow = i;
        }
        break;
      }
    }
    this.setState({
      [`Row${changedRow}`]: newState[`Row${changedRow}`],
      counter: incrementCounter,
    })
    this.checkForRowWinner();
    this.checkForColWinner();
    this.checkForMajDiagWinner();
  }

  checkForRowWinner() {
    let blackInARow = 0;
    let redInARow = 0;
    for (let i = 1; i < 7; i++) {
      for (let j = 2; j < 9; j++) {
        if (this.state[`Row${i}`][j] === 1) {
          redInARow += 1;
          if (redInARow === 4) {
            alert("Red Player is the winner by Row!");
          }
          continue;
        }
        if (this.state[`Row${i}`][j] === -1) {
          blackInARow += 1;
          if (blackInARow === 4) {
            alert("Black Player is the winner by Row!");
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

  checkForColWinner() {
    let blackInARow = 0;
    let redInARow = 0;
    for (let i = 2; i < 9; i++) {
      for (let j = 1; j < 7; j++) {
        if (this.state[`Row${j}`][i] === 1) {
          redInARow += 1;
          if (redInARow === 4) {
            alert("Red Player is the winner by Column!");
          }
          continue;
        }
        if (this.state[`Row${j}`][i] === -1) {
          blackInARow += 1;
          if (blackInARow === 4) {
            alert("Black Player is the winner by Column!");
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

  checkForMajDiagWinner() {
    let blackInARow = 0;
    let redInARow = 0;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        console.log('check col: ' + (j + i) + ' row: ' + (j + 1));
        if (this.state[`Row${j + 1}`][j + i] === 1) {
          redInARow += 1;
          if (redInARow === 4) {
            alert("Red Player is the winner by Major Diagonal!");
          }
          continue;
        }
        if (this.state[`Row${j + 1}`][j + i] === -1) {
          blackInARow += 1;
          if (blackInARow === 4) {
            alert("Black Player is the winner by Major Diagonal!");
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

