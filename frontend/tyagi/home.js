  var xcord, ycord;
  var p;
  var jsnobj = [];
  var cobj;
  var cords;
  var j,k;
  j = 0;
  k = 0;
  var shwdata = document.getElementById("showdata");
  var cpid = document.getElementById("cpid");
  function cposition(event){
    ycord = event.clientY;
    xcord = event.clientX;
    p = {
        pname: 'p'+j,
        xx: xcord,
        yy: ycord
      };
      cords = JSON.stringify(p);
      jsnobj[j] = cords;
      //localStorage.setItem("savedcord", cords);
      cpid.innerHTML += jsnobj[j];
    j++;
}


function shwcords(){
  shwdata.innerHTML = jsnobj[1];

  /*
  for (k in jsnobj){
    cobj += jsnobj[k];
  }
  var svcrd = {
    cordinates: cobj
  }
  var t = JSON.stringify(svcrd);
  shwdata.innerHTML = svcrd.cordinates.pname;
  console.log(t);
  */

}

$(document).ready(function() {
   $.getJSON('savedcord.json', function(jd){
     for ( i in jd ){
     $('#jsoncord').append('<p>' + jd[i].pname + ' X: ' + jd[i].x+ ' Y: ' + jd[i].y+ '</p>');
   }
   });
});


  /*
  //disable zoom
  document.body.addEventListener("wheel", e=>{
    if(e.ctrlKey)
    event.preventDefault();//prevent zoom
  });

// map zoom in and zoom out
$(document).ready(function(){
  $(window).resize(function(){
    var ww = $(window).height();
    console.log(ww);
    if(ww>=600){
      document.body.addEventListener("wheel", e=>{
        if(e.ctrlKey)
        event.preventDefault();//prevent zoom
      });
    }
      $("#mapbdimgid").show("scale",{percent:200});
    console.log("body resize");
  });
});
*/
