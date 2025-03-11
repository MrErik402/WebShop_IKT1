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

let getCartItems = () => {
    let sum = 0;
    if(cart.length == 0){
        document.querySelector("#fizetesTermekOsszeg").textContent = 0 + " Ft";
    }

    cart.forEach(value => {
        let id = value.id;
        let quantity = Number(value.quantity);
        let image = value.img;
        
        let ar = Number(value.ar);
        let formattedAr = new Intl.NumberFormat('hu-HU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(ar).replace(/\s/g, '\u00A0');
        let nev = value.nev;
        let leiras = value.leiras;
    
        sum += ar * quantity;
    
        
        document.querySelector("#fizetesTermekOsszeg").textContent = new Intl.NumberFormat('hu-HU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(sum).replace(/\s/g, '\u00A0') + " Ft";

        document.getElementById("fizetesVegosszeg").innerHTML = new Intl.NumberFormat('hu-HU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(sum + 1000).replace(/\s/g, '\u00A0') + " Ft";
    
        document.getElementById("kosarTartalom").innerHTML += `
            

            <div class="termek flex flex-col md:flex-row items-center border border-black w-4/5 gap-4 py-4 shadow-lg dark:bg-tarsas3-dark dark:text-white" data-id="${id}">
                <img src="${image}" alt="Termék" class="w-1/5 object-contain">
                <div class="flex flex-col w-2/5">
                    <h1 class="font-bold text-xl">${nev}</h1>
                    <p>${quantity} db</p>
                </div>
                <div class="flex justify-around items-center">
                    
                    <p class="text-3xl text-right">${ar * quantity} Ft</p>
                </div>
            </div>
        `;
    });
}

getCartItems();
