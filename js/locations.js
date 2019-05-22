//var location[y][x][z]
var location000 = {
    text : "<p>You stand in the center of the universe, although it looks like you're just in a field of grass. "+
           "Go to the 'map' section of the pipboy to travel somewhere else.</p>"
}

var location001 = {
    text : "<p>You walk into an abandoned city. You see a <a href='#'onclick='marketplace()'>marketplace</a>, "+ 
    "a <a href='#'onclick='location001.tower()'>tower</a>, and an <a href='#'onclick='alleyway()'>alleyway</a>.</p>",

    marketplaceText : "<p></p>",

    towerText : "<p>The tower appears to be a wizard tower. Someone dressed in a wizard robe looks out</p>"+
                "<p><a href='#' onclick='location001.default()'>Back</a></p>",

    alleyway : "",

    default : function(){
        logText.innerHTML = location001.text;
    },

    tower : function(){
        logText.innerHTML += location001.towerText;
    }
}