/**
 * Created by Justin on 1/19/14.
 */

    //given variables
var pounds = parseFloat(prompt("How many pounds is your animal?"));
var beeSting = parseFloat(8.666666667);

//entering parameters for the variables to use
function calcDeadAnimal (p, b){
//calculation an expression for stings to pounds
    console.log("It would take " + p/b + " bee stings to kill your animal.");
}
//console.logging the function with the 2 variables at the top that replace the parameters
calcDeadAnimal(pounds,beeSting);