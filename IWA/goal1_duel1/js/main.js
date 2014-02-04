/**
 * Created by Justin on 2/4/14.
 */


var playerOneName = "Spiderman";
var playerOneHealth = 100;

var playerTwoName = "Batman";
var playerTwoHealth = 100;


function fight (player1, player2, player1hp, player2hp) {
    for (i=0;i<10;i++) {
        var playerOneDamage = Math.floor(Math.random()*25)+25;
        var playerTwoDamage = Math.floor(Math.random()*25)+25;
        alert(player1+" health is "+player1hp+"\n"+player2+" health is "+player2hp+"\n Round "+i);
        player2hp-=playerOneDamage;
        player1hp-=playerTwoDamage;

        var checkWinnerOutput = checkWinner(player1hp, player2hp);
        if (checkWinnerOutput =="Draw" || checkWinnerOutput=="Player 2 wins" || checkWinnerOutput=="Player 1 wins" ) {
            break;
        }
    }
}

function checkWinner (player1health, player2health) {
    var theCondition = undefined;
    if (player1health<=0 && player2health<=0) {
        theCondition="Draw";
        alert("Draw!");
    } else if (player1health<=0) {
        theCondition="Player 2 wins";
        alert("Player 2 wins!");
    } else if (player2health<=0) {
        theCondition="Player 1 wins";
        alert("Player 1 wins!");
    }
    return theCondition;
}

fight(playerOneName, playerTwoName, playerOneHealth, playerTwoHealth);
