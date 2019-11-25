


//variable "location" is a reserved word in JavaScript. Took me a while to figure it out. Always led me to the url [object%20Object]
//mapLocation[x][y][z]
var mapLocation = [ //holds all the functions of each place
    [[],[],[],[],[]],
    [[],[],[],[],[]],
    [[],[],[],[],[]],
    [[],[],[],[],[]],
    [[],[],[],[],[]]
];

var mapLocationVars = [ //holds all the variables in each place
    [[],[],[],[],[]],
    [[],[],[],[],[]],
    [[],[],[],[],[]],
    [[],[],[],[],[]],
    [[],[],[],[],[]]
];




function saveGame(){
    //Save inventory
    localStorage.setItem('objectIsInInventory', JSON.stringify(objectIsInInventory));
    localStorage.setItem('objectIsUsed', JSON.stringify(objectIsUsed));
    //Save caps
    localStorage.caps = object[0].amount;
    //Save equipment
    localStorage.setItem('equipment',JSON.stringify(equipment));
    //Save settings
    localStorage.setItem('settings',JSON.stringify(settings));
    //Save notes
    localStorage.setItem('notes',document.getElementById("notesArea").value);
    //Save Location
    localStorage.setItem('X',X);
    localStorage.setItem('Y',Y);
    localStorage.setItem('Z',Z);
    //Save log text
    localStorage.setItem('logtext',logText.innerHTML);
    //Saving Location states
    localStorage.setItem('StartingLocation', JSON.stringify(mapLocationVars[2][0][2]));
    localStorage.setItem('AbandonedCity', JSON.stringify(mapLocationVars[0][0][1]));
    localStorage.setItem('ThievingGofers', JSON.stringify(mapLocationVars[4][0][2]));
    localStorage.setItem('BrokenCaravan', JSON.stringify(mapLocationVars[3][0][4]));
    localStorage.setItem('AbandonedLibrary', JSON.stringify(mapLocationVars[0][0][0]));
    localStorage.setItem('ArmorShop', JSON.stringify(mapLocationVars[3][0][0]));
    localStorage.setItem('StuckSword', JSON.stringify(mapLocationVars[0][0][4]));
    localStorage.setItem('TheLonelyRestaurant', JSON.stringify(mapLocationVars[2][0][0]));
    localStorage.setItem('SuperMutantBase', JSON.stringify(mapLocationVars[0][0][2]));
    localStorage.setItem('AbandonedGunStore', JSON.stringify(mapLocationVars[1][0][0]));
    localStorage.setItem('RaggedyShack', JSON.stringify(mapLocationVars[4][0][4]));
    localStorage.setItem('AbandonedExplosiveStore', JSON.stringify(mapLocationVars[1][0][1]));
    localStorage.setItem('BulletGang', JSON.stringify(mapLocationVars[3][0][3]));
    localStorage.setItem('DefenderOfPineapple', JSON.stringify(mapLocationVars[4][0][3]));
    localStorage.setItem('Sewers', JSON.stringify(mapLocationVars[0][1][1]));
    localStorage.setItem('Sewers2', JSON.stringify(mapLocationVars[0][1][0]));
    localStorage.setItem('Cliff', JSON.stringify(mapLocationVars[1][0][2]));
    localStorage.setItem('GoldMine', JSON.stringify(mapLocationVars[1][0][3]));
    localStorage.setItem('NovaGang', JSON.stringify(mapLocationVars[4][0][1]));
    localStorage.setItem('BrotherhoodOfSteel', JSON.stringify(mapLocationVars[0][0][3]));
}



function loadGame(){
    //Load Inventory
    objectIsInInventory = JSON.parse(localStorage.getItem('objectIsInInventory'));
    objectIsUsed = JSON.parse(localStorage.getItem('objectIsUsed'));
    //Load Caps
    object[0].amount = Number(localStorage.caps);
    object[0].name = "Bottle Caps: "+object[0].amount;
    //Load Equipment
    equipment = JSON.parse(localStorage.getItem('equipment'));
    if (equipment[0] != -1){document.getElementById("headText").innerHTML = "<p>"+object[equipment[0]].name+" +"+object[equipment[0]].combatBonus+"</p>";}
    if (equipment[1] != -1){document.getElementById("leftText").innerHTML = "<p>"+object[equipment[1]].name+" +"+object[equipment[1]].combatBonus+"</p>";}
    if (equipment[2] != -1){document.getElementById("rightText").innerHTML = "<p>"+object[equipment[2]].name+" +"+object[equipment[2]].combatBonus+"</p>";}
    if (equipment[3] != -1){document.getElementById("bodyText").innerHTML = "<p>"+object[equipment[3]].name+" +"+object[equipment[3]].combatBonus+"</p>";}
    if (equipment[4] != -1){document.getElementById("feetText").innerHTML = "<p>"+object[equipment[4]].name+" +"+object[equipment[4]].combatBonus+"</p>";}
    recalcuateCombatPower()
    //Load Pineapple option
    if (objectIsUsed[26]){
        document.getElementById("redButton").style.visibility = 'visible';
    }
    //Load Settings
    settings = JSON.parse(localStorage.getItem('settings'));
    changeSetting("color",settings.color,false);
    //Load Notes
    document.getElementById('notesArea').value = localStorage.getItem('notes');
    //Load Location
    X = Number(localStorage.getItem('X'));
    Y = Number(localStorage.getItem('Y'));
    Z = Number(localStorage.getItem('Z'));
    x = X;
    y = Y;
    z = Z;
    xLabel.innerHTML = "X: "+x;
    yLabel.innerHTML = "Y: "+y;
    zLabel.innerHTML = "Z: "+z;
    //Load Log text
    logText.innerHTML = localStorage.getItem('logtext');

    //Load Locations
    mapLocationVars[2][0][2] = JSON.parse(localStorage.getItem('StartingLocation'));
    mapLocationVars[0][0][1] = JSON.parse(localStorage.getItem('AbandonedCity'));
    mapLocationVars[4][0][2] = JSON.parse(localStorage.getItem('ThievingGofers'));
    mapLocationVars[3][0][4] = JSON.parse(localStorage.getItem('BrokenCaravan'));
    mapLocationVars[0][0][0] = JSON.parse(localStorage.getItem('AbandonedLibrary'));
    mapLocationVars[3][0][0] = JSON.parse(localStorage.getItem('ArmorShop'));
    mapLocationVars[0][0][4] = JSON.parse(localStorage.getItem('StuckSword'));
    mapLocationVars[2][0][0] = JSON.parse(localStorage.getItem('TheLonelyRestaurant'));
    mapLocationVars[0][0][2] = JSON.parse(localStorage.getItem('SuperMutantBase'));
    mapLocationVars[1][0][0] = JSON.parse(localStorage.getItem('AbandonedGunStore'));
    mapLocationVars[4][0][4] = JSON.parse(localStorage.getItem('RaggedyShack'));
    mapLocationVars[1][0][1] = JSON.parse(localStorage.getItem('AbandonedExplosiveStore'));
    mapLocationVars[3][0][3] = JSON.parse(localStorage.getItem('BulletGang'));
    mapLocationVars[4][0][3] = JSON.parse(localStorage.getItem('DefenderOfPineapple'));
    mapLocationVars[0][1][1] = JSON.parse(localStorage.getItem('Sewers'));
    mapLocationVars[0][1][0] = JSON.parse(localStorage.getItem('Sewers2'));
    mapLocationVars[1][0][2] = JSON.parse(localStorage.getItem('Cliff'));
    mapLocationVars[1][0][3] = JSON.parse(localStorage.getItem('GoldMine'));
    mapLocationVars[4][0][1] = JSON.parse(localStorage.getItem('NovaGang'));
    mapLocationVars[0][0][3] = JSON.parse(localStorage.getItem('BrotherhoodOfSteel'));
}



