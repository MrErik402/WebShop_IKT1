import TarsasProducts from "./Tarsasjatekok/Tarsasjatekok.js";
import Elektronikus from "./Elektronikus/Elektronikus.js";
import Jatekfegyverek from "./Jatekfegyverek/Jatekfegyverek.js";
import Muanyag from "./Muanyag/Muanyag.js";
import AirFegyverek from "./AirsoftFegyverek/AirFegyverek.js";
import AirKiegeszito from "./AirsoftKiegeszitok/AirKiegeszitok.js";
import AirRuhazat from "./AirsoftRuhazat/AirRuhazat.js";
import AirToltenyek from "./AirsoftToltenyek/AirToltenyek.js";

let minRangeSlider = document.querySelector("#slider-1")
let maxRangeSlider = document.querySelector("#slider-2")

let minRangeSlider2 = document.querySelector("#slider-3")
let maxRangeSlider2 = document.querySelector("#slider-4")

let minPrice = 1;
let maxPrice = 70000;
window.productList = [];
let timeoutId = null;

minRangeSlider.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        minPrice = minRangeSlider.value;
        CatchData(szuresRendezettseg.value);
    }, 1000);
})

minRangeSlider2.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        minPrice = minRangeSlider2.value;
        CatchData(szuresRendezettseg.value);
    }, 1000);
})

maxRangeSlider.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        maxPrice = maxRangeSlider.value;
        CatchData(szuresRendezettseg.value);
    }, 1000);
})

maxRangeSlider2.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        maxPrice = maxRangeSlider2.value;
        CatchData(szuresRendezettseg.value);
    }, 1000);
})

let szuresRendezettseg = document.querySelector("#rendezes")


szuresRendezettseg.addEventListener("change", () => {
        CatchData(szuresRendezettseg.value)
    }
)

const ClearPage = () => {
    document.querySelector("#termekek").innerHTML = "";
}

window.popUp = function(){
    document.querySelector(".kosarbanLevoTermekek").innerHTML = ``;
    document.querySelector(".popUp").classList.remove("hidden");

    let sum = 0;

    if(cart.length == 0){
        document.querySelector("#finalPrice").textContent = 0 + " Ft";
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
                        <input onChange="inputChange(${id}, Number(this.value))" min="0" type="number" value="${quantity}" class="w-8 bg-white/50" />
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
            if(confirm("⚠FIGYELEM RENDSZERÜZENET⚠\n\nEltávolítsuk ezt a tárgyat a kosaradból?")){
                removeThisItem(id, cart);
            }
            
        });
    });

    // A legtetejére a popupnál
    /*
    const innerContent = document.querySelector(".innerContent");
    innerContent.scrollTop = 0;
    */
}

let getCartItems = () => {
    let sum = 0;
    let vegsoAr = 0;
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
    
        sum += ar * quantity;
    
        
        document.querySelector("#fizetesTermekOsszeg").textContent = new Intl.NumberFormat('hu-HU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(sum).replace(/\s/g, '\u00A0') + " Ft";

        document.getElementById("fizetesVegosszeg").innerHTML = `${sum + 1000} Ft`
    
        document.getElementById("kosarTartalom").innerHTML += `
            <div class="ring-1 ring-black/30">
                <div class="flex flex-col  item-container" data-id="${id}">
                    <img class="p-2 min-w-24 w-full max-w-24 h-full max-h-24 min-h-24 self-center" src="${image}" alt="">
                    <h1 class="pt-2 px-1 font-thin">${nev}</h1>
                    <div class="flex gap-2 justify-between px-1 pb-2">
                        <h1 class="text-right float-right font-medium">${formattedAr} Ft</h1>
                        <input onChange="inputChange(${id}, Number(this.value))" min="0" type="number" value="${quantity}" class="w-8 bg-white/50" />
                    </div>
                    <button class="hover:ring-1 ring-black/20 remove-item p-1 m-1 rounded-lg text-white bg-[#867070]">Eltávolítás</button>
                </div>
            </div>

            <div class="termek flex flex-col md:flex-row items-center border border-black w-4/5 gap-4 py-4 shadow-lg dark:bg-tarsas3-dark dark:text-white" data-id="${id}">
                <img src="${image}" alt="Termék" class="w-1/5 object-contain">
                <div class="flex flex-col w-3/5">
                    <h1 class="font-bold text-xl">${nev}</h1>
                    <p>${leiras}</p>
                </div>
                <div class="flex flex-col justify-around items-center">
                    <div class="w-full flex justify-center">
                    <input onChange="inputChange(${id}, Number(this.value))" min="0" type="number" value="${quantity}" class="w-8 bg-white/50" />
                        <label for="darab" class="text-lg">db</label>
                    </div>
                    <p class="text-3xl">${formattedAr}</p>
                </div>
            </div>
        `;
    });
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

window.closePopUp = function(fizetes = false){
    document.querySelector(".kosarbanLevoTermekek").innerHTML = ``;
    document.querySelector(".popUp").classList.add("hidden");
    if (fizetes) {
        window.location.href = "./fizetes.html";
    }
}

