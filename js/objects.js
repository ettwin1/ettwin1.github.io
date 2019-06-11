var object = [];

object[0] = {
    name : "Banana",
    x : 0, //found at this x
    y : 0, //found at this y
    z : 1, //found at this z

    popupText : "<p style='margin:3px'><a href='#' onclick='object[0].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:3px'><a href='#' onclick='displayDescription(0)'>Info</a></p>",
    description : "<p>The Banana is yellow, ripe, and looks like a smile.</p>",
    
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
}