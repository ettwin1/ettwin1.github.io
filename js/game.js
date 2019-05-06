//These are coordinates currently at, not coordinates being displayed
var X = 0;
var Y = 0;
var Z = 0;
var log = "";
var map = [ //[y,x,z,component]
			[
				[[0],[0],[0],[0],[0]],
				[[0],[0],[0],[0],[0]],
				[[0],[0],[0],[0],[0]],
				[[0],[0],[0],[0],[0]],
				[[0],[0],[0],[0],[0]],
			],
			[],
			[],
			[],
			[]
		];

function travel(){
	X = x;
	Y = y;
	Z = z;
	log = "";
	var logText = document.getElementById("frame");
	
	if (Y==0){
		if (X==0){
			if (Z==0){
				logText.src = "locations/location01.html";
			}else if (Z==1){
				logText.src = "locations/location02.html";
			}
		}else{
			logText.src = "";
		}
	}else{
		logText.src = "";
	}
	changeNav('log');
	$("#main_map").hide();
	$("#main_log").show();
}


function dontHaveObject() {
	log += "<p>You don't have the required object here</p>";;
	document.getElementById('adventure_log').innerHTML = log;
}
