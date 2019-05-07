var counter = 1;
var playerXBoard = {Row1: 0, Row2: 0, Row3: 0, Col1: 0, Col2: 0, Col3: 0, MajorDiag: 0, MinorDiag: 0}
var playerOBoard = {Row1: 0, Row2: 0, Row3: 0, Col1: 0, Col2: 0, Col3: 0, MajorDiag: 0, MinorDiag: 0}

var onTileClick = (event) => {
  var clickedCell = document.getElementById(event.target.id)
  if (clickedCell.innerHTML) {
    return;
  }
  if (counter % 2 === 0) {
    counter++;
    clickedCell.innerHTML = 'O';
  } else {
    counter++;
    clickedCell.innerHTML = 'X';
  }
  updateBoard(event, counter % 2);
  if (counter > 5) {
    checkForWinner();
  }
}

var updateBoard = (event, turn) => {
  let tileIndex = parseInt(event.target.id);
  if (turn === 0) {
    if (tileIndex <= 3) {
      playerXBoard.Row1++;
    }
    if (tileIndex <= 6 && tileIndex > 3) {
      playerXBoard.Row2++;
    }
    if (tileIndex <= 9 && tileIndex > 6) {
      playerXBoard.Row3++;
    }
    if (tileIndex === 1 || tileIndex === 4 || tileIndex === 7 ) {
      playerXBoard.Co11++;
    }
    if (tileIndex === 2 || tileIndex === 5 || tileIndex === 8 ) {
      playerXBoard.Col2++;
    }
    if (tileIndex % 3 === 0 ) {
      playerXBoard.Col3++;
    }
    if (tileIndex === 1 || tileIndex === 5 || tileIndex === 9 ) {
      playerXBoard.MajorDiag++;
    }
    if (tileIndex === 3 || tileIndex === 5 || tileIndex === 7 ) {
      playerXBoard.MinorDiag++;
    }
  } else {
    if (tileIndex <= 3) {
      playerOBoard.Row1++;
    }
    if (tileIndex <= 6 && tileIndex > 3) {
      playerOBoard.Row2++;
    }
    if (tileIndex <= 9 && tileIndex > 6) {
      playerOBoard.Row3++;
    }
    if (tileIndex === 1 || tileIndex === 4 || tileIndex === 7 ) {
      playerOBoard.Co11++;
    }
    if (tileIndex === 2 || tileIndex === 5 || tileIndex === 8 ) {
      playerOBoard.Col2++;
    }
    if (tileIndex % 3 === 0 ) {
      playerOBoard.Col3++;
    }
    if (tileIndex === 1 || tileIndex === 5 || tileIndex === 9 ) {
      playerOBoard.MajorDiag++;
    }
    if (tileIndex === 3 || tileIndex === 5 || tileIndex === 7 ) {
      playerOBoard.MinorDiag++;
    }
  }
}


var checkForWinner = () => {
  for (let key in playerXBoard) {
    if (playerXBoard[key] > 2) {
      alert('Player X Won!');
    }
  }
  for (let key in playerOBoard) {
    if (playerOBoard[key] > 2) {
      alert('Player O Won');
    }
  }
}

