let nameJS = prompt("What is the “official” name of JavaScript?", '');

if (nameJS == "ECMAScript") {
    alert("Right");
} else {
    alert("You don’t know? ECMAScript!");
}

let userNum = +prompt("Type a number", '');

if (isNaN(userNum)) {
    alert("That is not a number");
} else if (userNum > 0) {
    alert(1);
} else if (userNum < 0) {
    alert(-1);
} else {
    alert(0);
}


let message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' :
'';

alert( message );

switch (choice) {
    case "funny":
        p.message = "He is a very funny person and we love him for that";
    break;

    case "calm":
        p.message = "He is a calm person and we like his personality";
        break;

    case "serious":
        p.message = "He is a very serious and strict person, we initially struggled to work with him, but at the end we got along";
        break;
    default:
    p.message = "No one came; we had to do the practical all by ourselves";
}