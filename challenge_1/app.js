var counter = 1;
var numOfPlays = 0;
var playerXBoard = {Row1: 0, Row2: 0, Row3: 0, Col1: 0, Col2: 0, Col3: 0, MajorDiag: 0, MinorDiag: 0}
var playerOBoard = {Row1: 0, Row2: 0, Row3: 0, Col1: 0, Col2: 0, Col3: 0, MajorDiag: 0, MinorDiag: 0}
var combinedBoard = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};
var playerXWins = 0;
var playerOWins = 0;

var renderWinsTable = () => {
  var xWinsTable = document.getElementById("player-x-wins");
  xWinsTable.innerText = "Player X Wins: " + playerXWins;
  var oWinsTable = document.getElementById("player-o-wins");
  oWinsTable.innerText = "Player O Wins: " + playerOWins;
}

var onTileClick = (event) => {
  if (combinedBoard[event.target.id]) {
    alert('Sorry, that space is occupied');
    return;
  }
  updateTile();
}

var updateTile = () => {
  var clickedCell = document.getElementById(event.target.id);
  combinedBoard[event.target.id] = true; 
  if (counter % 2 === 0) {
    clickedCell.innerText = 'O';
    updateBoard(event, 'O');
  } else {
    clickedCell.innerText = 'X';
    updateBoard(event, 'X');
  }
  if (counter > 4) {
    checkForWinner();
  }
}

var updateBoard = (event, player) => {
  counter++;
  numOfPlays++;
  let tileIndex = parseInt(event.target.id);
  if (player === 'X') {
    (tileIndex <= 3) ? playerXBoard.Row1++ : null;
    (tileIndex <= 6 && tileIndex > 3) ? playerXBoard.Row2++ : null;
    (tileIndex <= 9 && tileIndex > 6) ? playerXBoard.Row3++ : null;
    (tileIndex === 1 || tileIndex === 4 || tileIndex === 7) ? playerXBoard.Col1++ : null;
    (tileIndex === 2 || tileIndex === 5 || tileIndex === 8) ? playerXBoard.Col2++ : null;
    (tileIndex % 3 === 0) ? playerXBoard.Col3++ : null;
    (tileIndex === 1 || tileIndex === 5 || tileIndex === 9) ? playerXBoard.MajorDiag++ : null;
    (tileIndex === 3 || tileIndex === 5 || tileIndex === 7) ? playerXBoard.MinorDiag++ : null;
  } else {
    (tileIndex <= 3) ? playerOBoard.Row1++ : null;
    (tileIndex <= 6 && tileIndex > 3) ? playerOBoard.Row2++ : null;
    (tileIndex <= 9 && tileIndex > 6) ? playerOBoard.Row3++ : null;
    (tileIndex === 1 || tileIndex === 4 || tileIndex === 7) ? playerOBoard.Col1++ : null;
    (tileIndex === 2 || tileIndex === 5 || tileIndex === 8) ? playerOBoard.Col2++ : null;
    (tileIndex % 3 === 0) ? playerOBoard.Col3++ : null;
    (tileIndex === 1 || tileIndex === 5 || tileIndex === 9) ? playerOBoard.MajorDiag++ : null;
    (tileIndex === 3 || tileIndex === 5 || tileIndex === 7) ? playerOBoard.MinorDiag++ : null;
  }
}

var checkForWinner = () => {
  for (let key in playerXBoard) {
    if (playerXBoard[key] > 2) {
      alert('Player X Won!');
      playerXWins++;
      counter = 0;
      renderWinsTable();
      return; 
    }
  }
  for (let key in playerOBoard) {
    if (playerOBoard[key] > 2) {
      playerOWins++;
      counter = 1;
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
  for (let key in combinedBoard) {
    combinedBoard[key] = false;
  }
  numOfPlays = 0;
}

renderWinsTable();

