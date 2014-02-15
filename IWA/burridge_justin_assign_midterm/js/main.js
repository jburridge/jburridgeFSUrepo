/*
 * Mid Terms for PWA-1
 * justin burridge
 * 2/15/2014
 */

(function () {

//select button by class and onclick event
    var button = document.querySelector(".buttonred");
    button.addEventListener("click", onClick);

//select div to change innerHTML of
    var nameContent = document.querySelector("#name");
    var addContent = document.querySelector("#address");
    var gpaContent = document.querySelector("#gpa");
    var dateContent = document.querySelector("#date");
    var gpaAvgContent = document.querySelector("#gpaavg");

    var currentStudent = -1;

//defining today's date
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var todayDate = month + "/" + day + "/" + year;


//people array containing object information
    var people = [
        {
            name: "Johnny",
            address: {street: "7710 Maltlage Dr", city: "Liverpool", state: "NY"},
            gpa: [3.0, 3.1, 3.2],
            date: todayDate,
            avgGpa: getAverage([3.0, 3.1, 3.2]).toFixed(1)
        },
        {
            name: "Robert",
            address: {street: "1345 Heaven Lane", city: "Clay", state: "GA"},
            gpa: [3.5, 3.2, 3.9],
            date: todayDate,
            avgGpa: getAverage([3.5, 3.2, 3.9]).toFixed(1)
        }
    ];

//create the average
    function getAverage(arr) {

        var sum = 0;
        for (var x = 0; x < arr.length; x++) {
            sum += arr[x];
        }
        var total = sum / arr.length;
        return total;
    }


//loops through and displays the people array in "3" lines
    console.log("ORIGINAL ARRAY!");
    for (var z in people) {
        console.log("Name: " + people[z].name + "\n" +
            "Address: " + people[z].address.street + " " + people[z].address.city + ", " + people[z].address.state + "\n" +
            "GPA: " + people[z].gpa + "\n" +
            "Date: " + people[z].date + "\n" +
            "Average GPA: " + people[z].avgGpa + "\n" +
            "-------------------------------------------");
    }


//creates a new object to push into people array
    function newPeople(n, s, c, t, g, d, a) {
        people.push({name: n, address: {street: s, city: c, state: t}, gpa: g, date: d, avgGpa: a});
        return people;
    }

//calling the function with arguments
    newPeople("Margret", "99 Sure Ln", "Jellybeans", "DP", [3.0, 3.1, 3.5], todayDate, getAverage([3.0, 3.1, 3.5]).toFixed(1));

//seperator for new array
    console.log("\n \n NEW PEOPLE ARRAY!");
//re-loop through people and display with the new pushed object
    for (var y in people) {
        console.log("Name: " + people[y].name + "\n" +
            "Address: " + people[y].address.street + " " + people[y].address.city + ", " + people[y].address.state + "\n" +
            "GPA: " + people[y].gpa + "\n" +
            "Date: " + people[y].date + "\n" +
            "Average GPA: " + people[y].avgGpa + "\n" +
            "-------------------------------------------");
    }


//function to run onclick which advances to next array element
    function onClick() {
        currentStudent++;
//if currentstudent is less than length-1 then display next student, else remove event from button
        if (currentStudent <= people.length-1) {
        nameContent.innerHTML = "Name: " + people[currentStudent].name;
        addContent.innerHTML = "Address: " + people[currentStudent].address.street + " " + people[currentStudent].address.city + ", " + people[currentStudent].address.state;
        gpaContent.innerHTML = "GPA: " + people[currentStudent].gpa;
        dateContent.innerHTML = "Date: " + people[currentStudent].date;
        gpaAvgContent.innerHTML = "Average GPA: " + people[currentStudent].avgGpa;
        } else {
            button.removeEventListener("click", onClick);
            button.innerHTML = "Done!";
        }
    }


})();
