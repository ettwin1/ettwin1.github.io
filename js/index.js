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






/*Radio*/
var songs = [];
var playedSongs = [];
var rando = 0;
var selectedRadio = ""; //options include: 'newVegas'

function newVegasRadio(){
	selectedRadio = "newVegas";
	for (var i=0; i<songs.length; i++){
		songs[i].currentTime = 0;
		songs[i].pause();
	}
	songs =	[
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
	
	document.getElementById("newVegas10"),
	document.getElementById("newVegas11"),
	document.getElementById("newVegas12"),
	document.getElementById("newVegas13"),
	document.getElementById("newVegas14"),
	document.getElementById("newVegas15"),
	document.getElementById("newVegas16"),
	document.getElementById("newVegas17"),
	document.getElementById("newVegas18"),
	document.getElementById("newVegas19"),
	
	document.getElementById("newVegas20"),
	document.getElementById("newVegas21"),
	document.getElementById("newVegas22"),
	document.getElementById("newVegas23"),
	document.getElementById("newVegas24"),
	document.getElementById("newVegas25"),
	document.getElementById("newVegas26"),
	document.getElementById("newVegas27"),
	document.getElementById("newVegas28"),
	document.getElementById("newVegas29"),
	
	document.getElementById("newVegas30"),
	document.getElementById("newVegas31"),
	document.getElementById("newVegas32"),
	document.getElementById("newVegas33"),
	document.getElementById("newVegas34"),
	document.getElementById("newVegas35"),
	document.getElementById("newVegas36"),
	document.getElementById("newVegas37"),
	document.getElementById("newVegas38"),
	document.getElementById("newVegas39"),
	
	document.getElementById("newVegas40"),
	document.getElementById("newVegas41"),
	document.getElementById("newVegas42"),
	document.getElementById("newVegas43"),
	document.getElementById("newVegas44")
	];
	playedSongs = [];
	rando = Math.round(Math.random()*songs.length);
	songs[rando].play();
	playedSongs[rando] = songs[rando];
}
function fallout4Radio(){
	selectedRadio = "fallout4";
	for (var i=0; i<songs.length; i++){
		songs[i].currentTime = 0;
		songs[i].pause();
	}
	songs =	[
	document.getElementById("fallout40"),
	document.getElementById("fallout41"),
	document.getElementById("fallout42"),
	document.getElementById("fallout43"),
	document.getElementById("fallout44"),
	document.getElementById("fallout45"),
	document.getElementById("fallout46"),
	document.getElementById("fallout47"),
	document.getElementById("fallout48"),
	document.getElementById("fallout49"),
	
	document.getElementById("fallout410"),
	document.getElementById("fallout411"),
	document.getElementById("fallout412"),
	document.getElementById("fallout413"),
	document.getElementById("fallout414"),
	document.getElementById("fallout415"),
	document.getElementById("fallout416"),
	document.getElementById("fallout417"),
	document.getElementById("fallout418"),
	document.getElementById("fallout419"),
	
	document.getElementById("fallout420"),
	document.getElementById("fallout421"),
	document.getElementById("fallout422"),
	document.getElementById("fallout423"),
	document.getElementById("fallout424"),
	document.getElementById("fallout425"),
	document.getElementById("fallout426"),
	document.getElementById("fallout427"),
	document.getElementById("fallout428"),
	document.getElementById("fallout429"),
	
	document.getElementById("fallout430"),
	document.getElementById("fallout431"),
	document.getElementById("fallout432"),
	document.getElementById("fallout433"),
	document.getElementById("fallout434"),
	document.getElementById("fallout435")
	];
	playedSongs = [];
	rando = Math.round(Math.random()*songs.length);
	songs[rando].play();
	playedSongs[rando] = songs[rando];
}
function nextSong(){
	var songsLeft = songs.length;
	for (var i=0; i<playedSongs.length; i++){
		if (playedSongs[i] != null || playedSongs[i] != ""){
			songsLeft -= 1;
		}
	}
	
	rando = Math.round(Math.random()*songs.length);
	if (songsLeft != 0){
		while (songs[rando] == playedSongs[rando]){
			rando = Math.round(Math.random()*songs.length);
		}
		songs[rando].play();
		playedSongs[rando] = songs[rando];
	}else{
		newVegasRadio();
	}
}
function skipSong(){
	for (var i=0; i<songs.length; i++){
		songs[i].currentTime = 0;
		songs[i].pause();
	}
	nextSong();
}
function stopRadio(){
	selectedRadio = "";
	for (var i=0; i<songs.length; i++){
		songs[i].currentTime = 0;
		songs[i].pause();
	}
}
for (var i=0; i<45; i++){
	document.getElementById("newVegas"+i).onended = function(){nextSong();}
}
for (var i=0; i<36; i++){
	document.getElementById("fallout4"+i).onended = function(){nextSong();}
}





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
	$("#newVegasSkip").hide();
	$("#newVegasStop").hide();
	$("#fallout4Skip").hide();
	$("#fallout4Stop").hide();
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
	
	$(".button1").click(function(){
		if (selectedRadio == "newVegas"){
			$("#newVegasSkip").show();
			$("#newVegasStop").show();
			$("#fallout4Skip").hide();
			$("#fallout4Stop").hide();
		}else if (selectedRadio == "fallout4"){
			$("#newVegasSkip").hide();
			$("#newVegasStop").hide();
			$("#fallout4Skip").show();
			$("#fallout4Stop").show();
		}
	});
	$("#newVegasStop").click(function(){
		$("#newVegasSkip").hide();
		$("#newVegasStop").hide();
		$("#fallout4Skip").hide();
		$("#fallout4Stop").hide();
	});
	$("#fallout4Stop").click(function(){
		$("#newVegasSkip").hide();
		$("#newVegasStop").hide();
		$("#fallout4Skip").hide();
		$("#fallout4Stop").hide();
	});
});
