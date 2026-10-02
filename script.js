const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuButton.addEventListener("click", () => {
  const menuIsOpen = mobileMenu.classList.toggle("active");

  document.body.classList.toggle("menu-open", menuIsOpen);

  menuButton.setAttribute(
    "aria-expanded",
    menuIsOpen ? "true" : "false"
  );

  menuButton.textContent = menuIsOpen ? "Close" : "Menu";
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


const year = document.querySelector("#current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}
