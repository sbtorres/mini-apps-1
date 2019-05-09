import React from 'react';
import Tile from './Tile.jsx';

var Row6 = (props) => (
  props.Row6.map((isOccupied, index) => (
    <Tile onTileClick={props.onTileClick} 
          row={6} 
          col={index} 
          key={index + 35} 
          id={index + 35}
          isOccupied={isOccupied}/>
  ))
)

export default Row6;