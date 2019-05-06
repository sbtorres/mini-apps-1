var counter = 0;

var onTileClick = (event) => {
  var clickedCell = document.getElementById(event.target.id)
  if (counter % 2 !== 0) {
    counter++;
    return clickedCell.innerHTML = 'O';
  } else {
    counter++;
    return clickedCell.innerHTML = 'X';
  }
}