function resetGame(){
    localStorage.playedBefore = true;//Saying this function has been run before, and doesn't need to anymore at the beginning of the game

    //Reset Inventory
    //Creating inventory array that has the same number of indexes as the object array, and returns true or false to whether the object is in the inventory
    for (var i=0; i<object.length; i++){
        objectIsInInventory[i] = false;
    }
    objectIsInInventory[0] = true;
    objectIsInInventory[1] = true;
    //Creating a similar array as the inventory one, but determines if an objects has been used or not
    for (var i=0; i<object.length; i++){
        objectIsUsed[i] = false;
    }
    //Reset Caps
    object[0].amount = 0;
    object[0].name = "Bottle Caps: "+object[0].amount;
    //Reset Equipment
    equipment = [-1,-1,-1,-1,-1];
    document.getElementById("headText").innerHTML = "<p>*unequipped*</p>";
    document.getElementById("leftText").innerHTML = "<p>*unequipped*</p>";
    document.getElementById("rightText").innerHTML = "<p>*unequipped*</p>";
    document.getElementById("bodyText").innerHTML = "<p>*unequipped*</p>";
    document.getElementById("feetText").innerHTML = "<p>*unequipped*</p>";
    recalcuateCombatPower()
    //Reset Pineapple Option
    document.getElementById("redButton").style.visibility = 'hidden';
    //Reset Notes
    document.getElementById('notesArea').value = "Type stuff here";
    //Reset Location
    X = 2;
    Y = 0;
    Z = 2;
    x = 2;
    y = 0;
    z = 2;
    xLabel.innerHTML = "X: "+x;
    yLabel.innerHTML = "Y: "+y;
    zLabel.innerHTML = "Z: "+z;
    //Reset Log text
    logText.innerHTML="<p>You wake up in a grassy field. You see a large wacky <a href='#' onclick='describe(`machine`)'>machine</a> in front of you, which you don't remember anything about, except that you need a 128 GB storage module, 8 ounces of gold, and a radiation-proof suit in order to fix it.</p>";
    //Reset hidden buttons
    document.getElementsByClassName("button2")[0].hidden = false;
    document.getElementsByClassName("button2")[2].hidden = false;
    document.getElementsByClassName("button2")[3].hidden = false;
    document.getElementsByClassName("button2")[5].hidden = false;

    //Reset location states
    //Starting Location
    localStorage.setItem('StartingLocation', JSON.stringify({
        defaultText : "<p>You see a large wacky <a href='#' onclick='describe(`machine`)'>machine</a> in front of you, which you don't remember anything about, except that you need a 128 GB storage module, 8 ounces of gold, and a radiation-proof suit in order to fix it.</p>",
        
        hasGold : false,
        hasModule : false,
        appliedGold : false,
        appliedModule : false,
    }));
    mapLocationVars[2][0][2] = JSON.parse(localStorage.getItem('StartingLocation'));

    //Abandoned city
    localStorage.setItem('AbandonedCity', JSON.stringify({
        atDefault : true,
        atMarket : false,
        atTower : false,
        atAlleyway : false,
        beenCheated : false,
        isFriends : false,

        defaultText : "<p>You walk into an abandoned town. You see a marketplace, a tower, and an alleyway. <a href='#'onclick='mapLocation[0][0][1].marketplace()'>[Go to Marketplace]</a> <a href='#'onclick='mapLocation[0][0][1].tower()'>[Go to Tower]</a> <a href='#'onclick='mapLocation[0][0][1].alleyway()'>[Go to Alleyway]</a></p>",
        marketplaceText : "<p>The marketplace is abandoned with hardly anything useful left. <a href='#' onclick='mapLocation[0][0][1].marketplaceSearch()'>[Search]</a> <a href='#' onclick='mapLocation[0][0][1].default()'>[Back to City]</a></p>",
        towerText : "<p>The tower appears to be a wizard tower. Someone dressed in a wizard robe looks out the window and says, \"Oi there! I need a banana for one of my potions! Please get me one and I'll reward thee greatly!\" "+
                    "<a href='#' onclick='mapLocation[0][0][1].default()'>[Back to City]</a></p>",
        alleywayText : "<p>In the alleyway you find a <a href='#' onclick='mapLocation[0][0][1].sewers()'>ladder</a> that leads into the sewers. "+
                    "<a href='#' onclick='mapLocation[0][0][1].default()'>[Back to City]</a></p>",
    }));
    mapLocationVars[0][0][1] = JSON.parse(localStorage.getItem('AbandonedCity'));

    //Thieving Gofers
    localStorage.setItem('ThievingGofers', JSON.stringify({
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
    }));
    mapLocationVars[4][0][2] = JSON.parse(localStorage.getItem('ThievingGofers'));

    //Broken Caravan
    localStorage.setItem('BrokenCaravan', JSON.stringify({
        defaultText : "<p>You see a <a href='#' onclick='mapLocation[3][0][4].merchant()'>merchant</a> hastily trying to fix a wheel on his broken caravan.</p>",
        merchantText : "<p>\"Hello there! Can you help me fix this wheel? I think the Bullet Gang is trailing me. All I need is a wrench, and maybe I can get away.\"</p>",
    }));
    mapLocationVars[3][0][4] = JSON.parse(localStorage.getItem('BrokenCaravan'));

    //Abandoned Library
    localStorage.setItem('AbandonedLibrary', JSON.stringify({
        defaultText : "<p>You see an abandoned <a href='#' onclick='describe(`library`)'>library</a>. <a href='#' onclick='mapLocation[0][0][0].search()'>[Search]</a></p>",
    }));
    mapLocationVars[0][0][0] = JSON.parse(localStorage.getItem('AbandonedLibrary'));

    //Armor Shop
    localStorage.setItem('ArmorShop', JSON.stringify({
        defaultText : "<p>You see a small wooden bulding with sign that says Wasteland's Finest Armor and Clothes Shop. <a href='#' onclick='mapLocation[3][0][0].enter()'>[Enter]</a></p>",
        enterText : "<p>\"Howdy there pardner,\" says the shopkeeper, \"How can I help you this fine day?\" <a href='#' onclick='mapLocation[3][0][0].lookAtWares()'>[Look At Wares]</a> <a href='#' onclick='gossip(`armor`)'>[Gossip]</a></p>",
        fancyClothesText : "<p>\"Oh yeah, those clothes are nice, but way too big for anyone to wear. Heck, I reckon a super mutant could wear 'em. They're 5 caps. <a href='#' onclick='mapLocation[3][0][0].buy(5,5)'>[Buy]</a> \"</p>",
        knightArmorText : "<p>\"I found those in some old ruins. They're a bit rusty, and quite a deal heavy, but I'm sure they got a lot of fight left in 'em. They're 30 caps. <a href='#' onclick='mapLocation[3][0][0].buy([6,7,8],30)'>[Buy]</a> \"</p>",
        leatherArmorText : "<p>\"I made those with my own hands. Brahmin hide of course. You can buy them for 15 caps. <a href='#' onclick='mapLocation[3][0][0].buy([9,10,11],15)'>[Buy]</a> \"</p>",
        buyText : "<p>\"Thank you pardner,\" says the shopkeeper as he tips his hat. \"Anything else?\" <a href='#' onclick='mapLocation[3][0][0].lookAtWares()'>[Look At Wares]</a> <a href='#' onclick='gossip(`armor`)'>[Gossip]</a></p>",
        canTalk : false,
    }));
    mapLocationVars[3][0][0] = JSON.parse(localStorage.getItem('ArmorShop'));

    //Stuck Sword
    localStorage.setItem('StuckSword', JSON.stringify({
        defaultText : "<p>You find a sword stabbed into a rock. <a href='#' onclick='mapLocation[0][0][4].takeSword()'>[Take Sword]</a></p>",
        takeSwordText : "<p>You pull the sword, and you realize it was actually a broken sword that was stuck on the rock. (Broken Sword added to inventory)</p>",
    }));
    mapLocationVars[0][0][4] = JSON.parse(localStorage.getItem('StuckSword'));

    //The Lonely Restaurant
    localStorage.setItem('TheLonelyRestaurant', JSON.stringify({
        defaultText : "<p>You see a building off the road called the Lonely Restaurant. <a href='#' onclick='mapLocation[2][0][0].enter()'>[Enter]</a></p>",
        enterText : "<p>\"Welcome to the Lonely Restaurant!\" says the waitress, \"What would you like today?\" <a href='#' onclick='mapLocation[2][0][0].lookAtMenu()'>[Look At Menu]</a> <a href='#' onclick='gossip(`restaurant`)'>[Gossip]</a></p>",
        lookAtMenuText : "<p>Menu: <a href='#' onclick='mapLocation[2][0][0].view(13)'>Brahmin Steak</a>  <a href='#' onclick='mapLocation[2][0][0].view(14)'>Irradiated Potato</a>  <a href='#' onclick='mapLocation[2][0][0].view(15)'>Sweet Roll</a></p>",
        alreadyHaveFoodText : "<p>\"Hey! You can't order the same food again without eating it first! That'd be a waste!\"</p>",
        brahminSteakText : "<p>\"Brahmin steak is my favorite! Second only to sweet rolls, of course. They cost 3 caps.\" <a href='#' onclick='mapLocation[2][0][0].buy(13,3)'>[Buy]</a></p>",
        potatoText : "<p>\"We grow those potatoes on the farm over there. We try to eat them sparingly. They're 1 cap a piece.\" <a href='#' onclick='mapLocation[2][0][0].buy(14,1)'>[Buy]</a></p>",
        sweetRollText : "<p>\"Sweet rolls are the BEST! They taste delicious and aren't even irradiated. They cost 5 caps.\" <a href='#' onclick='mapLocation[2][0][0].buy(15,1)'>[Buy]</a></p>",
        buyText : "<p>\"Yay! Thanks for eating at the Lonely Restaurant! Is there anything else I can do for you?\"  <a href='#' onclick='mapLocation[2][0][0].lookAtMenu()'>[Look At Menu]</a> <a href='#' onclick='gossip(`restaurant`)'>[Gossip]</a></p>",
        canTalk : false,
        isFriends : false,
    }));
    mapLocationVars[2][0][0] = JSON.parse(localStorage.getItem('TheLonelyRestaurant'));

    //Super Mutant Base
    localStorage.setItem('SuperMutantBase', JSON.stringify({
        defaultText : "<p>You see a fortress at the top of a hill. It seems dangerous. <a href='#' onclick='mapLocation[0][0][2].runUp()'>[Run up]</a> <a href='#' onclick='mapLocation[0][0][2].walkUp()'>[Walk up]</a> <a href='#' onclick='mapLocation[0][0][2].sneakUp()'>[Sneak up]</a></p>",
        walkUpText : "<p>You walk up to the top of the hill and a <a href='#' onclick='describe(`supermutant`)'>Super Mutant</a> stands there and says, \"What's it you want, human?\" <a href='#' onclick='mapLocation[0][0][2].attack()'>[\"I want you to die\" (Attack)]</a> <a href='#' onclick='mapLocation[0][0][2].help()'>[\"I want to help you\"]</a></p>",
        sneakUpText : "<p>You sneak up to the top of the hill and see a <a href='#' onclick='describe(`supermutant`)'>Super Mutant</a> going in and out of the fortress. <a href='#' onclick='mapLocation[0][0][2].attack()'>[Attack]</a> <a href='#' onclick='mapLocation[0][0][2].help()'>[\"Hey there, need help?\" (Talk)]</a></p>",
        winText : "<p>You killed the Super Mutant and took his Power Armor nearby. (Power Helmet, Power Body, and Power Boots added to inventory)</p>",
        winText2 : "<p>\"As you killed the Super Mutant, his last words were \"Why.. I thought you were my friend...\" You took his Power Armor nearby (Power Helmet, Power Body, and Power Boots added to inventory)</p>",
        helpText : "<p>\"Help me? No human has asked me that before, except when I was a human. I wish the humans would treat me better again.\" <a href='#' onclick='mapLocation[0][0][2].help2()'>[\"Maybe you can start by not shooting at them\"]</a></p>",
        helpText2 : "<p>\"Yeah, I suppose I just assume they want my stuff. Maybe if I act more like a human, they'll be more friendly to me. Alright, if you want to help, get me the best human clothes, the best human food, and the best human book.\" <a href='#' onclick='mapLocation[0][0][2].help3()'>[\"I'll see to it\"]</a></p>",
        helpText3 : "<p>\"Oh, and as a reward, you can have the Power Armor I found. It's not like it fits me anyway. Good luck human friend! \"</p>", 

        isFriends : false,
        canAttack : false, //for V.A.T.S., is true when player has option to attack
        isDead : false,
        hasClothes : false,
        hasFood : false,
        hasBook : false,
    }));
    mapLocationVars[0][0][2] = JSON.parse(localStorage.getItem('SuperMutantBase'));

    //Abandoned gun store
    localStorage.setItem('AbandonedGunStore', JSON.stringify({
        defaultText  : "<p>You find an abandoned gun shop. <a href='#' onclick='mapLocation[1][0][0].search()'>[Search]</a></p>",
        searchText : "<p>You don't find any guns, but you do find a broken pistol and a lockpick. (Broken Pistol and Lockpick added to Inventory)</p>",
    }));
    mapLocationVars[1][0][0] = JSON.parse(localStorage.getItem('AbandonedGunStore'));

    //Raggedy Shack
    localStorage.setItem('RaggedyShack', JSON.stringify({
        defaultText : "<p>You see an old man living in a raggedy shack. \"Hello there,\" he says, \"Welcome to my humble abode.\" <a href='#' onclick='mapLocation[4][0][4].search()'>[Search]</a> <a href='#' onclick='mapLocation[4][0][4].talk()'>[Talk]</a></p>",
        searchText : "<p>You don't find anything useful, just some mechanic equipment you don't need. \"Hey! You can't search my place like it's some abandoned site!\"</p>",
        talkText : "<p>\"I was a weapon mechanic for the Brotherhood of Steel. I got kicked out, and they'd kill me if I got too close. So now I live here.\" <a href='#' onclick='mapLocation[4][0][4].mechanic()'>[\"Weapon Mechanic?\"]</a></p>",
        mechanicText : "<p>\"That's right. I can fix any broken weapons you have for just 20 caps. Just try to keep it quiet though, I don't want to attract the attention of the Brotherhood of Steel.\"</p>",
    }));
    mapLocationVars[4][0][4] = JSON.parse(localStorage.getItem('RaggedyShack'));

    //Abandoned explosive store
    localStorage.setItem('AbandonedExplosiveStore', JSON.stringify({
        defaultText : "<p>You see an abandoned store that once sold explosives. <a href='#' onclick='mapLocation[1][0][1].search()'>[Search]</a></p>",
        searchText : "<p>Most of the store has already been ransacked except for an unopened <a href='#' onclick='describe(`safe`)'>safe</a>.</p>",
        searchText2 : "<p>Most of the store has already been ransacked. You don't find anything useful.</p>",
    }));
    mapLocationVars[1][0][1] = JSON.parse(localStorage.getItem('AbandonedExplosiveStore'));

    //Bullet Gang
    localStorage.setItem('BulletGang', JSON.stringify({
        canAttack : true,
        objectsOwned : [23,24], //objects that you'll get if you kill the bullet gang
        moneyOwned : 100,
    }));
    mapLocationVars[3][0][3] = JSON.parse(localStorage.getItem('BulletGang'));

    //Defender of Pineapple
    localStorage.setItem('DefenderOfPineapple', JSON.stringify({
        defaultText : "<p>You see someone aiming a minigun at you from far away at their camp. You get to cover as he's firing it. <a href='#' onclick='mapLocation[4][0][3].attack()'>[Attack]</a> <a href='#' onclick='mapLocation[4][0][3].walk()'>[Walk Forward Peacefully]</a></p>",
        defaultText2 : "<p>You walk up to the camp without being shot by a minigun. \"What do ya want?\" says the crazy man there. <a href='#' onclick='mapLocation[4][0][3].talk()'>[\"You said something about a plant?\"]</a> <a href='#' onclick='mapLocation[4][0][3].offer()'>[\"Can I have your minigun?\"]</a></p>",
        winText : "<p>Even with a minigun, he is no match for your superior levels of Combat Power. You take his minigun and a pineapple it looks like he was protecting. (Minigun and Rotting Pineapple added to Inventory)</p>",
        walkText : "<p>You try to walk toward him non-threateningly, but he still shoots his minigun at you. You return to cover. You think it might help if you weren't holding any weapons.</p>",
        walkText2 : "<p>You walk out not-threateningly with your hands up. The minigun stops firing, and you reach his camp. \"Are you here for my plant?\" he immediately says. <a href='#' onclick='mapLocation[4][0][3].talk()'>[\"No, why would I?\"]</a> <a href='#' onclick='mapLocation[4][0][3].offer()'>[\"I'd rather have your minigun\"]</a></p>",
        talkText : "<p>\"Everyone's after my special plant! I've gotta protect it from them gofers in the south and them gang members in the west. Don't go near them gang members by the way. They're trouble.\" <a href='#' onclick='mapLocation[4][0][3].talk2()'>[\"What's so special about the plant?\"]</a></p>",
        talk2Text : "<p>\"Here. Lemme show ya, but don't touch it! I found it here in all its glory one day, and I knew I needed to protect it, so I bunkered up here with my minigun.\" <a href='#' onclick='mapLocation[4][0][3].talk3()'>[\"That's just a pineapple\"]</a></p>",
        talk3Text : "<p>\"No it ain't! It's a gift from the gods above! Now git outta here!\"</p>",
        offerText : "<p>\"Oh, ya want this? I need this to protect my plant. But... if you can git me a machine gun, a sniper, a pistol and a grenade launcher, it's yours!\"</p>",
        
        isFriends : false,
        offerMade : false,
        canAttack : true,
        isDead : false,
        hasPistol : false,
        hasSniper : false,
        hasMachinegun : false,
        hasGrenadelauncher : false,
    }));
    mapLocationVars[4][0][3] = JSON.parse(localStorage.getItem('DefenderOfPineapple'));

    //Sewers
    localStorage.setItem('Sewers', JSON.stringify({
        defaultText : "<p>You climb down into the stinky, radioactive sewers. There's an aggressive alligator in the mucky river nearby blocking your way into the next area of the sewers. <a href='#' onclick='mapLocation[0][1][1].attack()'>[Attack Alligator]</a> <a href='#' onclick='mapLocation[0][1][1].leave()'>[Leave Sewers]</a></p>",
        defaultText2 : "<p>You climb down into the stinky, radioactive sewers. You see the alligator's dead body floating in the muck. <a href='#' onclick='mapLocation[0][1][1].explore()'>[Explore Farther]</a> <a href='#' onclick='mapLocation[0][1][1].leave()'>[Leave Sewers]</a></p>",
        winText : "<p>You slay the radioactive reptile. It's body now floats on the stagnant river of muck. <a href='#' onclick='mapLocation[0][1][1].explore()'>[Explore Farther]</a> <a href='#' onclick='mapLocation[0][1][1].leave()'>[Leave Sewers]</a></p>",
        canAttack : true,
    }));
    mapLocationVars[0][1][1] = JSON.parse(localStorage.getItem('Sewers'));

    //Sewers 2
    localStorage.setItem('Sewers2', JSON.stringify({
        defaultText : "<p>As you explore, you see some <a href='#' onclick='mapLocation[0][1][0].gear()'>climbing gear</a> on the sewer floor. <a href='#' onclick='mapLocation[0][1][0].back()'>[Go Back]</a></p>",
        defaultText2 : "<p>You explore farther in the sewers. You don't see anything useful or interesting except for the disgusting scent. <a href='#' onclick='mapLocation[0][1][0].back()'>[Go Back]</a></p>",
    }));
    mapLocationVars[0][1][0] = JSON.parse(localStorage.getItem('Sewers2'));

    //Cliff
    localStorage.setItem('Cliff', JSON.stringify({
        defaultText : "<p>You come upon the face of a <a href='#' onclick='describe(`cliff`)'>cliff</a>. You happen to see a <a href='#' onclick='describe(`pickaxe`)'>pickaxe</a> stuck into the side of it.</p>",
        defaultText2 : "<p>You come upon the face of a <a href='#' onclick='describe(`cliff`)'>cliff</a>. There was a pickaxe here, but you took it already.</p>"
    }));
    mapLocationVars[1][0][2] = JSON.parse(localStorage.getItem('Cliff'));

    //Gold Mine
    localStorage.setItem('GoldMine', JSON.stringify({
        defaultText : "<p>You see an abandoned <a href='#' onclick='describe(`mine`)'>mine</a> with noxious fumes coming out of it. <a href='#' onclick='mapLocation[1][0][3].enter()'>[Enter Mine]</a> </p>",
        enterText : "<p>There's a <a href='#' onclick='describe(`leftPath`)'>left path</a> and a <a href='#' onclick='describe(`rightPath`)'>right path</a> in the cave. <a href='#' onclick='mapLocation[1][0][3].enterLeft()'>[Enter Left Path]</a> <a href='#' onclick='mapLocation[1][0][3].enterRight()'>[Enter Right Path]</a></p>",
        enterLeftText : "<p>You travel deep into the cave, and it gets too dark to see. You're going to need a light. <a href='#' onclick='mapLocation[1][0][3].enter()'>[Exit Path]</a></p>",
        enterLeftText2 : "<p>With the help of your lantern, you can see some traces of <a href='#' onclick='describe(`gold`)'>gold</a> on the walls deep in the cavern. <a href='#' onclick='mapLocation[1][0][3].enter()'>[Exit Path]</a></p>",
        enterLeftText3 : "<p>With the help of your lantern, you can see divits in the walls where you mined gold veins. You don't see any gold left. <a href='#' onclick='mapLocation[1][0][3].enter()'>[Exit Path]</a></p>",
        enterRightText : "<p>As you travel, there's a branching tunnel from the main path. <a href='#' onclick='mapLocation[1][0][3].forward()'>[Continue Forward]</a> <a href='#' onclick='mapLocation[1][0][3].enterBranch()'>[Enter Side Tunnel]</a> <a href='#' onclick='mapLocation[1][0][3].enter()'>[Exit Path]</a></p>",
        enterBranchText : "<p>The tunnel leads to a little outcove where you see an old lantern. (Lantern added to Inventory) <a href='#' onclick='mapLocation[1][0][3].enterRight()'>[Back]</a></p>",
        enterBranchText2 : "<p>The tunnel leads to an empty outcove. You once found an old lantern here. <a href='#' onclick='mapLocation[1][0][3].enterRight()'>[Back]</a></p>",
        enterForwardText : "<p>You walk into a room with a large <a href='#' onclick='describe(`refinery`)'>machine</a> in the center with two buttons. You can hear it still humming. <a href='#' onclick='mapLocation[1][0][3].buttonOne()'>[Press Button 1] </a><a href='#' onclick='mapLocation[1][0][3].buttonTwo()'>[Press Button 2]</a>  <a href='#' onclick='mapLocation[1][0][3].enterRight()'>[Back]</a></p>",
        button1Text : "<p>You press the first button, and the machine's conveyer belt activates for a bit. Nothing seems to be coming out of the machine however.</p>",
        button1Text1 : "<p>You press the first button, and the machine's conveyer belt activates for a bit. Gold Ore comes out the other end. (Gold Ore added to Inventory)</p>",
        button1Text2 : "<p>You press the first button, and the machine's conveyer belt activates for a bit. Pure Gold comes out the other end. Just enough for the wacky machine. (Gold added to Inventory)</p>",
        button2Text : "<p>You press the second button, and the machine makes a super loud revving noise and makes a lot of heat for a few minutes, than a lot of cold for a few minutes.</p>",

        foundLantern : false,
        minedGold: false,
        inGoldMine : false,
        inRefinery : false,
        goldInRefinery : 0, //1 = in refinery, 2 = purified
    }));
    mapLocationVars[1][0][3] = JSON.parse(localStorage.getItem('GoldMine'));

    //Nova Gang
    localStorage.setItem('NovaGang', JSON.stringify({
        defaultText : "<p>You stumble upon a base, and some people greet you outside. \"Hello,\" says a woman in a captain's hat, \"We're the Nova Clan, established to stop organiations like the Bullet Gang from terrorizing people. Can we help you?\" <a href='#' onclick='mapLocation[4][0][1].ask()'>[\"Do you need any help?\"]</a></p>",
        OGdefaultText : "<p>You stumble upon a base, and some people greet you outside. \"Hello,\" says a woman in a captain's hat, \"We're the Nova Clan, established to stop organiations like the Bullet Gang from terrorizing people. Can we help you?\" <a href='#' onclick='mapLocation[4][0][1].ask()'>[\"Do you need any help?\"]</a></p>",
        helpedText : "<p>You stumble upon a base, and some people greet you outside. \"Hello,\" says a woman in a captain's hat, \"We're the Nova Clan, established to stop organiations like the Bullet Gang from terrorizing people. Can we help you?\" <a href='#' onclick='mapLocation[4][0][1].ask()'>[\"Do you need any help?\"]</a> <a href='#' onclick='mapLocation[4][0][1].helped()'>[\"I killed the Bullet Gang\"]</a></p>",
        askText : "<p>\"Thanks for asking! Yes, we need more firepower. In fact, we need a minigun. If you can find one, that would help a lot. We don't have much caps, so we'll trade it for a radiation suit. Can you do that for us?\"<a href='#' onclick='mapLocation[4][0][1].yes()'>[\"I can do that\"]</a> <a href='#' onclick='mapLocation[4][0][1].no()'>[\"Sorry, can't help you there\"]</a></p>",
        noText : "<p>\"That's alright, thanks for asking.\"</p>",
        yesText : "<p>\"Great! Come back to us with a minigun and we'll give you a radiation suit.\"</p>",
        defaultText2 : "<p>You reach the Nova Clan's base. The Captain greets you outside. \"Hello there! Do you have a minigun for us? Our radiation suit is just waiting for someone to use it.\"</p>",
        helpedText2 : "<p>You reach the Nova Clan's base. The Captain greets you outside. \"Hello there! Do you have a minigun for us? Our radiation suit is just waiting for someone to use it.\" <a href='#' onclick='mapLocation[4][0][1].helped()'>[\"I killed the Bullet Gang\"]</a></p>",
        
        startedQuest : false,
        hasMinigun : false,
        gangDead : false,
        helpedRewardGiven : false,
    }));
    mapLocationVars[4][0][1] = JSON.parse(localStorage.getItem('NovaGang'));

    //The Brotherhood of Steel
    localStorage.setItem('BrotherhoodOfSteel', JSON.stringify({
        defaultText : "<p>You come upon an iron door on the side of a hill. <a href='#' onclick='mapLocation[0][0][3].enter()'>[Open Door]</a></p>",
        enterText : "<p>Surprisingly, it's not locked. On the other side is a small room with another door and a man in Power Armor, staring down at you. \"Who are you?\" <a href='#' onclick='mapLocation[0][0][3].who()'>[\"Who are you?\"]</a> <a href='#' onclick='mapLocation[0][0][3].ask()'>[\"Can I have your Power Armor?\"]</a></p>",
        enterText2 : "<p>You open the door. \"Oh, it's you again,\" the man in Power Armor says on the other side. \"Have you found some Power Armor yet?\" <a href='#' onclick='mapLocation[0][0][3].no()'>[\"No\"]</a> <a href='#' onclick='mapLocation[0][0][3].yes()'>[\"Yes\"]</a><p>",
        whoText : "<p>\"We're the Brotherhood of Steel, a military order who preserves the technology of the past. Now why are you here?\" <a href='#' onclick='mapLocation[0][0][3].join()'>[\"I want to join\"]</a> <a href='#' onclick='mapLocation[0][0][3].who2()'>[\"Do you have a 128GB storage module?\"]</a></p>",
        whoText2 : "<p>\"Probably, but you have to be a member of the Brotherhood of Steel if you want to use it.\"</p>",
        joinText : "<p>\"Heh, good luck with that. Actually, follow me. It'll be fun to see the Elder's reaction.\" <a href='#' onclick='mapLocation[0][0][3].join2()'>[\"Okay\"]</a><p>",
        joinText2 : "<p>The man led you through what seemed like a metallic underground maze before reaching the office of someone important. \"This person wants to join our ranks,\" the man says. \"Hm, come in,\" you hear a woman say. <a href='#' onclick='mapLocation[0][0][3].join3()'>[Go In]</a><p>",
        joinText3 : "<p>The woman, who you find out is the Elder, interviews you. She asks you questions about technology, and, surprisingly, all the answers come to you. Apparently, you have a vast knowledge of all things technology. <a href='#' onclick='mapLocation[0][0][3].join4()'>[Finish]</a><p>",
        joinText4 : "<p>Finally, she says, \"I think you are a great candidate, but first you must find a full suit of Power Armor for us, and then we'll add you to our brotherhood.\" <a href='#' onclick='mapLocation[0][0][3].join5()'>[Accept]</a><p>",
        joinText5 : "<p>The man in power armor looked utterly surprised. \"You are excused,\" the Elder said.</p>",
        askText : "<p>\"What? Of course not. It's property of the Brotherhood of Steel, and we need more of them. Now why are you here?\" <a href='#' onclick='mapLocation[0][0][3].join()'>[\"I want to join\"]</a> <a href='#' onclick='mapLocation[0][0][3].who2()'>[\"Do you have a 128GB storage module?\"]</a></p>",
        askText2 : "<p>\"Ha! That's a good one.\"</p>",
        yesText : "<p>Are you sure you want to continue? You will lose your Power Armor. <a href='#' onclick='mapLocation[0][0][3].yes2()'>[Yes]</a> <a href='#' onclick='mapLocation[0][0][3].enter()'>[No]</a></p>",
        yesText2 : "<p>\"Okay then, let's take you to the Elder.\" He leads you down into the metallic underground maze again, and you reach the Elder's office. \"Good job,\" she says, \"I now consider you a lowest ranking member of the Brotherhood of Steel.\" <a href='#' onclick='mapLocation[0][0][3].finish()'>[\"Can I use a 128 GB Storage Unit?\"]</a></p>",
        finishText : "<p>\"Oh yes of course, we have hundreds of those.\" (Storage Module added to Inventory)</p>",
        yesnoText : "<p>\"Are you sure? Because I don't see it.\" <a href='#' onclick='mapLocation[0][0][3].lie()'>[\"I swear I had it here somewhere...\"]</a></p>",
        lieText : "<p>\"No, I think you're just a terrible liar.\"</p>",
        noText : "<p>\"That's a shame. You better be quick before the Elder changes her mind about making you a member of the Brotherhood of Steel.\" <a href='#' onclick='mapLocation[0][0][3].who2()'>[\"Do you have a 128GB storage module?\"]</a> </a> <a href='#' onclick='mapLocation[0][0][3].ask2()'>[\"Can I have your Power Armor?\"]</a></p>",

        startedQuest : false,
        member : false,
        finished : false,
        canTalk : false,

    }));
    mapLocationVars[0][0][3] = JSON.parse(localStorage.getItem('BrotherhoodOfSteel'));

    changeNav('log');
}



