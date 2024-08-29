function toglle(){
    let navWidth=document.querySelector(".nav");
let searchbox=document.querySelector(".searchbox");
let click=document.querySelector(".hamburger")
click.addEventListener("click",()=>{
    searchbox.style="display:flex";
    navWidth.style="height:110px";

    })
    
}
console.log(toglle())
// const cards = document.querySelector('.cards');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// let currentIndex = 0;
// let cardWidth = 220; // Adjust the card width

// function slideNext() {
//   currentIndex++;
//   if (currentIndex >= cards.childElementCount) {
//     currentIndex = 0;
//   }
//   cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
// }

// function slidePrev() {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = cards.childElementCount - 1;
//   }
//   cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
// }

// prevBtn.addEventListener('click', slidePrev);
// nextBtn.addEventListener('click', slideNext);


const cards = document.querySelector('.cards');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
let cardWidth = 220; // Adjust the card width
let numCards = cards.childElementCount;

function slideNext() {
  currentIndex++;
  if (currentIndex >= numCards) {
    currentIndex = 0;
    cards.style.transform = `translateX(0px)`;
  } else {
    cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}

function slidePrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = numCards - 1;
    cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  } else {
    cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}

prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);

