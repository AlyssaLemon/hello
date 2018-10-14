var express = require("express");
var bodyParser = require("body-parser");

var factory = require("./routes/factory.route.js");
var app = express();

var mongoose = require("mongoose");
var dev_db_url =
  "mongodb://newalyssa:5nutappleFRUITQUEEN@ds131973.mlab.com:31973/passporttree";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/factory", factory);

var port = 1234;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});

// //HERE IS THE FACTORY THAT CREATES THE CHILDREN.

// var howMany = prompt(
//   "How many child nodes would you like? You may choose between 1 and 15."
// );
// if (howMany < 1 || howMany > 15) {
//   var howMany = prompt("Please pick a number between 1 and 15.");
//   if (howMany < 1 || howMany > 15) {
//     alert("You don't get to play anymore!");
//   }
// } else if (howMany > 0 && howMany < 16) {
//   console.log(howMany);
// }
// // This asks the user to pick two numbers as a range they'd like random numbers to be generated from and assigns them to variables
// var lowNum = prompt(
//   "Now I will need you to pick a range of numbers. Please pick the lowest number in your range."
// );
// var highNum = prompt("Please pick the highest number in your range.");
// // This generates random numbers within the range provided
// const randomFromRange = function(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// console.log(randomFromRange(lowNum, highNum));
// // This loops through and creates an array of random numbers.\
// let beeps = [];
// var i;
// for (i = 0; i < howMany; i++) {
//   beeps.push(randomFromRange(lowNum, highNum));
// }
// // Just making sure the array is created properly
// console.log(beeps);
// // Creates a UL to plop the array items into
// let childNodesUL = document.createElement("ul");
// childNodesUL.setAttribute("id", "stuff");
// document.body.appendChild(childNodesUL);
// beeps.forEach(function(itemNum) {
//   let li = document.createElement("li");
//   let child = document.createTextNode(itemNum);
//   li.appendChild(child);
//   document.getElementById("stuff").appendChild(li);
// });

// Here is the form to create a FACTORY

// function factoryName(facName) {
//   var newNameDiv = document.createElement("div");
//   newNameDiv.setAttribute("class", "newNameDiv");
//   document.body.appendChild(newNameDiv);
//   var facName = document.getElementById("cfn").value;
//   var newNameSpan = document.createElement("span");
//   newNameSpan.setAttribute("class", "newNameSpan");
//   newNameSpan.appendChild(facName);
//   document.body.appendChild(newNameSpan);
// }

function factoryName() {
  // create a span and append it to the body
  var nameSpan = document.createElement("span");
  document.body.appendChild(nameSpan);

  // find the value of the input and x.innerHTML it
  var facName = document.getElementById("cfn").value;
  nameSpan.innerHTML = facName;

  // append the x to the span
}