//Loading game
if (localStorage.playedBefore){
    loadGame();
}else{
    resetGame();
}

//Save game every 3 seconds
setInterval('saveGame()', 3000 );


//Starting Location
mapLocation[2][0][2] = {
    getObject : function(){
        if (mapLocationVars[2][0][2].hasGold && mapLocationVars[2][0][2].hasModule){
            mapLocationVars[2][0][2].defaultText = "<p>You see a large wacky <a href='#' onclick='describe(`machine`)'>machine</a> in front of you, which you don't remember anything about, except that now you need a radiation-proof suit in order to fix it.</p>"
        }else if (!mapLocationVars[2][0][2].hasGold && mapLocationVars[2][0][2].hasModule){
            mapLocationVars[2][0][2].defaultText = "<p>You see a large wacky <a href='#' onclick='describe(`machine`)'>machine</a> in front of you, which you don't remember anything about, except that now you need 8 ounces of gold and a radiation-proof suit in order to fix it.</p>"
        }else if (mapLocationVars[2][0][2].hasGold && !mapLocationVars[2][0][2].hasModule){
            mapLocationVars[2][0][2].defaultText = "<p>You see a large wacky <a href='#' onclick='describe(`machine`)'>machine</a> in front of you, which you don't remember anything about, except that now you need a 128 GB storage module and a radiation-proof suit in order to fix it.</p>"
        }else if (!mapLocationVars[2][0][2].hasGold && !mapLocationVars[2][0][2].hasModule){
            mapLocationVars[2][0][2].defaultText = "<p>You see a large wacky <a href='#' onclick='describe(`machine`)'>machine</a> in front of you, which you don't remember anything about, except that you need a 128 GB storage module, 8 ounces of gold, and a radiation-proof suit in order to fix it.</p>"
        }
    },
    storageModule : function(){
        mapLocationVars[2][0][2].appliedModule = true;
        logText.innerHTML = "<p>You remember exactly what to do. You place the storage module into a slot under the machine. <a href='#' onclick='mapLocation[2][0][2].back()'>[Back]</a></p>";
    },
    gold : function(){
        mapLocationVars[2][0][2].appliedGold = true;
        logText.innerHTML = "<p>You remember exactly what to do. You apply the gold in certain areas where wires meet and circuits connect. <a href='#' onclick='mapLocation[2][0][2].back()'>[Back]</a></p>";
    },
    back : function(){
        if (mapLocationVars[2][0][2].hasGold && mapLocationVars[2][0][2].hasModule && equipment[0]==29 && equipment[3]==30 && equipment[4]==31){
            if (mapLocationVars[2][0][2].appliedGold && mapLocationVars[2][0][2].appliedModule){
                logText.innerHTML="<p>You have all of the materials you need to fix this machine. <a href='#' onclick='mapLocation[2][0][2].finish()'>[Finish]</a></p>";
            }else if (!mapLocationVars[2][0][2].appliedGold && mapLocationVars[2][0][2].appliedModule){
                logText.innerHTML="<p>You have all of the materials you need to fix this machine. <a href='#' onclick='mapLocation[2][0][2].gold()'>[Apply Gold]</a></p>";
            }else if (mapLocationVars[2][0][2].appliedGold && !mapLocationVars[2][0][2].appliedModule){
                logText.innerHTML="<p>You have all of the materials you need to fix this machine. <a href='#' onclick='mapLocation[2][0][2].storageModule()'>[Install Storage Module]</p>";
            }else{
                logText.innerHTML="<p>You have all of the materials you need to fix this machine. <a href='#' onclick='mapLocation[2][0][2].storageModule()'>[Install Storage Module]</a> <a href='#' onclick='mapLocation[2][0][2].gold()'>[Apply Gold]</a></p>";
            }
        }else{
            logText.innerHTML = mapLocationVars[2][0][2].defaultText;
        }
    },
    finish : function(){
        logText.innerHTML = "<p>You put all the remaining parts of the ship together, and you finally finish the machine. You hop inside it. <a href='#' onclick='mapLocation[2][0][2].finish2()'>[Turn It On]</a></p>";
    },
    finish2 : function(){
        logText.innerHTML = "<p>As soon as you turn it on, a wave of radiation blasted from the machine. You were unharmed however, thanks to your radiation suit. <a href='#' onclick='mapLocation[2][0][2].finish3()'>[Engage]</a></p>";
    },
    finish3 : function(){
        logText.innerHTML = "<p>Instinctively, you press a set of buttons, and the machine starts spinning in circles. Then it starts hovering above the ground. It's a spaceship! <a href='#' onclick='mapLocation[2][0][2].finish4()'>[Continue]</a></p>";
    },
    finish4 : function(){
        logText.innerHTML = "<p>All of a sudden, your memories flood back. You were a human who lived on mars, and you came to Earth to investigate the effects of the nuclear war that happened long ago. You must have crash landed and lost your memories. Unwittingly, you've already gathered the info you needed. And you got quite the story to tell in the process. <a href='#' onclick='mapLocation[2][0][2].finish5()'>[Fly Back to Mars]</a></p>";
    },
    finish5 : function(){
        logText.innerHTML = "<p>Congratulations! You beat the game! Would you like to restart? <a href='#' onclick='restartGameYes()'>Yes</a></p>";
        document.getElementsByClassName("button2")[0].hidden = true;
        document.getElementsByClassName("button2")[2].hidden = true;
        document.getElementsByClassName("button2")[3].hidden = true;
        document.getElementsByClassName("button2")[5].hidden = true;
    }
}


