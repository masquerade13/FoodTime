let box = document.getElementById("drop-container");

function togglemenu() {
    if (box.style.display === "flex") {
        box.style.display = "none";
    } else {
        box.style.display = "flex";
    }
}

var acc = document.getElementsByClassName("accordion");
var minus = document.getElementsByClassName("down-m-btn");
var plus = document.getElementsByClassName("down-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
  });
}