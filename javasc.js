window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}
function CLASS(elem) {
  return document.getElementsByClassName(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

var jatek = [];

function init() {
  var txt = "";
  for (let index = 0; index < 9; index++) {
    txt += `<div class="mutyo"><p><p></div>`;
  }
  console.log(txt);
  $("article")[0].innerHTML = txt;
  for (let index = 0; index < 9; index++) {
    document
      .getElementsByClassName("mutyo")
      [index].addEventListener("click", nyomokazas);
  }
}
function nyomokazas() {
  let text = document.getElementById("mutyo").innerHTML;
  document.getElementById("click").innerHTML = text;
  console.log(text);
}
