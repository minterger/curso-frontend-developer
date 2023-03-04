const desktopMenu = document.querySelector(".desktop-menu");
const email = document.querySelector(".navbar-right .email");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cartButton = document.querySelector(".navbar-shopping-cart");
const shopCart = document.querySelector("#shop-cart");

const cardsContainer = document.querySelector(".cards-container");

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
 * lista de los productos
 */
const productList = [
  {
    title: "Bike",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 29.99,
  },
  {
    title: "Bike",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 29.99,
  },
  {
    title: "Bike",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 29.99,
  },
  {
    title: "Bike",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 29.99,
  },
  {
    title: "Bike",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 29.99,
  },
  {
    title: "Bike",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 29.99,
  },
  {
    title: "Bike",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 29.99,
  },
];

const renderProducts = (list) => {
  list.forEach((e) => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    const img = document.createElement("img");
    img.src = e.src;
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    div.append(img, productInfo);

    const info = document.createElement("div");
    const pPrice = document.createElement("p");
    pPrice.innerText = "$" + e.price;
    const pTitle = document.createElement("p");
    pTitle.innerText = e.title;

    info.append(pPrice, pTitle);

    const figure = document.createElement("figure");
    const imgFigure = document.createElement("img");
    imgFigure.src = "./icons/bt_add_to_cart.svg";

    figure.appendChild(imgFigure);

    productInfo.append(info, figure);

    cardsContainer.appendChild(div);
  });
};

renderProducts(productList);

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
