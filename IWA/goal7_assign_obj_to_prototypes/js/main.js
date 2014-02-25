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
    var interval = setInterval(runUpdate, 1000);

//object constructor
    function Person(nameP, jobP, actionP, rowP) {
        this.name = nameP;
        this.job = jobP;
        this.action = actionP;
        this.row = rowP;
        this.update = function () {
            console.log('test');
        }
    }

//fill the object constructor and push into peopleList Arr
    for (var i = 1; i <= 3; i++) {
        var nameR = names[~~(Math.random() * names.length)];
        var jobR = jobs[~~(Math.random() * jobs.length)];
        var actionR = actions[~~(Math.random() * actions.length)];

        var people = new Person(nameR, jobR, actionR, i);
        peopleList.push(people);

        names.splice(names.indexOf(nameR), 1);
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

    function runUpdate() {
        peopleList.forEach(function (element) {
            element.update();
        });
    }

})();