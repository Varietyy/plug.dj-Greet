/*
 * Original Author of the Autowoot code
 * @derpthebass (Caleb)
 */

API.chatLog("Variety's Greet Script Commands: /on and /off", true);
API.on(API.CHAT_COMMAND, command);
API.on(API.USER_JOIN, welcomeUser);

var ROOMNAME = 'Soulful Strut';
var GREET = false;

function welcomeUser(user) {
   
   if (!GREET) return;
   setTimeout(function(){API.sendChat('Welcome, ' + user.username + '!');}, 5000);
}

function command(value) {
    if (value == "/on") {
        API.on(API.USER_JOIN, welcomeUser);
        API.chatLog("Greet [ON]", alert);
    }
    else if (value == "/off") {
        API.off(API.USER_JOIN, welcomeUser);
        API.chatLog("Greet [OFF]", alert);
    }
}

function BassPlugLite(){
bpl = {
    autowoot: true,
    clicks: 0,
    version: 3.05,
    close: function(){ API.off(API.DJ_ADVANCE, bpl.djAdvance); API.off(API.CHAT, bpl.chat); $('#woot').unbind('click', bpl.doubleClick); },
    djAdvance: function() { if (bpl.autowoot) { setTimeout(function(){ $("#woot").click() }, 2000); }},
    doubleClick: function() { bpl.clicks++; if (bpl.clicks == 2) { bpl.autowoot = !bpl.autowoot; bpl.clicks = 0; API.chatLog(bpl.autowoot ? 'AutoWoot is now on' : 'AutoWoot is now off'); } setTimeout(function() { bpl.clicks = 0 }, 600)}
    }
    
    API.on(API.ADVANCE, bpl.djAdvance, this);
    $("#woot").bind('click', bpl.doubleClick); 
        
    $('#woot').click();
}

if(typeof bpl !== "undefined") bpl.close();

BassPlugLite();
