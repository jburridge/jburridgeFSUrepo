/**
 * Created by Justin on 1/11/14.
 */

//Assigning variables

var peopleProgram=prompt("How many people at work are programmers?");
var peopleDesign=prompt("How many people at work are designers?");
var peopleProgramNeed=prompt("How many programmers are needed for the project?");
var peopleDesignNeed=prompt("How many designers are needed for the project?");
var peopleProgramLeft=peopleProgramNeed-peopleProgram
var peopleDesignLeft=peopleDesignNeed-peopleDesign

//checking if you have enough programmers and designers
if (peopleProgram>=peopleProgramNeed && peopleDesign>=peopleDesignNeed) {
//if you have enough of both then console.log
    console.log("You do not need to hire anyone for the project");
