/**
 * Created by the JavaScript Development Team (Justin Burridge) 02/22/14
 * Class: PWA
 * Goal: Goal7
 */

(function () {
//build arrays
    var names = ["Bob", "Joe", "Fred", "Sophie", "Carla"];
    var jobs = ["teacher", "farmer", "student", "pilot"];
    var actions = ["sleeping", "eating", "working"];
    var peopleList = [];

//object constructor
    function Person(nameP, jobP, actionP, rowP) {
        this.name = nameP;
        this.job = jobP;
        this.action = actionP;
        this.row = rowP;
    }
//fill the object constructor and push into peopleList Arr
    for (var i = 1; i <= 3; i++) {
        var nameR = names[~~(Math.random() * names.length)];
        var jobR = jobs[~~(Math.random() * jobs.length)];
        var actionR = actions[~~(Math.random() * actions.length)];
//        for (var v = 0; v < 3; v + 5) {
//            if (nameR == peopleList[(i - 1)].name) {
//                nameR = names[~~(Math.random() * names.length)];
//                v - 5;
//            }
//        }

        var people = new Person(nameR, jobR, actionR, i);
        peopleList.push(people);
//This console log is telling me that peopleList[1]/[2]/[3] are all undefined <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// console.log(peopleList); <<<<<<<<<<<<<<< works but isn't exactly what I'm looking for, I need the "i"
        console.log(peopleList[i]);
    }
//testing the innerhtml with wrong values and format
    peopleList.forEach(function (e) {
        var counter = 1;
        var elementID = document.querySelector("#r" + e.row + "c" + counter);
        elementID.innerHTML = e.name;
        counter++;
        elementID = document.querySelector("#r" + e.row + "c" + counter);
        elementID.innerHTML = e.job;
        counter++;
        elementID = document.querySelector("#r" + e.row + "c" + counter);
        elementID.innerHTML = e.action;
    });
})();