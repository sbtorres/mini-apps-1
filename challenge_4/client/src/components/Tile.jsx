import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${props => (props.isOccupied === 0 ? "white" : 
                                props.isOccupied === 1 ? "red" : "black")};
`;

var Tile = (props) => (
  <React.Fragment>
    <StyledDiv id={props.id} row={props.row} col={props.col} className="tile" onClick={props.onTileClick} isOccupied={props.isOccupied}></StyledDiv>
  </React.Fragment>
)

export default Tile;