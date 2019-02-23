/*element to slide up*/
var article = document.getElementsByTagName("article")[0];
var reservation = document.getElementsByClassName("reservation")[0];
var delay_list = [
  document.getElementsByTagName("article")[0],
  document.getElementsByClassName("reservation")[0]
]

function delay(list){
  var delay_time = 1000;
  for(var a in list){
    setTimeout(SlideUp ,delay_time, list[a] );
    delay_time += 500;
  } 
}

function SlideUp (target){
  target.classList.add("slide_up");  
};
delay(delay_list);


/*hidden navigation*/
var hide_menu = document.getElementsByClassName("hide_content")[0];
function OpenMenu() {
  hide_menu.style.display = "block";
}

function CloseMenu() {
  hide_menu.style.display = "none";
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
