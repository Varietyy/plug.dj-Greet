API.chatLog("Variety's Greet Script Commands: /on and /off", true);
API.on(API.CHAT_COMMAND, command);
API.on(API.USER_JOIN, greet);

function greet() {
   API.sendChat('Welcome! @' + data.un);
}

function command(value) {
    if (value == "/on") {
        API.on(API.USER_JOIN, greet);
        API.chatLog("Greet [ON]", alert);
    }
    else if (value == "/off") {
        API.off(API.USER_JOIN, greet);
        API.chatLog("Greet [OFF]", alert);
    }
}