window.inputChange = function (id, num){

    if(num < 0){
        num = 1;
    }
    else if(num == 0){
        if(confirm("⚠FIGYELEM RENDSZERÜZENET⚠\n\nBiztosan törölni szeretnéd a terméket a kosaradból?")){
            removeThisItem(id);
        }
        else{
            num = 1;
        }
    }

    const index = cart.findIndex(product => product.id === id)
    cart[index].quantity = num
    saveTheCart();
    updateCartNumber();
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
    let ennyiProductsNincs = 0;

    products.forEach(product => {
        if(product.ar > maxPrice || product.ar < minPrice) {
            ennyiProductsNincs++;
            if(ennyiProductsNincs == products.length){
                document.querySelector("#termekek").innerHTML += `
                <div class="flex w-full min-w-[40ch] xl:min-w-[1ch]  xl:max-w-[25ch] 2xl:max-w-[30ch] justify-center mx-auto my-2">
                    <div class="hover:ring-2 min-w-[40ch]  transition-all hover:ring-black/42 w-full max-w-36 xl:ml-1 lg:max-w-[19ch] xl:min-w-[25ch] 2xl:max-w-[25vh] mx-auto ring-1 ring-black/40 px-2 py-5 rounded-sm shadow-[rgba(0,0,15,0.5)_8px_8px_6px_1px] shadow-black/10 ">
                        <h1 class="text-center">Nincs ilyen termék!</h1>
                    </div>
                </div>
                `
            }
            return;
        }
        
        const shortDescription = product.leiras.substring(0, 100);
        document.querySelector("#termekek").innerHTML += `
        <div class="flex xl:w-full min-w-[40ch] xl:min-w-[1ch]  xl:max-w-[25ch] 2xl:max-w-[30ch] justify-center mx-auto my-2  ">
                <div class="hover:ring-2 min-w-[40ch]  transition-all hover:ring-black/42 w-full max-w-36 xl:ml-1 lg:max-w-[19ch] xl:min-w-[25ch] 2xl:max-w-[25vh] mx-auto ring-1 ring-black/40 px-2 py-5 rounded-sm shadow-[rgba(0,0,15,0.5)_8px_8px_6px_1px] shadow-black/10  ">
                
                    <div class="rounded-sm ">
                        <div class="w-full ">
                            <img class="rounded-sm mx-auto h-max w-max min-h-[140px] max-h-[140px] min-w-[140px] max-w-[140px] " src="${product.img}" alt="${product.nev}">
                        </div>
                        
                        <h1 id="title" class="pt-5  text-lg">${product.nev.length > 16 ? product.nev.substring(0,13) + "..." : product.nev}</h1>
                        <h1 class=" text-lg xl:text-md relative max-w-sm xl:h-40 h-20" id="description">${shortDescription}...</h1>
                        <div class="flex flex-col pt-2">
                        
                        <p class="font-medium text-lg italic font-poppins">${product.ar} Ft</p>
                        
                        <div class="flex justify-start mt-2 space-x-1 w-full">
                            <button onClick="vasarlas(${product.id})" class=" w-full text-lg bg-[#867070] rounded-md py-1 p-3 text-white hover:bg-[#6C5E5E] border-gray-400 hover:border-2">Kosárba</button>
                        </div>


                    </div>
                </div>
        </div>
                `;
    })
};

let loading = true;

