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

