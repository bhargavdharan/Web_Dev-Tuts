var person = function () {
    console.log("Hello, Mr.Anonymous");
}

person();

var person1 = () => { console.log("Hello, Mr.Arrow") };
person1();

// Arrow functions

var person2 = (a, b) => {
    var c = a + b;
    console.log("Addition: \t"+c);
}
person2(5, 6);