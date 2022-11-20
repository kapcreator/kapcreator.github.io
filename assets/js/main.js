/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add("scroll-header") : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*==================== SKILLS TABS ====================*/
class Skill {
  constructor(name, percentage) {
    this.name = name;
    this.percentage = percentage;
  }
}

const skillsFrontend = [new Skill("HTML", 90), new Skill("css", 80)];
const skillsBackend = [new Skill("PHP", 80), new Skill("Node Js", 70)];

const allSkills = [skillsFrontend, skillsBackend];

const skillBtns = document.getElementById("skills-buttons");

function changeSkillsTab(index) {
  const selectedSkills = allSkills[index];

  if (selectedSkills != null) {
    document.getElementById("skills-list").innerHTML = "";

    for (i = 0; i < selectedSkills.length; i++) {
      document.getElementById("skills-list").innerHTML +=
        " <div class='skills__data'><div class='skills__titles'><h3 class='skills__name'>" +
        selectedSkills[i].name +
        "</h3><span class='skills__number'>" +
        selectedSkills[i].percentage +
        "%</span></div><div class='skills__bar'><span class='skills__percentage' style='width:" +
        selectedSkills[i].percentage +
        "%;'></span></div></div>";
    }
  } else {
    document.getElementById("skills-list").innerHTML = "-";
  }

  //active button handler
  Array.from(skillBtns.children).forEach((btn) => {
    btn.className = btn.className.replace(" button-active", "");
  });

  skillBtns.children[index].className += " button-active";
}

for (let i = 0; i < skillBtns.children.length; i++) {
  skillBtns.children[i].addEventListener("click", () => {
    changeSkillsTab(i);
  });
}

// changeSkillsTab(0);

//skills reveal
var hasSkillsReveal = false;
function skillsReveal() {
  var skillList = document.getElementById("skills-list");
  
  var windowHeight = window.innerHeight;
  var elementTop = skillList.getBoundingClientRect().top;
  var elementVisible = 150;

  if ((elementTop < windowHeight - elementVisible) && !hasSkillsReveal) {
    setTimeout(function() { changeSkillsTab(0); }, 250);

    hasSkillsReveal = true;
  } 
}

window.addEventListener("scroll", skillsReveal);

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".portfolio__content", {
  selectors: {
    target: ".portfolio__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active portfolio */
const linkPortfolio = document.querySelectorAll(".portfolio__item");

function activePortfolio() {
  linkPortfolio.forEach((l) => l.classList.remove("active-portfolio"));
  this.classList.add("active-portfolio");
}
linkPortfolio.forEach((l) => l.addEventListener("click", activePortfolio));

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 250,
  // reset: true
});

sr.reveal(".home__title, .popular__container, .features__img, .featured__filters");
sr.reveal(".home__subtitle", { delay: 300 });
sr.reveal(".home__img", { delay: 500 });
sr.reveal(".home__icon", { delay: 900, interval: 200, origin: "right" });
sr.reveal(".services__card", { interval: 100, origin: "bottom" });
sr.reveal(".portfolio__card, .footer__content", { interval: 100 });
sr.reveal(".contact__information", { delay: 100, interval: 200, origin: "right" });