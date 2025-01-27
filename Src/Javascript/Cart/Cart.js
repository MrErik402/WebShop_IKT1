let cart = !localStorage.getItem("productsInCart") ? [] : JSON.parse(localStorage.getItem("productsInCart"));

function updateCartNumber() {

    let sum = 0;
    
    cart.forEach(value => {
        let quantity = value.quantity
        sum += quantity
        
    });
    cartAmount = sum

    
    document.querySelector("#cartAmount").textContent = cartAmount;
}

function saveTheCart() {
    
    localStorage.setItem("productsInCart", JSON.stringify(cart));
}

