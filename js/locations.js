//variable "location" is a reserved word in JavaScript. Took me a while to figure it out. Always led me to the url [object%20Object]
//mapLocation[x][y][z]
var mapLocation = [
    [[],[],[],[],[]],
    [[],[],[],[],[]],
    [[],[],[],[],[]],
    [[],[],[],[],[]],
    [[],[],[],[],[]]
];

//Starting Location
mapLocation[2][0][2] = {
    defaultText : "<p>You see a wacky machine in front of you, which you don't remember anything about, except that you need a 128 GB flashdrive, 35 pounds of gold, and a radiation-proof suit in order to fix it.</p>"
};

//Abandoned city
mapLocation[0][0][1] = {
    atDefault : true,
    atMarket : false,
    atTower : false,
    atAlleyway : false,

    defaultText : "<p>You walk into an abandoned city. You see a <a href='#'onclick='mapLocation[0][0][1].marketplace()'>marketplace</a>, a <a href='#'onclick='mapLocation[0][0][1].tower()'>tower</a>, and an <a href='#'onclick='mapLocation[0][0][1].alleyway()'>alleyway</a>.</p>",
    marketplaceText : "<p>The marketplace is abandoned with hardly anything useful left. <a href='#' onclick='mapLocation[0][0][1].marketplaceSearch()'>[Search]</a> "+
                    "<a href='#' onclick='mapLocation[0][0][1].default()'>[Back to city]</a></p>",
    towerText : "<p>The tower appears to be a wizard tower. Someone dressed in a wizard robe looks out and says, \"Oi there! I need a banana for one of my potions! Please get me one and I'll reward thee greatly!\" "+
                "<a href='#' onclick='mapLocation[0][0][1].default()'>[Back to city]</a></p>",
    alleywayText : "<p></p>"+
                "<a href='#' onclick='mapLocation[0][0][1].default()'>[Back to city]</a></p>",

    default : function(){
        logText.innerHTML = this.defaultText;
        this.atDefault = true;
        this.atTower = false;
        this.atMarket = false;
        this.atAlleyway = false;
    },
    marketplace : function(){
        logText.innerHTML = this.marketplaceText;
        this.atDefault = false;
        this.atTower = false;
        this.atMarket = true;
        this.atAlleyway = false;
    },
    marketplaceSearch : function(){
        if (objectIsInInventory[2] == true || objectIsUsed[2] == true){
            logText.innerHTML += "<p>You don't find anything.</p>";
        }else{
            logText.innerHTML += "<p>You find a banana hidden behind a shelf in a shop. (Banana added to your inventory)</p>";
            objectIsInInventory[2] = true;
        }
    },
    tower : function(){
        logText.innerHTML = this.towerText;
        this.atDefault = false;
        this.atTower = true;
        this.atMarket = false;
        this.atAlleyway = false;
    },
    alleyway : function(){
        logText.innerHTML = this.alleywayText;
        this.atDefault = false;
        this.atTower = false;
        this.atMarket = false;
        this.atAlleyway = true;
    }
};

