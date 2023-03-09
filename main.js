const desktopMenu = document.querySelector(".desktop-menu");
const email = document.querySelector(".navbar-right .email");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cartButton = document.querySelector(".navbar-shopping-cart");
const shopCart = document.querySelector("#shop-cart");

const cardsContainer = document.querySelector(".cards-container");

const productDetail = document.querySelector("#product-detail");
const closeProductDetail = document.querySelector("#product-detail .close");

const productDetailImg = document.querySelector("#product-detail > img");
const productDetailInfo = document.querySelector(
  "#product-detail .product-info"
);

email.addEventListener("click", () => {
  toggleClassElement(desktopMenu);
  isElementOpenToggleClass(shopCart);
  isElementOpenToggleClass(productDetail);
});

menu.addEventListener("click", () => {
  toggleClassElement(mobileMenu);
  isElementOpenToggleClass(shopCart);
  isElementOpenToggleClass(productDetail);
});

cartButton.addEventListener("click", () => {
  toggleClassElement(shopCart);
  isElementOpenToggleClass(mobileMenu);
  isElementOpenToggleClass(desktopMenu);
  isElementOpenToggleClass(productDetail);
});

closeProductDetail.addEventListener("click", () => {
  toggleClassElement(productDetail);
});

/**
 * lista de los productos
 */
const productList = [
  {
    title: "Bike",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 30.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit voluptas fuga quas unde delectus, maxime at nemo voluptatum, odit aliquid necessitatibus repellendus numquam.",
  },
  {
    title: "Bike",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 29.99,
    description:
      "bike is a master Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit voluptas fuga quas unde delectus, maxime at nemo voluptatum, odit aliquid necessitatibus repellendus numquam.",
  },
  {
    title: "Bike 1",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 45.99,
    description:
      "bike 1 is a master Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit voluptas fuga quas unde delectus, maxime at nemo voluptatum, odit aliquid necessitatibus repellendus numquam.",
  },
  {
    title: "Bike 2",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 15.99,
    description:
      "bike 2 is a master Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit voluptas fuga quas unde delectus, maxime at nemo voluptatum, odit aliquid necessitatibus repellendus numquam.",
  },
  {
    title: "Bike 3",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 27.99,
    description:
      "bike 3 is a master Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit voluptas fuga quas unde delectus, maxime at nemo voluptatum, odit aliquid necessitatibus repellendus numquam.",
  },
  {
    title: "Bike 4",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 24.99,
    description:
      "bike 4 is a master Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit voluptas fuga quas unde delectus, maxime at nemo voluptatum, odit aliquid necessitatibus repellendus numquam.",
  },
  {
    title: "Bike 5",
    src: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 29.99,
    description:
      "bike 5 is a master Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit voluptas fuga quas unde delectus, maxime at nemo voluptatum, odit aliquid necessitatibus repellendus numquam.",
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

    img.addEventListener("click", () => {
      productDetailImg.src = e.src;
      productDetailInfo.children[0].textContent = e.price;
      productDetailInfo.children[1].textContent = e.title;
      productDetailInfo.children[2].textContent = e.description;
      productDetail.classList.remove("inactive");
      isElementOpenToggleClass(shopCart);
      isElementOpenToggleClass(mobileMenu);
      isElementOpenToggleClass(desktopMenu);
    });
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
