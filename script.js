//Data Types:
// string
// number
// boolean
// array
// object
// function
// undefined
// null

// Chapter-8 Concatenate
document.getElementById("concatenate").onclick = () => {
   let message = "Welcome"
   let neme = "Imran"
   let banger = "!"
   alert(message + " " + neme + banger)
   document.getElementById("statement").innerHTML = "let message = 'Welcome ' + 'Imran' + '!'"
   document.getElementById("output").style.textAlign = "center"
   document.getElementById("output").innerHTML = message + " " + neme + banger
}

// Chapter-9 Ask Name from User
document.getElementById("username").onclick = () => {
   let firstName = prompt("Enter your First Name")
   let lastName = prompt("Enter your Last Name")
   var output = document.getElementById("output")
   alert("Your Full Name is" + " " + firstName + " " + lastName + "!")
   document.getElementById("statement").innerHTML = "let firstName + lastName = prompt('Enter firstName') + ('Enter firstName')"
   output.style.textAlign = "center"
   output.innerHTML = ("Your Full Name is" + " " + firstName + " " + lastName + "!")
}
// let x = 20
// let y = 10
// if (x - y == 20) { 
//    console.log("Ture")
// }
// else {console.log("False")
// }

// ==       checks value
// ===      checks value and data type
// >        greater than
// <        less than
// >=       greater than or euqal
// <=       less than or euqal
// !=       not equal to


// Chapter-10 Comparasion Operator
document.getElementById("comparison").onclick = function () {

   let result = "<pre><ul><li>==     checks value</li><li>===    checks value and data type</li><li>>      greater than</li><li><      less than</li><li>>=     greater than or euqal</li><li><=     less than or euqal</li></ul></pre>"
   let output = document.getElementById("output")
   output.innerHTML = result
}

// Chapter-11 if else if 
// Write a program that calculates the ticket price based on age with the following 
// conditions: age below 12 pay a ticket price of 5, 
// age below 18 pay a ticket price of 10, 
// age below 60 pay a ticket price of 20, 
// age over 60 play a ticket price of 15.

document.getElementById("ifelse").onclick = function () {

   let age = prompt("Enter You Age")
   let output = document.getElementById("output")
   if (age < 12) {output.innerHTML = "<p class='text-center'> Your Ticket Price: <b>Rs. 5</b></p>"}
   else if (age < 18) {output.innerHTML = "<p class='text-center'> Your Ticket Price: <b>Rs. 10</b></p>"}
   else if (age < 60) {output.innerHTML = "<p class='text-center'> Your Ticket Price: <b>Rs. 20</b></p>"}
   else if (age > 60) {output.innerHTML = "<p class='text-center'> Your Ticket Price: <b>Rs. 15</b></p>"}
   }

// Chapter-12 Testing Sets of Conditions
document.getElementById("testing").onclick = function () {
let name = prompt("Enter Your Name")
let code = prompt("Enter Your Code")
let output = document.getElementById("output")
if (name === "Usman" && code === "123") {output.innerHTML= "<p class='text-center'>Director</p>"}
else if (name === "Saeed" && code === "321") {output.innerHTML= "<p class='text-center'>Dy Director</p>"}
else if (name === "Kashif" && code === "456") {output.innerHTML= "<p class='text-center'>Assistant Director</p>"}
else {output.innerHTML= "<p class='text-center'>Guest</p>"}
}

// Chapter-13 Nasted Statement
document.getElementById("nested").onclick = function () {
let name = prompt("Enter Your Name")
let output = document.getElementById("output")
if (name === "Usman" || name === "Saeed" || name === "Kashif") 
{let code = prompt("Enter Your Code")
 if (name === "Usman" && code === "123") {output.innerHTML= "<p class='text-center'>Director</p>"}
else if (name === "Saeed" && code === "321") {output.innerHTML= "<p class='text-center'>Dy Director</p>"}
else if (name === "Kashif" && code === "456") {output.innerHTML= "<p class='text-center'>Assistant Director</p>"}
}
else {output.innerHTML= "<p class='text-center'>Guest</p>"}
}

// Chapter-14 Login
document.getElementById("login").onclick = function () {
let name = prompt("Enter User Name")
let password = prompt("Enter Password")
let output = document.getElementById("output")
if (name === "admin" && password === "admin") {output.innerHTML= "<p class='text-center'>Login Successfully</p>"}
else {output.innerHTML= "<p class='text-center'>Invalid User or Password</p>"
}}









// Clear Buttons
document.getElementById("btnstatement").onclick = () => {
   document.getElementById("statement").innerHTML = ""
}

document.getElementById("btnoutput").onclick = () => {
   document.getElementById("output").innerHTML = ""
}