//Abandoned city
mapLocation[0][0][1] = {
    default : function(){
        logText.innerHTML = mapLocationVars[0][0][1].defaultText;
        mapLocationVars[0][0][1].atDefault = true;
        mapLocationVars[0][0][1].atTower = false;
        mapLocationVars[0][0][1].atMarket = false;
        mapLocationVars[0][0][1].atAlleyway = false;
    },
    marketplace : function(){
        logText.innerHTML = mapLocationVars[0][0][1].marketplaceText;
        mapLocationVars[0][0][1].atDefault = false;
        mapLocationVars[0][0][1].atTower = false;
        mapLocationVars[0][0][1].atMarket = true;
        mapLocationVars[0][0][1].atAlleyway = false;
        /*if (objectIsInInventory[2]){
            logText.innerHTML += "<p>You don't find anything.</p>";
        }*/
    },
    marketplaceSearch : function(){
        if (objectIsInInventory[2] == true || objectIsUsed[2] == true){
            logText.innerHTML += "<p>You don't find anything.</p>";
        }else{
            logText.innerHTML += "<p>You find a banana hidden behind a shelf in a shop. (Banana added to inventory)</p>";
            snd_collect.play();
            objectIsInInventory[2] = true;
        }
    },
    tower : function(){
        logText.innerHTML = mapLocationVars[0][0][1].towerText;
        mapLocationVars[0][0][1].atDefault = false;
        mapLocationVars[0][0][1].atTower = true;
        mapLocationVars[0][0][1].atMarket = false;
        mapLocationVars[0][0][1].atAlleyway = false;
    },
    alleyway : function(){
        logText.innerHTML = mapLocationVars[0][0][1].alleywayText;
        mapLocationVars[0][0][1].atDefault = false;
        mapLocationVars[0][0][1].atTower = false;
        mapLocationVars[0][0][1].atMarket = false;
        mapLocationVars[0][0][1].atAlleyway = true;
    },
    sewers : function(){
        mapLocationVars[0][0][1].atDefault = true;
        mapLocationVars[0][0][1].atTower = false;
        mapLocationVars[0][0][1].atMarket = false;
        mapLocationVars[0][0][1].atAlleyway = false;
        y = 1;
        Y = 1;
        yLabel.innerHTML = 'Y: '+y;
        logText.innerHTML=mapLocation[X][Y][Z].defaultText;
    },
    evilPlan : function(){
        logText.innerHTML = "<p>The wizard throws out a piece of paper. \"That's my plan. Read it, and tell me what you think.\" <a href='#' onclick='mapLocation[0][0][1].evilPlan2()'>[\"I want to help\"]</a> <a href='#' onclick='mapLocation[0][0][1].noEvilPlan()'>[\"I don't want to help\"]</a></p>"; 
        mapLocationVars[0][0][1].towerText = "<p>\"Hello there!\" says the wizard looking out the window, \"Have you read my plan? Do you want to help?\" <a href='#' onclick='mapLocation[0][0][1].evilPlan2()'>[\"Yes\"]</a> <a href='#' onclick='mapLocation[0][0][1].noEvilPlan()'>[\"No\"]</a></p>";  
        //objectIsInInventoy[?] = true
    },
    noEvilPlan : function(){
        logText.innerHTML += "<p>\"Ah, alright fine. But you're not going to like getting blown up all of a sudden!\"</p>";
        mapLocationVars[0][0][1].towerText = "<p>\"Hello there!\" says the wizard looking out the window, \"Have you come to change your mind? Do you want to help?\" <a href='#' onclick='mapLocation[0][0][1].evilPlan2()'>[\"Yes\"]</a> <a href='#' onclick='mapLocation[0][0][1].noEvilPlan()'>[\"No\"]</a></p>";   
    },
    evilPlan2 : function(){
        logText.innerHTML += "<p>\"Great! Come back when you have it!\"</p>";
        mapLocationVars[0][0][1].isFriends = true;
        mapLocationVars[0][0][1].towerText = "<p>\"Hello there!\" says the wizard looking out the window, \"Have you gotten a radiation suit yet?\" <a href='#' onclick='mapLocation[0][0][1].yes()'>[\"Yes\"]</a> <a href='#' onclick='mapLocation[0][0][1].no()'>[\"No\"]</a></p>";
    },
    yes : function(){
        if (objectIsInInventory[29] && objectIsInInventory[30] && objectIsInInventory[31]){
            this.yes2();
        }else{
            this.lie();
        }
    },
    yes2 : function(){
        logText.innerHTML = "<p>\"Ah, yes! Let me show you where the cave is.\" He comes down his tower and leads you to the cave. \"Here's the entrance. Now give me the suit.\" <a href='#' onclick='mapLocation[0][0][1].yes3()'>[Give Suit]</a></p>";
    },
    yes3 : function(){
        objectIsInInventory[29] = false;
        objectIsInInventory[30] = false;
        objectIsInInventory[31] = false;
        logText.innerHTML = "<p>As the wizard enters the cave, he says \"Heheheh. I hope you have a death wish. Because I do.\" He gives a big grin and runs into the cave. You look farther in, and to your horror, see a nuclear bomb. <a href='#' onclick='mapLocation[0][0][1].yes4()'>[Stop the Wizard]</a></p>";
    },
    yes4 : function(){
        logText.innerHTML = "<p>You try your best to stop him, but he was already there before you could do anything. He detonates the nuclear bomb, and everything goes white. You've reached an end. Would you like to restart the game? <a href='#' onclick='restartGameYes()'>Yes</a></p>";
        document.getElementsByClassName("button2")[0].hidden = true;
        document.getElementsByClassName("button2")[2].hidden = true;
        document.getElementsByClassName("button2")[3].hidden = true;
        document.getElementsByClassName("button2")[5].hidden = true;
    },
    no : function(){
        logText.innerHTML += "<p>\"Be quick! I don't have 80 years!\"</p>";
    },
    lie : function(){
        logText.innerHTML += "<p>\"Aha! You lied! I don't know why though. Just say no!\"</p>";
    }
}



