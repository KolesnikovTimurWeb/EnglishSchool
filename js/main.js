const swiper3 = new Swiper('.benefits-container', {
   spaceBetween: 40,
   slidesPerView: 1,
   grabCursor: true,

   // Navigation arrows
   breakpoints: {
      800: {
         slidesPerView: 1.1,
         spaceBetween: 50,
      },
      1480: {
         slidesPerView: 1.3,
         spaceBetween: 50,
      },
   },
   scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
   },
   // autoplay: {
   //    delay: 2500,
   // },
});
const swiper4 = new Swiper('.teachers-container', {
   slidesPerView: 0.8,
   grabCursor: true,

   // Navigation arrows
   breakpoints: {
      400: {
         slidesPerView: 0.8,
         spaceBetween: 20,
      },

      900: {
         slidesPerView: 1.2,
         spaceBetween: 20,
      },
      1100: {
         slidesPerView: 1.5,
         spaceBetween: 20,
      },
      1200: {
         slidesPerView: 1.7,
         spaceBetween: 20,
      },
   },
   scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
   },
   // autoplay: {
   //    delay: 2500,
   // },
});

var acc = document.getElementsByClassName("steps-item");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {

      this.classList.toggle("active");


   });
}

var acc2 = document.getElementsByClassName("fqa-item");
var i2;

for (i2 = 0; i2 < acc2.length; i2++) {
   acc2[i2].addEventListener("click", function () {

      this.classList.toggle("active");


   });
}



let slide1 = document.querySelector(".teachers-slide-1");
var slide2 = document.querySelector(".teachers-slide-2");
var slide3 = document.querySelector(".teachers-slide-3");
var slide4 = document.querySelector(".teachers-slide-4");
var slide5 = document.querySelector(".teachers-slide-5");
var slide6 = document.querySelector(".teachers-slide-6");
var slide7 = document.querySelector(".teachers-slide-7");
var slide8 = document.querySelector(".teachers-slide-8");
var slide9 = document.querySelector(".teachers-slide-9");
var slide10 = document.querySelector(".teachers-slide-10");
var slide11 = document.querySelector(".teachers-slide-11");
var slide12 = document.querySelector(".teachers-slide-12");
var slide13 = document.querySelector(".teachers-slide-13");
var slide14 = document.querySelector(".teachers-slide-14");
var slide15 = document.querySelector(".teachers-slide-15");
var slide16 = document.querySelector(".teachers-slide-16");
var slide17 = document.querySelector(".teachers-slide-17");
var slide18 = document.querySelector(".teachers-slide-18");
let teacher1 = document.querySelector('.teacher-1')
let teacher2 = document.querySelector('.teacher-2')
let teacher3 = document.querySelector('.teacher-3')
let teacher4 = document.querySelector('.teacher-4')
let teacher5 = document.querySelector('.teacher-5')
let teacher6 = document.querySelector('.teacher-6')
let teacher7 = document.querySelector('.teacher-7')
let teacher8 = document.querySelector('.teacher-8')
let teacher9 = document.querySelector('.teacher-9')
let teacher10 = document.querySelector('.teacher-10')
let teacher11 = document.querySelector('.teacher-11')
let teacher12 = document.querySelector('.teacher-12')
let teacher13 = document.querySelector('.teacher-13')
let teacher14 = document.querySelector('.teacher-14')
let teacher15 = document.querySelector('.teacher-15')
let teacher16 = document.querySelector('.teacher-16')
let teacher17 = document.querySelector('.teacher-17')
let teacher18 = document.querySelector('.teacher-18')

let teacherCLose = document.querySelectorAll('.teacher-close')

teacherCLose.forEach(el => {
   el.addEventListener('click', function () {
      teacher1.classList.remove('active')
      teacher2.classList.remove('active')
      teacher3.classList.remove('active')
      teacher4.classList.remove('active')
      teacher5.classList.remove('active')
      teacher6.classList.remove('active')
      teacher7.classList.remove('active')
      teacher8.classList.remove('active')
      teacher9.classList.remove('active')
      teacher10.classList.remove('active')
      teacher11.classList.remove('active')
      teacher12.classList.remove('active')
      teacher13.classList.remove('active')
      teacher14.classList.remove('active')
      teacher15.classList.remove('active')
      teacher16.classList.remove('active')
      teacher17.classList.remove('active')
      teacher18.classList.remove('active')


      video1.classList.remove('active')
      video2.classList.remove('active')
      video3.classList.remove('active')
      video4.classList.remove('active')
      video5.classList.remove('active')
      video6.classList.remove('active')
      video7.classList.remove('active')
      video8.classList.remove('active')

   })
})

slide1.addEventListener('click', function () {
   teacher1.classList.add('active')
})
slide2.addEventListener('click', function () {
   teacher2.classList.add('active')
})
slide3.addEventListener('click', function () {
   teacher3.classList.add('active')
})

