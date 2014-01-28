/**
 * Created by Justin on 1/19/14.
 */

//setting condition to true
var condition = true;
//making a loop that runs while condition is true
while (condition) {
//inside while loop prompt user for what they want
    var learn=prompt("Would you like to know about 'Functions', 'Variables', or 'Conditionals'?").toLowerCase();
    var level=prompt("Would you like the 'Basic' or 'Advanced' version?").toLowerCase();
//start a function passing in the 2 above prompts
function teach (learn, level) {
//setting gibberish variable to empty string
    var gibberish="";

    if (learn=="functions" && level=="basic") {
        gibberish="Functions are a block of re-usable code to be called somewhere else to perform.";
    } else if (learn=="functions" && level=="advanced") {
        gibberish="Functions can hold any kind of code that can be re-used in multiple instances. Functions can not use variables inside or outside of them without passing them through as a parameter or returning the value of something.";
    } else if (learn=="variables" && level=="basic") {
        gibberish="Variables can hold information.";
    } else if (learn=="variables" && level=="advanced") {
        gibberish="Variables can hold all kinds of information for you to use or change at anytime. A variable can hold a function, expression, you can even change the variable somewhere else with a conditional!";
    } else if (learn=="conditionals" && level=="basic") {
        gibberish="Conditionals ask the script a question and perform upon that question.";
    } else if (learn=="conditionals" && level=="advanced") {
        gibberish="Conditionals are used to ask your script a question for example, is var people > 5? If yes, it will perform a action. If not, It will perform a 'no' action.";
    } else {
        condition=false;
        gibberish="You may have made a typo, Refresh to try again!"
    }
    return gibberish;
}
    console.clear();
    console.log(teach(learn,level));
}