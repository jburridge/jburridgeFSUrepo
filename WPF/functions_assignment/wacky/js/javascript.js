/**
 * Created by Justin on 1/19/14.
 */

    //setting variables that generate a random decimal number and rounds it down
var random1=Math.floor(Math.random()*3);
var random2=Math.floor(Math.random()*3);
var random3=Math.floor(Math.random()*3);
var random4=Math.floor(Math.random()*5000);

//start of a function with 4 parameters
function calculate (random1, random2, random3, random4) {
    //setting a empty string variable
    var returnMe="";
    //starting condition where 3 variables must be equal to fourth variable
    if (random1&&random2&&random3==random4) {
        returnMe="----------------------------That's nearly impossible, You should invest in lottery.";
    } else if (random1==random4 || random2==random4 || random3==random4) {
        returnMe="You are one lucky person! You should invest in lottery.";
    } else if (random1==random2 && random2 == random3) {
        returnMe="Now that's some tough odds to get, Good job!";
    } else if (random1==random2 || random2==random3) {
        returnMe="Mehh, That was simple...";
    } else {
        returnMe="No luck here boss."
    }
    return returnMe;
}
//console logging a string
console.log("You must match at least 2 numbers to have some sort of luck...");
//logging each random number so you can see how close you where
console.log(random1);
console.log(random2);
console.log(random3);
console.log(random4);
//using the 4 variables set at the top, we call the function with 4 parameters
console.log(calculate(random1, random2, random3, random4));





//This script checks your odds for mega millions to see if you beat the odds when you refresh!
//Or another way to look at it is, This is how much $1 tickets you would have to buy to win mega millions.

//var game=true;
//x=0;
//while (game==true) {
//    var odds=Math.round(Math.random()*256000000);
//
//    if(odds<2){
//        game=false;
//    }
//    x++
//
//}
//console.log(x);
//console.log("End!")