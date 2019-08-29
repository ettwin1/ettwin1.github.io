var object = []; //No variables in these objects are supposed to change during the game


//Different than a normal item, this keeps track of how many bottlecaps you have
object[0] = {
    name : "Bottle Caps: 0",
    equipmentSlot : "",
    amount : 0,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(0)'>Examine</a></p>",
    description : "<p>Bottle caps are used as currency.</p>",
}

object[1] = {
    name : "Wrench",
    equipmentSlot : "hand",                                                                                             
    combatBonus : 1,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[1].useObject(X,Y,Z)'>Use</a></p>"+
    "<p style='margin:4px'><a href='#' onclick='displayDescription(1)'>Examine</a></p>",
    description : "<p>It's a small rusted wrench. You think you were using it for that wacky machine, but you don't need it anymore. Gives a +1 bonus to Combat Power when equipped.</p>",

    useObject : function(x,y,z){
        if (Y == 0 && X == 3 && Z == 4){
            logText.innerHTML += "<p>\"Oh, thank you sir! In thanks, I give you this. It's a Vault-Tec Assisted Targeting System, or V.A.T.S. for short. Anyway, got to go. Goodbye!\" (V.A.T.S. added to your inventory)</p>";
            objectIsInInventory[1] = false;
            objectIsUsed[1] = true;
            objectIsInInventory[3] = true;
            snd_collect.play();
            mapLocation[3][0][4].defaultText = "<p>The caravan that was here is gone now. There's no one in sight.</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

//Found at x:0 y:0 z:1
object[2] = {
    name : "Banana",
    equipmentSlot : "",
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[2].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(2)'>Examine</a></p>",
    description : "<p>The banana is yellow, ripe, and looks like a smile.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 0 && Z == 1 && mapLocation[0][0][1].atTower == true){
            logText.innerHTML += "\"Oh thank you kind sir!\" says the wizard, \"Now for your reward... NOTHING! MUAHAHAHAHA\" ";
            objectIsInInventory[2] = false;
            objectIsUsed[2] = true;
            mapLocation[0][0][1].towerText = "<p>\"What are you doing here?\" says the wizard looking out the window, \"I cheated you already. That's it. There's nothing else for you here! <a href='#' onclick='mapLocation[0][0][1].default()'>[Back to city]</a></p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

object[3] = {
    name : "V.A.T.S.",
    equipmentSlot : "",
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[3].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(3)'>Examine</a></p>",
    description : "<p>The Vault-Tec Assisted Targeting System is used to determine if an enemy can be defeated given your current combat power. Use it when you have the option to attack someone.</p>",
    
    useObject : function(x,y,z){
        if (X == 4 && Y == 0 && Z == 2){ //Thieving Gofers
            if (mapLocation[4][0][2].gofer == "small"){
                this.calculateOdds(2);
            }else if (mapLocation[4][0][2].gofer == "medium"){
                this.calculateOdds(4);
            }else if (mapLocation[4][0][2].gofer == "large"){
                this.calculateOdds(8);
            }else{
                logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
            }
        }else if (X == 0 && Y == 0 & Z == 2){ //Super Mutant
            if (mapLocation[0][0][2].canAttack == true){
                this.calculateOdds(10);
            }else{
                logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
            }
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    },

    calculateOdds : function(enemyCombatPower){
        if (combatPower > enemyCombatPower){
            logText.innerHTML += "<p>With "+combatPower+" combat power, you have a 100% chance of defeating this target.</p>";
        }else if (combatPower == enemyCombatPower){
            logText.innerHTML += "<p>With "+combatPower+" combat power, you have a 50% chance of defeating this target.</p>";
        }else if (combatPower < enemyCombatPower){
            logText.innerHTML += "<p>With "+combatPower+" combat power, you have a 0% chance of defeating this target.</p>";
        }
    }
}

object[4] = {
    name : "Book",
    equipmentSlot : "",
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[4].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(4)'>Examine</a></p>",
    description : "<p>Seems to be an adventure book about a safari explorer discovering a place called Atlantis.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 0 && Z == 2 && mapLocation[0][0][2].isFriends == true && mapLocation[0][0][2].hasBook == false){
            logText.innerHTML += "<p>\"It looks like a good book. I haven't read anything in a century, but I can manage it. Thank you human friend.\"</p>";
            objectIsInInventory[4] = false;
            objectIsUsed[4] = true;
            mapLocation[0][0][2].hasBook = true;
            mapLocation[0][0][2].getObject();
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

object[5] = {
    name : "Fancy Clothes",
    equipmentSlot : "",
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[5].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(5)'>Examine</a></p>",
    description : "<p>These clothes have fancy frills and a cravat. However, there so big you'd have to be at least 8 feet tall to look remotely good in them.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 0 && Z == 2 && mapLocation[0][0][2].isFriends == true && mapLocation[0][0][2].hasClothes == false){
            logText.innerHTML += "<p>\"Now THESE clothes are the best. Very fancy, and they fit! Thank you human friend.\"</p>";
            objectIsInInventory[5] = false;
            objectIsUsed[5] = true;
            mapLocation[0][0][2].hasClothes = true;
            mapLocation[0][0][2].getObject();
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

object[6] = {
    name : "Knight Helmet",
    equipmentSlot : "head",                                                                                             
    combatBonus : 2,
    necessary : false,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(6)'>Examine</a></p>",
    description : "<p>It's one of those classic knight helmets. It's a little rusty and heavy, but still strong. Gives a +2 bonus to Combat Power when equipped.</p>",
};

object[7] = {
    name : "Knight Chestplate",
    equipmentSlot : "body",                                                                                             
    combatBonus : 2,
    necessary : false,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(7)'>Examine</a></p>",
    description : "<p>It's a metal chestplate. It's a little rusty and heavy, but still strong. Gives a +2 bonus to Combat Power when equipped.</p>",
};

object[8] = {
    name : "Knight Boots",
    equipmentSlot : "feet",                                                                                             
    combatBonus : 2,
    necessary : false,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(8)'>Examine</a></p>",
    description : "<p>They're boots made out of metal. It's a little rusty and heavy, but still strong. Gives a +2 bonus to Combat Power when equipped.</p>",
};

object[9] = {
    name : "Leather Helmet",
    equipmentSlot : "head",                                                                                             
    combatBonus : 1,
    necessary : false,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(9)'>Examine</a></p>",
    description : "<p>It's a weirdly shaped helmet made of leather. Reminds you of a shower cap. Gives a +1 bonus to Combat Power when equipped.</p>",
};

object[10] = {
    name : "Leather Chestplate",
    equipmentSlot : "body",                                                                                             
    combatBonus : 1,
    necessary : false,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(10)'>Examine</a></p>",
    description :  "<p>It's a leather chestplate. Gives a +1 bonus to Combat Power when equipped.</p>",
};

object[11] = {
    name : "Leather Boots",
    equipmentSlot : "feet",                                                                                             
    combatBonus : 1,
    necessary : false,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(11)'>Examine</a></p>",
    description : "<p>They're leather boots. They're nice and snug. Gives a +1 bonus to Combat Power when equipped.</p>",
};

object[12] = {
    name : "Broken Sword",
    equipmentSlot : "hand",                                                                                             
    combatBonus : 2,
    necessary : false,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(12)'>Examine</a></p>",
    description : "<p>A cool Medieval sword if you ignore the fact that half the blade is broken off. Gives a +2 bonus to Combat Power when equipped.</p>",
}

object[13] = {
    name : "Brahmin Steak",
    equipmentSlot : "",
    necessary : false,                                                                                        

    popupText : "<p style='margin:4px'><a href='#' onclick='object[13].eatObject()'>Eat</a></p>"+
    "<p style='margin:4px'><a href='#' onclick='object[13].useObject(X,Y,Z)'>Use</a></p>"+
    "<p style='margin:4px'><a href='#' onclick='displayDescription(13)'>Examine</a></p>",
    description : "<p>Cooked steak from the Lonely Restaurant. It's made from Brahmin meat.</p>",

    useObject : function(x,y,z){
        if (Y == 0 && X == 0 && Z == 2 && mapLocation[0][0][2].isFriends == true && mapLocation[0][0][2].hasFood == false){
            logText.innerHTML += "<p>\"This can't be the best human food. I eat this everyday. If I want to be more like a human, I have to eat HUMAN food, and the best they have.\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    },
    eatObject : function(){
        logText.innerHTML += "<p>The steak tasted pretty good, and surprisingly didn't contain too much radiation.</p>";
        objectIsInInventory[13] = false;
        changeNav('log');
    }
}

object[14] = {
    name : "Irradiated Potato",
    equipmentSlot : "",
    necessary : false,                                                                                     

    popupText : "<p style='margin:4px'><a href='#' onclick='object[14].eatObject()'>Eat</a></p>"+
    "<p style='margin:4px'><a href='#' onclick='object[14].useObject(X,Y,Z)'>Use</a></p>"+
    "<p style='margin:4px'><a href='#' onclick='displayDescription(14)'>Examine</a></p>",
    description : "<p>It's a potato that was grown in irradiated land. It's shaped a bit like a boomerang.</p>",

    useObject : function(x,y,z){
        if (Y == 0 && X == 0 && Z == 2 && mapLocation[0][0][2].isFriends == true && mapLocation[0][0][2].hasFood == false){
            logText.innerHTML += "<p>\"Human, you call this the best human food?\" He throws it on the ground. \"get this irradiated piece of junk out of my sight!\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    },
    eatObject : function(){
        logText.innerHTML += "<p>It tasted okay, but you felt it needed a bit more potato with that radiation.</p>";
        objectIsInInventory[14] = false;
        changeNav('log');
    }
}

object[15] = {
    name : "Sweet Roll",
    equipmentSlot : "",
    necessary : true,                                                                                       

    popupText : "<p style='margin:4px'><a href='#' onclick='object[15].eatObject()'>Eat</a></p>"+
    "<p style='margin:4px'><a href='#' onclick='object[15].useObject(X,Y,Z)'>Use</a></p>"+
    "<p style='margin:4px'><a href='#' onclick='displayDescription(15)'>Examine</a></p>",
    description : "<p>It's a roll iced with frosting. It was highly recommended by the waitress at the Lonely Restaurant.</p>",

    useObject : function(x,y,z){
        if (Y == 0 && X == 0 && Z == 2 && mapLocation[0][0][2].isFriends == true && mapLocation[0][0][2].hasFood == false){
            logText.innerHTML += "\"<p>This is the best food I've tasted in years! You call these sweet rolls? I'm eating these whenever I can. Thank you human friend.\"</p>";
            objectIsInInventory[15] = false;
            objectIsUsed[15] = true;
            mapLocation[0][0][2].hasFood = true;
            mapLocation[0][0][2].getObject();
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    },
    eatObject : function(){
        logText.innerHTML += "<p>It tasted delicious and satisfying. Probably the best food you've ever had.</p>";
        objectIsInInventory[15] = false;
        changeNav('log');
    }
}

object[16] = {
    name : "Power Helmet",
    equipmentSlot : "head",                                                                                             
    combatBonus : 4,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(16)'>Examine</a></p>",
    description : "<p>It's T-51 power armor. Feels natural wearing it for some reason. Gives a +4 bonus to Combat Power when equipped.</p>",
}

object[17] = {
    name : "Power Body",
    equipmentSlot : "body",                                                                                             
    combatBonus : 4,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(17)'>Examine</a></p>",
    description : "<p>It's T-51 power armor. Feels natural wearing it for some reason. Gives a +4 bonus to Combat Power when equipped.</p>",
}

object[18] = {
    name : "Power Boots",
    equipmentSlot : "feet",                                                                                             
    combatBonus : 4,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(18)'>Examine</a></p>",
    description : "<p>It's T-51 power armor. Feels natural wearing it for some reason. Gives a +4 bonus to Combat Power when equipped.</p>",
}

object[19] = {
    name : "Broken Pistol",
    equipmentSlot : "",
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[19].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(19)'>Examine</a></p>",
    description : "<p>It's a small gun that doesn't work. It seems gun engineering is not your area of expertise.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"You want me to fix this pistol for you? I can do that no problem. That'll be 20 caps.\" <a href='#' onclick='mapLocation[4][0][4].fix()'>[\"Deal.\"]</a></p>";
            objectIsInInventory[5] = false;
            objectIsUsed[5] = true;
            mapLocation[0][0][2].hasClothes = true;
            mapLocation[0][0][2].getObject();
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

object[20] = {
    name : "Lockpick",
    equipmentSlot : "",
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[20].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(20)'>Examine</a></p>",
    description : "<p>A lockpick, useful for any thief wanting to open something locked.</p>",
    
    useObject : function(x,y,z){
        /*if (Y == 0 && X == 0 && Z == 2 && mapLocation[0][0][2].isFriends == true && mapLocation[0][0][2].hasClothes == false){
            logText.innerHTML += "<p>\"Now THESE clothes are the best. Very fancy, and they fit! Thank you human friend.\"</p>";
            objectIsInInventory[5] = false;
            objectIsUsed[5] = true;
            mapLocation[0][0][2].hasClothes = true;
            mapLocation[0][0][2].getObject();
        }else{*/
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        //}
        changeNav('log');
    }
};

object[21] = {
    name : "Pistol",
    equipmentSlot : "hand",
    combatBonus : 3,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[21].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(21)'>Examine</a></p>",
    description : "<p>A recently fixed pistol. Works like a charm. Gives a +3 bonus to Combat Power when equipped.</p>",
    
    useObject : function(x,y,z){
        /*if (Y == 0 && X == 0 && Z == 2 && mapLocation[0][0][2].isFriends == true && mapLocation[0][0][2].hasClothes == false){
            logText.innerHTML += "<p>\"Now THESE clothes are the best. Very fancy, and they fit! Thank you human friend.\"</p>";
            objectIsInInventory[5] = false;
            objectIsUsed[5] = true;
            mapLocation[0][0][2].hasClothes = true;
            mapLocation[0][0][2].getObject();
        }else{*/
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        //}
        changeNav('log');
    }
};