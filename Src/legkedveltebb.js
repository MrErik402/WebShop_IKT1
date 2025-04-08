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