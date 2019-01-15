/*Menu options include: stat, inv, log, map, radio*/
var prevNavigation = "";
var navigation = "stat";
var x = 0;
var y = 0;
var z = 0;

var xLabel = document.getElementById("xLabel");
var yLabel = document.getElementById("yLabel");
var zLabel = document.getElementById("zLabel");


function changeX(value){
	x += value;
	xLabel.innerHTML = "X: "+x;
}
function changeY(value){
	y += value;
	yLabel.innerHTML = "Y: "+y;
}
function changeZ(value){
	z += value;
	zLabel.innerHTML = "Z: "+z;
}
function changeNav(nav){
	navigation = nav;
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
