var form=document.getElementById("frm");
form.onsubmit=function(event){
    event.preventDefault();

var nameInput = document.getElementById("nameInput").value;
var mobileInput = document.getElementById("mobileInput").value;
var input=document.getElementById("input").value;
var alternatemobileInput = document.getElementById("alternatemobileInput").value;
var emailInput = document.getElementById("emailInput").value;
var addressInput = document.getElementById("addressInput").value;

    
var displayBox = document.getElementById("box");
displayBox.innerHTML = "<span><span style='color: blue;'>Name: </span>"+ nameInput + "</span> <br>" +
                       "<span><span style='color: blue;'>Mobile No.: </span>" + mobileInput + "</span> <br>"+
                       "<span><span style='color: blue;'>Alternate Mobile No.:</span>"+alternatemobileInput+"</span> <br>"+                          
                       "<span><span style='color: blue;'>S/O,W/O,D/O:</span >" +input + "</span> <br>" +
                       "<span><span style='color: blue;'>Email:</span>" + emailInput + "</span> <br>" +
                       "<span><span style='color: blue;'>Address:</span>" + addressInput;"</span>"
    return false;

}