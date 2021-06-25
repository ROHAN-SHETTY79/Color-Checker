var colorArray = [];
for (var i = 0; i < document.querySelectorAll(".box").length; i++) {
  var o = Math.round,
    r = Math.random,
    s = 255;
  var color = 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
  colorArray.push(color);
  document.querySelectorAll(".box")[i].style.background = color;
}

var randomColor = Math.floor(Math.random() * 6) + 1; //1-6
randomColor = colorArray[randomColor];//to get a indexed color
console.log(randomColor);

document.querySelector("#ColorID").innerHTML = randomColor;
for (var i = 0; i < document.querySelectorAll(".box").length; i++) {
  document.querySelectorAll(".box")[i].addEventListener("click", function(r) {
    var selectedColor = r.view.color
    console.log(r.view.color);
    console.log(selectedColor);
    console.log(colorArray);
    if (randomColor == selectedColor) {
      console.log("true");
      document.querySelector("#a").innerHTML = "That's Correct";
    } else {
      document.querySelector("#a").innerHTML = "That's Wrong! Guess Again.";
    }
  });
}
