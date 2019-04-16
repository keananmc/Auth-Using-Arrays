function getRegistrationFields() {
    var first = document.getElementById("firstname").value;
    var last = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var username = document.getElementById("username").value;
    var password = document.getElemetnById("password").value;
    var confirm = document.getElementById("passwordconfirm").value;
    var empty = "";

if ((first === empty) || (last === empty) || (email === empty) || (age === empty)
    || (username === empty) || (password === empty) || (confirm === empty)) {
    var message = "Not all of the fields are filled out";
    prompt(message);
    //showModalWindow("fields");
    return false;
   }

else {
   age = parseInt(age);

   if (password.length < 10) {
        var message2 = "Password must be at least 10 characters long";
        prompt(message2);
        //showModalWindow("passwordlength");
        return false;
       } 

   else if (password != confirm) {
        var message3 = "Passwords Do not match";
        prompt(message3);
        //showModalWindow("passwordmatch");
        return false;
       }

   else if (age < 18) {
        var message4 = "You must be older to register for this software.";
        prompt(message4);
        //showModalWindow("young");
        return false;
       }

   else {
        var message5 = "All of the fields are correct. We will be processing your request";
        prompt(message5);
        //showModalWindow("success");
        return true;
       }
  }
}

function showModalWindow(fileName) {
   window.showModalDialog("alerts/" + url + ".html", "", "resizable: no; height: 150;   width: 350;");
}