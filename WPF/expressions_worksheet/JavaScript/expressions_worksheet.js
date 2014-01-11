/**
 * Created by Justin on 1/10/14.
 */

//Dog Years

//var humanYears=prompt("How many human years is sparky?");
//
//console.log("Your dog is " + humanYears*7 + " dog years old.");

//Slice of Pie part 1

var pizza=prompt("How many pizzas where ordered?");
var pizzaSlice=prompt("How many slices per pizza are their?");
var people=prompt("How many people are attending the party?");
var slicesOfPizza=pizzaSlice*pizza;
var slicePerPerson=slicesOfPizza/people;
var slicesLeftover=slicesOfPizza%people;
//
//console.log("Each person at the party will get "+slicePerPerson+" slices of pizza");

//Slice of Pie part 2

console.log("Sparky will get "+slicesLeftover+" slices leftover.");
