const legkedveltebbTermekek = [osszesLista]
let tombKedveltTermekekkel = []

/*Tömbdeklarálások*/

let kedveltTarsas = [];
let kedveltElektronikus = [];
let kedveltMuanyag = [];
let kedveltJatekfegyver = [];
let kedveltAirsoftFegyver = [];
let kedveltAirsoftRuhazat = [];
let kedveltAirsoftToltenyek = [];
let kedveltAirsoftKiegeszitok = [];


legkedveltebbTermekek.forEach(tomb => {
    tomb.forEach(objektumok => {
        objektumok.forEach(objektum => {
            if(!!!!!objektum.kedvelt){ //Ha ez igaz[Azaz ez hamis]
                tombKedveltTermekekkel.push(objektum)
            }
        });
    });
});

tombKedveltTermekekkel.forEach(element => {
    if(element.id / 16 <= 1){ //Társasjáték
        kedveltTarsas.push(element);
    }
    else if(element.id / 16 <= 2){ //Elektronikusjáték
        kedveltElektronikus.push(element);
    }
    else if(element.id / 16 <= 3){ //Játékfegyver
        kedveltJatekfegyver.push(element);
    }
    else if(element.id / 16 <= 4){ //Műanyag
        kedveltMuanyag.push(element);
    }
    else if(element.id / 16 <= 5){ //Airsoftfegyver
        kedveltAirsoftFegyver.push(element);
    }
    else if(element.id / 16 <= 6){ //Airsoftruházat
        kedveltAirsoftRuhazat.push(element);
    }
    else if(element.id / 16 <= 7){ //Airsofttöltények
        kedveltAirsoftToltenyek.push(element);
    }
    else if(element.id / 16 <= 8){ //Airsoftkiegészítők
        kedveltAirsoftKiegeszitok.push(element);
    }
});

let aktualisOldal = document.title.toString();
let atadottTomb = kedveltTarsas

switch (aktualisOldal) {
    case "Tarsasjatek":
        //Társasjáték tömböt kell használnia
        atadottTomb = kedveltTarsas;
        break;
    case "Muanyag":
        atadottTomb = kedveltMuanyag
        break;
    case "Jatekfegyver":
        atadottTomb = kedveltJatekfegyver
        break;
    case "Elektronikus":
        atadottTomb = kedveltElektronikus
        break;
    case "Airsoftfegyverek":
        atadottTomb = kedveltAirsoftFegyver
        break;
    case "Airsoftruhazat":
        atadottTomb = kedveltAirsoftRuhazat
        break;
    case "Airsoftkiegeszitok":
        atadottTomb = kedveltAirsoftKiegeszitok
        break;
    case "Airsofttoltenyek":
        atadottTomb = kedveltAirsoftToltenyek
        break;
}

console.log(aktualisOldal)

atadottTomb.forEach(targy => {
    console.log(targy.kep)
    document.querySelector(".sliderek").innerHTML += `
    <!-- Slide 1 -->
    <div class="swiper-slide flex space-x-4 mx-auto items-center self-center justify-center w-full">
      <div class="w-full max-w-[40vw]  md:max-w-screen-xs  p-4 text-center">
        <img src="${targy.kep}" alt="" onclick="tekerjle(${targy.id})" id="${targy.id}">
      </div>
      
    </div>
    `

    
    
});


atadottTomb.slice(7).forEach(targy => {
    document.querySelector(".legkedveltebbpc").innerHTML += `
        <div class="border max-w-xs p-2 border-black/40 shadow-md shadow-black/50 ">
            <img onclick="tekerjle(${targy.id})" id="${targy.id}" src="${targy.kep}" alt="">
            <h1 class="font-light text-xl">${targy.nev}</h1>
            <h1 class="font-bold text-lg">2 elegendő vásárló</h1>
        </div>
    `
})