//Thieving Gofers

mapLocation[4][0][2] = { 
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
            logText.innerHTML = mapLocationVars[4][0][2].winLargeGoferText;
            object[0].amount += 20;
            object[0].name = "Bottle Caps: "+object[0].amount;
            snd_caps.play();
        }else if (size == "medium"){
            logText.innerHTML = mapLocationVars[4][0][2].winMediumGoferText;
            object[0].amount += 10;
            object[0].name = "Bottle Caps: "+object[0].amount;
            snd_caps.play();
        }else if (size == "small"){
            logText.innerHTML = mapLocationVars[4][0][2].winSmallGoferText;
            object[0].amount += 5;
            object[0].name = "Bottle Caps: "+object[0].amount;
            snd_caps.play();
        }
        mapLocationVars[4][0][2].gofer = "";
    },
    lose : function(size){ //if you don't beat the gofer, do this
        if (size == "large"){
            logText.innerHTML = mapLocationVars[4][0][2].loseLargeGoferText;
            object[0].amount -= 20;
            if (object[0].amount < 0){object[0].amount = 0;}
            object[0].name = "Bottle Caps: "+object[0].amount;
        } else if (size == "medium"){
            logText.innerHTML = mapLocationVars[4][0][2].loseMediumGoferText;
            object[0].amount -= 10;
            if (object[0].amount < 0){object[0].amount = 0;}
            object[0].name = "Bottle Caps: "+object[0].amount;
        }else if (size == "small"){
            logText.innerHTML = mapLocationVars[4][0][2].loseSmallGoferText;
            object[0].amount -= 5;
            if (object[0].amount < 0){object[0].amount = 0;}
            object[0].name = "Bottle Caps: "+object[0].amount;
        }
        mapLocationVars[4][0][2].gofer = "";
    },
    runAway : function(){
        logText.innerHTML = mapLocationVars[4][0][2].runAwayText;
        mapLocationVars[4][0][2].gofer = "";
    },
    default : function(){
        var rando = Math.floor(Math.random()*10);
        if (rando < 4){
            logText.innerHTML = mapLocationVars[4][0][2].defaultText3;
            mapLocationVars[4][0][2].gofer = "large";
        }else if (rando >= 4 && rando < 7){
            logText.innerHTML = mapLocationVars[4][0][2].defaultText2;
            mapLocationVars[4][0][2].gofer = "medium";
        }else{
            logText.innerHTML = mapLocationVars[4][0][2].defaultText1;
            mapLocationVars[4][0][2].gofer = "small";
        }
    }
};