//Thieving Gofers
mapLocation[4][0][2] = {
    gofer : "", //Either large, medium, or small. This variable is only used for V.A.T.S to determine which size gofer appeared

    defaultText1 : "<p>As you walk through a desert, you see a large radioactive gofer, waiting to steal your money. <a href='#' onclick='mapLocation[4][0][2].kill(`large`)'>[Attack It]</a> <a href='#' onclick='mapLocation[4][0][2].runAway()'>[Run Away]</a></p>",
    defaultText2 : "<p>As you walk through a desert, you see a medium-sized radioactive gofer, waiting to steal your money. <a href='#' onclick='mapLocation[4][0][2].kill(`medium`)'>[Attack It]</a> <a href='#' onclick='mapLocation[4][0][2].runAway()'>[Run Away]</a></p>",
    defaultText3 : "<p>As you walk through a desert, you see a small radioactive gofer, waiting to steal your money. <a href='#' onclick='mapLocation[4][0][2].kill(`small`)'>[Attack It]</a> <a href='#' onclick='mapLocation[4][0][2].runAway()'>[Run Away]</a></p>",
    runAwayText : "<p>You successfully ran away from the gofer. You don't see anything else interesting in the desert. <a href='#' onclick='mapLocation[4][0][2].default()'>[Look For Another Gofer]</a></p>",
    winLargeGoferText : "<p>You defeated the large gofer. You find 20 caps on the body. <a href='#' onclick='mapLocation[4][0][2].default()'>[Look For Another Gofer]</a></p>",
    loseLargeGoferText : "<p>The large gofer knocked you out. When you wake up, you find that you lost a lot of caps. <a href='#' onclick='mapLocation[4][0][2].default()'>[Look For Another Gofer]</a></p>",
    winMediumGoferText : "<p>You defeated the medium-sized gofer. You find 10 caps on the body. <a href='#' onclick='mapLocation[4][0][2].default()'>[Look For Another Gofer]</a></p>",
    loseMediumGoferText : "<p>The medium-sized gofer knocked you out. When you wake up, you find that you lost some caps. <a href='#' onclick='mapLocation[4][0][2].default()'>[Look For Another Gofer]</a></p>",
    winSmallGoferText : "<p>You defeated the small gofer. You find 5 caps on the body. <a href='#' onclick='mapLocation[4][0][2].default()'>[Look For Another Gofer]</a></p>",
    loseSmallGoferText : "<p>The small gofer knocked you out. When you wake up, you find that you lost a few caps. <a href='#' onclick='mapLocation[4][0][2].default()'>[Look For Another Gofer]</a></p>",

    kill : function(size){ //Resolving if you kill the gofer or not
        if (size == "large"){
            if (combatPower > 8){
                this.win("large");
            }else if (combatPower == 8){
                var rando = Math.floor(Math.random()*2);
                (rando == 1) ? this.win("large") : this.lose("large")
            }else if (combatPower < 8){
                this.lose("large");
            }
        }else if (size == "medium"){
            if (combatPower > 4){
                this.win("medium");
            }else if (combatPower == 4){
                var rando = Math.floor(Math.random()*2);
                (rando == 1) ? this.win("medium") : this.lose("medium")
            }else if (combatPower < 4){
                this.lose("medium");
            }
        }else if (size == "small"){
            if (combatPower > 2){
                this.win("small");
            }else if (combatPower == 2){
                var rando = Math.floor(Math.random()*2);
                (rando == 1) ? this.win("small") : this.lose("small")
            }else if (combatPower < 2){
                this.lose("small");
            }
        }
    },
    win : function(size){ //if you beat the gofer, do this
        if (size == "large"){
            logText.innerHTML = this.winLargeGoferText;
            object[0].amount += 20;
            object[0].name = "Bottle Caps: "+object[0].amount;
        }else if (size == "medium"){
            logText.innerHTML = this.winMediumGoferText;
            object[0].amount += 10;
            object[0].name = "Bottle Caps: "+object[0].amount;
        }else if (size == "small"){
            logText.innerHTML = this.winSmallGoferText;
            object[0].amount += 5;
            object[0].name = "Bottle Caps: "+object[0].amount;
        }
        this.gofer = "";
    },
    lose : function(size){ //if you don't beat the gofer, do this
        if (size == "large"){
            logText.innerHTML = this.loseLargeGoferText;
            object[0].amount -= 20;
            if (object[0].amount < 0){object[0].amount = 0;}
            object[0].name = "Bottle Caps: "+object[0].amount;
        } else if (size == "medium"){
            logText.innerHTML = this.loseMediumGoferText;
            object[0].amount -= 10;
            if (object[0].amount < 0){object[0].amount = 0;}
            object[0].name = "Bottle Caps: "+object[0].amount;
        }else if (size == "small"){
            logText.innerHTML = this.loseSmallGoferText;
            object[0].amount -= 5;
            if (object[0].amount < 0){object[0].amount = 0;}
            object[0].name = "Bottle Caps: "+object[0].amount;
        }
        this.gofer = "";
    },
    runAway : function(){
        logText.innerHTML = this.runAwayText;
        this.gofer = "";
    },
    default : function(){
        var rando = Math.floor(Math.random()*10);
        if (rando < 4){
            logText.innerHTML = this.defaultText3;
            this.gofer = "large";
        }else if (rando >= 4 && rando < 7){
            logText.innerHTML = this.defaultText2;
            this.gofer = "medium";
        }else{
            logText.innerHTML = this.defaultText1;
            this.gofer = "small";
        }
    }
};

//Broken Caravan
mapLocation[3][0][4] = {
    defaultText : "<p>You see a <a href='#' onclick='mapLocation[3][0][4].merchant()'>merchant</a> hastily trying to fix a wheel on his broken caravan.</p>",
    merchantText : "<p>\"Sir! Can you help me fix this wheel? I think the Bullet Gang is trailing me. All I need is a wrench, and maybe I can get away.\"</p>",

    merchant : function(){
        logText.innerHTML += this.merchantText;
    }
};

