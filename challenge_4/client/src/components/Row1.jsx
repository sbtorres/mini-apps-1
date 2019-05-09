import React from 'react';
import Tile from './Tile.jsx';

var Row1 = (props) => (
  props.Row1.map((isOccupied, index) => (
    <Tile onTileClick={props.onTileClick} 
          row={1} 
          col={index} 
          key={index} 
          id={index}
          isOccupied={isOccupied}/>
  ))
)

export default Row1;