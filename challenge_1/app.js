var counter = 1;
var numOfPlays = 0;
var playerXBoard = {Row1: 0, Row2: 0, Row3: 0, Col1: 0, Col2: 0, Col3: 0, MajorDiag: 0, MinorDiag: 0}
var playerOBoard = {Row1: 0, Row2: 0, Row3: 0, Col1: 0, Col2: 0, Col3: 0, MajorDiag: 0, MinorDiag: 0}
var playerXWins = 0;
var playerOWins = 0;

var renderWinsTable = () => {
  var xWinsTable = document.getElementById("player-x-wins");
  xWinsTable.innerText = "Player X Wins: " + playerXWins;
  var oWinsTable = document.getElementById("player-o-wins");
  oWinsTable.innerText = "Player O Wins: " + playerOWins;
}

var onTileClick = (event) => {
  var clickedCell = document.getElementById(event.target.id)
  if (clickedCell.innerHTML) {
    return;
  }
  updateTile(clickedCell);
}

var updateTile = (clickedCell) => {
  if (counter % 2 === 0) {
    counter++;
    numOfPlays++;
    clickedCell.innerText = 'O';
    updateBoard(event, 'O');
  } else {
    counter++;
    numOfPlays++;
    clickedCell.innerText = 'X';
    updateBoard(event, 'X');
  }
  if (counter > 4) {
    checkForWinner();
  }
}

var updateBoard = (event, player) => {
  let tileIndex = parseInt(event.target.id);
  if (player === 'X') {
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
      playerXWins++;
      counter = 0;
      numOfPlays = 0;
      renderWinsTable();
      return; 
    }
  }
  for (let key in playerOBoard) {
    if (playerOBoard[key] > 2) {
      playerOWins++;
      counter = 1;
      numOfPlays = 0;
      renderWinsTable();
      alert('Player O Won');
      return;
    }
  }
  if (numOfPlays === 9) {
    alert('Cats Game!');
  } 
}

var resetBoard = () => {
  for (let i = 1; i < 10; i++) {
    var tile = document.getElementById(JSON.stringify(i));
    tile.innerHTML = '';
  }
  for (let key in playerXBoard) {
    playerXBoard[key] = 0;
  }
  for (let key in playerOBoard) {
    playerOBoard[key] = 0;
  }
}

renderWinsTable();

