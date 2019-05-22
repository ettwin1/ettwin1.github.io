//These are coordinates currently at, not coordinates being displayed
var X = 0;
var Y = 0;
var Z = 0;
var logText = document.getElementById("log_text");
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
	if (Y==0){
		if (X==0){
			if (Z==0){
				logText.innerHTML=location000.text;
			}else if (Z==1){
				logText.innerHTML=location001.text
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


function dontHaveObject(){
	logText.innerHTML += "<p>You don't have the required object here</p>";
}
