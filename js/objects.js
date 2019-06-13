var object = []; //No variables in these objects are supposed to change during the game

//Found at x:0 y:0 z:1
object[0] = {
    name : "Banana",
    equipmentSlot : "",
    x : 0, //found at this x
    y : 0, //found at this y
    z : 1, //found at this z

    popupText : "<p style='margin:3px'><a href='#' onclick='object[0].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:3px'><a href='#' onclick='displayDescription(0)'>Examine</a></p>",
    description : "<p>The banana is yellow, ripe, and looks like a smile.</p>",
    
    useObject : function(x,y,z){
        if (y == 0 && x == 0 && z == 1 && mapLocation[0][0][1].atTower == true){
            logText.innerHTML += "\"Oh thank you kind sir!\" says the wizard, \"Now for your reward... NOTHING! MUAHAHAHAHA\" ";
            objectIsInInventory[0] = false;
            objectIsUsed[0] = true;
        }else{
            logText.innerHTML += "Nothing happens when you use the "+object[0].name+" here.";
        }
        changeNav('log');
    }
};

object[1] = {
    name : "Hammer",
    equipmentSlot : "hand",

    popupText : "<p style='margin:3px'><a href='#' onclick=''>Use</a></p>"+
    "<p style='margin:3px'><a href='#' onclick='displayDescription(1)'>Examine</a></p>",
    description : "<p>It's a small rusted hammer with a wooden handle.</p>",
}