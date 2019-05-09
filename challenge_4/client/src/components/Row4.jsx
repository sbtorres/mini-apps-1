import React from 'react';
import Tile from './Tile.jsx';

var Row4 = (props) => (
  props.Row4.map((isOccupied, index) => (
    <Tile onTileClick={props.onTileClick} 
          row={4} 
          col={index} 
          key={index + 21} 
          id={index + 21}
          isOccupied={isOccupied}/>
  ))
)

export default Row4;