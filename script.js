// Splide

if (document.title === "Sportsrideklubben Silkeborg") {
  let slideAmount;

  function checkWidth() {
    if (window.innerWidth > 1500) {
      slideAmount = 4;
    } else if (window.innerWidth > 1080) {
      slideAmount = 3;
    } else if (window.innerWidth > 850) {
      slideAmount = 2;
    } else {
      slideAmount = 1;
    }
    return slideAmount;
  }

  let splide = new Splide(".splide", {
    type: "loop",
    perPage: checkWidth(),
  });

  splide.mount();
}

// Header collapse
const logo = document.querySelector("nav img");
const header = document.querySelector("header");

let prevScrollpos = window.scrollY; // Changed from pageYOffset
window.onscroll = function () {
  let currentScrollPos = window.scrollY; // Changed from pageYOffset
  if (currentScrollPos > 500) {
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
      logo.style.width = "125px";
      logo.style.top = "60px";
    } else {
      header.style.top = "-40px";
      logo.style.width = "90px";
      logo.style.top = "55px";
    }
    prevScrollpos = currentScrollPos;
  }
};

// Burgermenu mobile

const menu = document.querySelector("#burgermenu");
const category = document.querySelectorAll(".category");

category.forEach((cat) => {
  const catContent = cat.querySelector(".cat-content");
  catContent.addEventListener("click", (el) => {
    el.stopPropagation();
  });
  const catIcon = cat.querySelector("i");
  cat.addEventListener("click", () => {
    let catHeight = catContent.scrollHeight;
    let currentHeight = catContent.clientHeight;
    if (currentHeight == 0) {
      catContent.style.maxHeight = `${catHeight}px`;
    } else {
      catContent.style.maxHeight = `0px`;
    }
    let currentIcon = catIcon.getAttribute("class");
    if (currentIcon == "fa-solid fa-plus") {
      catIcon.setAttribute("class", "fa-solid fa-minus");
    } else {
      catIcon.setAttribute("class", "fa-solid fa-plus");
    }
  });
});

const burger = document.querySelector(".fa-bars");
let isOpen = false;

burger.addEventListener("click", () => {
  if (!isOpen) {
    menu.style.display = "block";
    setTimeout(() => {
      menu.style.transform = "translateY(0)";
    }, 200);
    isOpen = true;
  } else {
    menu.style.transform = "translateY(-100%)";
    setTimeout(() => {
      menu.style.display = "none";
    }, 1000);
    isOpen = false;
    category.forEach((cat) => {
      const catContent = cat.querySelector(".cat-content");
      const catIcon = cat.querySelector(".cat-title i");
      catIcon.setAttribute("class", "fa-solid fa-plus");
      catContent.style.maxHeight = `0px`;
    });
  }
});
