let cart = !localStorage.getItem("productsInCart") ? [] : JSON.parse(localStorage.getItem("productsInCart"));

function updateCartNumber() {
    cartAmount = cart.length
    document.querySelector("#cartAmount").textContent = cartAmount;
}

function saveTheCart() {
    localStorage.setItem("productsInCart", JSON.stringify(cart));
}

