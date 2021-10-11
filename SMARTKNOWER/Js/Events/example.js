function test() {
    // var fn = document.myform.fName.value;
    // var fn = document.getElementById('fName').value;
    // var ph = document.getElementById('phn').value;
    // alert("welcome" + fn);
    // if (isNaN(ph)) {
    //     alert("Phone should be number");
    // } else if (len != 10) {
    //     alert("Phone should be 10 digits");
    // } else {
    //     alert("your phone number is " + ph);
    // }

    var topic = document.getElementById("course").value;
    // var x = document.getElementById("color").value;
    var y = document.getElementById("color").value;
    // var z = document.getElementById("font").value;
    // alert("You selected " + topic);
    
    document.getElementById('msg').innerHTML ="you selected " +topic;
    // document.getElementById('bg').style.background = x;
    document.getElementById('msg').style.color = y;
    // document.getElementById('h1').style.fontFamily = z;
}