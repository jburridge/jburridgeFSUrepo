/**
 * Created by Justin on 1/30/14.
 */

//create password generator with variable set to random number
//send random variable string to allowed emails only

//collect email info
//if match, mailto randompass

emails=[];
emails[0]="thisemail@yahoo.com";
emails[1]="thatemail@gmail.com";

//Collects email value and checks to see if it matches an email in the array then returns a random number
function getEmail(emailsArray) {
    var email = document.getElementById("getEmail").value;
    if (emailsArray.indexOf(email)>=0) {
        var randomPass=Math.floor(Math.random()*200000)+100000;
        return randomPass;
    } else {
        alert("You are not authorized.");
    }
}


function writePass (randomPass) {
    if (randomPass != null) {
        document.write("mailto:"+document.getElementById("getEmail").value);
    } else {

    }
}