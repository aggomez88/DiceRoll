function insertValueInHTML(id, value){
    var result = document.getElementById(id);
    result.value = value;
}

insertValueInHTML("round1", document.roll());
insertValueInHTML("round2", document.roll());
insertValueInHTML("round3", document.roll());
insertValueInHTML("round4", document.roll());
insertValueInHTML("round5", document.roll());
insertValueInHTML("round6", document.roll());


var status = document.getElementById("status");
var tie;
var sum;

let players = [
    "player1",
    "player2",
    "player3",
    "player4",
    "player5",
    "player6",
    "player7",
    "player8",
    "player9",
    "player10"
];
var playersScore = [
    playersScore.push("player1"),
    playersScore.push("player2"),
    playersScore.push("player3"),
    playersScore.push("player4"),
    playersScore.push("player5"),
    playersScore.push("player6"),
    playersScore.push("player7"),
    playersScore.push("player8"),
    playersScore.push("player9"),
    playersScore.push("player10")
];


function round1() {

    var playerOneScore = 0;
    var playerTwoScore = 0;
    var playerThreeScore = 0;
    var playerFourScore = 0;
    var playerFiveScore = 0;
    var playerSixScore = 0;
    var playerSevenScore = 0;
    var playerEightScore = 0;
    var playerNineScore = 0;
    var playerTenScore = 0;

    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var player3 = document.getElementById("player3");
    var player4 = document.getElementById("player4");
    var player5 = document.getElementById("player5");
    var player6 = document.getElementById("player6");
    var player7 = document.getElementById("player7");
    var player8 = document.getElementById("player8");
    var player9 = document.getElementById("player9");
    var player10 = document.getElementById("player10");

    var status = document.getElementById("status");



result = players.rollDice20();
playersScore = [result.push().sort(function(a, b){return a - b})];
newResult = document.getElementById("newResult").innerHTML.add("table");
status.innerHTML = "You rolled " + diceTotal + ".";
}

function round2() {

}
function round3() {

}
function round4() {

}
function round5() {

}
function round6() {

}

function roundScore() {

}

// function rollDice4() {
//     var die1 = document.getElementById("die1");
//     var status = document.getElementById("status");
//     var d1 = Math.floor(Math.random() * 4) + 1;
//     var diceTotal = d1;
//     die1.innerHTML = d1;
//     // status.innerHTML = "You rolled " + diceTotal + ".";
    
// }

// function rollDice6() {
//     var die2 = document.getElementById("die2");
//     var status = document.getElementById("status");
//     var d2 = Math.floor(Math.random() * 6) + 1;
//     var diceTotal = d2;
//     die2.innerHTML = d2;
//     // status.innerHTML = "You rolled " + diceTotal + ".";
// }

// function rollDice8() {
//     var die3 = document.getElementById("die3");
//     var status = document.getElementById("status");
//     var d3 = Math.floor(Math.random() * 8) + 1;
//     var diceTotal = d3;
//     die3.innerHTML = d3;
//     // status.innerHTML = "You rolled " + diceTotal + ".";
// }

// function rollDice10() {
//     var die4 = document.getElementById("die4");
//     var status = document.getElementById("status");
//     var d4 = Math.floor(Math.random() * 10) + 1;
//     var diceTotal = d4;
//     var die4 = document.getElementById("die4");
//     die4.innerHTML = d4;
//     // status.innerHTML = "You rolled " + diceTotal + ".";
// }

// function rollDice12() {
//     var die5 = document.getElementById("die5");
//     var status = document.getElementById("status");
//     var d5 = Math.floor(Math.random() * 12) + 1;
//     var diceTotal = d5;
//     die5.innerHTML = d5;
//     // status.innerHTML = "You rolled " + diceTotal + ".";
// }

// function rollDice20() {
//     var die6 = document.getElementById("die6");
//     var status = document.getElementById("status");
//     var d6 = Math.floor(Math.random() * 20) + 1;
//     var diceTotal = d6;
//     die6.innerHTML = d6;
//     // status.innerHTML = "You rolled " + diceTotal + ".";
}

function roll(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    var die6 = document.getElementById("die6");

    var status = document.getElementById("status");

    var d1 = Math.floor(Math.random() * 4) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 8) + 1;
    var d4 = Math.floor(Math.random() * 10) + 1;
    var d5 = Math.floor(Math.random() * 12) + 1;
    var d6 = Math.floor(Math.random() * 20) + 1;
    var diceTotal = d1 + d2 + d3 + d4 + d5 + d6;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
    die6.innerHTML = d6;

    status.innerHTML = "You rolled " + diceTotal + ".";
    // status.innerHTML = document.insertValueInHTML(roll.diceTotal);
}
function reset(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    var die6 = document.getElementById("die6");

    var status = document.getElementById("status");

    var d1 = 0;
    var d2 = 0;
    var d3 = 0;
    var d4 = 0;
    var d5 = 0;
    var d6 = 0;
    // var diceTotal = 0;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
    die6.innerHTML = d6;

    status.innerHTML = "Click 'ROLL' to play...";
}




