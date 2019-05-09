import React from 'react';

var Tile = (props) => (
  <React.Fragment>
    <div className="tile" onClick={props.onTileClick}></div>
  </React.Fragment>
)

export default Tile;