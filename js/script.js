var black = document.getElementById("black");
var blue = document.getElementById("blue");
var red = document.getElementById("red");




//01. Listen for button click
var buttonClick = this.addEventListener ("click", function(e) {
console.log(e.target.id + " button was clicked");
var colorChosen = e.target.id;


//02. Change background colour
  if (colorChosen == "black"){
    document.body.style.background = "black";
    console.log('You chose Black!');
  } else if (colorChosen == "blue") {
    document.body.style.background = "blue";
    console.log('You chose Blue!');
  } else if (colorChosen == "red") {
    document.body.style.background = "red";
    console.log('You chose Red!');

  }
});