//Abandoned Library
mapLocation[0][0][0] = {
    defaultText : "<p>You see an abandoned <a href='#' onclick='mapLocation[0][0][0].describe(`library`)'>library</a>. <a href='#' onclick='mapLocation[0][0][0].search()'>[Search]</a></p>",

    search : function(){
        if (objectIsInInventory[4] == true || objectIsUsed[4] == true){
            logText.innerHTML += "<p>You don't find anything except a <a href='#' onclick='mapLocation[0][0][0].describe(`sewage`)'>sewage grate</a> outside the library you hadn't noticed before.</p>";
        }else{
            logText.innerHTML += "<p>You manage to find a well-preserved book that wasn't destroyed like the others. (Book added to your inventory)</p>";
            objectIsInInventory[4] = true;
        }
    },
    describe : function(place){
        if (place == "library"){
            logText.innerHTML += "<p>The library is covered in vines and smells of rotting books.</p>";
        }else if (place == "sewage"){
            logText.innerHTML += "<p>Down the metal sewage grate you see some climbing gear. Unfortunately you can't reach it. Perhaps you could get it if you found a way in the sewers...</p>";
        }
    }
};

//Armor Shop
mapLocation[3][0][0] = {
    defaultText : "<p>You see a small wooden bulding with sign that says Wasteland's Finest Armor and Clothes Shop. <a href='#' onclick='mapLocation[3][0][0].enter()'>[Enter]</a></p>",
    enterText : "<p>\"Howdy there pardner,\" says the shopkeeper, \"How can I help you this fine day?\" <a href='#' onclick='mapLocation[3][0][0].lookAtWares()'>[Look At Wares]</a> [Gossip]</p>",
    fancyClothesText : "<p>\"Oh yeah, those clothes are nice, but way too big for anyone to wear. Heck, I reckon a super mutant could wear 'em. They're 5 caps. <a href='#' onclick='mapLocation[3][0][0].buy(5,5)'>[Buy]</a> \"</p>",
    knightArmorText : "<p>\"I found those in some old ruins. They're a bit rusty, and quite a deal heavy, but I'm sure they got a lot of fight left in 'em. They're 30 caps. <a href='#' onclick='mapLocation[3][0][0].buy([6,7,8],30)'>[Buy]</a> \"</p>",
    leatherArmorText : "<p>\"I made those with my own hands. Brahmin hide of course. You can buy them for 15 caps. <a href='#' onclick='mapLocation[3][0][0].buy([9,10,11],15)'>[Buy]</a> \"</p>",
    buyText : "<p>\"Thank you pardner,\" says the shopkeeper as he tips his hat. \"Anything else?\" <a href='#' onclick='mapLocation[3][0][0].lookAtWares()'>[Look At Wares]</a> [Gossip]</p>",

    enter : function(){
        logText.innerHTML = this.enterText;
    },
    lookAtWares : function(){
        logText.innerHTML += "<p>Wares: "+((objectIsInInventory[5] == true || objectIsUsed[5] == true) ? "" : "<a href='#' onclick='mapLocation[3][0][0].view(`fancyClothes`)'>Fancy Clothes</a>  ")+
                             ((objectIsInInventory[6] == true) ? "" : "<a href='#' onclick='mapLocation[3][0][0].view(`knightArmor`)'>Knight Armor</a>  ")+
                             ((objectIsInInventory[9] == true) ? "" : "<a href='#' onclick='mapLocation[3][0][0].view(`leatherArmor`)'>Leather Armor</a>")+"</p>";
    },
    view(object){
        if (object == "fancyClothes"){
            logText.innerHTML += this.fancyClothesText;
        }else if (object == "knightArmor"){
            logText.innerHTML += this.knightArmorText;
        }else if (object == "leatherArmor"){
            logText.innerHTML += this.leatherArmorText;
        }
    },
    buy(objectIndex, price){ //objectIndex can be an integer or an array of integers to buy a group of objects
        if (object[0].amount >= price){
            if (Array.isArray(objectIndex)){
                logText.innerHTML = "You bought the ";
                for (var i=0; i<objectIndex.length; i++){
                    logText.innerHTML += (i != objectIndex.length-1) ? (object[objectIndex[i]].name+", ") : ("and "+object[objectIndex[i]].name+". (");
                }
                for (var i=0; i<objectIndex.length; i++){
                    logText.innerHTML += (i != objectIndex.length-1) ? (object[objectIndex[i]].name+", ") : ("and "+object[objectIndex[i]].name+" added to your inventory)</p>");
                    objectIsInInventory[objectIndex[i]] = true;
                }
            }else{
                logText.innerHTML = "<p>You bought "+object[objectIndex].name+". (Fancy Clothes added to your inventory)</p>";
                objectIsInInventory[objectIndex] = true;
            }
            object[0].amount -= price;
            object[0].name = "Bottle Caps: "+object[0].amount;
            logText.innerHTML += this.buyText;
        }else{
            logText.innerHTML += "<p>You don't have enough bottle caps to buy that item.</p>";
        }
    }
}

