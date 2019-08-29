let imgList = [
    "image_1.jpg",
    "image_2.jpg",
    "image_3.jpg",
    "image_4.jpg",
    "image_5.jpg",
    "image_6.jpg",
    "image_7.jpg",
    "image_8.jpg",
    "image_9.jpg",
    "image_10.jpg"
];

// let sobi = document.querySelector('.row-2');
// imgList.forEach(function(alosobi){
//     sobi.appenChild("<div class='col-3'><img class='sobi' src='image/" + alosobi + "'" + "></div>");
// });

imgList.forEach(function(sobi){
    $("div .row-2").append("<div class='col-3'><img class='sobi' src='image/" + sobi + "'><i class='fas fa-search'></i></div>");
});


// NAV IMAGE SLIDE
var i = 0;
function mriduSlide(){

//   $(".navbar").fadeTo('slow', 0.3, function(){
//     $(this).css("background", 
//     "linear-gradient(0deg,rgba(197, 49, 99,0.8),rgba(197,49,99,0.8)),url(image/"
//      + imgList[i] + ") no-repeat center /cover");
//     }).delay(1000).fadeTo('slow', 1);

    var navBg = document.querySelector('.navbar');
    navBg.style.background = "linear-gradient(0deg,rgba(197, 49, 99,0.8),rgba(197,49,99,0.8)),url(image/"
          + imgList[i] + ") no-repeat center /cover";
    if(i<imgList.length-1){
        i++;
    }else{
        i = 0;
    }   

};
// setInterval(mriduSlide, 5000);


// STICKY NAVBAR
window.onscroll = function(){
    stickyNav();
};
var navContainer = document.querySelector(".nav-container");
var sticky = navContainer.offsetTop;
function stickyNav() {
    if (window.pageYOffset > sticky) {
      navContainer.classList.add("sticky")
    } else {
      navContainer.classList.remove("sticky");
    }
  }