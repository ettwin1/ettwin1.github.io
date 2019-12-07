var object = []; //No variables in these objects are supposed to change during the game


//Different than a normal item, this keeps track of how many bottlecaps you have
object[0] = {
    name : "Bottle Caps: 0",
    equipmentSlot : "",
    amount : 0,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(0)'>Examine</a></p>",
    description : "<p>It seems that bottle caps are used as currency.</p>",
}

object[1] = {
    name : "Wrench",
    equipmentSlot : "hand",                                                                                             
    combatBonus : 2,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[1].useObject(X,Y,Z)'>Use</a></p>"+
    "<p style='margin:4px'><a href='#' onclick='displayDescription(1)'>Examine</a></p>",
    description : "<p>It's a small rusted wrench. You think you were using it for that wacky machine, but you don't need it anymore. Gives a +2 bonus to Combat Power when equipped.</p>",

    useObject : function(x,y,z){
        if (Y == 0 && X == 3 && Z == 4){
            logText.innerHTML += "<p>\"Oh, thank you! In thanks, I give you this. It's a Vault-Tec Assisted Targeting System, or V.A.T.S. for short. Anyway, got to go. Bye!\" (V.A.T.S. added to your inventory)</p>";
            removeObject(1);
            objectIsInInventory[3] = true;
            snd_collect.play();
            mapLocationVars[3][0][4].defaultText = "<p>The caravan that was here is gone now. There's no one in sight.</p>";
        }else if (Y == 0 && X == 2 && Z == 2){
            logText.innerHTML += "<p>You were probably using the wrench to fix the machine. You're quite sure you don't need it anymore, you can fix everything else by hand.</p>";
        }else if (Y == 0 && X == 1 && Z == 1 && !objectIsUsed[20]){
            logText.innerHTML += "<p>You try to use the wrench to open the safe, but it doesn't work.</p>";
        }else if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"Oh, I don't need a wrench,\" he says, \"I already have one, thank you.\"</p>";
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
        if (Y == 0 && X == 0 && Z == 1 && mapLocationVars[0][0][1].atTower == true){
            logText.innerHTML += "\"Oh thank you kind person!\" says the wizard, \"Now for your reward... NOTHING! Muahahahaha!\" Then he leaves the window.";
            removeObject(2);
            mapLocationVars[0][0][1].towerText = "<p>\"What are you doing here?\" says the wizard looking out the window, \"I cheated you already. That's it. There's nothing else for you here!\" <a href='#' onclick='mapLocation[0][0][1].default()'>[Back to city]</a></p>";
            mapLocationVars[0][0][1].beenCheated = true;
        }else if (Y == 1 && X == 0 && Z == 1 && mapLocationVars[0][1][1].canAttack == true){
            logText.innerHTML += "<p>You offer the banana to the alligator. It refuses to eat it.</p>";
        }else if (Y == 0 && X == 0 && Z == 3 && mapLocationVars[0][0][3].canTalk == true && mapLocationVars[0][0][3].startedQuest == true){
            logText.innerHTML += "<p>\"A banana?\" says the man in Power Armor, \"Those things are extremely rare nowadays. You better put it away before I eat it.\"</p>";
        }else if (Y == 0 && X == 0 && Z == 2 && mapLocationVars[0][0][2].isFriends == true && mapLocationVars[0][0][2].isDead == false && mapLocationVars[0][0][2].hasFood == false){
            logText.innerHTML += "<p>\"A banana? I don't like bananas. Bring me a different human food.\"</p>";
        }else if (Y == 0 && X == 4 && Z == 1){
            logText.innerHTML += "<p>\"Oh, are you giving this banana to me? That's very generous of you, but no thanks. I'm sure there are better people out there that would enjoy it more.\"</p>";
        }else if (Y == 0 && X == 3 && Z == 0 && mapLocationVars[3][0][0].canTalk == true){
            logText.innerHTML += "<p>\"That's a weird lookin' fruit you got there. How about I buy it off your hands for 5 caps?\" <a href='#' onclick='object[2].sell(`yes`)'>[\"Deal\"]</a> <a href='#' onclick='object[2].sell(`no`)'>[\"No Thanks\"]</a></p>";
        }else if (Y == 0 && X == 2 && Z == 0 && mapLocationVars[2][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Ooo a banana? I promise I'll be your friend if you let me eat it!\" <a href='#' onclick='object[2].give(`yes`)'>[\"Deal\"]</a> <a href='#' onclick='object[2].give(`no`)'>[\"No Thanks\"]</a></p>";
        }else if (Y == 0 && X == 4 && Z == 2 && mapLocationVars[4][0][2].gofer != ""){
            logText.innerHTML += "<p>The gofer tries to steal the banana from you, but you were quick enough to keep it away.</p>";
        }else if (Y == 0 && X == 4 && Z == 3 && mapLocationVars[4][0][3].isFriends == true){
            logText.innerHTML += "<p>His eyes go wide. \"You got a special plant too?! You better protect it, and don't give it to anyone, I tell ya.\"</p>";
        }else if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"What is that? I'm sorry, but I don't eat things I've never seen before.\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    },
    sell : function(answer){
        if (answer=="yes"){
            logText.innerHTML += "<p>\"Thank you for the business.\"</p>";
            removeObject(2);
            object[0].amount += 5;
            object[0].name = "Bottle Caps: "+object[0].amount;
        }else if (answer=="no"){
            logText.innerHTML += "<p>\"That's a shame, thanks anyway.\"</p>";
        }
    },
    give : function(answer){
        if (answer=="yes"){
            logText.innerHTML += "<p>\"Yay! I have a new friend now!\"</p>";
            removeObject(2);
            for (var i=0; i<2; i++){
                gossipList2.push("<p>\"Well, since you're my BFF now, one time I was putting on my makeup, and then I saw that my brown was gone, so I...\" *laughs* \"so I went outside and used the dirt off the ground! Isn't that crazy?! Nobody even noticed!\"</p>");
                gossipList2.push("<p>\"Okay, so since you're my friend now, I gotta tell you a dream I had. I was, like, working, like normal, right? And then someone ordered ONE HUNDRED sweet rolls. It was crazy, I had to go help cook them, and I was like 'Wait I never cooked these before!' It was really stressful, I'm glad it was just a dream.\"</p>");
                gossipList2.push("<p>\"Alright, since we're friends, I'm going to tell you a secret. Promise you won't tell anyone, okay? So, um, after someone's done eating, if there's still food left on their plate, I'll secretly eat their food. I know, gross right?! But it's such a waste! I just have to finish it for them.\"</p>");
            }
            mapLocationVars[2][0][0].isFriends = true;
            mapLocationVars[2][0][0].enterText = "<p>\"Yay! It's my new friend!\" says the waitress, \"What would you like today?\" <a href='#' onclick='mapLocation[2][0][0].lookAtMenu()'>[Look At Menu]</a> <a href='#' onclick='gossip(`restaurant`)'>[Gossip]</a></p>";
            mapLocationVars[2][0][0].buyText = "<p>\"Yay! Thanks BFF! Is there anything else I can do for you?\"  <a href='#' onclick='mapLocation[2][0][0].lookAtMenu()'>[Look At Menu]</a> <a href='#' onclick='gossip(`restaurant`)'>[Gossip]</a></p>";
        }else if (answer=="no"){
            logText.innerHTML += "<p>\"Aww that's okay. But I can still be your waitress!\"</p>";
        }
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
            if (mapLocationVars[4][0][2].gofer == "small"){
                this.calculateOdds(1);
            }else if (mapLocationVars[4][0][2].gofer == "medium"){
                this.calculateOdds(4);
            }else if (mapLocationVars[4][0][2].gofer == "large"){
                this.calculateOdds(8);
            }else{
                logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
            }
        }else if (X == 0 && Y == 0 & Z == 2){ //Super Mutant
            if (mapLocationVars[0][0][2].canAttack == true){
                this.calculateOdds(10);
            }else{
                logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
            }
        }else if (X == 3 && Y == 0 & Z == 3){ //Bullet Gang
            if (mapLocationVars[3][0][3].canAttack == true){
                this.calculateOdds(8);
            }else{
                logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
            }
        }else if (X == 4 && Y == 0 & Z == 3){ //Defender of Pineapple
            if (mapLocationVars[4][0][3].canAttack == true){
                this.calculateOdds(15);
            }else{
                logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
            }
        }else if (X == 0 && Y == 1 & Z == 1){ //Sewers
            if (mapLocationVars[0][1][1].canAttack == true){
                this.calculateOdds(5);
            }else{
                logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
            }
        }else if (X == 3 && Y == 0 & Z == 2){ //Creature
            if (mapLocationVars[3][0][2].canAttack == true){
                this.calculateOdds(5);
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
        if (Y == 0 && X == 0 && Z == 2 && mapLocationVars[0][0][2].isFriends == true && mapLocationVars[0][0][2].hasBook == false){
            logText.innerHTML += "<p>\"It looks like a good book. I haven't read anything in a century, but I can manage it. Thank you human friend.\"</p>";
            removeObject(4);
            mapLocationVars[0][0][2].hasBook = true;
            mapLocation[0][0][2].getObject();
        }else if (Y == 0 && X == 0 && Z == 3 && mapLocationVars[0][0][3].canTalk == true && mapLocationVars[0][0][3].startedQuest == true){
            logText.innerHTML += "<p>\"What is that, and adventure book?\" says the man in Power Armor, \"Those things are crap. I only read books that are actually useful.\"</p>";
        }else if (Y == 0 && X == 3 && Z == 0 && mapLocationVars[3][0][0].canTalk == true){
            logText.innerHTML += "<p>\"A book? Sorry, not interested. I don't want any more clutter at my station than there already is.\"</p>";
        }else if (Y == 0 && X == 2 && Z == 0 && mapLocationVars[2][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Ooo, that looks like a cool book! I don't want it though, I don't like reading.\"</p>";
        }else if (Y == 0 && X == 4 && Z == 1){
            logText.innerHTML += "<p>\"Oh, we don't need books; we're mainly a militant organization. But I'm sure some of the locals would want a book.\"</p>";
        }else if (Y == 0 && X == 0 && Z == 0 && mapLocationVars[2][0][0].canTalk == true){
            logText.innerHTML += "<p>You find a spot to sit and read the book. It was quite an adventure. It was about a safari explorer who tried to find an African temple, but found the lost city of Atlantis instead. The ending was tragic though, the explorer accidently destroyed the city and barely escaped.</p>";
        }else if (Y == 0 && X == 4 && Z == 3 && mapLocationVars[4][0][3].isFriends == true){
            logText.innerHTML += "<p>\"What is that? A book? I don't need that, you think I can read?\"</p>";
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
        if (Y == 0 && X == 0 && Z == 2 && mapLocationVars[0][0][2].isFriends == true && mapLocationVars[0][0][2].hasClothes == false){
            logText.innerHTML += "<p>\"Now THESE clothes are the best. Very fancy, and they fit! Thank you human friend.\"</p>";
            removeObject(5);
            mapLocationVars[0][0][2].hasClothes = true;
            mapLocation[0][0][2].getObject();
        }else if (Y == 0 && X == 3 && Z == 0 && mapLocationVars[3][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Thanks for buying those clothes. I've been trying to sell 'em for months.\"</p>";
        }else if (Y == 0 && X == 2 && Z == 0 && mapLocationVars[2][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Woah. Those clothes are SO BIG! I can't believe those even exist!\"</p>";
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
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[12].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(12)'>Examine</a></p>",
    description : "<p>A cool Medieval sword if you ignore the fact that half the blade is broken off. Gives a +2 bonus to Combat Power when equipped.</p>",

    useObject : function(x,y,z){
        if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"Sorry, I can't fix that sword for you. I mainly deal with guns, and I don't have a furnace.\"</p>";
        }else if (Y == 0 && X == 3 && Z == 0 && mapLocationVars[3][0][0].canTalk == true){
            logText.innerHTML += "<p>\"I can fix that sword for you, pardner. It'll cost you 10 caps.\" <a href='#' onclick='mapLocation[3][0][0].fixSword()'>[\"Deal\"]</a></p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
}

object[13] = {
    name : "Brahmin Steak",
    equipmentSlot : "",
    necessary : false,                                                                                        

    popupText : "<p style='margin:4px'><a href='#' onclick='object[13].eatObject()'>Eat</a></p>"+
    "<p style='margin:4px'><a href='#' onclick='object[13].useObject(X,Y,Z)'>Use</a></p>"+
    "<p style='margin:4px'><a href='#' onclick='displayDescription(13)'>Examine</a></p>",
    description : "<p>Cooked steak from the Lonely Restaurant. It's made from Brahmin meat. Whatever that is.</p>",

    useObject : function(x,y,z){
        if (Y == 0 && X == 0 && Z == 2 && mapLocationVars[0][0][2].isFriends == true && mapLocationVars[0][0][2].hasFood == false){
            logText.innerHTML += "<p>\"This can't be the best human food. I eat this everyday. If I want to be more like a human, I have to eat HUMAN food, and the best they have.\"</p>";
        }else if (Y == 0 && X == 0 && Z == 1 && mapLocationVars[0][0][1].atTower == true && mapLocationVars[0][0][1].isFriends == false){
            if (mapLocationVars[0][0][1].beenCheated == true){
                logText.innerHTML += "<p>\"I don't need any more food! Now begone, you foolish knave!\"</p>";
            }else{
                logText.innerHTML += "<p>\"That isn't what I asked for!\" says the wizard, \"You must've misheard me. I asked for a banana! One that's yellow, ripe, and looks like a frown!\"</p>";
            }
        }else if (Y == 0 && X == 0 && Z == 3 && mapLocationVars[0][0][3].canTalk == true && mapLocationVars[0][0][3].startedQuest == true){
            logText.innerHTML += "<p>\"Ooh, Brahmin Steak? For me?\" says the man in Power Armor as he takes it from you. He tries to eat it, but it just smushes against his helmet. \"Uh, I'll save it for later\"</p>";
            objectIsInInventory[13] = false;
        }else if (Y == 0 && X == 4 && Z == 1){
            logText.innerHTML += "<p>\"Oh, thanks for the offer, but we're well fed. But I'm sure some of the locals are in need of food.\"</p>";
        }else if (Y == 0 && X == 3 && Z == 0 && mapLocationVars[3][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Oh, is that for me? Don't mind if I do.\" He puts it on a plate and starts eating. \"Wait, I probably should've made sure it wasn't poisoned. All well.\" Then he finishes eating it.</p>";
            objectIsInInventory[13] = false;
        }else if (Y == 0 && X == 2 && Z == 0 && mapLocationVars[2][0][0].canTalk == true){
            if (mapLocationVars[2][0][0].isFriends){
                logText.innerHTML += "<p>*Gasp* \"*Are you buying me dinner? As a friend? Yay! Thanks BFF!\" She eats happily.</p>";
                objectIsInInventory[13] = false;
            }else{
                logText.innerHTML += "<p>*Gasp* \"Are you buying me dinner? How sweet! But sorry, you're not my type.\"</p>";
            }
        }else if (Y == 0 && X == 4 && Z == 3 && mapLocationVars[4][0][3].isFriends == true){
            logText.innerHTML += "<p>\"Food? Ah, thanks.\" He takes it and eats immediately.</p>";
            objectIsInInventory[13] = false;
        }else if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"Oh, thank you. It's hard to get good food around here, so it's really appreciated.\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    },
    eatObject : function(){
        logText.innerHTML += "<p>The steak tasted pretty good, and surprisingly didn't contain too much radiation. Who knew you could like an animal you didn't know.</p>";
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
    description : "<p>It's a potato that was grown in irradiated land. It's shaped a bit like a boot.</p>",

    useObject : function(x,y,z){
        if (Y == 0 && X == 0 && Z == 2 && mapLocationVars[0][0][2].isFriends == true && mapLocationVars[0][0][2].hasFood == false){
            logText.innerHTML += "<p>\"Human, you call this the best human food?\" He throws it on the ground. \"get this irradiated piece of junk out of my sight!\"</p>";
        }else if (Y == 0 && X == 0 && Z == 1 && mapLocationVars[0][0][1].atTower == true && mapLocationVars[0][0][1].isFriends == false){
            if (mapLocationVars[0][0][1].beenCheated == true){
                logText.innerHTML += "<p>\"I don't need any more food! Now begone, you foolish knave!\"</p>";
            }else{
                logText.innerHTML += "<p>\"That isn't what I asked for!\" says the wizard, \"You must've misheard me. I asked for a banana! One that's yellow, ripe, and looks like a frown!\"</p>";
            } 
        }else if (Y == 0 && X == 4 && Z == 1){
            logText.innerHTML += "<p>\"Oh, thanks for the offer, but we're well fed. But I'm sure some of the locals are in need of food.\"</p>";
        }else if (Y == 0 && X == 0 && Z == 3 && mapLocationVars[0][0][3].canTalk == true && mapLocationVars[0][0][3].startedQuest == true){
            logText.innerHTML += "<p>\"Ooh, Potato? For me?\" says the man in Power Armor as he takes it from you. Then he studies it for a second. \"Uh, this is irradiated. Are you trying to kill me? Here, take it back.\"</p>";
        }else if (Y == 0 && X == 3 && Z == 0 && mapLocationVars[3][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Oh, is that for me? Don't mind if I do.\" He puts it on a plate and starts eating. \"Wait, I probably should've made sure it wasn't poisoned. All well.\" Then he finishes eating it.</p>";
            objectIsInInventory[14] = false;
        }else if (Y == 0 && X == 2 && Z == 0 && mapLocationVars[2][0][0].canTalk == true){
            if (mapLocationVars[2][0][0].isFriends){
                logText.innerHTML += "<p>*Gasp* \"*Are you buying me dinner? As a friend? Yay! Thanks BFF!\" She eats happily.</p>";
                objectIsInInventory[14] = false;
            }else{
                logText.innerHTML += "<p>*Gasp* \"Are you buying me dinner? How sweet! But sorry, you're not my type.\"</p>";
            }
        }else if (Y == 0 && X == 4 && Z == 3 && mapLocationVars[4][0][3].isFriends == true){
            logText.innerHTML += "<p>\"Food? Ah, thanks.\" He takes it and eats immediately.</p>";
            objectIsInInventory[14] = false;
        }else if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"Oh, thank you. It's hard to get good food around here, so it's really appreciated.\"</p>";
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
        if (Y == 0 && X == 0 && Z == 2 && mapLocationVars[0][0][2].isFriends == true && mapLocationVars[0][0][2].hasFood == false){
            logText.innerHTML += "<p>\"This is the best food I've tasted in years! You call these sweet rolls? I'm eating these whenever I can. Thank you human friend.\"</p>";
            removeObject(15);
            mapLocationVars[0][0][2].hasFood = true;
            mapLocation[0][0][2].getObject();
        }else if (Y == 0 && X == 0 && Z == 1 && mapLocationVars[0][0][1].atTower == true && mapLocationVars[0][0][1].isFriends == false){
            if (mapLocationVars[0][0][1].beenCheated == true){
                logText.innerHTML += "<p>\"I don't need any more food! Now- wait, is that a sweet roll? Okay, I'll have it. Mmmm, that tastes delicious! Hey, do you want to know what my plan is?\" <a href='#' onclick='mapLocation[0][0][1].evilPlan()'>[\"Sure\"]</a></p>";
                mapLocationVars[0][0][1].towerText = "\"Hello there! Sorry for cheating you earlier!\" says the wizard looking out the window, \"Would you like to know what I'm planning?\" <a href='#' onclick='mapLocation[0][0][1].evilPlan()'>[\"Sure\"]</a>";
                objectIsInInventory[15] = false;
            }else{
                logText.innerHTML += "<p>\"That isn't what I asked for!\" says the wizard, \"You must have misheard me. I asked for a banana! One that's yellow, ripe, and looks like a frown!\"</p>";
            } 
        }else if (Y == 0 && X == 0 && Z == 3 && mapLocationVars[0][0][3].canTalk == true && mapLocationVars[0][0][3].startedQuest == true){
            logText.innerHTML += "<p>\"Ooh, a Sweet Roll? For me?\" says the man in Power Armor as he takes it from you. He tries to eat it, but it just smushes against his helmet. \"Uh, I'll save it for later\"</p>";
            objectIsInInventory[15] = false;
        }else if (Y == 0 && X == 4 && Z == 1){
            logText.innerHTML += "<p>\"Oh, thanks for the offer, but we're well fed. But I'm sure someone else would appreciate it more. Maybe that one crazy person who lives in the abandoned town? He could probably use a nice sweet roll.\"</p>";
        }else if (Y == 0 && X == 3 && Z == 0 && mapLocationVars[3][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Oh, is that for me? Don't mind if I do.\" He puts it on a plate and starts eating. \"Wait, I probably should've made sure it wasn't poisoned. All well.\" Then he finishes eating it.</p>";
            objectIsInInventory[15] = false;
        }else if (Y == 0 && X == 2 && Z == 0 && mapLocationVars[2][0][0].canTalk == true){
            if (mapLocationVars[2][0][0].isFriends){
                logText.innerHTML += "<p>*Gasp* \"*Are you buying me a sweet roll? As a friend? Yay! Thanks BFF!\" She eats happily.</p>";
                objectIsInInventory[15] = false;
            }else{
                logText.innerHTML += "<p>*Gasp* \"Are you buying me a sweet roll? How sweet! But sorry, you're not my type. But I'll eat it anyway.\"</p>";
                objectIsInInventory[15] = false;
            }
        }else if (Y == 0 && X == 4 && Z == 3 && mapLocationVars[4][0][3].isFriends == true){
            logText.innerHTML += "<p>\"Food? Ah, thanks.\" He takes it and eats immediately.</p>";
            objectIsInInventory[15] = false;
        }else if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"Wait, you're giving me a sweet roll? I haven't had one of those in years! Thank you so much!\"</p>";
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
        }else if (Y == 0 && X == 3 && Z == 0 && mapLocationVars[3][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Sorry pardner, but I'm an armor specialist. I've no idea how to fix a gun.\"</p>";
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
        if (Y == 0 && X == 1 && Z == 1){
            logText.innerHTML += "<p>You use the lockpick to open the iron safe in the shop. Inside is a grenade launcher. (Grenade Launcher added to inventory)</p>";
            removeObject(20);
            objectIsInInventory[22] = true;
            snd_collect.play();
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
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
        if (Y == 0 && X == 4 && Z == 3 && mapLocationVars[4][0][3].offerMade == true && mapLocationVars[4][0][3].hasPistol == false){
            logText.innerHTML += "<p>\"Oh, nice pistol, nice pistol alright. I'll take it!\"</p>";
            removeObject(21);
            mapLocationVars[4][0][3].hasPistol = true;
            mapLocation[4][0][3].receiveObject();
        }else if (Y == 0 && X == 0 && Z == 3 && mapLocationVars[0][0][3].canTalk == true && mapLocationVars[0][0][3].startedQuest == true){
            logText.innerHTML += "<p>\"Pffff, you think I'm scared of that?\" says the man in Power Armor, \"That's nothing against my Power Armor. Now put the gun away, I don't want to start any trouble.\"</p>";
        }else if (Y == 0 && X == 1 && Z == 1 && !objectIsUsed[20]){
            logText.innerHTML += "<p>You shoot at the safe, but it's quite strong. It doesn't open</p>";
        }else if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"I did a pretty good job fixing that up, didn't I?\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

object[22] = {
    name : "Grenade Launcher",
    equipmentSlot : "hand",
    combatBonus : 4,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[22].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(22)'>Examine</a></p>",
    description : "<p>This gun shoots grenades. Preserved in an iron safe for centuries. Gives a +4 bonus to Combat Power when equipped.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 4 && Z == 3 && mapLocationVars[4][0][3].offerMade == true && mapLocationVars[4][0][3].hasGrenadelauncher == false){
            logText.innerHTML += "<p>\"Oh yeah, look at this spankin' new baby! I gotta say, this is a nice gun. I'll take it!\"</p>";
            removeObject(22);
            mapLocationVars[4][0][3].hasGrenadelauncher = true;
            mapLocation[4][0][3].receiveObject();
        }else if (Y == 0 && X == 2 && Z == 2){
            logText.innerHTML += "<p>It's probably NOT a good idea to blow up the only thing that connects to your past.</p>";
        }else if (Y == 0 && X == 0 && Z == 3 && mapLocationVars[0][0][3].canTalk == true && mapLocationVars[0][0][3].startedQuest == true){
            logText.innerHTML += "<p>\"Pffff, you think I'm scared of that?\" says the man in Power Armor, \"That's nothing against my Power Armor. Now put the gun away, I don't want to start any trouble.\"</p>";
        }else if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"Woah, where did you get one of those? That's such an old model, and it's in mint condition! That's quite a gun you have there.\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

object[23] = {
    name : "Sniper",
    equipmentSlot : "hand",
    combatBonus : 4,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[23].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(23)'>Examine</a></p>",
    description : "<p>This gun is well taken care of. It shoots things very accurately. Gives a +4 bonus to Combat Power when equipped.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 4 && Z == 3 && mapLocationVars[4][0][3].offerMade == true && mapLocationVars[4][0][3].hasSniper == false){
            logText.innerHTML += "<p>\"Now take a look at this baby! This'll making snipin' people from far away much easier. The minigun was terrible at that. I'll take it!\"</p>";
            removeObject(23);
            mapLocationVars[4][0][3].hasSniper = true;
            mapLocation[4][0][3].receiveObject();
        }else if (Y == 0 && X == 0 && Z == 3 && mapLocationVars[0][0][3].canTalk == true && mapLocationVars[0][0][3].startedQuest == true){
            logText.innerHTML += "<p>\"Pffff, you think I'm scared of that?\" says the man in Power Armor, \"That's nothing against my Power Armor. Now put the gun away, I don't want to start any trouble.\"</p>";
        }else if (Y == 0 && X == 1 && Z == 1 && !objectIsUsed[20]){
            logText.innerHTML += "<p>You don't want to accidently destroy the contents of the safe by shooting through it with a sniper.</p>";
        }else if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"This is a pretty good sniper. I can tell it's seen a few repairs, but it'll work pretty well for you.\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

object[24] = {
    name : "Machine Gun",
    equipmentSlot : "hand",
    combatBonus : 4,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[24].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(24)'>Examine</a></p>",
    description : "<p>This gun is well taken care of. It shoots a lot of bullets very fast. Gives a +4 bonus to Combat Power when equipped.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 4 && Z == 3 && mapLocationVars[4][0][3].offerMade == true && mapLocationVars[4][0][3].hasMachinegun == false){
            logText.innerHTML += "<p>\"This machine gun doesn't shoot as fast as a minigun 'course, but it works, and quite well too. I'll take it!\"</p>";
            removeObject(24);
            mapLocationVars[4][0][3].hasMachinegun = true;
            mapLocation[4][0][3].receiveObject();
        }else if (Y == 0 && X == 0 && Z == 3 && mapLocationVars[0][0][3].canTalk == true && mapLocationVars[0][0][3].startedQuest == true){
            logText.innerHTML += "<p>\"Pffff, you think I'm scared of that?\" says the man in Power Armor, \"That's nothing against my Power Armor. Now put the gun away, I don't want to start any trouble.\"</p>";
        }else if (Y == 0 && X == 1 && Z == 1 && !objectIsUsed[20]){
            logText.innerHTML += "<p>You don't want to accidently destroy the contents of the safe with an uncontrollable spray of bullets.</p>";
        }else if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"This is a nice gun. However, most typical machine guns like this have a higher caliber. Despite the smaller bullets, it should work just fine when you want to kill some gofers.\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
}

object[25] = {
    name : "Minigun",
    equipmentSlot : "hand",
    combatBonus : 6,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[25].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(25)'>Examine</a></p>",
    description : "<p>This gun can spit out bullets as fast a rain! And you can even use it in one hand! Gives a +6 bonus to Combat Power when equipped.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 4 && Z == 1 && mapLocationVars[4][0][1].startedQuest == true){
            logText.innerHTML += "<p>\"Ah, you brought a minigun! Thank you! Here's the radiation suit, as promised. (Rad Suit Helmet, Rad Suit Body, and Rad Suit Boots added to Inventory) \"</p>";
            removeObject(25)
            mapLocationVars[4][0][1].hasMinigun = true;
            objectIsInInventory[29] = true;
            objectIsInInventory[30] = true;
            objectIsInInventory[31] = true;
            snd_collect.play();
        }else if (Y == 0 && X == 0 && Z == 3 && mapLocationVars[0][0][3].canTalk == true && mapLocationVars[0][0][3].startedQuest == true){
            if (mapLocationVars[0][0][3].finished==true){
                logText.innerHTML += "<p>\"Woooah, where'd you get a gun like that?\" says the man in Power Armor, \"Those things are crazy powerful, and rare too.\"</p>";
            }else{
                logText.innerHTML += "<p>\"Woooah, where'd you get a gun like that?\" says the man in Power Armor, \"Those things are crazy powerful, but it's not going to work as a stan-in for Power Armor. The Elder is pretty strict.\"</p>";
            }
        }else if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"Woah, now that is a good lookin' gun! I haven't seen a minigun in years. Looks like this one is in good repair. The owner must have taken good care of it.\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
}

object[26] = {
    name : "Rotting Pineapple",
    equipmentSlot : "",
    necessary : true,

    popupText :  "<p style='margin:4px'><a href='#' onclick='object[26].eatObject()'>Eat</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(26)'>Examine</a></p>",
    description : "<p>It's an old, rotting, radioactive Pineapple. You feel compelled to eat it...</p>",
    
    eatObject : function(){
        logText.innerHTML += "<p>Something strange happens. You can't tell if it was from the mold, or something more...</p>";
        removeObject(26);
        changeSetting('color','red',false);
        document.getElementById("redButton").style.visibility = 'visible';
        changeNav('log');
    }
}

object[27] = {
    name : "Climbing Gear",
    equipmentSlot : "",
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[27].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(27)'>Examine</a></p>",
    description : "<p>A backpack with lots of stuff, including a grappling hook, safety harness, and some pitons. You could probably climb up anything with this.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 1 && Z == 2){
            logText.innerHTML += "<p>You use the climbing gear to climb up the edge of the cliff and retrieve the pickaxe. (Pickaxe added to Inventory)</p>";
            removeObject(27);
            objectIsInInventory[28] = true;
            snd_collect.play();
            mapLocationVars[1][0][2].defaultText = mapLocationVars[1][0][2].defaultText2
        }else if (Y == 0 && X == 3 && Z == 0 && mapLocationVars[3][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Wow, that's a nice pack you got there. I'm not looking to buy it or anything, but you could probably climb anything with that. Now climbing can be dangerous. I suggest you buy some of my armor to protect yourself in case you fall.\" *Wink*</p>";
        }else if (Y == 0 && X == 1 && Z == 1 && !objectIsUsed[20]){
            logText.innerHTML += "<p>You try to use the tools in the climbing gear to open the safe, but it doesn' work. It's too strong.</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

object[28] = {
    name : "Pickaxe",
    equipmentSlot : "hand",
    combatBonus : 3,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[28].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(28)'>Examine</a></p>",
    description : "<p>It's a rusty pickaxe, but still looks strong. You could mine some ore with this, or use it to give your enemies tetnis.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 1 && Z == 3 && mapLocationVars[1][0][3].inGoldMine == true){
            logText.innerHTML += "<p>You swing your pickaxe all day, and you get all the gold ore you can find. [Gold Ore added to Inventory]</p>";
            objectIsInInventory[34] = true;
            snd_collect.play();
            mapLocationVars[1][0][3].minedGold = true;
        }else if (Y == 0 && X == 1 && Z == 2){
            logText.innerHTML += "<p>You use the pickaxe to dig a nice outcove in the side of the cliff.</p>";
            mapLocationVars[1][0][2].defaultText = "<p>You come upon the face of a <a href='#' onclick='describe(`cliff`)'>cliff</a>. In the outcove you made, you see a pair of ground squirrels living inside.</p>";
        }else if (Y == 0 && X == 1 && Z == 1 && !objectIsUsed[20]){
            logText.innerHTML += "<p>You try to use the pickaxe to open the safe, but it doesn't work. It's too strong.</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
}

object[29] = {
    name : "Rad Suit Helmet",
    equipmentSlot : "head",                                                                                             
    combatBonus : 0,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(29)'>Examine</a></p>",
    description : "<p>Helps protect from all kinds of radiation and noxious gas. Of course, you're not immune without wearing the full suit.</p>",
}

object[30] = {
    name : "Rad Suit Body",
    equipmentSlot : "body",                                                                                             
    combatBonus : 0,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(30)'>Examine</a></p>",
    description : "<p>Helps protect from all kinds of radiation and noxious gas. Of course, you're not immune without wearing the full suit.</p>",
}

object[31] = {
    name : "Rad Suit Boots",
    equipmentSlot : "feet",                                                                                             
    combatBonus : 0,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(31)'>Examine</a></p>",
    description : "<p>Helps protect from all kinds of radiation and noxious gas. Of course, you're not immune without wearing the full suit.</p>",
}

object[32] = {
    name : "Nova Clan Hat",
    equipmentSlot : "head",                                                                                             
    combatBonus : 3,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(32)'>Examine</a></p>",
    description : "<p>It's a captain style hat. The inside is lined with iron for protection and padding for comfortable use. It was nice of the captain of the Nova Clan to give it to you. Gives a +3 bonus to Combat Power when equipped.</p>",
}

object[33] = {
    name : "Lantern",
    equipmentSlot : "hand",
    combatBonus : 0,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(33)'>Examine</a></p>",
    description : "<p>It's an old lantern, but it looks like it still works. It even has some oil in it still. You can equip it to light up dark places.</p>",
}

object[34] = {
    name : "Gold Ore",
    equipmentSlot : "",
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[34].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(34)'>Examine</a></p>",
    description : "<p>A bunch of shiny stuff stuck to rocks. Gold is not very useful like that.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 1 && Z == 3 && mapLocationVars[1][0][3].inRefinery == true){
            logText.innerHTML += "<p>You put the gold ore in the machine's hopper.</p>";
            removeObject(34);
            mapLocationVars[1][0][3].goldInRefinery = 1;
        }else if (Y == 0 && X == 2 && Z == 2){
            logText.innerHTML += "<p>This gold ore won't work for the machine. It has to be refined into pure gold.</p>";
        }else if (Y == 0 && X == 0 && Z == 2 && mapLocationVars[0][0][2].isFriends == true && mapLocationVars[0][0][2].hasFood == false){
            logText.innerHTML += "<p>\"What is this?\" He licks the ore. \"It doesn't taste very good. Find something else.\"</p>";
        }else if (Y == 0 && X == 3 && Z == 0 && mapLocationVars[3][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Sorry pardner, I got a furnace, not a refinery. I can't purify that for you.\"</p>";
        }else if (Y == 0 && X == 2 && Z == 0 && mapLocationVars[2][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Ooo, those are some pretty rocks! You should make jewelry out of it!\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

object[35] = {
    name : "Gold",
    equipmentSlot : "",
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[35].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(35)'>Examine</a></p>",
    description : "<p>Exactly 8 ounces of purified Gold. Just what you need to rebuild that wacky machine. It also looks pretty.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 2 && Z == 2){
            logText.innerHTML += "<p>You place the gold by the machine, ready to use when you have all the parts.</p>";
            removeObject(35);
            mapLocationVars[2][0][2].hasGold = true;
            mapLocation[2][0][2].getObject();
        }else if (Y == 0 && X == 0 && Z == 2 && mapLocationVars[0][0][2].isFriends == true && mapLocationVars[0][0][2].hasFood == false){
            logText.innerHTML += "<p>\"What is this?\" He licks the Gold. \"It doesn't taste very good. Take it back.\"</p>";
        }else if (Y == 0 && X == 3 && Z == 0 && mapLocationVars[3][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Sorry pardner, I don't need any gold. My stuff is strong, not fancy.\"</p>";
        }else if (Y == 0 && X == 2 && Z == 0 && mapLocationVars[2][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Ooo, you have gold?! You should make jewelry out of it!\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

object[36] = {
    name : "Storage Module",
    equipmentSlot : "",
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[36].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(36)'>Examine</a></p>",
    description : "<p>It's a 128 GB storage module, exactly what you needed to fix that wacky machine.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 2 && Z == 2){
            logText.innerHTML += "<p>You place the storage module by the machine, ready to use when you have all the parts.</p>";
            removeObject(36);
            mapLocationVars[2][0][2].hasModule = true;
            mapLocation[2][0][2].getObject();
        }else if (Y == 0 && X == 0 && Z == 3 && mapLocationVars[0][0][3].canTalk == true && mapLocationVars[0][0][3].startedQuest == true){
            logText.innerHTML += "<p>\"Oh yeah, we have plenty of those,\" says the man in Power Armor, \"You can keep it if you want.\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

object[37] = {
    name : "Parchment",
    equipmentSlot : "",
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[37].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(37)'>Examine</a></p>",
    description : "<p>It's an old piece of parchment with an evil plan written on it:</p><ol><li><p>Find a radiation suit</p></li><li><p>Descend beneath the town</p></li><li><p>Find the atomic bomb</p></li><li><p>Install a remote-control detonator on it</p></li><li><p>Watch the show</p></li></ol>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 4 && Z == 1){
            logText.innerHTML += "<p>\"That crazy guy in the tower is planning to blow us all up?\" she says, \"Don't you worry, we'll look into that. Thanks for letting us know.\"</p>";
            removeObject(37);
            mapLocationVars[0][0][1].towerText = "<p>You find the remains of the wizard next to the tower. The walls are spray-painted with the Nova Clan's symbol, and underneath it says \"FOR THE GOOD OF SOCIETY\" <a href='#' onclick='mapLocation[0][0][1].towerSearch()'>[Search]</a></p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
};

object[38] = {
    name : "Potion",
    equipmentSlot : "",
    necessary : true,

    popupText :  "<p style='margin:4px'><a href='#' onclick='object[38].eatObject()'>Drink</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(38)'>Examine</a></p>",
    description : "<p>It's a small vial filled with purple liquid. You have no idea what it does.</p>",
    
    eatObject : function(){
        logText.innerHTML += "<p>You drink it, and you immediately can tell it's a radioactive substance. It leaves an aftertaste of banana. You feel your muscles growing stronger, and your limbs feel lighter. You permanently gain 5 combat power.</p>";
        permanentCombatPower = 5;
        recalcuateCombatPower();
        removeObject(38);
        changeNav('log');
    }
}

object[39] = {
    name : "Broken Lazer Rifle",
    equipmentSlot : "",
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='object[39].useObject(X,Y,Z)'>Use</a></p>"+
                "<p style='margin:4px'><a href='#' onclick='displayDescription(39)'>Examine</a></p>",
    description : "<p>It's a very cool gun, but it doesn't work. You have no idea how to fix it.</p>",
    
    useObject : function(x,y,z){
        if (Y == 0 && X == 4 && Z == 4){
            logText.innerHTML += "<p>\"You want me to fix this rifle for you? I can do that no problem. That'll be 20 caps.\" <a href='#' onclick='mapLocation[4][0][4].fix2()'>[\"Deal.\"]</a></p>";
        }else if (Y == 0 && X == 3 && Z == 0 && mapLocationVars[3][0][0].canTalk == true){
            logText.innerHTML += "<p>\"Sorry pardner, but I'm an armor specialist. I've no idea how to fix a gun.\"</p>";
        }else{
            logText.innerHTML += "<p>Nothing happens when you use the "+this.name+" here.</p>";
        }
        changeNav('log');
    }
}

object[40] = {
    name : "Lazer Rifle",
    equipmentSlot : "hand",
    combatBonus : 5,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(40)'>Examine</a></p>",
    description : "<p>A recently fixed lazer rifle. It shoots red hot lazers. Gives a +5 bonus to Combat Power when equipped.</p>",
};

object[41] = {
    name : "Bullet-proof Vest",
    equipmentSlot : "body",                                                                                             
    combatBonus : 4,
    necessary : false,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(41)'>Examine</a></p>",
    description :  "<p>It's a vest that's very resistant against pierces. Gives a +4 bonus to Combat Power when equipped.</p>",
};

object[42] = {
    name : "Glasses",
    equipmentSlot : "head",                                                                                             
    combatBonus : 1,
    necessary : false,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(42)'>Examine</a></p>",
    description : "<p>They actually improve your vision, despite the wonkiness. Gives a +1 bonus to Combat Power when equipped.</p>",
},

object[43] = {
    name : "Sword",
    equipmentSlot : "hand",                                                                                             
    combatBonus : 3,
    necessary : true,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(43)'>Examine</a></p>",
    description : "<p>A cool Medieval sword that was recently fixed. Gives a +3 bonus to Combat Power when equipped.</p>",
},

object[44] = {
    name : "Running Shoes",
    equipmentSlot : "feet",                                                                                             
    combatBonus : 1,
    necessary : false,

    popupText : "<p style='margin:4px'><a href='#' onclick='displayDescription(44)'>Examine</a></p>",
    description : "<p>A nice pair of shoes that makes you feel quick and spry. Gives a +1 bonus to Combat Power when equipped</p>",
}