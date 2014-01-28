/**
 * Created by Justin on 1/19/14.
 */


console.log("Today I will teach you how to wash your hands for personal hygiene");
console.log("Lets find out if you've washed you're hands correctly");

var didWet=prompt("Did you wet your hands? Yes or No");
var didSoap=prompt("Did you apply soap and scrub? Yes or No");
var didRinse=prompt("Did you rinse your hands? Yes or No");
var didDry=prompt("Did you dry your hands? Yes or No");


function calculate (didWet, didSoap, didRinse, didDry) {
    theValue="";
    if (didWet=="yes" && didSoap=="yes" && didRinse=="yes" && didDry=="yes") {
        theValue=(5-7)+(2*1)-(0-2)+4;
    } else if (didDry=="yes" || didRinse=="yes" || didSoap=="yes" || didWet=="yes") {
        theValue=(2/1)+(7*3);
    } else {
        theValue=(2*3)+1;
    }

    if (theValue==6) {
        theValue="You followed all steps and washed your hands correctly!";
    } else if (theValue==23) {
        theValue="You followed some steps but not all of them!";
    } else if (theValue==7) {
        theValue="You did not follow any steps, Please wash your hands again.";
    }
    return theValue;
}

console.log(calculate(didWet, didSoap, didRinse, didDry));