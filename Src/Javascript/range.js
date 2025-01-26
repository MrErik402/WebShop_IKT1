window.onload = function () {
  slideOne();
  slideTwo();
  slideThree();
  slideFour();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 10; // Example minimum gap
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = parseInt(sliderOne.max);

let sliderThree = document.getElementById("slider-3");
let sliderFour = document.getElementById("slider-4");
let displayValThree = document.getElementById("range3");
let displayValFour = document.getElementById("range4");
let minGap2 = 15; // Example minimum gap
let sliderTrack2 = document.querySelector(".slider-track2");
let sliderMaxValue2 = parseInt(sliderThree.max);

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value + "Ft";
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value + "Ft";
  fillColor();
}
function fillColor() {
  let percent1 = (sliderOne.value / sliderMaxValue) * 100;
  let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #D5B4B4 ${percent1}% , #D5B4B4 ${percent2}%, #dadae5 ${percent2}%)`;
}

function slideThree() {
  if (parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap2) {
    sliderThree.value = parseInt(sliderFour.value) - minGap2;
  }
  displayValThree.textContent = sliderThree.value + "Ft";
  fillColor2();
}
function slideFour() {
  if (parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap2) {
    sliderFour.value = parseInt(sliderThree.value) + minGap2;
  }
  displayValFour.textContent = sliderFour.value + "Ft";
  fillColor2();
}
function fillColor2() {
  let percent11 = (sliderThree.value / sliderMaxValue2) * 100;
  let percent22 = (sliderFour.value / sliderMaxValue2) * 100;
  sliderTrack2.style.background = `linear-gradient(to right, #dadae5 ${percent11}% , #D5B4B4 ${percent11}% , #D5B4B4 ${percent22}%, #dadae5 ${percent22}%)`;
}

// Add event listeners for sliders
sliderOne.addEventListener("input", slideOne);
sliderTwo.addEventListener("input", slideTwo);
sliderThree.addEventListener("input", slideThree);
sliderFour.addEventListener("input", slideFour);
