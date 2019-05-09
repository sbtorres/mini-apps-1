import React from 'react';
import Row1 from './Row1.jsx';
import Row2 from './Row2.jsx';
import Row3 from './Row3.jsx';
import Row4 from './Row4.jsx';
import Row5 from './Row5.jsx';
import Row6 from './Row6.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="board">
      <div className="row-1">
        <Row1 Row1={this.props.state.Row1}/>
      </div>
      <div className="row-2">
        <Row2 Row2={this.props.state.Row2}/>
      </div>
      <div className="row-3">
        <Row3 Row3={this.props.state.Row3}/>
      </div>
      <div className="row-4">
        <Row4 Row4={this.props.state.Row4}/>
      </div>
      <div className="row-5">
        <Row5 Row5={this.props.state.Row5}/>
      </div>
      <div className="row-6">
        <Row6 Row6={this.props.state.Row6}/>
      </div>


      </div>
    )
  }
}

export default Board;