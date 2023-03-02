const desktopMenu = document.querySelector(".desktop-menu");
const email = document.querySelector(".navbar-right .email");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cartButton = document.querySelector(".navbar-shopping-cart");
const shopCart = document.querySelector("#shop-cart");

email.addEventListener("click", () => {
  toggleClassElement(desktopMenu);
  isElementOpenToggleClass(shopCart);
});

menu.addEventListener("click", () => {
  toggleClassElement(mobileMenu);
  isElementOpenToggleClass(shopCart);
});

cartButton.addEventListener("click", () => {
  toggleClassElement(shopCart);
  isElementOpenToggleClass(mobileMenu);
  isElementOpenToggleClass(desktopMenu);
});

/**
 * funcion para cambiar clase inactive a un elemento html del dom
 * @param {object} e elemento html del dom
 */
const toggleClassElement = (e) => {
  e.classList.toggle("inactive");
};

/**
 * funcion para cerrar el elemento si este esta activo/abierto
 * @param {object} e elemento html del dom
 */
const isElementOpenToggleClass = (e) => {
  if (!e.classList.contains("inactive")) {
    toggleClassElement(e);
  }
};
