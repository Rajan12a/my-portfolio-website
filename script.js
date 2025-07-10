var bright = document.querySelector("#bright");
var dark = document.querySelector("#dark");
var body = document.querySelector("body");
var atext = document.querySelector(".a");
var homepic = document.querySelector("#img");
var btn = document.querySelector(".btns");
var border = document.querySelector(".box-title1");
var border2 = document.querySelector(".box-title2");
var borde = document.querySelector(".skill-box-1");
var borde2 = document.querySelector(".skill-box-2");
var pro_bor_1 = document.querySelector(".box-p-1");
var pro_bor_2 = document.querySelector(".box-p-2");
var pro_bor_3 = document.querySelector(".box-p-3");
var icons = document.querySelector(".icon-img");
var go_project = document.querySelector(".go-btn");
//var cut = document.querySelector(".close");
//bright.classList.toggle("dark")

bright.addEventListener("click", function () {
  body.style.background = "black";
  body.style.color = "white";
  body.style.transition = "2s";
  homepic.style.filter = "drop-shadow(15px 15px 20px rgb(42, 255, 255))";
  btn.style.background = "black";
  btn.style.color = "white";
  btn.style.filter = "drop-shadow(10px 5px 15px aquamarine)";
  border.style.border = "2px solid aqua";
  border2.style.border = "2px solid aqua";
  borde.style.border = "2px solid aqua";
  borde2.style.border = "2px solid aqua";
  pro_bor_1.style.border = "2px solid aqua";
  pro_bor_2.style.border = "2px solid aqua";
  pro_bor_3.style.border = "2px solid aqua";
  icons.style.color = "#0077B5";
});

bright.addEventListener("dblclick", function () {
  body.style.background = "white";
  body.style.color = "black";
  body.style.transition = "3s";
});

go_project.addEventListener("click", function () {
  location.href = "index1.html";
});
