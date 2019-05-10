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
    };

    this.onTileClick = this.onTileClick.bind(this);
  }

  onTileClick(event) {
    event.preventDefault();
    let clicked = event.target.id;
    let column = (clicked % 7) + 1;
    let row = clicked === 0 ? 0 : Math.floor(clicked / 7) + 1;
    let newState = this.state;
    let changedRow = 0;
    for (let i = 6; i >= 1; i--) {
      if (newState[`Row${i}`][column - 1] === 0) {
        newState[`Row${i}`][column - 1] = 1;
        changedRow = i;
        break;
      }
    }
    this.setState({
      [`Row${changedRow}`]: newState[`Row${changedRow}`]
    })



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

