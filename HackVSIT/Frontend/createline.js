function createLine(p1, p2, lineId) {
  /// Getting the Elements
  var ele1 = document.getElementById(p1);
  rec1 = ele1.getBoundingClientRect();

  var ele2 = document.getElementById(p2);
  rec2 = ele2.getBoundingClientRect();

  /*  Getting the x and y cordinates respectively*/
  x1 = rec1.x;
  x2 = rec2.x;
  y1 = rec1.y;
  y2 = rec2.y;

  /// the distance between the tow points(for the line div width)

  distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

  // the mid-point between the two points, we use it as rotation center
  xMid = (x1 + x2) / 2;
  yMid = (y1 + y2) / 2;

  // get the salope of the line between two points

  salopeInRadian = Math.atan2(y1 - y2, x1 - x2);
  salopeInDegrees = (salopeInRadian * 180) / Math.PI;

  // change the css of the line

  liner = document.getElementById(lineId);
  liner.style.width = distance;
  liner.style.top = yMid;
  liner.style.left = xMid - distance / 2;
  liner.style.transform = 'rotate(' + salopeInDegrees + 'deg)';
}
