import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Row1: [false, false, false, false, false, false, false],
      Row2: [false, false, false, false, false, false, false],
      Row3: [false, false, false, false, false, false, false],
      Row4: [false, false, false, false, false, false, false],
      Row5: [false, false, false, false, false, false, false],
      Row6: [false, false, false, false, false, false, false],
      Col1: [false, false, false, false, false, false, false],
      Col2: [false, false, false, false, false, false],
      Col3: [false, false, false, false, false, false],
      Col4: [false, false, false, false, false, false],
      Col5: [false, false, false, false, false, false],
      Col6: [false, false, false, false, false, false],
      Col7: [false, false, false, false, false, false],
      MajDiag1: [false, false, false, false],
      MajDiag2: [false, false, false, false, false],
      MajDiag3: [false, false, false, false, false, false],
      MajDiag4: [false, false, false, false, false, false],
      MajDiag5: [false, false, false, false, false],
      MajDiag6: [false, false, false, false],
      MinDiag1: [false, false, false, false],
      MinDiag2: [false, false, false, false, false],
      MinDiag3: [false, false, false, false, false, false],
      MinDiag4: [false, false, false, false, false, false],
      MinDiag5: [false, false, false, false, false],
      MinDiag6: [false, false, false, false],
    };

    this.onTileClick = this.onTileClick.bind(this);
  }

  onTileClick(event) {
    event.preventDefault();
    console.log('click!');

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

