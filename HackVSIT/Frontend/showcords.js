function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coor = 'X coords: ' + x + ', Y coords: ' + y;
  document.getElementById('demo').innerHTML = coor;
}

function clearCoor() {
  document.getElementById('demo').innerHTML = '';
}
