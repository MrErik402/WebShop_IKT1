

export default async function AirFegyverek(){

    let AirFegyverek = []

    function PassData(data){
        data.map(info => {
            AirFegyverek.push(new Termek(info.id, info.nev, info.ar, info.leiras, info.kep));
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

    try {
        await fetch("/Src/Javascript/Products/AirsoftFegyverek/products.json")
        .then(res => res.json())
        .then(data => PassData(data))
    } catch (error) {
        console.log(error)
    }

    return AirFegyverek
}
