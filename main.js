const togleBtn = document.querySelector(".navbar-toggleBtn");
const menu = document.querySelector(".navbar-menu");
const icons = document.querySelector(".navbar-icons");

togleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
