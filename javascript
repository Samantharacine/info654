<!DOCTYPE html>
<html>
<head> 
    <meta charset="UTF-8">
    <title>javascript</title>
</head> 
<h2>My number validator</h2>
<p>Please input a number between 1 and 100:</p>
<input id="numb">
<button type="button" onclick="myFunction()">Submit</button>
<p id="demo"></p>
<script>
function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 100
  let text="";
  if (isNaN(x) || x < 1 || x > 100) {
    text = x + " is not a valid input.";
  } else {
    text = x + " is a valid input.";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>
<body>
