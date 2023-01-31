const slideImg = document.getElementById('slideImg');
const btnLeft = document.getElementById('leftArrow');
const btnRight = document.getElementById('leftRight');

const img = document.querySelectorAll('#slideImg img');

let index = 0;

let interval = setInterval(run, 3000);

function run() {
  index++;
  slideImg()
}

function slideImg() {
  if (index > img.length -1) {
    index = 0;
  } else if (index < 0) {
     index = img.length - 1;
  }

  slideImg.style.transform = `translateX(${-index * 700}px)`;
}

btnRight.addEventListener('click', () => {
  index--

  slideImg()
})