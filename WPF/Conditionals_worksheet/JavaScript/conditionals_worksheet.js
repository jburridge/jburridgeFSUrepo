/**
 * Created by Justin on 1/10/14.
 */

//Stuff your face 1
//
//var compWeight=180;
//
//if (compWeight>=250){
//    console.log("Qualified");
//} else {
//    console.log("Not Qualified");
//}




//Celsius Fahrenheit Converter

//var temperature=prompt("What is your current temperature?");
//var fOrC=prompt("F or C? (Fahrenheit or Celsius?)");
//var fahrenheit=(temperature-32)*(5/9);
//var celsius=temperature*(9/5)+32;
//
//(fOrC.toLowerCase()=="f")?console.log(fahrenheit):console.log(celsius);


//Check the Login

var createUser=prompt("Please create your username");
var createPass=prompt("Please create your password");
var loginUser=prompt("Now please login with your username");

if (loginUser==createUser) {
    var loginPass=prompt("Please enter your password");
    if (loginPass==createPass) {
        console.log("Welcome, "+createUser+", You have logged in!");
    } else {
        console.log("Incorrect password, Refresh please.");
    }
} else {
    console.log("Incorrect username, Refresh please.");
}



//Movie Ticket Price

//var yourAge=prompt("What is your age?");
//var whatTime=prompt("What time is it? (The hour only please)");
//
//
//if (whatTime>=3 && whatTime <=5){
//    console.log("You get discounted price of $7!");
//} else {
//    if (yourAge<=10 || yourAge>=55){
//        console.log("You get discounted price of $7!");
//    } else {
//        console.log("You get normal price of $12, Sorry dude!");
//        }
//    }