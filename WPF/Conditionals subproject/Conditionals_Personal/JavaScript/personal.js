/**
 * Created by Justin on 1/11/14.
 */

//setting up variables

var runGoal=prompt("How long did you run yesterday?");
var runTime=prompt("How long did you run today?");
var runCalc=runTime-runGoal;

//If your run time is less than 0
if (runCalc<0) {
//console log you did not beat yesterdays goal
    console.log("Sorry you did not beat yesterdays goal...");
} else {
// if your run time is greater than or equal to 0
    if (runCalc>=0) {
