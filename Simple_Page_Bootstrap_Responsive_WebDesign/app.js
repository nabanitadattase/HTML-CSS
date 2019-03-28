// STICKY NAVBAR
window.onscroll = function(){
    stickyNav();
};
let navContainer = document.querySelector(".navbar-light");
let sticky = navContainer.offsetTop;
function stickyNav() {
    if (window.pageYOffset > sticky) {
        // console.log(pageYOffset);
      navContainer.classList.add("sticky")
    } else {
      navContainer.classList.remove("sticky");
    }
  }


