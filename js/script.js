let menu = document.querySelector(".main-item1")
let nums = document.querySelectorAll(".num")
let start =false;

window.addEventListener("scroll",()=>{
const navbar=document.querySelector(".header")

navbar.classList.toggle("sticky",window.scrollY >0);

    if(window.scrollY >=menu.offsetTop){
        if(!start){
            nums.forEach(num=>{
                startCount(num)
            })
        }
        start=true;
    }
})

const startCount =(el)=>{
    let max =el.dataset.val;
    let count =setInterval(()=>{
        el.textContent++;
        if(el.textContent === max){
            clearInterval(count)
        }
    },2000/nums)
};

document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggleButton');
  const elementsToToggle = document.querySelectorAll('[data-selecter]');

  toggleButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
          const currentDisplay = getComputedStyle(elementsToToggle[index]).display;

          if (currentDisplay === 'none' || currentDisplay === '') {
              elementsToToggle[index].style.display = 'block';
              button.textContent = 'Read Less....';
          } else {
              elementsToToggle[index].style.display = 'none';
              button.textContent = 'Read More....';
          }
      });
  });
});







const media =()=>{
    let q = matchMedia('(max-width: 1199px)')
    if(q.matches ){
      document.getElementById('h-pricing-table-carousel').style.display ="none";
      document.querySelector('[data-b-101]').style.display = "block";
    }
    else{
      document.getElementById('h-pricing-table-carousel').style.display ="block";
      document.querySelector('[data-b-101]').style.display = "none";


   
    }
}
onload =media;
onresize=media;

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     centeredSlides: false,
//     slidesPerGroupSkip: 1,
//     grabCursor: true,
//     keyboard: {
//       enabled: true,
//     },
//     breakpoints: {
//       769: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//       },
//     },
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });


// const slider = document.querySelector('.h-carousel-card-wrapper[data-slides]');
// const prevBtn = document.getElementById('#manaco4');
// const nextBtn = document.getElementById('#manaco5');
// const bullets = document.querySelectorAll('.h-carousel-track__indicator-item');

// let cardWidth = document.querySelectorAll('h-pricing-card__container[data-v-361e5f6b]').offsetWidth;
// let currentIndex = 1;

// function updateBullets() {
//     bullets.forEach((bullet, index) => {
//         if (index === currentIndex) {
//             bullet.classList.add(' h-carousel-track__indicator-item--active');
//         } else {
//             bullet.classList.remove(' h-carousel-track__indicator-item--active');
//         }
//     });
// }

// function moveSlider(direction) {
//     if (direction === -1 && currentIndex > 0) {
//         currentIndex--;
//     } else if (direction === 1 && currentIndex < slider.children.length - 1) {
//         currentIndex++;
//     }
//     slider.style.transform = `translateX(-${currentIndex * 100}px)`;
//     updateBullets();
// }

// prevBtn.addEventListener('click', () => moveSlider(-1));
// nextBtn.addEventListener('click', () => moveSlider(1));

// bullets.forEach((bullet, index) => {
//     bullet.addEventListener('click', () => {
//         currentIndex = index;
//         slider.style.transform = `translateX(-${currentIndex * 100}px)`;
//         updateBullets();
//     });
// });

// if (prevBtn) {
//     prevBtn.addEventListener('click', () => moveSlider(-1));
// } else {
//     console.error('prevBtn not found');
// }

// if (nextBtn) {
//     nextBtn.addEventListener('click', () => moveSlider(1));
// } else {
//     console.error('nextBtn not found');
// }

// // Adjust the slider width on window resize
// window.addEventListener('resize', () => {
//     cardWidth = document.querySelector('.h-pricing-card__container[data-v-361e5f6b]').offsetWidth;
//     slider.style.transform = `translateX(-${currentIndex * 100}px)`;
// });

// // Initialize bullet navigation
// updateBullets();


