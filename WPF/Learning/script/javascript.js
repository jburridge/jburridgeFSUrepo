/**
 * Created by Justin on 1/30/14.
 */

//create password generator with variable set to random number
//send random variable string to allowed emails only

//collect email info
//if match, mailto randompass

emails=[];
emails[0]="burridge.justin@gmail.com";
emails[1]="thatemail@gmail.com";

//Collects email value and checks to see if it matches an email in the array then returns a random number
function checkEmail(emailsArray) {
    if (emailsArray.indexOf(document.getElementById("getEmail").value)>=0) {
        randomPass=Math.floor(Math.random()*200000)+100000;
        return randomPass;
    } else {
        randomPass="You where not authorized to receive this password.";
    }
}

function setAction () {
    theAction=document.getElementById('form_id').action;
    actionAttr="mailto:"+document.getElementById("getEmail").value;
    theAction=actionAttr
    return actionAttr
}