//Broken Caravan

mapLocation[3][0][4] = {
    merchant : function(){
        logText.innerHTML += mapLocationVars[3][0][4].merchantText;
    }
};



//Abandoned Library

mapLocation[0][0][0] = {
    search : function(){
        if (objectIsInInventory[4] == true || objectIsUsed[4] == true){
            logText.innerHTML += "<p>You don't find anything except a <a href='#' onclick='describe(`sewage`)'>sewage grate</a> outside the library you hadn't noticed before.</p>";
        }else{
            logText.innerHTML += "<p>You manage to find a well-preserved book that wasn't destroyed like the others. (Book added to inventory)</p>";
            objectIsInInventory[4] = true;
            snd_collect.play();
        }
    },
};



//Armor Shop

mapLocation[3][0][0] = {
    enter : function(){
        logText.innerHTML = mapLocationVars[3][0][0].enterText;
        mapLocationVars[3][0][0].canTalk = true;
    },
    lookAtWares : function(){
        logText.innerHTML += "<p>Wares: "+((objectIsInInventory[5] == true || objectIsUsed[5] == true) ? "" : "<a href='#' onclick='mapLocation[3][0][0].view(`fancyClothes`)'>Fancy Clothes</a>  ")+
                             ((objectIsInInventory[6] == true  || objectIsUsed[6] == true) ? "" : "<a href='#' onclick='mapLocation[3][0][0].view(`knightArmor`)'>Knight Armor</a>  ")+
                             ((objectIsInInventory[9] == true  || objectIsUsed[9] == true) ? "" : "<a href='#' onclick='mapLocation[3][0][0].view(`leatherArmor`)'>Leather Armor</a>")+"</p>";
    },
    view(object){
        if (object == "fancyClothes"){
            logText.innerHTML += mapLocationVars[3][0][0].fancyClothesText;
        }else if (object == "knightArmor"){
            logText.innerHTML += mapLocationVars[3][0][0].knightArmorText;
        }else if (object == "leatherArmor"){
            logText.innerHTML += mapLocationVars[3][0][0].leatherArmorText;
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
                    logText.innerHTML += (i != objectIndex.length-1) ? (object[objectIndex[i]].name+", ") : ("and "+object[objectIndex[i]].name+" added to inventory)</p>");
                    objectIsInInventory[objectIndex[i]] = true;
                }
            }else{
                logText.innerHTML = "<p>You bought "+object[objectIndex].name+". (Fancy Clothes added to inventory)</p>";
                objectIsInInventory[objectIndex] = true;
            }
            object[0].amount -= price;
            object[0].name = "Bottle Caps: "+object[0].amount;
            logText.innerHTML += mapLocationVars[3][0][0].buyText;
            snd_collect.play();
        }else{
            logText.innerHTML += "<p>You don't have enough bottle caps to buy that item.</p>";
        }
    }
}



//Stuck Sword

mapLocation[0][0][4] = {
    takeSword : function(){
        logText.innerHTML += mapLocationVars[0][0][4].takeSwordText;
        mapLocationVars[0][0][4].defaultText = "<p>You see a rock without a sword on it. Nothing else here.</p>";
        objectIsInInventory[12] = true;
        snd_collect.play();
    }
}


//The Lonely Restaurant

mapLocation[2][0][0] = {
    enter : function(){
        logText.innerHTML = mapLocationVars[2][0][0].enterText;
        mapLocationVars[2][0][0].canTalk = true;
    },
    lookAtMenu : function(){
        logText.innerHTML += mapLocationVars[2][0][0].lookAtMenuText;
    },
    view(objectIndex){
        if (objectIsInInventory[objectIndex] == true){
            logText.innerHTML += mapLocationVars[2][0][0].alreadyHaveFoodText;
        }else{
            if (objectIndex == 13){
                logText.innerHTML += mapLocationVars[2][0][0].brahminSteakText;
            }else if (objectIndex == 14){
                logText.innerHTML += mapLocationVars[2][0][0].potatoText;
            }else if (objectIndex == 15){
                logText.innerHTML += mapLocationVars[2][0][0].sweetRollText;
            }
        }
    },
    buy(objectIndex, price){ //objectIndex can be an integer or an array of integers to buy a group of objects
        if (object[0].amount >= price){
            logText.innerHTML = "<p>You bought the "+object[objectIndex].name+". ("+object[objectIndex].name+" added to inventory)</p>";
            objectIsInInventory[objectIndex] = true;
            object[0].amount -= price;
            object[0].name = "Bottle Caps: "+object[0].amount;
            logText.innerHTML += mapLocationVars[2][0][0].buyText;
            snd_collect.play();
        }else{
            logText.innerHTML += "<p>You don't have enough bottle caps to buy that item.</p>";
        }
    }
}



//Super Mutant Base
mapLocation[0][0][2] = {
    runUp : function(){
        var objIndex = removeRandomObject();
        if (objIndex == -1){
            logText.innerHTML = "<p>You run up the hill and a turret starts firing at you. You get back down before you or any of your stuff gets damaged.</p>";
        }else{
            logText.innerHTML = "<p>You run up the hill and a turret starts firing at you. You get back down, but not before the "+object[objIndex].name+" was hit and destroyed. ("+object[objIndex].name+" removed from Inventory)</p>";
            removeObject(objIndex);
        }
    },
    walkUp : function(){
        logText.innerHTML = mapLocationVars[0][0][2].walkUpText;
        mapLocationVars[0][0][2].canAttack = true;
    },
    sneakUp : function(){
        logText.innerHTML = mapLocationVars[0][0][2].sneakUpText;
        mapLocationVars[0][0][2].canAttack = true;
    },
    help : function(){
        logText.innerHTML = mapLocationVars[0][0][2].helpText;
        mapLocationVars[0][0][2].canAttack = false;
    },
    help2 : function(){
        logText.innerHTML += mapLocationVars[0][0][2].helpText2;
        mapLocationVars[0][0][2].isFriends = true;
        mapLocationVars[0][0][2].defaultText =  "<p>You meet the Super Mutant at the top of the hill, and he says \"Hello human friend! Do you have the best human clothes, food, and book? Remember, I'll give you Power Armor as a reward.\" <a href='#' onclick='mapLocation[0][0][2].attack()'>[Attack]</a></p>";
        mapLocationVars[0][0][2].canAttack = true;
    },
    help3 : function(){
        logText.innerHTML += mapLocationVars[0][0][2].helpText3;
    },
    attack : function(){
        if (mapLocationVars[0][0][2].canAttack){
            if (combatPower > 10){
                this.win();
            }else if (combatPower == 10){
                var rando = Math.floor(Math.random()*2);
                (rando == 1) ? this.win() : this.lose()
            }else if (combatPower < 10){
                this.lose();
            }
        }
    },
    win : function(){
        if (mapLocationVars[0][0][2].isFriends == true){
            logText.innerHTML = mapLocationVars[0][0][2].winText2;
        }else{
            logText.innerHTML = mapLocationVars[0][0][2].winText;
        }
        objectIsInInventory[16] = true;
        objectIsInInventory[17] = true;
        objectIsInInventory[18] = true;
        snd_collect.play();
        mapLocationVars[0][0][2].canAttack = false;
        mapLocationVars[0][0][2].isDead = true;
        mapLocationVars[0][0][2].defaultText = "<p>You see a fortress at the top of a hill. The fortress once belonged to the Super Mutant you killed.</p>";
    },
    lose : function(){
        if (mapLocationVars[0][0][2].isFriends == true){
            var objIndex = removeRandomObject();
            if (objIndex == -1){
                logText.innerHTML = "<p>\"What's this human? I thought we were friends. I'll forgive you if you give me this.\" He takes all of your bottle caps.</p>";
                object[0].amount = 0;
                object[0].name = "Bottle Caps: "+object[0].amount;
            }else{
                logText.innerHTML = "<p>\"What's this human? I thought we were friends. I'll forgive you if you give me this.\" He takes the "+object[objIndex].name+". ("+object[objIndex].name+" removed from Inventory)</p>";
                removeObject(objIndex);
            }
        }else{
            var objIndex = removeRandomObject();
            if (objIndex == -1){
                logText.innerHTML = "<p>The Super Mutant pushed you down the hill, but you survived. Barely.</p>";
            }else{
                logText.innerHTML = "<p>The Super Mutant took the "+object[objIndex].name+" from you as he pushed you down the hill. ("+object[objIndex].name+" removed from Inventory)</p>";
                removeObject(objIndex);
            }
        }
    },
    getObject : function(){
        if (mapLocationVars[0][0][2].hasClothes && mapLocationVars[0][0][2].hasFood && mapLocationVars[0][0][2].hasBook){
            mapLocationVars[0][0][2].canAttack = false;
            logText.innerHTML += "<p>\"I finally have them all! Thank you human friend. With these, maybe I can make some more human friends. Here's your power armor I promised. (Power Helmet, Power Body, and Power Boots added to inventory)\"</p>";
            objectIsInInventory[16] = true;
            objectIsInInventory[17] = true;
            objectIsInInventory[18] = true;
            snd_collect.play();
            mapLocationVars[0][0][2].defaultText = "<p>You meet the Super Mutant at the top of the hill, and he says \"Thank you again for getting those items for me. I'm sure the other humans won't be as afraid of me now.\"</p>";
        }else if (mapLocationVars[0][0][2].hasClothes && mapLocationVars[0][0][2].hasFood && !mapLocationVars[0][0][2].hasBook){
            mapLocationVars[0][0][2].defaultText = "<p>You meet the Super Mutant at the top of the hill, and he says \"Hello human friend! I have the best clothes and food, but do you have the best human book? Remember, I'll give you Power Armor as a reward.\" <a href='#' onclick='mapLocation[0][0][2].attack()'>[Attack]</a></p>";
        }else if (mapLocationVars[0][0][2].hasClothes && !mapLocationVars[0][0][2].hasFood && mapLocationVars[0][0][2].hasBook){
            mapLocationVars[0][0][2].defaultText = "<p>You meet the Super Mutant at the top of the hill, and he says \"Hello human friend! I have the best clothes and book, but do you have the best human food? Remember, I'll give you Power Armor as a reward.\" <a href='#' onclick='mapLocation[0][0][2].attack()'>[Attack]</a></p>";
        }else if (!mapLocationVars[0][0][2].hasClothes && mapLocationVars[0][0][2].hasFood && mapLocationVars[0][0][2].hasBook){
            mapLocationVars[0][0][2].defaultText = "<p>You meet the Super Mutant at the top of the hill, and he says \"Hello human friend! I have the best food and book, but do you have the best human clothes? Remember, I'll give you Power Armor as a reward.\" <a href='#' onclick='mapLocation[0][0][2].attack()'>[Attack]</a></p>";
        }else if (!mapLocationVars[0][0][2].hasClothes && !mapLocationVars[0][0][2].hasFood && mapLocationVars[0][0][2].hasBook){
            mapLocationVars[0][0][2].defaultText = "<p>You meet the Super Mutant at the top of the hill, and he says \"Hello human friend! I have the best book, but do you have the best human clothes and food? Remember, I'll give you Power Armor as a reward.\" <a href='#' onclick='mapLocation[0][0][2].attack()'>[Attack]</a></p>";
        }else if (mapLocationVars[0][0][2].hasClothes && !mapLocationVars[0][0][2].hasFood && !mapLocationVars[0][0][2].hasBook){
            mapLocationVars[0][0][2].defaultText = "<p>You meet the Super Mutant at the top of the hill, and he says \"Hello human friend! I have the best clothes, but do you have the best human food and book? Remember, I'll give you Power Armor as a reward.\" <a href='#' onclick='mapLocation[0][0][2].attack()'>[Attack]</a></p>";
        }else if (!mapLocationVars[0][0][2].hasClothes && mapLocationVars[0][0][2].hasFood && !mapLocationVars[0][0][2].hasBook){
            mapLocationVars[0][0][2].defaultText = "<p>You meet the Super Mutant at the top of the hill, and he says \"Hello human friend! I have the best food, but do you have the best human clothes and book? Remember, I'll give you Power Armor as a reward.\" <a href='#' onclick='mapLocation[0][0][2].attack()'>[Attack]</a></p>";
        }else if (!mapLocationVars[0][0][2].hasClothes && !mapLocationVars[0][0][2].hasFood && !mapLocationVars[0][0][2].hasBook){
            mapLocationVars[0][0][2].defaultText = "<p>You meet the Super Mutant at the top of the hill, and he says \"Hello human friend! Do you have the best human clothes, food, and book? Remember, I'll give you Power Armor as a reward.\" <a href='#' onclick='mapLocation[0][0][2].attack()'>[Attack]</a></p>";
        }
    }
};


