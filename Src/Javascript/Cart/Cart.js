let cart = !localStorage.getItem("productsInCart") ? [] : JSON.parse(localStorage.getItem("productsInCart"));
let popular = !localStorage.getItem("populartsInCart") ? [] : JSON.parse(localStorage.getItem("populartsInCart"));



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


function saveThePopular(){
    localStorage.setItem("popular", JSON.stringify(popular));
}

