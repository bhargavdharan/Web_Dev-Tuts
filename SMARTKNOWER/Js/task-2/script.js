const salary = prompt("Enter your salary");

document.getElementById('salary').innerHTML = salary;


if (salary <= 30000) {
    var noTax = salary;
    document.getElementById('tax').innerHTML = noTax;
    var handSal = salary;
     document.getElementById("hSalary").innerHTML = handSal;
} else if (salary >= 30000 && salary <= 40000) {
    var tax1 = salary * (5 / 100);
    document.getElementById('tax').innerHTML = tax1;
    var handSal = salary - tax1;
    document.getElementById('hSalary').innerHTML=handSal;
}else if (salary >= 40000 && salary <= 50000) {
    var tax2 = salary * (8 / 100);
    document.getElementById('tax').innerHTML = tax2;
     var handSal = salary - tax2;
     document.getElementById("hSalary").innerHTML = handSal;
} else if (salary >= 50000) {
    var tax3 = salary * (10 / 100);
    document.getElementById('tax').innerHTML = tax3;
     var handSal = salary - tax3;
     document.getElementById("hSalary").innerHTML = handSal;
} else {
    document.getElementById('tax').innerHTML = "Invalid";
    document.getElementById('hSalary').innerHTML = "Invalid";
}