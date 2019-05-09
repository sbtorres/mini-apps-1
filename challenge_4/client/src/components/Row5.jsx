import React from 'react';
import Tile from './Tile.jsx';

var Row5 = (props) => (
  props.Row5.map((isOccupied, index) => (
    <Tile onTileClick={props.onTileClick} 
          row={5} 
          col={index} 
          key={index + 28} 
          id={index + 28}
          isOccupied={isOccupied}/>
  ))
)

export default Row5;