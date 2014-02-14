/**
 * Created by Justin on 2/4/14.
 */
(function () {


    var fighter1 = {name: "Spiderman", health: 100, damage: function () {
        return Math.floor(Math.random() * 26) + 25
    }};
    var fighter2 = {name: "Batman", health: 100, damage: function () {
        return Math.floor(Math.random() * 26) + 25
    }};
    var fighterArr = [fighter1, fighter2];
    var button = document.querySelector("#fightbtn");
    var round = document.querySelector("#round");
    var player1Html = document.querySelector("#kabal");
    var player2Html = document.querySelector("#kratos");
    var roundNum = 1;

    button.addEventListener("click", chicken);

    function chicken() {
        fight(fighterArr[0].name, fighterArr[1].name, fighterArr[0].health, fighterArr[1].health);
    }


    function fight() {

        fighterArr[1].health -= fighter1.damage();
        fighterArr[0].health -= fighter2.damage();

        player1Html.innerHTML = fighterArr[0].name + " has " + fighterArr[0].health;
        player2Html.innerHTML = fighterArr[1].name + " has " + fighterArr[1].health;
        round.innerHTML = "\n Round " + roundNum;

        checkWinner(fighterArr[0].health, fighterArr[1].health);

        roundNum++;

    }

    function checkWinner() {
        if (fighterArr[0].health <= 0 && fighterArr[1].health <= 0) {
            round.innerHTML = "Draw!";
            button.removeEventListener("click", chicken);
        } else if (fighterArr[0].health <= 0) {
            round.innerHTML = "Player 2 wins!";
            button.removeEventListener("click", chicken);
        } else if (fighterArr[1].health <= 0) {
            round.innerHTML = "Player 1 wins!";
            button.removeEventListener("click", chicken);
        }
    }

})();