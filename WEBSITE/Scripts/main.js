// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

//variables
let myVariable = 'Bob';
console.log(myVariable);

//conditionals
let iceCream = 'Chocolate';
if (iceCream === 'Chocolate') {
    alert("yay, I Love chocolate ice cream!");
} else {
    alert('Awww, but chocolate is my favorite...');
}

//Functions
let myVariable1 = document.querySelector('h1');
alert('hello!');

function multiply(num1, num2) {
    let result = num1 * num2;
    console.log(result);
}
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

//Events

// let myHtml = document.querySelector('html');
// myHtml.onclick = function () {
//     alert('Ouch! Stop poking me!');
// };

let myImage = document.querySelector('img');
myImage.onload = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'Images/firefox-icon.jpeg') {
        myImage.setAttribute('src', 'Images/firefox-icon.jpeg');
    } else {
        myImage.setAttribute('src', 'Images/firefox.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', 'myName');
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
