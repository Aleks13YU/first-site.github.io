var myImage = document.querySelector("img");
myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/new-project.png") {
    myImage.setAttribute("src", "images/web-development.png");
  } else {
    myImage.setAttribute("src", "images/new-project.png");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "NEW PROJECT, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "NEW PROJECT, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
