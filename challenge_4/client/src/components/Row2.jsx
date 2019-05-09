import React from 'react';
import Tile from './Tile.jsx';

var Row2 = (props) => (
  props.Row2.map((isOccupied, index) => (
    <Tile onTileClick={props.onTileClick} 
          row={2} 
          col={index} 
          key={index + 2} 
          isOccupied={isOccupied}/>
  ))
)

export default Row2;