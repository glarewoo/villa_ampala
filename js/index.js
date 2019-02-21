/*var slide_up_class =  document.getElementsByClassName("slide_up")[0];
var article = document.getElementsByTagName("article");
var slide_up_arr = [article];


for(i =0; i< slide_up_arr.length; i++){
    article.classList.add("slide_up_class");
}*/

var Img = document.getElementsByTagName("img");

for (i = 0; i < Img.length; i++) {
  Img[i].classList.add(".slide_up");
}

var HideMenu = document.getElementsByClassName("hide_content")[0];
function OpenMenu() {
  HideMenu.style.display = "block";
}

function CloseMenu() {
  HideMenu.style.display = "none";
}
var Header = document.getElementsByTagName("header")[0];

function ScrollDown() {
  if (window.scrollY <= 0) {
    window.scrollBy(0, Header.scrollHeight);
  }
}
//scroll
window.onscroll = function() {
  Show(ScrollTop_Btn);
};

/*scroll top button*/
var ScrollTop_Btn = document.getElementsByClassName("scroll_top_btn")[0];

function Show(needle) {
  if (window.scrollY > 0) {
    needle.style.display = "block";
    needle.style.opacity = "1";
  } else {
    needle.style.display = "none";
    needle.style.opacity = "0";
  }
}

function ScrollTop() {
  var full_height = document.getElementsByTagName("body")[0].scrollHeight;
  window.scrollBy(0, -full_height);
}
