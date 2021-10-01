const name = prompt("Enter your name..");
const age = prompt("Enter your age..");


var d = new Date();
var todayDate = d.getDate();
var todayMonth = d.getMonth() + 1;
var year = d.getFullYear();
var fullDate = todayDate + " / " + todayMonth + " / " + year;
document.getElementById("date").innerHTML =  fullDate;


document.getElementById('name').innerHTML = name;
document.getElementById('age').innerHTML = age;



if (age > 18) {
    document.getElementById('access').innerHTML = "eligible";
} else {
    document.getElementById('access').innerHTML = "not-eligible";
}