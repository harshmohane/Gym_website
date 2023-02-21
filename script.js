// swiper js

// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// loader:::

var preloader = document.querySelector(".pre_loader");

setTimeout(function webloader() {
    preloader.style.display = 'none';
}, 4000)

///::::::----scrolltotop_coading_start:::::::----

const landing_page = document.querySelector("#main");
const scrollToTop = document.querySelector(".scrollToTop");

const scrollTop = () => {
    landing_page.scrollIntoView({ behavior: "smooth"});
};

scrollToTop.addEventListener("click", scrollTop);


///::::::----menu_overlay_coading_start:::::::----

const menu = document.querySelector("#hemburger_menu");
const overlay = document.querySelector(".menu_overlay");
const cross = document.querySelector("#cross");


menu.addEventListener("click", function(){
    overlay.style.transform = "translatex(0)";
})
cross.addEventListener("click", function(){
    overlay.style.transform = "translatex(100%)";
})


///::::::----search_bar_coading_start:::::::----

const search_icon = document.querySelector("#search_button");
const search_bar = document.querySelector(".search_bar");

var val = 0;
search_icon.addEventListener("click", function(){
    if(val===0){
        search_bar.style.transform = "translatex(0)";
        val = 1;
    }
    else{
        search_bar.style.transform = "translatex(140%)";
        val = 0;
    }
})


///::::::----cursor_custimize_coading_start:::::::----

const cursor = document.querySelector("#cursor");


document.addEventListener("mousemove", function(move){
    // console.log(move.clientY)
    // console.log(move.clientX);
    // console.log(move)
    
    var x = move.clientX
    var y = move.clientY
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});


