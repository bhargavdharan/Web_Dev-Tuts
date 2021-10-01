var fName;
fName = "Dharan";

var place;
place = "India";

document.write("<h1>");
document.write(fName + " lives in " + place);
document.write("</h1>");

// alert(fName + " located in " + place);
console.log(fName + " " + place);

// variables with numbers

var num1 = 20;
var num2 = 40;
var total = num1 + num2;
document.write("<h3>");
document.write("Addition of two numbers: ", total);
document.write("</h3>");

// var name = prompt("Enter your name: ");
// var place = prompt("Enter your place: ");
document.write("<h3>");
document.write("<hr color='red';>")
document.write("you entered name is: ", name);
document.write("<br>");
document.write("you entered place is: ", place);
document.write("<br>");
document.write("</h3>");

document.write("<hr color='red';>");
document.write("<div class='box'>")
document.write("Box")
document.write("</div>")

document.write("<hr color='red';>");
document.write(Date());

document.write("<hr color='red';>");
var d = new Date();
//date
var todayDate = d.getDate();
var todayMonth = d.getMonth()+1;
var year = d.getFullYear();
var fullDate = todayDate +" / " +todayMonth+" / " + year;
document.getElementById("date").innerHTML = "Date: "+fullDate

//time
var Hour = d.getHours();
var Min = d.getMinutes();
var Sec = d.getSeconds();

var timeFormat = Hour + " : " + Min + " : " + Sec;
document.getElementById("time").innerHTML = "Time: "+timeFormat