async function CatchData(szuro) {
    if(loading){
        document.querySelector("#termekek").innerHTML += `Betöltés...`
    }

    if(document.title === "Tarsasok") {
        let tarsasProducts = await TarsasProducts();

        if(szuro == "olcsoToDraga"){
            tarsasProducts = tarsasProducts.sort((a, b) => a.ar - b.ar)
        }

        if(szuro == "dragaToOlcso"){
            tarsasProducts = tarsasProducts.sort((a, b) => b.ar - a.ar)
        }
        if(szuro == "a-z"){
            tarsasProducts = tarsasProducts.sort((a, b) =>  a.nev.localeCompare(b.nev))
        }
        if(szuro == "z-a"){
            tarsasProducts = tarsasProducts.sort((a, b) =>  b.nev.localeCompare(a.nev))
        }
        
        DisplayItems(tarsasProducts);

        DisplayItems(tarsasProducts);
    }

    if(document.title === "Elektronikus") {
        let elektronikusJatekok = await Elektronikus();

        if(szuro == "olcsoToDraga"){
            elektronikusJatekok = elektronikusJatekok.sort((a, b) => a.ar - b.ar)
        }

        if(szuro == "dragaToOlcso"){
            elektronikusJatekok = elektronikusJatekok.sort((a, b) => b.ar - a.ar)
        }
        if(szuro == "a-z"){
            elektronikusJatekok = elektronikusJatekok.sort((a, b) =>  a.nev.localeCompare(b.nev))
        }
        if(szuro == "z-a"){
            elektronikusJatekok = elektronikusJatekok.sort((a, b) =>  b.nev.localeCompare(a.nev))
        }
        DisplayItems(elektronikusJatekok);

        DisplayItems(elektronikusJatekok);
    }

    if(document.title === "Jatekfegyverek") {
        let jatekFegyverek = await Jatekfegyverek();

        if(szuro == "olcsoToDraga"){
            jatekFegyverek = jatekFegyverek.sort((a, b) => a.ar - b.ar)
        }

        if(szuro == "dragaToOlcso"){
            jatekFegyverek = jatekFegyverek.sort((a, b) => b.ar - a.ar)
        }
        if(szuro == "a-z"){
            jatekFegyverek = jatekFegyverek.sort((a, b) =>  a.nev.localeCompare(b.nev))
        }
        if(szuro == "z-a"){
            jatekFegyverek = jatekFegyverek.sort((a, b) =>  b.nev.localeCompare(a.nev))
        }
        
        DisplayItems(jatekFegyverek);

        DisplayItems(jatekFegyverek);
    }

    if(document.title === "Muanyag") {
        let muanyagJatekok = await Muanyag();

        if(szuro == "olcsoToDraga"){
            muanyagJatekok = muanyagJatekok.sort((a, b) => a.ar - b.ar)
        }

        if(szuro == "dragaToOlcso"){
            muanyagJatekok = muanyagJatekok.sort((a, b) => b.ar - a.ar)
        }
        if(szuro == "a-z"){
            muanyagJatekok = muanyagJatekok.sort((a, b) =>  a.nev.localeCompare(b.nev))
        }
        if(szuro == "z-a"){
            muanyagJatekok = muanyagJatekok.sort((a, b) =>  b.nev.localeCompare(a.nev))
        }
        DisplayItems(muanyagJatekok);

        DisplayItems(muanyagJatekok);
    }

    if(document.title === "Airsoftfegyverek") {
        let airsoftFegyver = await AirFegyverek();

        if(szuro == "olcsoToDraga"){
            airsoftFegyver = airsoftFegyver.sort((a, b) => a.ar - b.ar)
        }

        if(szuro == "dragaToOlcso"){
            airsoftFegyver = airsoftFegyver.sort((a, b) => b.ar - a.ar)
        }
        if(szuro == "a-z"){
            airsoftFegyver = airsoftFegyver.sort((a, b) =>  a.nev.localeCompare(b.nev))
        }
        if(szuro == "z-a"){
            airsoftFegyver = airsoftFegyver.sort((a, b) =>  b.nev.localeCompare(a.nev))
        }
        DisplayItems(airsoftFegyver);

        DisplayItems(airsoftFegyver);
    }

    if(document.title === "Airsoft kiegészítők") {
        let AirsoftKiegeszitok = await AirKiegeszito();

        if(szuro == "olcsoToDraga"){
            AirsoftKiegeszitok = AirsoftKiegeszitok.sort((a, b) => a.ar - b.ar)
        }

        if(szuro == "dragaToOlcso"){
            AirsoftKiegeszitok = AirsoftKiegeszitok.sort((a, b) => b.ar - a.ar)
        }
        if(szuro == "a-z"){
            AirsoftKiegeszitok = AirsoftKiegeszitok.sort((a, b) =>  a.nev.localeCompare(b.nev))
        }
        if(szuro == "z-a"){
            AirsoftKiegeszitok = AirsoftKiegeszitok.sort((a, b) =>  b.nev.localeCompare(a.nev))
        }
        DisplayItems(AirsoftKiegeszitok);

        DisplayItems(AirsoftKiegeszitok);
    }
    if(document.title === "Airsoft ruházat") {
        let AirsoftRuhazat = await AirRuhazat();

        if(szuro == "olcsoToDraga"){
            AirsoftRuhazat = AirsoftRuhazat.sort((a, b) => a.ar - b.ar)
        }

        if(szuro == "dragaToOlcso"){
            AirsoftRuhazat = AirsoftRuhazat.sort((a, b) => b.ar - a.ar)
        }
        if(szuro == "a-z"){
            AirsoftRuhazat = AirsoftRuhazat.sort((a, b) =>  a.nev.localeCompare(b.nev))
        }
        if(szuro == "z-a"){
            AirsoftRuhazat = AirsoftRuhazat.sort((a, b) =>  b.nev.localeCompare(a.nev))
        }
        DisplayItems(AirsoftRuhazat);

        DisplayItems(AirsoftRuhazat);
    }
    
    if(document.title === "Airsoft töltények") {
        let AirsoftToltenyek = await AirToltenyek();

        if(szuro == "olcsoToDraga"){
            AirsoftToltenyek = AirsoftToltenyek.sort((a, b) => a.ar - b.ar)
        }

        if(szuro == "dragaToOlcso"){
            AirsoftToltenyek = AirsoftToltenyek.sort((a, b) => b.ar - a.ar)
        }
        if(szuro == "a-z"){
            AirsoftToltenyek = AirsoftToltenyek.sort((a, b) =>  a.nev.localeCompare(b.nev))
        }
        if(szuro == "z-a"){
            AirsoftToltenyek = AirsoftToltenyek.sort((a, b) =>  b.nev.localeCompare(a.nev))
        }
        DisplayItems(AirsoftToltenyek);

        DisplayItems(AirsoftToltenyek);
    }

    loading = false
}

CatchData();
updateCartNumber();