//Random Location
mapLocation[0][0][4] = {
    defaultText : "<p>You find a sword stabbed into a rock. <a href='#' onclick='mapLocation[0][0][4].takeSword()'>[Take Sword]</a></p>",
    takeSwordText : "<p>You pull the sword, and you realized it was actually a broken sword that was stuck on the rock. (Broken Sword added to your Inventory)</p>",

    takeSword : function(){
        logText.innerHTML += this.takeSwordText;
        this.defaultText = "<p>You see a rock without a sword on it. Nothing else here.</p>";
        objectIsInInventory[12] = true;
    }
}

//The Lonely Restaurant
mapLocation[2][0][0] = {
    defaultText : "<p>You see a building off the road called the Lonely Restaurant. <a href='#' onclick='mapLocation[2][0][0].enter()'>[Enter]</a></p>",
    enterText : "<p>\"Welcome to the Lonely Restaurant!\" says the waitress, \"What would you like today?\" <a href='#' onclick='mapLocation[2][0][0].lookAtMenu()'>[Look At Menu]</a> [Gossip]</p>",
    lookAtMenuText : "<p>Menu: <a href='#' onclick='mapLocation[2][0][0].view(13)'>Brahmin Steak</a>  <a href='#' onclick='mapLocation[2][0][0].view(14)'>Irradiated Potato</a>  <a href='#' onclick='mapLocation[2][0][0].view(15)'>Sweet Roll</a></p>",
    alreadyHaveFoodText : "<p>\"Hey! You can't order the same food again without eating it first! That'd be a waste!\"</p>",
    brahminSteakText : "<p>\"Brahmin steak is my favorite! Second only to sweet rolls, of course. They cost 3 caps.\" <a href='#' onclick='mapLocation[2][0][0].buy(13,3)'>[Buy]</a></p>",
    potatoText : "<p>\"We grow those potatoes on the farm over there. We try to eat them sparingly. They're 1 cap a piece.\" <a href='#' onclick='mapLocation[2][0][0].buy(14,1)'>[Buy]</a></p>",
    sweetRollText : "<p>\"Sweet rolls are the BEST! They taste delicious and aren't even irradiated. They cost 5 caps.\" <a href='#' onclick='mapLocation[2][0][0].buy(15,1)'>[Buy]</a></p>",
    buyText : "<p>\"Thank you for eating at the Lonely Restaurant! Is there anything else I can do for you?\"  <a href='#' onclick='mapLocation[2][0][0].lookAtMenu()'>[Look At Menu]</a> [Gossip]</p>",

    enter : function(){
        logText.innerHTML = this.enterText;
    },
    lookAtMenu : function(){
        logText.innerHTML += this.lookAtMenuText;
    },
    view(objectIndex){
        if (objectIsInInventory[objectIndex] == true){
            logText.innerHTML += this.alreadyHaveFoodText;
        }else{
            if (objectIndex == 13){
                logText.innerHTML += this.brahminSteakText;
            }else if (objectIndex == 14){
                logText.innerHTML += this.potatoText;
            }else if (objectIndex == 15){
                logText.innerHTML += this.sweetRollText;
            }
        }
    },
    buy(objectIndex, price){ //objectIndex can be an integer or an array of integers to buy a group of objects
        if (object[0].amount >= price){
            logText.innerHTML = "<p>You bought the "+object[objectIndex].name+". ("+object[objectIndex].name+" added to your inventory)</p>";
            objectIsInInventory[objectIndex] = true;
            object[0].amount -= price;
            object[0].name = "Bottle Caps: "+object[0].amount;
            logText.innerHTML += this.buyText;
        }else{
            logText.innerHTML += "<p>You don't have enough bottle caps to buy that item.</p>";
        }
    }
}