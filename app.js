//for accordions
document.getElementById("defaultOpen").click();
const acc = document.querySelectorAll(".accordion"); 
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    const div = this.querySelector("div"); 
    if (div) {
      if (div.style.width === "0%" || div.style.width === "") {
        div.style.width = "100%";
      } else {
        div.style.width = "0%";
      }
    }
  });
}

// for tabs

function openCity(evt, name) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}

//slider1
const slider = document.querySelector(".third");
const slides = document.querySelector(".slides");
let slideWidth = slider.clientWidth;
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
let currentIndex = 0;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

function updateSlideWidth() {
  slideWidth = slider.clientWidth;
}

function prevButtonClick() {
  currentIndex =
    (currentIndex - 1 + slides.children.length) % slides.children.length;
  goToSlide(currentIndex);
}

function nextButtonClick() {
  currentIndex = (currentIndex + 1) % slides.children.length;
  goToSlide(currentIndex);
}

goToSlide(currentIndex);
prevBtn.addEventListener("click", prevButtonClick);
nextBtn.addEventListener("click", nextButtonClick);
window.addEventListener("resize", () => {
  updateSlideWidth();
  goToSlide(currentIndex);
});



//slider2
const slider1 = document.querySelector(".fifth1");
const slides1 = document.querySelector(".slides1");
let slideWidth1 = slider1.clientWidth;
const prevBtn1 = document.querySelector("#prev1");
const nextBtn1 = document.querySelector("#next1");
let currentIndex1 = 0;
const slide1cl = document.querySelector(".sc1 div")
const slide2cl = document.querySelector(".sc2 div")
const slide3cl = document.querySelector(".sc3 div")
const slide4cl = document.querySelector(".sc4 div")
const slide1cp = document.querySelector(".sc1 p")
const slide2cp = document.querySelector(".sc2 p")
const slide3cp = document.querySelector(".sc3 p")
const slide4cp = document.querySelector(".sc4 p")


function goToSlide1(index) {
  slides1.style.transform = `translateX(-${index * slideWidth1}px)`;
  currentIndex1 = index;
  if(index === 0){
    slide1cl.style.width = "30px"
    slide1cp.style.opacity = "1"
    slide2cl.style.width = "50px"
    slide2cp.style.opacity = "0"
    slide3cl.style.width = "50px"
    slide3cp.style.opacity = "0"
    slide4cl.style.width = "50px"
    slide4cp.style.opacity = "0"
  }
  if(index === 1){
    slide1cl.style.width = "50px"
    slide1cp.style.opacity = "0"
    slide2cl.style.width = "30px"
    slide2cp.style.opacity = "1"
    slide3cl.style.width = "50px"
    slide3cp.style.opacity = "0"
    slide4cl.style.width = "50px"
    slide4cp.style.opacity = "0"
  }
  if(index === 2){
    slide1cl.style.width = "50px"
    slide1cp.style.opacity = "0"
    slide2cl.style.width = "50px"
    slide2cp.style.opacity = "0"
    slide3cl.style.width = "30px"
    slide3cp.style.opacity = "1"
    slide4cl.style.width = "50px"
    slide4cp.style.opacity = "0"
  }
  if(index === 3){
    slide1cl.style.width = "50px"
    slide1cp.style.opacity = "0"
    slide2cl.style.width = "50px"
    slide2cp.style.opacity = "0"
    slide3cl.style.width = "50px"
    slide3cp.style.opacity = "0"
    slide4cl.style.width = "30px"
    slide4cp.style.opacity = "1"
  }
}

function updateSlideWidth1() {
  slideWidth1 = slider1.clientWidth;
}

function prevButtonClick1() {
  currentIndex1 =
    (currentIndex1 - 1 + slides1.children.length) % slides1.children.length;
  goToSlide1(currentIndex1);
}

function nextButtonClick1() {
  currentIndex1 = (currentIndex1 + 1) % slides1.children.length;
  goToSlide1(currentIndex1);
}

goToSlide1(currentIndex1);
prevBtn1.addEventListener("click", prevButtonClick1);
nextBtn1.addEventListener("click", nextButtonClick1);
window.addEventListener("resize", () => {
  updateSlideWidth1();
  goToSlide1(currentIndex1);
});

//hamburger
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

//form submitted

form = document.querySelector(".need")
form.addEventListener("click", () => {
  alert("Form Submitted: Thank you for your interest in our services. We will get back to you as soon")
})