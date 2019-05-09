import React from 'react';
import Tile from './Tile.jsx';

var Row3 = (props) => (
  props.Row3.map((isOccupied, index) => (
    <Tile row={3} col={index} key={index + 3} isOccupied={isOccupied}/>
  ))
)

export default Row3;