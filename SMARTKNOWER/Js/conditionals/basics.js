var marks = prompt("Enter marks: ");
document.getElementById("marks").innerHTML = "You entered marks is:"+marks;

if (marks <= 35) {
    // alert("you are failed!")
    document.getElementById("result").innerHTML="you are failed"
} else if(marks > 35 && marks <=50){
    // alert("you are passed")
    document.getElementById("result").innerHTML="you are passed"
} else if (marks > 50 && marks <= 60) {
    document.getElementById("result").innerHTML="you are passed in second class"
} else if (marks > 60 && marks <= 80) {
    document.getElementById("result").innerHTML="you are passed in first class"
} else if (marks > 80) {
    document.getElementById("result").innerHTML="you are passed in distinction"
} else {
    alert("Enter correct details to display")
}

// var uid = prompt("Enter user id here:");
// var pwd = prompt("Enter Password:");

// if (uid == "JavaScript" && pwd=="1234567") {
//     alert("Authorized user")
// } else {
//     alert("Un-Authorized user")
// }

// if (uid == "JavaScript" || pwd=="1234567") {
//     alert("Authorized user")
// } else {
//     alert("Un-Authorized user")
// }