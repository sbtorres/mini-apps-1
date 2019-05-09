import React from 'react';
import Tile from './Tile.jsx';

var Row6 = (props) => (
  props.Row6.map((isOccupied, index) => (
    <Tile row={6} col={index} key={index + 6} isOccupied={isOccupied}/>
  ))
)

export default Row6;