//Abandoned gun store
mapLocation[1][0][0] = {
    search : function(){
        if (objectIsInInventory[19] || objectIsUsed[19] || objectIsInInventory[20] || objectIsUsed[20]){
            logText.innerHTML += "<p>You don't find anything else useful here.</p>";
        }else{
            logText.innerHTML += mapLocationVars[1][0][0].searchText;
            objectIsInInventory[19] = true;
            objectIsInInventory[20] = true;
            snd_collect.play();
        }
    }
};


//Raggedy Shack
mapLocation[4][0][4] = {
    search : function(){
        logText.innerHTML += mapLocationVars[4][0][4].searchText;
    },
    talk : function(){
        logText.innerHTML += mapLocationVars[4][0][4].talkText;
    },
    mechanic : function(){
        logText.innerHTML += mapLocationVars[4][0][4].mechanicText;
    },
    fix : function(){
        if (object[0].amount < 20){
            logText.innerHTML += "<p>You don't have enough caps to fix that item.</p>";
        }else{
            logText.innerHTML += "<p>\"Thank you for the business. Now make sure to keep this quiet, I don't want to attract any unwanted attention here.\" (Pistol added to inventory)</p>";
            removeObject(19);
            objectIsInInventory[21] = true;
            snd_collect.play();
            object[0].amount -= 20;
            object[0].name = "Bottle Caps: "+object[0].amount;
        }
    }
};


//Abandoned explosive store
mapLocation[1][0][1] = {
    search : function(){
        if (objectIsUsed[20]){
            logText.innerHTML += mapLocationVars[1][0][1].searchText2;
        }else{
            logText.innerHTML += mapLocationVars[1][0][1].searchText;
        }
    }
};


//Bullet Gang
mapLocation[3][0][3] = {
    setUp : function(objectIndex){
        if (mapLocationVars[3][0][3].canAttack){
            if (objectIndex != -1){
                logText.innerHTML = "<p>As you travel, a group of armed people stop you and say, \"We're the Bullet Gang. We don't care who you are, we're taking your stuff.\" ("+object[objectIndex].name+" removed from Inventory) <a href='#' onclick='mapLocation[3][0][3].attack()'>[\"Give me my stuff back!\" (Attack)]</a></p>";
                removeObject(objectIndex);
                mapLocationVars[3][0][3].objectsOwned.push(objectIndex);
            }else{
                logText.innerHTML = "<p>As you travel, a group of armed people stop you and say, \"We're the Bullet Gang. We don't care who you are, we're taking your caps.\" All of your Bottle Caps were taken. <a href='#' onclick='mapLocation[3][0][3].attack()'>[\"Give me my stuff back!\" (Attack)]</a></p>";
                mapLocationVars[3][0][3].moneyOwned += object[0].amount;
                object[0].amount = 0;
                object[0].name = "Bottle Caps: "+object[0].amount; 
            }
        }else{
            logText.innerHTML = "<p>You find what's left of the Bullet Gang, a pile of dead bodies.</p>";
        }
    },
    attack : function(){
        if (mapLocationVars[3][0][3].canAttack){
            if (combatPower > 10){
                this.win();
            }else if (combatPower == 10){
                var rando = Math.floor(Math.random()*2);
                (rando == 1) ? this.win() : this.lose()
            }else if (combatPower < 10){
                this.lose();
            }
        }
    },
    win : function(){
        logText.innerHTML = "You decimate the Bullet Gang before any of them could get the drop on you. You take their stolen stuff. You find "+mapLocationVars[3][0][3].moneyOwned+" caps (";
        for (var i=0; i<mapLocationVars[3][0][3].objectsOwned.length; i++){
            logText.innerHTML += (i!=mapLocationVars[3][0][3].objectsOwned.length-1) ? object[mapLocationVars[3][0][3].objectsOwned[i]].name+", " : "and "+object[mapLocationVars[3][0][3].objectsOwned[i]].name;
        }
        logText.innerHTML += " added to inventory)</p>";
        //Adding Caps
        object[0].amount += mapLocationVars[3][0][3].moneyOwned;
        object[0].name = "Bottle Caps: "+object[0].amount;
        //Adding Objects to inventory
        for (var i=0; i<mapLocationVars[3][0][3].objectsOwned.length; i++){
            objectIsInInventory[mapLocationVars[3][0][3].objectsOwned[i]] = true;
        }
        snd_collect.play();
        //Adding dialogue options with nova clan
        mapLocation[4][0][1].gangDead = true;
        if (mapLocation[4][0][1].startedQuest == true){
            mapLocation[4][0][1].defaultText = mapLocation[4][0][1].helpedText2;
        }else{
            mapLocation[4][0][1].defaultText = mapLocation[4][0][1].helpedText;
        }
        mapLocationVars[3][0][3].canAttack = false;
    },
    lose : function(){
        logText.innerHTML = "<p>You tried to attack, but one of the gang members put a gun to your head. \"I would walk away quietly, if I were you.\"</p>";
    }
}


//Defender of Pineapple
mapLocation[4][0][3] = {
    attack : function(){
        if (mapLocationVars[4][0][3].canAttack){
            if (combatPower > 15){
                this.win();
            }else if (combatPower == 15){
                var rando = Math.floor(Math.random()*2);
                (rando == 1) ? this.win() : this.lose()
            }else if (combatPower < 15){
                this.lose();
            }
        }
    },
    win : function(){
        logText.innerHTML = mapLocationVars[4][0][3].winText;
        objectIsInInventory[25] = true;
        objectIsInInventory[26] = true;
        snd_collect.play();
        mapLocationVars[4][0][3].canAttack = false;
        mapLocationVars[4][0][3].isDead = true;
    },
    lose : function(){
        var objIndex = removeRandomObject();
        if (objIndex == -1){
            logText.innerHTML += "<p>You try to attack, but it's impossible to get a good hit on him with all of the bullets flying around.</p>";
        }else{
            logText.innerHTML += "<p>Your "+object[objIndex].name+" gets hit and is destroyed. You return to cover. ("+object[objIndex].name+" removed from Inventory)</p>";
            removeObject(objIndex);
        }
    },
    walk : function(){
        if (equipment[1] == -1 && equipment[2] == -1){
            logText.innerHTML = mapLocationVars[4][0][3].walkText2;
            mapLocationVars[4][0][3].isFriends = true;
            mapLocationVars[4][0][3].canAttack = false;
            mapLocationVars[4][0][3].defaultText = mapLocationVars[4][0][3].defaultText2;
        }else{
            logText.innerHTML += mapLocationVars[4][0][3].walkText;
        }
    },
    talk : function(){
        logText.innerHTML += mapLocationVars[4][0][3].talkText;
    },
    talk2 : function(){
        logText.innerHTML += mapLocationVars[4][0][3].talk2Text;
    },
    talk3 : function(){
        logText.innerHTML += mapLocationVars[4][0][3].talk3Text;
    },
    offer : function(){
        logText.innerHTML += mapLocationVars[4][0][3].offerText;
        mapLocationVars[4][0][3].offerMade = true;
        mapLocationVars[4][0][3].defaultText = "<p>You walk up to the camp without being shot by a minigun. The crazy man there says, \"I'll give ya my minigun. Ya just gotta git me a pistol, a sniper, a machine gun, and a grenade launcher.\"</p>";
    },
    receiveObject : function(){
        var num = mapLocationVars[4][0][3].hasPistol + mapLocationVars[4][0][3].hasSniper + mapLocationVars[4][0][3].hasMachinegun + mapLocationVars[4][0][3].hasGrenadelauncher;
        var objectIds = []; //This array contains all the object indexes the crazy man needs; the ones he already has in the front and the ones the player needs to find in the back
        objectIds.push(21);
        if (mapLocationVars[4][0][3].hasGrenadelauncher){
            objects.unshift(22);
        }else{
            objectIds.push(22);
        }
        if (mapLocationVars[4][0][3].hasSniper){
            objectIds.unshift(23);
        }else{
            objectIds.push(23);
        }
        if (mapLocationVars[4][0][3].hasMachinegun){
            objectIds.unshift(24);
        }else{
            objectIds.push(24);
        }

        mapLocationVars[4][0][3].defaultText = "<p>You walk up to the camp without being shot by a minigun. The crazy man there says, \"I'll give you my minigun. ";
        if (num == 4){
            logText.innerHTML += "<p>\"Now I've got all the weapons I need to guard the sacred pineapple, or whatever you called it. Here's your minigun.\" (Minigun added to inventory)</p>";
            objectIsInInventory[25] = true;
            snd_collect.play();
            mapLocationVars[4][0][3].defaultText = "<p>You walk up to the camp. The crazy man there says, \"Hey there. Me and my pineapple thank ya for equippin' me with these weapons.\"</p>";

        }else if (num == 3){
            mapLocationVars[4][0][3].defaultText += "I have the "+object[objectIds[0]].name+", "+object[objectIds[1]].name+", and "+object[objectIds[2]].name+". Ya just gotta git me a "+object[objectIds[3]].name+".\"</p>"
        }else if (num == 2){
            mapLocationVars[4][0][3].defaultText += "I have the "+object[objectIds[0]].name+" and "+object[objectIds[1]].name+". Ya just gotta git me a "+object[objectIds[2]].name+" and a "+object[objectIds[3]].name+".\"</p>"
        }else if (num == 1){
            mapLocationVars[4][0][3].defaultText += "I have the "+object[objectIds[0]].name+". Ya just gotta git me a "+object[objectIds[1]].name+", a "+object[objectIds[2]].name+", and a "+object[objectIds[3]].name+".\"</p>"
        }else if (num == 0){
            mapLocationVars[4][0][3].defaultText = "Ya just gotta git me a pistol, a sniper, a machine gun, and a grenade launcher.\"</p>";
        }
    }
};


