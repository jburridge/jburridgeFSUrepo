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

console.log("Each person at the party will get "+slicePerPerson+" slices of pizza");




//Slice of Pie part 2

//console.log("Sparky will get "+slicesLeftover+" slices leftover.");




//Average Shopping Bill

//var grocerys=[100,150,110,130,200];
//var groceryTotal=grocerys[0]+grocerys[1]+grocerys[2]+grocerys[3]+grocerys[4];
//var groceryAverage=groceryTotal/5;
//
//console.log("The grocery total is $"+groceryTotal+" and their is a weekly average of $"+groceryAverage+" being spent.");




//Discounts

//var itemPrice=prompt("What is the price of the item?");
//var itemNewPrice=itemPrice*.20;
//var itemNewPricee=itemPrice-itemNewPrice;
//
//var itemTax=itemNewPricee*.08;
//var itemTaxx=itemNewPricee+itemTax;
//
//
//console.log("The original price of the item is $"+itemPrice+". The discount is 20%. The discounted price of" +
//    " the item is $"+itemNewPricee+". The discounted price of the item with sales tax is $"+itemTaxx);