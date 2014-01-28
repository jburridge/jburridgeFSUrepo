/**
 * Created by Justin on 1/19/14.
 */

//console logging a few unimportant things
console.log("Today I will teach you how to wash your hands for personal hygiene");
console.log("Lets find out if you've washed you're hands correctly");

//setting variables to prompts for user input
var didWet=prompt("Did you wet your hands? Yes or No");
var didSoap=prompt("Did you apply soap and scrub? Yes or No");
var didRinse=prompt("Did you rinse your hands? Yes or No");
var didDry=prompt("Did you dry your hands? Yes or No");

//creating a function with 4 parameters
function calculate (didWet, didSoap, didRinse, didDry) {
    theValue="";
    //starting a conditional if all values are yes
    if (didWet=="yes" && didSoap=="yes" && didRinse=="yes" && didDry=="yes") {
        theValue=(5-7)+(2*1)-(0-2)+4;
        //if any value is yes
    } else if (didDry=="yes" || didRinse=="yes" || didSoap=="yes" || didWet=="yes") {
        theValue=(2/1)+(7*3);
        //if no values are yes
    } else {
        theValue=(2*3)+1;
    }
//starting conditional that just uses the math from the prior conditional so that I used expressions
    if (theValue==6) {
        //settings theValue to a string depending on what the condition was
        theValue="You followed all steps and washed your hands correctly!";
    } else if (theValue==23) {
        theValue="You followed some steps but not all of them!";
    } else if (theValue==7) {
        theValue="You did not follow any steps, Please wash your hands again.";
    }
    //returning theValue string
    return theValue;
}
//consolelog the returned value of calculate function
console.log(calculate(didWet, didSoap, didRinse, didDry));