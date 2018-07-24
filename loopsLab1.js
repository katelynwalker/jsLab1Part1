"use strict";

let grant = 10;
let me = 40;
let myWins= 0

let play = prompt("Do you want to play a game?")
if (play === "no"){
    console.log("Ok maybe another time!")
}

else if (play === "yes"){
    let name = prompt("What is your name?")


while (me >0 || myWins < 3) {
    console.log("Grant the Mighty Chicken has " + grant + " health left");
    grant -= (Math.floor((Math.random() * 2) +1));
    console.log(name + " has " + me + " health left");
    me -= (Math.floor((Math.random() * 2) +1));

    if (me <= 0){
        console.log("Grant Won!")
        break;
     
    }
    
    if (myWins == 3){
        console.log("You won!")
        break;
        
    }
    if (grant <= 0){
        grant = 10;
        myWins ++;
    
    }
}
}
else console.log("You must answer yes or no");



