/*Sounds*/
var snd_click = document.getElementById("snd_click");
var snd_click2 = document.getElementById("snd_click2");

/*Menu options include: stat, inv, log, map, radio*/
var prevNavigation = "";
var navigation = "stat";
document.getElementById("stat").style.textShadow = '-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray';
var x = 0;
var y = 0;
var z = 0;

var xLabel = document.getElementById("xLabel");
var yLabel = document.getElementById("yLabel");
var zLabel = document.getElementById("zLabel");


/*Radio*/
var songs = [
	document.getElementById("newVegas0"),
	document.getElementById("newVegas1"),
	document.getElementById("newVegas2"),
	document.getElementById("newVegas3"),
	document.getElementById("newVegas4"),
	document.getElementById("newVegas5"),
	document.getElementById("newVegas6"),
	document.getElementById("newVegas7"),
	document.getElementById("newVegas8"),
	document.getElementById("newVegas9"),
];
var playedSongs = [];
var rando = 0;



function changeX(value){
	x += value;
	xLabel.innerHTML = "X: "+x;
	snd_click2.play();
}
function changeY(value){
	y += value;
	yLabel.innerHTML = "Y: "+y;
	snd_click2.play();
}
function changeZ(value){
	z += value;
	zLabel.innerHTML = "Z: "+z;
	snd_click2.play();
}
function changeNav(nav){
	navigation = nav;
	snd_click.play();
	
	var navs = ['stat', 'inv', 'log', 'map', 'radio'];
	for (var i=0; i<navs.length; i++){
		if (navs[i] == navigation){
				document.getElementById(navs[i]).style.textShadow = '-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray';
		}else{
				document.getElementById(navs[i]).style.textShadow = 'none';
		}
	}
	
}
function newVegasRadio(){
	for (var i=0; i<songs.length; i++){
		songs[i].currentTime = 0;
		songs[i].pause();
	}
	playedSongs = [];
	rando = Math.round(Math.random()*songs.length);
	songs[rando].play();
	playedSongs[rando] = songs[rando];
}
function songEnded(){
	rando = Math.round(Math.random()*10);
	var songsLeft = songs.length;
	for (var i=0; i<songs.length; i++){
		if (songs[i] != null || songs[i] != ""){
			playedSongs -= 1;
		}
	}
	if (songsLeft != 0){
		while (songs[rando] == playedSongs[rando]){
			rando = Math.round(Math.random()*10);
		}
		songs[rando].play();
		playedSongs[rando] = songs[rando];
	}else{
		newVegasRadio();
	}
}
songs[0].onended = function(){songEnded();}
songs[1].onended = function(){songEnded();}
songs[2].onended = function(){songEnded();}
songs[3].onended = function(){songEnded();}
songs[4].onended = function(){songEnded();}
songs[5].onended = function(){songEnded();}
songs[6].onended = function(){songEnded();}
songs[7].onended = function(){songEnded();}
songs[8].onended = function(){songEnded();}
songs[9].onended = function(){songEnded();}

function updateClock(){
	var d = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var dateLabel = document.getElementById("dateLabel");
	var month = months[d.getMonth()];
	var day = d.getDate();
	var hours = d.getHours();
	/*The ? and : symbols used below comprise the ternary operator. This is a special operator that returns the value before the colon if the condition before the query (?) is true, or the value after the colon if the condition is false. It's a great way to write an if block in shorthand, provided you only need to return a single value.*/
	hours = (hours > 12) ? hours-12 : hours;
	var minutes = (d.getMinutes() < 10) ? "0"+d.getMinutes() : d.getMinutes();
	dateLabel.innerHTML = month + " " + day + ", " + hours  + ":" + minutes;
}
//updateClock();
//setInterval('updateClock()', 1000 );



//JQuery
$(document).ready(function(){
	$("#main_stat").show();
	$("#main_inv").hide();
	$("#main_log").hide();
	$("#main_map").hide();
	$("#main_radio").hide();
  $("#stat").click(function(){
	$("#main_stat").show();
	$("#main_inv").hide();
	$("#main_log").hide();
	$("#main_map").hide();
	$("#main_radio").hide();
  });
  $("#inv").click(function(){
	$("#main_stat").hide();
	$("#main_inv").show();
	$("#main_log").hide();
	$("#main_map").hide();
	$("#main_radio").hide();
  });
  $("#log").click(function(){
	$("#main_stat").hide();
	$("#main_inv").hide();
	$("#main_log").show();
	$("#main_map").hide();
	$("#main_radio").hide();
  });
  $("#map").click(function(){
	$("#main_stat").hide();
	$("#main_inv").hide();
	$("#main_log").hide();
	$("#main_map").show();
	$("#main_radio").hide();
  });
  $("#radio").click(function(){
	$("#main_stat").hide();
	$("#main_inv").hide();
	$("#main_log").hide();
	$("#main_map").hide();
	$("#main_radio").show();
  });
});
