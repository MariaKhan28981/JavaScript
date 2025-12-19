const user={
    username: "maria",
    prive: 1000,
     welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
     }
}
user.welcomeMessage() //maria, welcome to website
user.username="khan" //this change is possible b/z we did not hard code the values
user.welcomeMessage() //khan, welcome to website