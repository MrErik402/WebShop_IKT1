

export default async function Muanyag(){

    let Muanyag = []

    function PassData(data){
        data.map(info => {
            Muanyag.push(new Termek(info.id, info.nev, info.ar, info.leiras, info.kep));
        });


    }

    class Termek{
        constructor(id, nev, ar, leiras, img){
            this.id = id;
            this.nev = nev;
            this.ar = ar;
            this.leiras = leiras;
            this.img = img;
        }

        

        PlaceThisItemToTheCart() {
            const itemId = this.id;
            const existingItem = cart.find(item => item.id === itemId); //true - false
    
            if (existingItem) { //ELEKTRONIKUSBÓL VÁR MEGOLDÁT MÉG
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: itemId,
                    quantity: 1,
                    img: this.img,
                    ar: this.ar,
                    nev: this.nev
                });
            }
            saveTheCart();
        }

    }

    const baseUrl = (window.location.hostname === "127.0.0.1") ? "/" : "/WebShop_IKT1/";

    
    try {
        if(window.location.hostname === "127.0.0.1"){ //Host meghatározása
            await fetch(baseUrl + "Src/Javascript/Products/Tarsasjatekok/products.json")
            .then(res => res.json())
            .then(data => PassData(data))
        }
        else{
            await fetch(baseUrl + "Src/Javascript/Products/Tarsasjatekok/productsGitHub.json")
            .then(res => res.json())
            .then(data => PassData(data))
        }
        
        
    }catch (error) {
        console.log(error)
    }

    return Muanyag
}
