/**
 * GUESSING GAME:
 *
 * Created By: justin burridge
 * Date: today 2/13
 *
 * GUESSING GAME
 */

//Game variables

(function () {

    var theNumber = 0;
    var numberTo = Math.round(Math.random() * 7) + 2;
    var theInput = document.querySelector("#input");
    var tally = document.querySelector("#tally");
    var message = document.querySelector("#msg");
    var button = document.querySelector("#btn");
    button.addEventListener("click", onClick);
    theInput.onkeydown = onKeypress;


    //So you can see the number you're trying to guess
    console.log(numberTo);

    function onKeypress(e) {
        if (e.keyCode == 13) {
            mainFunction();
        }
    }

    function onClick() {
        mainFunction();
    }

    function mainFunction() {
        theNumber++;
        if (theNumber < 4) {
            tally.innerHTML = "You are on turn number " + theNumber;
            if (theInput.value > 1 && theInput.value < 10) {
                if (theInput.value == numberTo) {
                    message.innerHTML = "You guessed it!";
                    button.removeEventListener("click", mainFunction);
                } else {
                    if (theInput.value > numberTo) {
                        message.innerHTML = "Guessed too high!!!";
                    } else {
                        message.innerHTML = "You guessed too low! Try again sweetie.";
                    }
                }
            } else {
                message.innerHTML = "You must enter a number between 1 and 10.";
            }
        } else {
            tally.innerHTML = "Too many turns, Refresh to try again!";
        }
    }


})();