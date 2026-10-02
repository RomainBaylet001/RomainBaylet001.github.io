/* =========================================================
   ROMAIN BAYLET — WEBSITE INTERACTIONS
   ========================================================= */


/* =========================================================
   1. MOBILE MENU
   ========================================================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");


if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", () => {

    const menuIsOpen =
      mobileMenu.classList.toggle("active");


    document.body.classList.toggle(
      "menu-open",
      menuIsOpen
    );


    menuButton.setAttribute(
      "aria-expanded",
      menuIsOpen ? "true" : "false"
    );


    menuButton.textContent =
      menuIsOpen ? "Close" : "Menu";

  });


  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("active");

      document.body.classList.remove("menu-open");


      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );


      menuButton.textContent = "Menu";

    });

  });

}


/* =========================================================
   2. HERO IMAGE FADE-IN
   ========================================================= */

const heroImage =
  document.querySelector(".hero-image");


if (heroImage) {

  const heroPreload = new Image();


  heroPreload.src =
    "./assets/images/hero.JPG";


  heroPreload.onload = () => {

    setTimeout(() => {

      requestAnimationFrame(() => {

        heroImage.classList.add("is-loaded");

      });

    }, 400);

  };


  heroPreload.onerror = () => {

    heroImage.classList.add("is-loaded");

  };

}


/* =========================================================
   3. CURRENT YEAR
   ========================================================= */

const currentYear =
  document.querySelector("#current-year");


if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}