//Sewers
mapLocation[0][1][1] = {
    attack : function(){
        if (mapLocationVars[0][1][1].canAttack){
            if (combatPower > 5){
                this.win();
            }else if (combatPower == 5){
                var rando = Math.floor(Math.random()*2);
                (rando == 1) ? this.win() : this.lose()
            }else if (combatPower < 5){
                this.lose();
            }
        }
    },
    win : function(){
        logText.innerHTML = mapLocationVars[0][1][1].winText;
        mapLocationVars[0][1][1].defaultText =  mapLocationVars[0][1][1].defaultText2;
        mapLocationVars[0][1][1].canAttack = false;
    },
    lose : function(){
        var objIndex = removeRandomObject();
        if (objIndex == -1){
            logText.innerHTML += "<p>You try to attack, but missed and almost slipped into the mucky river where the alligator could've eaten you.</p>";
        }else{
            logText.innerHTML += "<p>You move to make your attack, but the alligator gets a bite of your "+object[objIndex].name+" and eats it. ("+object[objIndex].name+" removed from Inventory)</p>";
            removeObject(objIndex);
        }
    },
    leave : function (){
        y = 0;
        Y = 0;
        yLabel.innerHTML = "Y: "+y;
        mapLocation[0][0][1].atDefault = false;
        mapLocation[0][0][1].atTower = false;
        mapLocation[0][0][1].atMarket = false;
        mapLocation[0][0][1].atAlleyway = true;
        logText.innerHTML=mapLocation[0][0][1].alleywayText;
    },
    explore : function(){
        z = 0;
        Z = 0;
        zLabel.innerHTML = "Z: "+z;
        logText.innerHTML=mapLocation[0][1][0].defaultText;
    }
}


//Sewers 2
mapLocation[0][1][0] = {
    gear : function(){
        logText.innerHTML = "<p>It seems like in good condition. You pick up the climbing gear. (Climbing Gear added to Inventory)</p>";
        objectIsInInventory[27] = true;
        snd_collect.play();
        mapLocationVars[0][1][0].defaultText = mapLocationVars[0][1][0].defaultText2
    },
    back : function(){
        z = 1;
        Z = 1;
        zLabel.innerHTML = "Z: "+z;
        logText.innerHTML=mapLocation[0][1][1].defaultText;
    }
}


//Cliff
mapLocation[1][0][2] = {

}


//Gold Mine
mapLocation[1][0][3] = {
    enter : function(){
        if (equipment[0] == 29 && equipment[3] == 30 && equipment[4] == 31){
            logText.innerHTML = mapLocationVars[1][0][3].enterText;
        }else{
            logText.innerHTML += "<p>You attempt to enter, but the radioactive fumes keep you from going in too far; it's too dangerous without a radiation suit.</p>";
        }
        mapLocationVars[1][0][3].inGoldMine = false;
        mapLocationVars[1][0][3].inRefinery = false;
    },
    enterRight : function(){
        logText.innerHTML = mapLocationVars[1][0][3].enterRightText;
        mapLocationVars[1][0][3].inGoldMine = false;
        mapLocationVars[1][0][3].inRefinery = false;
    },
    enterLeft : function(){
        if (equipment[1] == 33 || equipment[2] == 33){
            if (mapLocationVars[1][0][3].minedGold){
                logText.innerHTML = mapLocationVars[1][0][3].enterLeftText3;
                mapLocationVars[1][0][3].inGoldMine = true;
                mapLocationVars[1][0][3].inRefinery = false;
            }else{
                logText.innerHTML = mapLocationVars[1][0][3].enterLeftText2;
                mapLocationVars[1][0][3].inGoldMine = true;
                mapLocationVars[1][0][3].inRefinery = false;
            }
        }else{
            logText.innerHTML = mapLocationVars[1][0][3].enterLeftText;
        }
    },
    forward : function(){
        logText.innerHTML = mapLocationVars[1][0][3].enterForwardText;
        mapLocationVars[1][0][3].inGoldMine = false;
        mapLocationVars[1][0][3].inRefinery = true;
    },
    enterBranch : function(){
        if (mapLocationVars[1][0][3].foundLantern){
            logText.innerHTML = mapLocationVars[1][0][3].enterBranchText2;
        }else{
            logText.innerHTML = mapLocationVars[1][0][3].enterBranchText;
            objectIsInInventory[33] = true;
            snd_collect.play();
            mapLocationVars[1][0][3].foundLantern = true;
        }
    },
    buttonOne : function(){
        if (mapLocationVars[1][0][3].goldInRefinery == 1){
            logText.innerHTML += mapLocationVars[1][0][3].button1Text1;
        }else if (mapLocationVars[1][0][3].goldInRefinery == 2){
            logText.innerHTML += mapLocationVars[1][0][3].button1Text2;
            objectIsInInventory[35] = true;
            snd_collect.play();
            mapLocationVars[1][0][3].goldInRefinery = 0;
        }else{
            logText.innerHTML += mapLocationVars[1][0][3].button1Text;
        }
    },
    buttonTwo: function(){
        if (mapLocationVars[1][0][3].goldInRefinery == 1){
            mapLocationVars[1][0][3].goldInRefinery = 2;
        }
        logText.innerHTML += mapLocationVars[1][0][3].button2Text;
    }
}


//Nova Gang
mapLocation[4][0][1] = {
    ask : function(){
        logText.innerHTML += mapLocationVars[4][0][1].askText;
    },
    no : function(){
        logText.innerHTML += mapLocationVars[4][0][1].noText;
    },
    yes : function(){
        logText.innerHTML += mapLocationVars[4][0][1].yesText;
        mapLocationVars[4][0][1].startedQuest = true;
        if (mapLocationVars[4][0][1].gangDead == true && mapLocationVars[4][0][1].helpedRewardGiven == false){
            mapLocationVars[4][0][1].defaultText = mapLocationVars[4][0][1].helpedText2;
        }else{
            mapLocationVars[4][0][1].defaultText = mapLocationVars[4][0][1].defaultText2;
        }
    },
    helped : function(){
        logText.innerHTML = "<p>\"You did? Wow, good job. I better give you a reward. Here's my captain's hat; it has served me well.\" (Nova Clan Hat added to Inventory)</p>";
        objectIsInInventory[32] = true;
        snd_collect.play();
        mapLocationVars[4][0][1].helpedRewardGiven = true;
        if (mapLocationVars[4][0][1].startedQuest == true){
            mapLocationVars[4][0][1].defaultText = mapLocationVars[4][0][1].defaultText2;
        }else{
            mapLocationVars[4][0][1].defaultText = mapLocationVars[4][0][1].OGdefaultText;
        }
    }
}


//The Brotherhood of Steel
mapLocation[0][0][3] = { 
    enter : function(){
        logText.innerHTML = mapLocationVars[0][0][3].enterText;
        mapLocationVars[0][0][3].canTalk = true;
    },
    who : function(){
        logText.innerHTML = mapLocationVars[0][0][3].whoText;
    },
    who2 : function(){
        logText.innerHTML += mapLocationVars[0][0][3].whoText2;
    },
    join : function(){
        logText.innerHTML = mapLocationVars[0][0][3].joinText;
    },
    join2 : function(){
        logText.innerHTML += mapLocationVars[0][0][3].joinText2;
    },
    join3 : function(){
        logText.innerHTML += mapLocationVars[0][0][3].joinText3;
    },
    join4 : function(){
        logText.innerHTML = mapLocationVars[0][0][3].joinText4;
        mapLocationVars[0][0][3].startedQuest = true;
        mapLocationVars[0][0][3].enterText = mapLocationVars[0][0][3].enterText2;
    },
    join5 : function(){
        logText.innerHTML += mapLocationVars[0][0][3].joinText5;
    },
    ask : function(){
        logText.innerHTML = mapLocationVars[0][0][3].askText;
    },
    ask2 : function(){
        logText.innerHTML += mapLocationVars[0][0][3].askText2;
    },
    yes : function(){
        if (objectIsInInventory[16] && objectIsInInventory[17] && objectIsInInventory[18]){
            logText.innerHTML = mapLocationVars[0][0][3].yesText;
        }else{
            logText.innerHTML += mapLocationVars[0][0][3].yesnoText;
        }
    },
    yes2 : function(){
        logText.innerHTML = mapLocationVars[0][0][3].yesText2;
        mapLocationVars[0][0][3].member = true;
        mapLocationVars[0][0][3].enterText = "<p>\"Oh hey,\" says the man in the Power Armor. \"I totally did NOT expect you to become a member of the Brotherhood of Steel. Congratulations.\" <a href='#' onclick='mapLocation[0][0][3].finish()'>[\"Can I use a 128 GB Storage Unit?\"]</a></p>";
    },
    finish : function(){
        logText.innerHTML = mapLocationVars[0][0][3].finishText;
        objectIsInInventory[36] = true;
        snd_collect.play();
        mapLocationVars[0][0][3].finished = true;
        mapLocationVars[0][0][3].enterText = "<p>\"Oh hey,\" says the man in the Power Armor. \"I totally did NOT expect you to become a member of the Brotherhood of Steel. Congratulations.\"</p>";
    },
    no : function(){
        logText.innerHTML += mapLocationVars[0][0][3].noText;
    },
    lie : function(){
        logText.innerHTML += mapLocationVars[0][0][3].lieText;
    }

}



