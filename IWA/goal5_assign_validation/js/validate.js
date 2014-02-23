/*
 Developed by the JavaScript team at Fullsail
 Date: 1306
 */


(function () {
    var myform = document.querySelector("#myform");
    var username = document.querySelector("#f_username");
    var email = document.querySelector("#f_email");
    var phone = document.querySelector("#f_phone");
    var password = document.querySelector("#f_password");
    var ssn = document.querySelector("#f_ssn");

    myform.onsubmit = function (e) {

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(username);  //id = is the form input field ID
        validateField(email);
        validateField(phone);
        validateField(password);
        validateField(ssn);

        alert("Succesful!");
        e.preventDefault();
        return false;
    };


    var validateField = function (inputName) {
        var pattern;
        if (inputName.name === 'f_username') {
            pattern = /[A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,}/;

        } else if (inputName.name === 'f_email') {
            pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        } else if (inputName.name === 'f_phone') {
            pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        } else if (inputName.name === 'f_password') {
            pattern = /^[a-zA-Z]{1}[a-zA-Z, 0-9]{4,15}/;

        } else if (inputName.name === 'f_ssn') {
            pattern = /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/;

        }

        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2) {
            errorMsg.style.display = 'block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5) {
            errorMsg.style.display = 'none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display = 'none';
            inputName.style.backgroundColor = 'white';
        }
    };

})();  // end wrapper



