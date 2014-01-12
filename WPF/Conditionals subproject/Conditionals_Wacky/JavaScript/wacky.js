/**
 * Created by Justin on 1/11/14.
 */

//setting up variables
var oranges=parseInt(prompt("How many oranges do you have?"));
var bananas=parseInt(prompt("How many bananas do you have?"));
var whatToDo=prompt("Would you like to 'multiply', 'divide', 'add' or 'subtract' your oranges and bananas?");
var orangeBan=oranges-bananas;
var banOrange=oranges+bananas;
var orangeMulBan=oranges*bananas;
var orangeDivBan=oranges/bananas;

//if whattodo is multiply
if (whatToDo=="multiply") {
//console log multiplied orange bananas
    console.log("That would mean you have "+orangeMulBan+" orange bananas!");
} else {
//if whattodo is divide
    if (whatToDo=="divide") {
//console log divided orange bananas
        console.log("That would mean you have "+orangeDivBan+" orange bananas!");
    } else {
//if whattodo is add
        if (whatToDo=="add") {
//console log added yellow oranges
            console.log("What? You have "+banOrange+" yellow oranges?");
        } else {
//if whattodo is subtract
            if (whatToDo=="subtract") {
//console log subtracted yellow oranges
                console.log("Woah, You now have "+orangeBan+" yellow oranges!");
            } else {
//prompting for what else the user wants to do
var somethingElse=prompt("Clearly you don't want to add,substract,multiply or divide. So what is it you want to do?");
            }
        }
    }
}

//check if somethingelse variable has been touched
if (somethingElse!="") {
//display console log if something else does not = nothing
    console.log("Sorry but I'm an untrained robot, I don't know how to "+somethingElse);
}