import React from 'react';

var Tile = (props) => (
  <React.Fragment>
    <div id={props.id} row={props.row} col={props.col} className="tile" onClick={props.onTileClick}></div>
  </React.Fragment>
)

export default Tile;