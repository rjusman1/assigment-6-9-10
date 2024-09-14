var cityName= prompt("Enter your city name:");

if (cityName == "karachi") {
    alert("Welcome to the city of lights");
} 
else {
    alert("Invalid City");
}

var gender = prompt("Enter your gender (male/female):");

if (gender == "male") {
    alert("Good Morning Sir");
} else if (gender == "female") {
    alert("Good Morning Ma'am");
} else {
    alert("Invalid gender");
}

var signalColor = prompt("Enter the color of the traffic signal (Red, Yellow, Green):");

if (signalColor == "Red") {
    alert("Must Stop");
} else if (signalColor == "Yellow") {
    alert("Ready to move");
} else if (signalColor == "Green") {
    alert("Move now");
} else {
    alert("Invalid color entered");
}


var fuel = parseFloat(prompt("Enter the remaining fuel in litres:"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("Fuel level is sufficient");
}



var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}


if (true) {
    alert("True");
}

if (false) {
alert("False");

}
if ("car" < "cat") {
    alert("car is smaller than cat");
}


var totalMarks = parseFloat(prompt("Enter the total marks:"));
var marks1 = parseFloat(prompt("Enter the marks obtained in subject 1:"));
var marks2 = parseFloat(prompt("Enter the marks obtained in subject 2:"));
var marks3 = parseFloat(prompt("Enter the marks obtained in subject 3:"));


var marksObtained = marks1 + marks2 + marks3;

var percentage = (marksObtained / totalMarks) * 100;


var grade, remarks;

if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need improvement";
} else if (percentage >= 50) {
    grade = "C";
    remarks = "Keep Trying";
} else {
    grade = "F";
    remarks = "Fail";
}


document.write("<h3>Marks Sheet</h3>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");




var secretNumber = Math.floor(Math.random() * 10) + 1;

var guess = parseInt(prompt("Guess the secret number (between 1 to 10):"));


if (guess == secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 == secretNumber || guess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}

var number = parseInt(prompt("Enter a number:"));


if (number % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
}




var num = parseInt(prompt("Enter a number:"));


if (num % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}



var temperature = parseFloat(prompt("Enter the temperature:"));


if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's really cold outside!");
}



