/*element to slide up*/
var delay_list = [
  document.getElementsByTagName("article")[0],
  document.getElementsByClassName("reservation")[0]
];

function delay(list) {
  var delay_time = 0;
  for (var i in list) {
    setTimeout(SlideUp, delay_time, list[i]);
    delay_time += 500;
  }
}

function SlideUp(target) {
  target.classList.add("slide_up");
}
delay(delay_list);

/*element to slide down*/
var nav_list = document.getElementsByClassName("menu_list");

function delay_02 (list) {
  var delay_time = 0;
  for (var i in list) {
    setTimeout(SlideDown, delay_time, list[i]);
    delay_time += 500;
  }
}

function SlideDown(target){
  target.classList.add("slide_down");
}
delay_02(nav_list);

/*hidden navigation*/
var hide_menu = document.getElementsByClassName("hide_content")[0];
function OpenMenu() {
  hide_menu.style.display = "block";
}

function CloseMenu() {
  hide_menu.style.display = "none";
}
var header = document.getElementsByTagName("header")[0];

function ScrollDown() {
  if (window.scrollY <= 0) {
    window.scrollBy(0, header.clientHeight +100);
  }
}
//scroll
window.onscroll = function() {
  Show(ScrollTop_Btn); 
  sec_slide_up(about);
};

/*scroll top button*/
var ScrollTop_Btn = document.getElementsByClassName("scroll_top_btn")[0];

function Show(needle) {
  if (window.scrollY > 0) {
    needle.style.opacity = "1";
  } else {
    needle.style.opacity = "0";
  }
}

function ScrollTop() {
  var full_height = document.getElementsByTagName("body")[0].scrollHeight;
  window.scrollBy(0, -full_height);
}

/*scroll시 about slide up*/


var about_img_01 = document.getElementsByClassName("about_img")[0];
var about_img_02 = document.getElementsByClassName("about_img")[1];
var about_content = document.getElementsByClassName("sec_content")[0];
var about = [about_img_01, about_img_02, about_content];


function sec_slide_up(list){
  var y = window.pageYOffset;
  delay_time = 0;
  if(y> header.clientHeight){
    for(var i in list){
      setTimeout(SlideUp,delay_time,list[i]);
      delay_time +=200;
    }
  }
}


