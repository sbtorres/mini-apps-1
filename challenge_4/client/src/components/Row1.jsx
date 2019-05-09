import React from 'react';
import Tile from './Tile.jsx';

var Row1 = (props) => (
  props.Row1.map((isOccupied, index) => (
    <Tile row={1} col={index} key={index + 1} isOccupied={isOccupied}/>
  ))
)

export default Row1;