slide4.addEventListener('click', function () {
   teacher4.classList.add('active')
})
slide5.addEventListener('click', function () {
   teacher5.classList.add('active')
})
slide6.addEventListener('click', function () {
   teacher6.classList.add('active')
})
slide7.addEventListener('click', function () {
   teacher7.classList.add('active')
})
slide8.addEventListener('click', function () {
   teacher8.classList.add('active')
})
slide9.addEventListener('click', function () {
   teacher9.classList.add('active')
})
slide10.addEventListener('click', function () {
   teacher10.classList.add('active')
})
slide11.addEventListener('click', function () {
   teacher11.classList.add('active')
})
slide12.addEventListener('click', function () {
   teacher12.classList.add('active')
})
slide13.addEventListener('click', function () {
   teacher13.classList.add('active')
})
slide14.addEventListener('click', function () {
   teacher14.classList.add('active')
})
slide15.addEventListener('click', function () {
   teacher15.classList.add('active')
})
slide16.addEventListener('click', function () {
   teacher16.classList.add('active')
})
slide17.addEventListener('click', function () {
   teacher17.classList.add('active')
})
slide18.addEventListener('click', function () {
   teacher18.classList.add('active')
})







let test1 = document.querySelector('.testemonials-1')
let test2 = document.querySelector('.testemonials-2')
let test3 = document.querySelector('.testemonials-3')
let test4 = document.querySelector('.testemonials-4')
let test5 = document.querySelector('.testemonials-5')
let test6 = document.querySelector('.testemonials-6')
let test7 = document.querySelector('.testemonials-7')
let test8 = document.querySelector('.testemonials-8')
let test9 = document.querySelector('.testemonials-9')
let video1 = document.querySelector('.video-1')
let video2 = document.querySelector('.video-2')
let video3 = document.querySelector('.video-3')
let video4 = document.querySelector('.video-4')
let video5 = document.querySelector('.video-5')
let video6 = document.querySelector('.video-6')
let video7 = document.querySelector('.video-7')
let video8 = document.querySelector('.video-8')
let video9 = document.querySelector('.video-9')

test1.addEventListener('click', function () {
   video1.classList.add('active')
})

test2.addEventListener('click', function () {
   video2.classList.add('active')
})
test3.addEventListener('click', function () {
   video3.classList.add('active')
})

test4.addEventListener('click', function () {
   video4.classList.add('active')
})
test5.addEventListener('click', function () {
   video5.classList.add('active')
})
test6.addEventListener('click', function () {
   video6.classList.add('active')
})
test7.addEventListener('click', function () {
   video7.classList.add('active')
})
test8.addEventListener('click', function () {
   video8.classList.add('active')
})



let menuText = document.querySelectorAll('.menu-text a')

menuText.forEach(el => {
   el.addEventListener('click', function () {
      burgerMenu.classList.remove('active')

   })
})

let burger = document.querySelector('.header-burger')
let burgerClose = document.querySelector('.menu-close')
let burgerMenu = document.querySelector('.menu')


burger.addEventListener('click', function () {
   burgerMenu.classList.add('active')
})

burgerClose.addEventListener('click', function () {
   burgerMenu.classList.remove('active')
})
ScrollReveal({
   distance: '100px',
   duration: 1700,
   delay: 0,
   reset: false,
});
document.addEventListener("DOMContentLoaded", function () {


   Splitting();


   ScrollReveal().reveal(" h1 span", { delay: 100, origin: "left", interval: 50 });
   ScrollReveal().reveal(" .title h2 span", { delay: 100, origin: "left", interval: 100 });
   ScrollReveal().reveal(" .steps-mobile-h2 h2 span", { delay: 100, origin: "left", interval: 100 });
   ScrollReveal().reveal(" .steps-text h2 span", { delay: 100, origin: "left", interval: 100 });
   ScrollReveal().reveal(" .chance-text h2 span", { delay: 100, origin: "left", interval: 100 });
   ScrollReveal().reveal(" .global-button p", { delay: 1700, origin: "top", interval: 50 });
   ScrollReveal().reveal(" .global-subtext ", { delay: 2400, origin: "top", interval: 50 });
   ScrollReveal().reveal(" .forwho-item img ", { delay: 500, origin: "top", interval: 100 });
   ScrollReveal().reveal(" .forwho-item p ", { delay: 700, origin: "left", interval: 100 });
   ScrollReveal().reveal(" .steps-item ", { delay: 300, origin: "left", interval: 100 });
   ScrollReveal().reveal(" .testemonials-item ", { delay: 300, origin: "top", interval: 200 });
   ScrollReveal().reveal(" .fqa-item ", { delay: 300, origin: "top", interval: 200 });
   ScrollReveal().reveal(" .steps-img ", { delay: 600, origin: "left", interval: 100 });


   ScrollReveal().reveal(" .global-button", { delay: 1200, origin: "bottom", interval: 50 });


});