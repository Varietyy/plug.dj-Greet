function greet(data) {
      API.sendChat('Welcome! @' + data.un);
}
 
API.on(API.USER_JOIN, greet, this);
