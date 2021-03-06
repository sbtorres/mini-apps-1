import React from 'react';
import Tile from './Tile.jsx';

var Row6 = (props) => (
  props.Row6.map((isOccupied, index) => (
    <Tile onTileClick={props.onTileClick} 
          row={6} 
          col={index} 
          key={index + 55} 
          id={index + 55}
          isOccupied={isOccupied}/>
  ))
)

export default Row6;