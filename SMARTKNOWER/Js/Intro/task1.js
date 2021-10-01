var principalAmount = prompt("Enter principal amount: ");

var rateOfInterest = prompt("Enter rate of interest: ");

var result = (principalAmount * (rateOfInterest / 100));
// document.write("The result is: ", result);
document.write("<table border='2px' align='center'>");

document.write("<tr>");

document.write("<th>Principal Amount</th>");
document.write("<th>Rate of Interest</th>");
document.write("<th>Result</th>");

document.write("</tr>");

document.write("<tr>");

document.write("<td>");
document.write(principalAmount);
document.write("</td>");
document.write("<td>");
document.write(rateOfInterest);
document.write("</td>");
document.write("</td>");
document.write(result);
document.write("</td>");

document.write("</tr>");

document.write("</table>");
