import React from 'react';

var Tile = (props) => (
  <React.Fragment>
    <div>Row: {props.row} Col: {props.col}</div>
  </React.Fragment>
)

export default Tile;