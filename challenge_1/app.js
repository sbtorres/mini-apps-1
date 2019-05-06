var onTileClick = (event) => {
  var clickedCell = document.getElementById(event.target.id)
  if (clickedCell.innerHTML) {
    return clickedCell.innerHTML = '';
  } else {
    return clickedCell.innerHTML = 'X';
  }
}

