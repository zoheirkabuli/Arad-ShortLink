// mobile menu

const hamBtn = document.querySelector(".header__ham-btn");
const headerMenu = document.querySelector(".header__menu");

hamBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("opened");
});
