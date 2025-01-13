import TarsasProducts from "./Tarsasjatekok/Tarsasjatekok.js";
import Elektronikus from "./Elektronikus/Elektronikus.js"
import Jatekfegyverek from "./Jatekfegyverek/Jatekfegyverek.js"

let minPrice = 1;
let maxPrice = 50000;
window.productList = [];

const ClearPage = () => {
    document.querySelector("#termekek").innerHTML = "";
}

window.popUp = function(){
    document.querySelector(".kosarbanLevoTermekek").innerHTML = ``;
    document.querySelector(".popUp").classList.remove("hidden");

    let sum = 0;

    if(cart.length == 0){
        document.querySelector("#finalPrice").textContent = 0 + "$";
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
    
        sum += ar * quantity;
    
        
        document.querySelector("#finalPrice").textContent = new Intl.NumberFormat('hu-HU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(sum).replace(/\s/g, '\u00A0') + " Ft";
    
        document.querySelector(".kosarbanLevoTermekek").innerHTML += `
            <div class="ring-1 ring-black/30">
                <div class="flex flex-col  item-container" data-id="${id}">
                    <img class="p-2 min-w-24 w-full max-w-24 h-full max-h-24 min-h-24 self-center" src="${image}" alt="">
                    <h1 class="pt-2 px-1 font-thin">${nev}</h1>
                    <div class="flex gap-2 justify-between px-1 pb-2">
                        <h1 class="text-right float-right font-medium">${formattedAr} Ft</h1>
                        <input onChange="inputChange(${id}, Number(this.value))" min="1" type="number" value="${quantity}" class="w-8 bg-white/50" />
                    </div>
                    <button class="hover:ring-1 ring-black/20 remove-item p-1 m-1 rounded-lg text-white bg-[#867070]">Eltávolítás</button>
                </div>
            </div>
        `;
    });
    

    // "x" gomb event listener
    document.querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(e.target.closest(".item-container").getAttribute("data-id"));
            console.log(id)
            removeThisItem(id, cart);
        });
    });

    // A legtetejére a popupnál
    /*
    const innerContent = document.querySelector(".innerContent");
    innerContent.scrollTop = 0;
    */
}

window.removeThisItem = function (id) {
    if (id) {
        const index = cart.findIndex(item => item.id === id);
        cart.splice(index, 1); // Item törlése a kosárból
        saveTheCart();
        updateCartNumber();
        popUp();
    }
}

window.closePopUp = function(){
    document.querySelector(".kosarbanLevoTermekek").innerHTML = ``;
    document.querySelector(".popUp").classList.add("hidden");
}

window.inputChange = function (id, num){
    const index = cart.findIndex(product => product.id === id)
    cart[index].quantity = num
    saveTheCart();
    popUp();
}

window.vasarlas = function(id) {
    const selectedProduct = window.productList.find(product => product.id === id);
    if (selectedProduct) {
        selectedProduct.PlaceThisItemToTheCart()
        updateCartNumber()
        popUp();
    }
};

let DisplayItems = (products) => {
    document.querySelector("#termekek").innerHTML = ``
    window.productList = products; 

    products.forEach(product => {
        if(product.ar > maxPrice || product.ar < minPrice) {
            return;
        }
        const shortDescription = product.leiras.substring(0, 100);
        document.querySelector("#termekek").innerHTML += `
        <div class="flex w-full min-w-[40ch] xl:min-w-[1ch]  xl:max-w-[25ch] 2xl:max-w-[30ch] justify-center mx-auto my-2">
                <div class="hover:ring-2 min-w-[40ch]  transition-all hover:ring-black/42 w-full max-w-36 xl:ml-1 lg:max-w-[19ch] xl:min-w-[25ch] 2xl:max-w-[25vh] mx-auto ring-1 ring-black/40 px-2 py-5 rounded-sm shadow-[rgba(0,0,15,0.5)_8px_8px_6px_1px] shadow-black/10 ">
                
                    <div class="rounded-sm ">
                        <div class="w-full ">
                            <img class="rounded-sm mx-auto h-max w-max min-h-[140px] max-h-[140px] min-w-[140px] max-w-[140px] " src="${product.img}" alt="${product.nev}">
                        </div>
                        
                        <h1 id="title" class="pt-5  text-lg">${product.nev}</h1>
                        <h1 class=" text-lg" id="description">${shortDescription}...</h1>
                        <div class="flex flex-col pt-2">
                        
                        <p class="font-medium text-lg italic font-poppins">${product.ar} Ft</p>
                        
                        <div class="flex justify-start mt-2 space-x-1 w-full">
                            <button onClick="vasarlas(${product.id})" class="w-full text-lg bg-[#867070] rounded-md py-1 p-3 text-white">Kosárba</button>
                        </div>


                    </div>
                </div>
        </div>
                `;
    })
};

let loading = true;

async function CatchData() {

    if(loading){
        document.querySelector("#termekek").innerHTML += `Betöltés...`
    }

    if(document.title === "Tarsasok") {
        const tarsasJatekok = await TarsasProducts();
        DisplayItems(tarsasJatekok);
    }

    if(document.title === "Elektronikus") {
        const elektronikusJatekok = await Elektronikus();
        DisplayItems(elektronikusJatekok);
    }

    if(document.title === "Jatekfegyverek") {
        const jatekFegyverek = await Jatekfegyverek();
        DisplayItems(jatekFegyverek);
    }
    

    loading = false
}

CatchData();
updateCartNumber();