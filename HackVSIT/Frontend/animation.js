//Script for movement from point 1 to point 2

$(document).ready(function() {
  /*Variable that will be used in animate part declared here to make efficent use of memory*/
  var start;
  var source;
  var left;
  var top;

  var arr = graph.getPath(graph.optimalPath);
  var sp = graph.getPath(graph.minValuePath);

  var d1, s1, e1, l1, t1;
  s1 = sp[0];
  d1 = s1[0];
  e1 = data[d1];
  l1 = e1[0];
  t1 = e1[1];

  var d, s, e, l, t;
  s = arr[0];
  d = s[0];
  e = data[d];
  l = e[0];
  t = e[1];

  $('img').css('left', `${l}`);
  $('img').css('top', `${t}`);

  /*For showing shortest path*/

  sp.forEach(element => {
    if (element[0] > element[1]) {
      $(`#line${element[1]}${element[0]}`).css('background-color', 'green');
    } else {
      $(`#line${element[0]}${element[1]}`).css('background-color', 'green');
    }
  });

  arr.forEach(element => {
    if (element[0] > element[1]) {
      $(`#line${element[1]}${element[0]}`).css('background-color', 'red');
    } else {
      $(`#line${element[0]}${element[1]}`).css('background-color', 'red');
    }
  });
  /*a = 16;
  $('#line' + a).css('background-color', 'yellow');
*/
  $('#button12').click(function() {
    arr.forEach(element => {
      start = data[element[0]];
      source = data[element[1]];
      left = source[0] - start[0];
      top = source[1] - start[1];

      $('img').animate({ left: `+=${left}`, top: `+=${top}` }, 2000);
    });
  });
});
