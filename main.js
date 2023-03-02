const desktopMenu = document.querySelector(".desktop-menu");
const email = document.querySelector(".email");

email.addEventListener("click", () => {
  desktopMenu.classList.toggle("inactive");
});
