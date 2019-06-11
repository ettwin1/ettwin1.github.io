//These are coordinates currently at, not coordinates being displayed in map
var X = 0;
var Y = 0;
var Z = 0;
//Creating inventory array that has the same number of indexes as the object array, and returns true or false to whether the object is in the inventory
var objectIsInInventory = [];
for (var i=0; i<object.length; i++){
	objectIsInInventory[i] = false;
}
objectIsInInventory[0] = true;
//Creating a similar array as the inventory one, but determines if an objects has been used or not
var objectIsUsed = [];
for (var i=0; i<object.length; i++){
	objectIsUsed[i] = false;
}
var logText = document.getElementById("log_text");
logText.innerHTML=mapLocation[0][0][0].defaultText;
/*
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
*/
function travel(){
	X = x;
	Y = y;
	Z = z;

	if (mapLocation[X][Y][Z].defaultText){
		logText.innerHTML=mapLocation[X][Y][Z].defaultText;
	}
	/*if (Y==0){
		if (X==0){
			if (Z==0){
				logText.innerHTML=location000.defaultText;
			}else if (Z==1){
				logText.innerHTML=location001.defaultText
			}
		}else{
			logText.src = "";
		}
	}else{
		logText.src = "";
	}*/
	changeNav('log');
}


function dontHaveObject(){
	logText.innerHTML += "<p>You don't have the required object here</p>";
}

function displayDescription(objectIndex){
	logText.innerHTML += object[objectIndex].description;
	changeNav('log');
}

