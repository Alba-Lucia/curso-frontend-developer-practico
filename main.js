const menuEmail = document.querySelector(".navbar-email");
const desktoMenu = document.querySelector(".desktop-menu");

const menuHamburgerIcon = document.querySelector(".menu-hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");

const cartMenu = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container")

// Menu Order
menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  const isProductDetail = productDetail.classList.contains("inactive");

  if (!isProductDetail) {
    productDetail.classList.add("inactive");
  }
  desktoMenu.classList.toggle("inactive");
}

// Menu Hamburger
menuHamburgerIcon.addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu() {
  const isProductDetail = productDetail.classList.contains("inactive");

  if (!isProductDetail) {
    productDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

// Product Detail
cartMenu.addEventListener("click", toggleCartMenu);

function toggleCartMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isdesktoMenu = desktoMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isdesktoMenu) {
    desktoMenu.classList.add("inactive");
  }
  productDetail.classList.toggle("inactive");
}

/* Products */
const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Compu",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function renderProduct(array) {
    for (product of array){
        const productCard= document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        // Div en donde ira precio y nombre
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        // Agregar nombre precio en el div
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        // img-figure
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute( "src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        // Card en donde ira imagen div precion nombre
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        // Agregar imagen e informacion del producto
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo)
    
        // Mostrar en pantalla el contenido 
        cardsContainer.appendChild(productCard)
    }
}

renderProduct(productList)
  