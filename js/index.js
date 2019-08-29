'use strict'
/*Sounds*/
var snd_click = document.getElementById("snd_click");
var snd_click2 = document.getElementById("snd_click2");
var snd_collect = document.getElementById("snd_collect");

/*Menu options include: stat, inv, log, map, radio*/
var navigation = "stat";
document.getElementById("stat").style.textShadow = '-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray';
var x = 2;
var y = 0;
var z = 2;

var xLabel = document.getElementById("xLabel");
var yLabel = document.getElementById("yLabel");
var zLabel = document.getElementById("zLabel");

var combatPower = 0; //how powerful the player is at combat


//Stat
/*
	equipment[0] = head = index of object being equipped (-1 for none)
	equipment[1] = left hand
	equipment[2] = right hand
	equipment[3] = body
	equipment[4] = feet
*/
var equipment = [-1,-1,-1,-1,-1];


//Inventory
var inv_list = document.getElementById("inv_list");
function loadInventory(){ //when called, it places all the links of objects in the inventory
	inv_list.innerHTML = "";
	for (var i=0; i<objectIsInInventory.length; i++){
		if (objectIsInInventory[i] == true){
			inv_list.innerHTML += "<li><a id='"+object[i].name+"' href='#' onclick='showObjectPopup("+i+")'>"+object[i].name+"</a></li>";
		}
	}
}
function showObjectPopup(objectIndex){ //when called, it creates the popup menu for the specified object
	if (!document.getElementById("popup")){
		var popupElement = document.createElement("div");
		popupElement.id = "popup";
		popupElement.innerHTML += "<h4 style='margin:4px'>"+object[objectIndex].name+"</h4>";
		popupElement.innerHTML += (object[objectIndex].equipmentSlot!="") ? ((equipment.lastIndexOf(objectIndex) != -1)?"<p style='margin:4px'><a href='#' onclick='unequipObject("+objectIndex+")'>Unequip</a></p>" : "<p style='margin:4px'><a href='#' onclick='equipObject("+objectIndex+")'>Equip</a></p>") : "";
		popupElement.innerHTML += object[objectIndex].popupText;
		popupElement.innerHTML += "<p style='margin:4px'>[<a href='#' onclick='showObjectPopup()'>X</a>]</p>";
		inv_list.appendChild(popupElement);
	}else{
		inv_list.removeChild(document.getElementById("popup"));
	}
}


//Navigation
function changeX(value){
	if ((x+value) < 5 && (x+value) > -1){
		x += value;
		xLabel.innerHTML = "X: "+x;
		snd_click2.play();
	}
}
function changeY(value){
	y += value;
	yLabel.innerHTML = "Y: "+y;
	snd_click2.play();
}
function changeZ(value){
	if ((z+value) < 5 && (z+value) > -1){
		z += value;
		zLabel.innerHTML = "Z: "+z;
		snd_click2.play();
	}
}
function changeNav(nav){
	navigation = nav;
	snd_click.play();
	
	var navs = ['stat', 'inv', 'log', 'map', 'radio'];
	for (var i=0; i<navs.length; i++){
		if (navs[i] == navigation){
			document.getElementById(navs[i]).style.textShadow = '-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray';
			$("#main_"+navs[i]).show();
		}else{
			document.getElementById(navs[i]).style.textShadow = 'none';
			$("#main_"+navs[i]).hide();
		}
	}
	//Displaying Inventory
	if (nav == 'inv'){loadInventory();}
}





/*Radio*/
var songNames = []; //array of song names (the playlist)
var playedSongs = []; //array of already played songs
var rando = 0; //The random index of which song to play
var selectedRadio = ""; //the playlist selected, options include: "newVegas", "fallout4"
var source = document.getElementById("radioSource"); //the <source> tag
var audio = document.getElementById("radioAudio"); //the <audio> tag

function playSong(index){ //plays a song at a certain index, and adds it to the playedSongs array
	if (selectedRadio == "newVegas") {source.src = "music/NewVegas/"+songNames[index]+".mp3";}
	else if (selectedRadio == "fallout4") {source.src = "music/fallout4/"+songNames[index]+".mp3";}
	audio.load();
	audio.play();
	playedSongs[index] = songNames[index];
}

function randomize(){ //randomizes the rando variable
	rando = Math.round(Math.random()*songNames.length);
}

