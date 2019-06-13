//These are coordinates currently at, not coordinates being displayed in map
var X = 0;
var Y = 0;
var Z = 0;

//Creating inventory array that has the same number of indexes as the object array, and returns true or false to whether the object is in the inventory
var objectIsInInventory = [];
for (var i=0; i<object.length; i++){
	objectIsInInventory[i] = false;
}
objectIsInInventory[1] = true;
//Creating a similar array as the inventory one, but determines if an objects has been used or not
var objectIsUsed = [];
for (var i=0; i<object.length; i++){
	objectIsUsed[i] = false;
}


var logText = document.getElementById("log_text");
logText.innerHTML=mapLocation[0][0][0].defaultText;

function travel(){
	if (mapLocation[X][Y][Z].defaultText){
		X = x;
		Y = y;
		Z = z;
		logText.innerHTML=mapLocation[X][Y][Z].defaultText;
		changeNav('log');
	}else{
		alert("Error traveling to location: (X:"+X+", Y:"+Y+", Z:"+Z+")");
	}
}

/*
function dontHaveObject(){
	logText.innerHTML += "<p>You don't have the required object here</p>";
}*/

//Object Functions

function displayDescription(objectIndex){
	logText.innerHTML += object[objectIndex].description;
	changeNav('log');
}

function equipObject(objectIndex){
	if (object[objectIndex].equipmentSlot == 'head'){
		if (equipment[0] == -1){
			equipment[0] = objectIndex;
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+".</p>";
			document.getElementById("headText").innerHTML = "<p>"+object[objectIndex].name+"</p>";
		}else{
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" and unequipped "+object[equipment[0]].name+".</p>";
			equipment[0] = objectIndex;
			document.getElementById("headText").innerHTML = "<p>"+object[objectIndex].name+"</p>";
		}
	}else if (object[objectIndex].equipmentSlot == 'hand'){
		if (equipment[1] == -1){
			equipment[1] = objectIndex;
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" in right hand.</p>";
			document.getElementById("leftText").innerHTML = "<p>"+object[objectIndex].name+"</p>";
		}else if (equipment[2] == -1){
			equipment[2] = objectIndex;
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" in left hand.</p>";
			document.getElementById("rightText").innerHTML = "<p>"+object[objectIndex].name+"</p>";
		}else{
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" and unequipped "+object[equipment[2]].name+".</p>";
			equipment[2] = objectIndex;
			document.getElementById("rightText").innerHTML = "<p>"+object[objectIndex].name+"</p>";
		}
	}else if (object[objectIndex].equipmentSlot == 'body'){
		if (equipment[3] == -1){
			equipment[3] = objectIndex;
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+".</p>";
			document.getElementById("bodyText").innerHTML = "<p>"+object[objectIndex].name+"</p>";
		}else{
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" and unequipped "+object[equipment[3]].name+".</p>";
			equipment[3] = objectIndex;
			document.getElementById("bodyText").innerHTML = "<p>"+object[objectIndex].name+"</p>";
		}
	}else if (object[objectIndex].equipmentSlot == 'feet'){
		if (equipment[4] == -1){
			equipment[4] = objectIndex;
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+".</p>";
			document.getElementById("feetText").innerHTML = "<p>"+object[objectIndex].name+"</p>";
		}else{
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" and unequipped "+object[equipment[4]].name+".</p>";
			equipment[4] = objectIndex;
			document.getElementById("feetText").innerHTML = "<p>"+object[objectIndex].name+"</p>";
		}
	}else{
		alert("Object "+object[objectIndex].name+" somehow called the equipObject() function when it shouldn't have");
	}
	changeNav('log');
}

function unequipObject(objectIndex){
	var a = equipment.indexOf(objectIndex);
	if (a != -1){
		logText.innerHTML += "<p>Unequipped "+object[objectIndex].name+".</p>";
		equipment[a] = -1;
		if (object[objectIndex].equipmentSlot != "hand"){
			document.getElementById(object[objectIndex].equipmentSlot+"Text").innerHTML = "<p>*unequipped*</p>";
		}else if (object[objectIndex].equipmentSlot == "hand"){
			if (a == 1){
				document.getElementById("leftText").innerHTML = "<p>*unequipped*</p>";
			}else if (a == 2){
				document.getElementById("rightText").innerHTML = "<p>*unequipped*</p>";
			}
		}
	}else{
		alert("Somehow, object "+object[objectIndex].name+" was able to call unequipObject() when the object wasn't equipped");
	}
	changeNav('log');
}