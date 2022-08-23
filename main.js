const navbarMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shoppingcart");
const asideShoppingCart = document.querySelector(".product-detail");
const productCardsContainer = document.querySelector('.cards-container');

navbarMenu.addEventListener("click", toggleDesktopMenu);
hamburguerMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShoppingCart);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    const isShoppingCartOpen = !asideShoppingCart.classList.contains("inactive");
    if(isShoppingCartOpen){
        asideShoppingCart.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}
function toggleShoppingCart(){
    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
    if(isMobileMenuOpen){
        mobileMenu.classList.add("inactive");
    }
    asideShoppingCart.classList.toggle("inactive");
}

const productList = [];
productList.push(
    {
        name: "Bike",
        price: 240,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
)
productList.push(
    {
        name: "Car",
        price: 6000,
        image: 'https://images.pexels.com/photos/12086516/pexels-photo-12086516.jpeg'
    }
)
productList.push(
    {
        name: "Cellphone",
        price: 350,
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
)
productList.push(
    {
        name: "Computer",
        price: 1050,
        image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
)


function renderProducts(list){
    for (product of list){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
        productPrice.innerText = '$'+product.price;
        productName.innerText = product.name;
    
        const productFigure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './assets/icons/Platzi_YardSale_Icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(figureImg);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productFigure);
        productCard.append(productImg, productInfo);
        productCardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

/**
<div class="cards-container">
    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="item image">
        <div class="product-info">
            <div>
                <p>$240,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./assets/icons/Platzi_YardSale_Icons/bt_add_to_cart.svg" alt="add to cart icon">
            </figure>
        </div>
    </div>
</div>
 */

/*
mobileMenu.classList.remove("activo");
function toggleMobileMenu(){
    mobileMenu.classList.toggle("activo");
}
function toggleMobileMenu(){
    const isShoppingCartOpen = shoppingCart.classList.contains("inactive");
    if (isShoppingCartOpen){
        mobileMenu.classList.toggle("activo");
    }
}

function toggleShoppingCart(){
    const isMobileMenuOpen = mobileMenu.classList.contains("inactive");//por defecto no tiene esta clase :(
    if(!isMobileMenuOpen){
        //mobileMenu.classList.add("inactive"); 
        mobileMenu.classList.toggle("activo");//falta programar que mientras esté abierto el shopping cart, no se pueda desplegar
    }
    asideShoppingCart.classList.toggle("inactive");
}
*/
