//These are coordinates currently at, not coordinates being displayed in map
var X = 2;
var Y = 0;
var Z = 2;

//Creating inventory array that has the same number of indexes as the object array, and returns true or false to whether the object is in the inventory
var objectIsInInventory = [];
for (var i=0; i<object.length; i++){
	objectIsInInventory[i] = false;
}
objectIsInInventory[0] = true;
objectIsInInventory[1] = true;
//Creating a similar array as the inventory one, but determines if an objects has been used or not
var objectIsUsed = [];
for (var i=0; i<object.length; i++){
	objectIsUsed[i] = false;
}


//Travelling and Log functions
var logText = document.getElementById("log_text");
logText.innerHTML="<p>You wake up in an open grassy field. You see a wacky machine in front of you, which you don't remember anything about, except that you need a 128 GB storage module, 35 pounds of gold, and a radiation-proof suit in order to fix it.</p>";

function travel(){
	X = x;
	Y = y;
	Z = z;
	if (x==4 && y==0 && z==2){
		var rando = Math.floor(Math.random()*10);
		if (rando < 4){
			logText.innerHTML = mapLocation[X][Y][Z].defaultText3;
			mapLocation[X][Y][Z].gofer = "small";
		}else if (rando >= 4 && rando < 7){
			logText.innerHTML = mapLocation[X][Y][Z].defaultText2;
			mapLocation[X][Y][Z].gofer = "medium";
		}else{
			logText.innerHTML = mapLocation[X][Y][Z].defaultText1;
			mapLocation[X][Y][Z].gofer = "large";
		}
	}else{
		logText.innerHTML=mapLocation[X][Y][Z].defaultText;
	}
	changeNav('log');
}


//Object Functions

function displayDescription(objectIndex){
	logText.innerHTML += object[objectIndex].description;
	changeNav('log');
}

function recalcuateCombatPower(){ //Goes through everything equipped and adds combat power
	combatPower = 0;
	for (var i=0; i<5; i++){
		if (equipment[i] != -1){
			combatPower += object[equipment[i]].combatBonus;
		}
	}
	document.getElementById("combatPowerText").innerHTML = "<p>Combat Power: "+combatPower+"</p>"; //refreshing combat power html text
}

function equipObject(objectIndex){
	if (object[objectIndex].equipmentSlot == 'head'){
		if (equipment[0] == -1){
			equipment[0] = objectIndex;
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+".</p>";
			document.getElementById("headText").innerHTML = "<p>"+object[objectIndex].name+" +"+object[objectIndex].combatBonus+"</p>";
		}else{
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" and unequipped "+object[equipment[0]].name+".</p>";
			equipment[0] = objectIndex;
			document.getElementById("headText").innerHTML = "<p>"+object[objectIndex].name+" +"+object[objectIndex].combatBonus+"</p>";
		}
	}else if (object[objectIndex].equipmentSlot == 'hand'){
		if (equipment[1] == -1){
			equipment[1] = objectIndex;
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" in right hand.</p>";
			document.getElementById("leftText").innerHTML = "<p>"+object[objectIndex].name+" +"+object[objectIndex].combatBonus+"</p>";
		}else if (equipment[2] == -1){
			equipment[2] = objectIndex;
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" in left hand.</p>";
			document.getElementById("rightText").innerHTML = "<p>"+object[objectIndex].name+" +"+object[objectIndex].combatBonus+"</p>";
		}else{ //If both hands are equipped, replace the worse weapon
			if (object[equipment[1]].combatBonus > object[equipment[2]].combatBonus){
				logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" and unequipped "+object[equipment[2]].name+".</p>";
				equipment[2] = objectIndex;
				document.getElementById("rightText").innerHTML = "<p>"+object[objectIndex].name+" +"+object[objectIndex].combatBonus+"</p>";
			}else if (object[equipment[1]].combatBonus < object[equipment[2]].combatBonus){
				logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" and unequipped "+object[equipment[1]].name+".</p>";
				equipment[1] = objectIndex;
				document.getElementById("leftText").innerHTML = "<p>"+object[objectIndex].name+" +"+object[objectIndex].combatBonus+"</p>";
			}else{
				logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" and unequipped "+object[equipment[2]].name+".</p>";
				equipment[2] = objectIndex;
				document.getElementById("rightText").innerHTML = "<p>"+object[objectIndex].name+" +"+object[objectIndex].combatBonus+"</p>";
			}
		}
	}else if (object[objectIndex].equipmentSlot == 'body'){
		if (equipment[3] == -1){
			equipment[3] = objectIndex;
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+".</p>";
			document.getElementById("bodyText").innerHTML = "<p>"+object[objectIndex].name+" +"+object[objectIndex].combatBonus+"</p>";
		}else{
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" and unequipped "+object[equipment[3]].name+".</p>";
			equipment[3] = objectIndex;
			document.getElementById("bodyText").innerHTML = "<p>"+object[objectIndex].name+" +"+object[objectIndex].combatBonus+"</p>";
		}
	}else if (object[objectIndex].equipmentSlot == 'feet'){
		if (equipment[4] == -1){
			equipment[4] = objectIndex;
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+".</p>";
			document.getElementById("feetText").innerHTML = "<p>"+object[objectIndex].name+" +"+object[objectIndex].combatBonus+"</p>";
		}else{
			logText.innerHTML += "<p>Equipped "+object[objectIndex].name+" and unequipped "+object[equipment[4]].name+".</p>";
			equipment[4] = objectIndex;
			document.getElementById("feetText").innerHTML = "<p>"+object[objectIndex].name+" +"+object[objectIndex].combatBonus+"</p>";
		}
	}else{
		alert("Object "+object[objectIndex].name+" somehow called the equipObject() function when it shouldn't have");
	}
	changeNav('log');
	recalcuateCombatPower();
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
	recalcuateCombatPower();
}



//Location functions

function gossip(location){ //adds random dialogue based on your location
	
	if (location == "armor"){
		var gossipList = [
			"<p>\"If you're lookin' for some caps, I heard there's some gofers that like to steal money. Maybe you can steal it back from them. They live northeast of here.\"</p>"
		];
		var rando = Math.floor(Math.random()*gossipList.length); //returns random index from gossipList
		logText.innerHTML += gossipList[rando];	
	}else if (location == "restaurant"){
		var gossipList = [
			"<p>\"Okay, so there are these pesky gofers that steal caps from people! Maybe you can help by killing them for us. They live northeast of here.\"</p>"
		];
		var rando = Math.floor(Math.random()*gossipList.length); //returns random index from gossipList
		logText.innerHTML += gossipList[rando];	
	}
}

function removeRandomObject(){ //returns a random object id that can be removed, or -1 if there's none
	var removableObjects = [];
	for (var i=0; i<objectIsInInventory.length; i++){
		if (objectIsInInventory[i] == true){
			if (object[i].necessary == false){
				removableObjects.push(i);
			}
		}
	}
	if (removableObjects[0] == null){
		return(-1);
	}else{
		var rando = Math.floor(Math.random()*removableObjects.length);
		return(removableObjects[rando]);
	}
}

function describe(place){
	if (place == "library"){
		logText.innerHTML += "<p>The library is covered in vines and smells of rotting books.</p>";
	}else if (place == "sewage"){
		logText.innerHTML += "<p>Down the metal sewage grate you see some climbing gear. Unfortunately you can't reach it. Perhaps you could get it if you found a way into the sewers...</p>";
	}else if (place == "supermutant"){
		logText.innerHTML += "<p>The Super Mutant looks like a human, except much taller, much stronger, and has yellowish-greenish skin.</p>";
	}
}