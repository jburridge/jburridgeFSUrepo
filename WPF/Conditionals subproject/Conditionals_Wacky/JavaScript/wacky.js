/**
 * Created by Justin on 1/11/14.
 */

//setting up variables
var oranges=parseInt(prompt("How many oranges do you have?"));
var bananas=parseInt(prompt("How many bananas do you have?"));
var whatToDo=prompt("Would you like to 'multiply', 'divide', 'add' or 'subtract' your oranges and bananas?");
var orangeBan=oranges-bananas
var banOrange=oranges+bananas
var orangeMulBan=oranges*bananas
var orangeDivBan=oranges/bananas

//if whattodo is multiply
if (whatToDo==multiply) {
//console log multiplied orange bananas
    console.log("That would mean you have "+orangeMulBan+" orange bananas!");
}