

export default async function Casual(){

    let ElektronikusProducts = []

    function PassData(data){
        data.map(info => {
            ElektronikusProducts.push(new Termek(info.id, info.nev, info.ar, info.leiras, info.kep));
        });


    }

    class Termek{
        constructor(id, nev, ar, leiras, img){
            this.id = id;
            this.nev = nev;
            this.ar = ar;
            this.leiras = leiras;
            this.img = img;

            const itemId = this.id;
            const existingItem = popular.find(item => item.id === itemId); //true - false

            if(!existingItem && this.ar === 12999){
                popular.push({
                    id: this.id,
                    img: this.img,
                    ar: this.ar,
                    nev: this.nev
                })
                saveThePopular()
            }
            
            
        }



        PlaceThisItemToTheCart() {
            const itemId = this.id;
            const existingItem = cart.find(item => item.id === itemId); //true - false
    
            if (existingItem) {
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
            await fetch(baseUrl + "Src/Javascript/Products/Elektronikus/products.json")
            .then(res => res.json())
            .then(data => PassData(data))
        }
        else{
            await fetch(baseUrl + "Src/Javascript/Products/Elektronikus/productsGitHub.json")
            .then(res => res.json())
            .then(data => PassData(data))
        }
        
        
    } catch (error) {
        console.log(error)
    }

    return ElektronikusProducts
}
