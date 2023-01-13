// console.log("hello world");

// const myName = "Jess";
// const h1 = document.querySelector(".heading-primary");
// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "blue";
//   h1.style.padding = "5rem";
// });
// set current year
const yearElm = document.querySelector(".year");
const currYear = new Date().getFullYear();
yearElm.textContent = currYear;
// make mobile navigation work
const btnNavElm = document.querySelector(".btn-mobile-nav");
const headerElm = document.querySelector(".header");
btnNavElm.addEventListener("click", function () {
  headerElm.classList.toggle("nav-open");
});
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);
    //scroll back to top
    if (href === "#" && href.length === 1) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href[0] === "#" && href.length > 1) {
      const sectionSelector = document.querySelector(href);
      sectionSelector.scrollIntoView({ behavior: "smooth" });
    }

    //close moblie navigation
    if (link.classList.contains("main-nav-link")) {
      headerElm.classList.toggle("nav-open");
    }
  })
);

//sticky navigation after hero sction
const sectionHeroElm = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    console.log(entry);

    !entry.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    //in the viewport
    root: null,
    //as soon as hero section move out of viewport completely
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroElm);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
