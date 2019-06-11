//variable "location" is a reserved word in JavaScript. Took me a while to figure it out. Always led me to url [object%20Object]
//mapLocation[x][y][z]
var mapLocation = [[[]]];

mapLocation[0][0][0] = {
    defaultText : "<p>You stand in the center of the universe, although it looks like you're just in a field of grass. Go to the 'map' section of the pipboy to travel somewhere else.</p>"
}

mapLocation[0][0][1] = {
    atDefault : true,
    atMarket : false,
    atTower : false,
    atAlleyway : false,

    defaultText : "<p>You walk into an abandoned city. You see a <a href='#'onclick='mapLocation[0][0][1].marketplace()'>marketplace</a>, a <a href='#'onclick='mapLocation[0][0][1].tower()'>tower</a>, and an <a href='#'onclick='mapLocation[0][0][1].alleyway()'>alleyway</a>.</p>",
    marketplaceText : "<p></p>"+
                    "<a href='#' onclick='mapLocation[0][0][1].default()'>[Back to city]</a></p>",
    towerText : "<p>The tower appears to be a wizard tower. Someone dressed in a wizard robe looks out and says, \"Oi there! I need a banana for one of my potions! Please get me one and I'll reward thee greatly!\" "+
                "<a href='#' onclick='mapLocation[0][0][1].default()'>[Back to city]</a></p>",
    alleywayText : "<p></p>"+
                "<a href='#' onclick='mapLocation[0][0][1].default()'>[Back to city]</a></p>",

    default : function(){
        logText.innerHTML = mapLocation[0][0][1].defaultText;
        mapLocation[0][0][1].atDefault = true;
        mapLocation[0][0][1].atTower = false;
        mapLocation[0][0][1].atMarket = false;
        mapLocation[0][0][1].atAlleyway = false;
    },
    marketplace : function(){
        logText.innerHTML = mapLocation[0][0][1].marketplaceText;
        mapLocation[0][0][1].atDefault = false;
        mapLocation[0][0][1].atTower = false;
        mapLocation[0][0][1].atMarket = true;
        mapLocation[0][0][1].atAlleyway = false;
    },
    tower : function(){
        logText.innerHTML = mapLocation[0][0][1].towerText;
        mapLocation[0][0][1].atDefault = false;
        mapLocation[0][0][1].atTower = true;
        mapLocation[0][0][1].atMarket = false;
        mapLocation[0][0][1].atAlleyway = false;
    },
    alleyway : function(){
        logText.innerHTML = mapLocation[0][0][1].alleywayText;
        mapLocation[0][0][1].atDefault = false;
        mapLocation[0][0][1].atTower = false;
        mapLocation[0][0][1].atMarket = false;
        mapLocation[0][0][1].atAlleyway = true;
    }
}