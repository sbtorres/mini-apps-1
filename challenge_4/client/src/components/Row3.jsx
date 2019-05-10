import React from 'react';
import Tile from './Tile.jsx';

var Row3 = (props) => (
  props.Row3.map((isOccupied, index) => (
    <Tile onTileClick={props.onTileClick} 
          row={3} 
          col={index} 
          key={index + 22} 
          id={index + 22}
          isOccupied={isOccupied}/>
  ))
)

export default Row3;