function newVegasRadio(){ //called when button is clicked, initializes New Vegas playlist and plays a song
	selectedRadio = "newVegas";

	songNames = ["Aint_that_a_kick_in_the_head", "American_Swing", "Big_Iron", "Blues_for_you", "Cobwebs_and_Rainbows", "Concerto_For_2_VI_Str_In_D_Minor", 
	"Concerto_Gross_In_B_Minor_Allegro_1", "Concerto_In_B_Minor_Allegro_2", "Flower_Duet", "Four_Seasons_4_The_Winter", "Goin_Under", "Hallo_Mister_X", 
	"Happy_Times", "Heartaches_by_the_Numbers", "Home_On_The_Wastes", "Im_Moving_Out", "Im_So_Blue", "In_The_Shadow_Of_The_Valley", "Its_A_Sin", 
	"Its_A_Sin_To_Tell_A_Lie", "Jazz_Blues", "Jazz_Club_Blues", "Jingle_Jangle_Jingle", "Joe_Cool", "Johnny_Guitar", "Lets_Ride_Into_The_Sunset_Together", 
	"Lone_Star", "Love_Me_As_Though_No_Tomorrow", "Mad_About_The_Boy", "New_Vegas_Valley", "Piano_Corcert_No_21_Elvira_Madigan", "Ride_Of_The_Valkyries",
	"Roundhouse_Rock", "Sit_And_Dream", "Sleepy_Town_Blues", "Slow_Bounce", "Slow_Sax", "Something_Gotta_Give", "Spring_Song", "Stars_Of_The_Midnight_Ranger",
	"Strahlende_Tropete", "Streets_Of_New_Reno", "Von_Spanien_Nach_S_Damerika", "Where_Have_You_Been_All_My_Life", "Why_Dont_You_Do_Right"];
	
	playedSongs = [];
	randomize();
	playSong(rando);
}

function fallout4Radio(){ //called when button is clicked, initializes Fallout 4 playlist and plays a song
	selectedRadio = "fallout4";
	songNames = ["A_Wonderful_Guy", "Ac-Cent-Tchu-Ate_the_Positive", "Anything_Goes", "Atom Bomb Baby", "Butcher_Pete_part1", "Butcher_Pete_part2", 
	"Civilization", "Crawl_Out_Through_the_Fallout", "Crazy_He_Calls_Me", "Dear_Hearts_And_Gentle_People", "Easy_Living", "Good_Rockin_Tonight", 
	"Grandma_Plays_the_Numbers", "Happy_Times", "Hes_A_Demon,_Hes_A_Devil,_Hes_A_Doll", "I_Dont_Want_to_Set_the_World_on_Fire", 
	"Into_Each_Life_Some_Rain_Must_Fall", "Its_a_Man", "Its_All_Over_But_the_Crying", "Keep_a_Knockin", "Maybe", "Mighty,_Mighty_Man", 
	"One_More_Tomorrow", "Orange_Colored_Sky", "Personality", "Pistol_Packin_Mama", "Right_Behind_You_Baby", "Rocket_69", "Sixty_Minute_Man", 
	"The_End_of_the_World", "The_Wanderer", "Undecided", "Uranium_Fever", "Uranium_Rock", "Way_Back_Home", "Whole_Lotta_Shakin_Goin_On"];
	
	playedSongs = [];
	randomize();
	playSong(rando);
}

function nextSong(){ //Plays a random song from the playlist that hasn't been played before
	var songsLeft = songNames.length;
	for (var i=0; i<playedSongs.length; i++){ //determines amount of songs left in playlist
		if (playedSongs[i] != null || playedSongs[i] != ""){
			songsLeft -= 1;
		}
	}
	if (songsLeft > 0){ //if there are songs left, play a random song
		randomize();
		while (songNames[rando] == playedSongs[rando]){
			randomize();
		}
		playSong(rando);
	}else{ //if there are no songs left, loop the playlist
		if (selectedRadio=="newVegas"){newVegasRadio();}
		else if (selectedRadio=="fallout4"){fallout4Radio();}
	}
}

function stopRadio(){ //stops playing the music
	selectedRadio = "";
	audio.currentTime = 0;
	audio.pause();
}

audio.onended = function(){nextSong();} //when the current song ends, play the next song




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
