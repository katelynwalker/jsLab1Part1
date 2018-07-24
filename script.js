"use strict";

let grant = 10;
let me = 40;
let myWins= 0
let name;

function startGame() {
    let play = prompt("Do you want to play a game?")
    if (play === "no"){
        console.log("Ok maybe another time!")
    } else if (play === "yes"){
        name = prompt("What is your name?")
        startCombat();
    } else console.log("You must answer yes or no");  
    
}

startGame();

function startCombat(){

    while (me >0 || myWins < 3) {
   function getDamage(){
        console.log("Grant the Mighty Chicken has " + grant + " health left");
        grant -= (Math.floor((Math.random() * 5) +1));
        console.log(name + " has " + me + " health left");
        me -= (Math.floor((Math.random() * 5) +1));}

        getDamage();

        let attack =prompt("Would you like to attack or quit?")

        if (attack == "quit"){
            console.log("You have quit the game")
            break;
        }
    
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
            console.log(name +" has won the round")
        
        }
    }
}








