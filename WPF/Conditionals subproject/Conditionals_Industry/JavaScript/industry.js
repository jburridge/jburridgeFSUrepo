/**
 * Created by Justin on 1/11/14.
 */

//Assigning variables

var peopleProgram=prompt("How many people at work are programmers?");
var peopleDesign=prompt("How many people at work are designers?");
var peopleProgramNeed=prompt("How many programmers are needed for the project?");
var peopleDesignNeed=prompt("How many designers are needed for the project?");
var peopleProgramLeft=peopleProgramNeed-peopleProgram;
var peopleDesignLeft=peopleDesignNeed-peopleDesign;

//checking if you have enough programmers and designers
if (peopleProgram>=peopleProgramNeed && peopleDesign>=peopleDesignNeed) {
//if you have enough of both then console.log
    console.log("You do not need to hire anyone for the project");
} else {
//now checking to see if you have enough programmers
    if (peopleProgram<peopleProgramNeed) {
//if you do not have enough then console log how many programmers you still need
        console.log("You do not have enough programmers, you need "+peopleProgramLeft+" more programmer(s).");
    } else {
//now checking to see if you have enough designers
        if (peopleDesign>peopleDesignNeed) {
//if you do not have enough then console log how many designers you still need
            console.log("You do not have enough designers, you need "+peopleDesignLeft+" more designer(s).");
        }
    }
}
