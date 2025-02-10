let FullNavbar = () => {
    return (
        `
        <div id="navbar" class="flex flex-col w-[100%] bg-tarsas3-light dark:bg-tarsas3-dark h-[4em]">
        
        <div id="menupontok" class="flex w-[100%] justify-between">
            <a href="index.html">
                <div id="cegLogo">
                    <img src="../Pictures/Fooldal/Cég logó.png" alt="Társas estek" title="Társas estek" class="flex-row h-[4em] float-start dark:bg-[white] dark:bg-opacity-20 dark:rounded-lg">
                </div>
            </a>
            <div class="">
                <div " class=" flex flex-row flex-wrap justify-between text-base" id="gombok">
                    <div onClick="popUp() class="hover:cursor-pointer h-full w-[6em]" id="kosar">
                        <img src="../Pictures/Fooldal/Kosár.png" alt="Kosárka" class="h-[4em]">
                        <p id="cartAmount" class="h-[1.5em] w-[1.5em] text-white ml-[3.6em] align-baseline text-center rounded-full bg-red-600 absolute top-0">0</p>
                    </div>
                    <details class="dropdown menu-drop hidden lg:block h-full" id="airsoftDetails">
                        <summary style="list-style: none;" role="button">
                            <h4
                                class="text bg-tarsas2-light dark:bg-tarsas2-dark h-[2em] w-[5em] align-baseline text-center ml-[2em] mr-[2em] mt-[1em] hover:dark:bg-tarsas1-dark hover:bg-tarsas1-light dark:text-white hover:dark:text-black hover:text-white rounded-2xl list-none">
                                Airsoft <</h4>
                        </summary>
                        <ul class=" bg-tarsas2-light dark:bg-tarsas2-dark" style="text-align: center; width: 17em;">
                            <li><a class="" href=""><img id="kepNav" src="../Pictures/Navbar/fegyver.png" class=""
                                        style="display: inline">Fegyverek<img id="kepNav" src="../Pictures/Navbar/fegyverMasik.png"
                                        style="display: inline"></a></li>
                            <hr />
                            <li><a href="./jatekFegyverek.html"><img id="kepNav" src="../Pictures/Navbar/polo.png" class=""
                                        style="display: inline">Ruházat<img id="kepNav" src="../Pictures/Navbar/polo.png" class=""
                                        style="display: inline"></a></li>
                            <hr />
                            <li><a href="#"><img id="kepNav" src="../Pictures/Navbar/tavcso.png" class=""
                                        style="display: inline">Kiegészítők<img id="kepNav" src="../Pictures/Navbar/tavcso.png"
                                        class="" style="display: inline"></a></li>
                            <hr />
                            <li><a href="#"><img id="kepNav" src="../Pictures/Navbar/loszer.png" class=""
                                        style="display: inline">Lőszerek<img id="kepNav" src="../Pictures/Navbar/loszer.png"
                                        class="" style="display: inline"></a></li>
                            <hr />
                        </ul>
                    </details>
                    <details class="dropdown menu-drop hidden lg:block h-full" id="jatekokDetails">
                        <summary style="list-style: none;" role="button">
                            <h4
                                class="text bg-tarsas2-light dark:bg-tarsas2-dark h-[2em] w-[5em] align-baseline text-center mr-[2em] mt-[1em]  hover:dark:bg-tarsas1-dark hover:bg-tarsas1-light dark:text-white hover:dark:text-black hover:text-white rounded-2xl">
                                Játékok <</h4>
                        </summary>
                        <ul class=" bg-tarsas2-light dark:bg-tarsas2-dark"
                            style="text-align: center; width: 17em; margin: 15px -10em !important;">
                            <li>
                                <a class="" href="./tarsasJatek.html">
                                    <img id="kepNav" src="../Pictures/Navbar/jatekos.png" class="" style="display: inline">
                                    Társasjáték
                                    <img id="kepNav" src="../Pictures/Navbar/jatekos.png" style="display: inline">
                                </a>
                            </li>
                            <hr/>
                            <li>
                                <a href="./elektronikus.html"><img id="kepNav" src="../Pictures/Navbar/kocsi.png" class=""
                                        style="display: inline">Elektronikus<img id="kepNav" src="../Pictures/Navbar/kocsi.png"
                                        class="" style="display: inline"></a>
                                    </li>
                            <hr/>
                            <li>
                                <a href="./muanyag.html"><img id="kepNav" src="../Pictures/Navbar/katona.png" class=""
                                        style="display: inline;">Műanyag<img id="kepNav" src="../Pictures/Navbar/katona.png"
                                        class="" style="display: inline">
                                    </a>
                                </li>
                            <hr/>
                            <li><a href="./jatekFegyverek.html"><img id="kepNav" src="../Pictures/Navbar/loszer.png" class=""
                                        style="display: inline;">Fegyverek<img id="kepNav" src="../Pictures/Navbar/loszer.png"
                                        class="" style="display: inline">
                                </a>
                            </li>
                            <hr/>
                        </ul>
                    </details>
                    <a href="rolunk.html" id="rolunkGomb" class="hidden lg:block h-full">
                        <p class="bg-tarsas2-light dark:bg-tarsas2-dark h-[2em] w-[5em] align-baseline text-center mr-[2em] mt-[1em]  hover:dark:bg-tarsas1-dark hover:bg-tarsas1-light dark:text-white hover:dark:text-black hover:text-white rounded-2xl"> Rólunk</p>
                    </a>
                </div>
            </div>


            <div id="burgerGomb" class="flex justify-center items-center w-16 mr-2 lg:hidden" onclick="burgerKattintas()" style="cursor: pointer;">
                <img src="../Pictures/Navbar/burger_icon.png" alt="" class="h-4/5">
            </div>


            
        </div>

        
    </div>
    <div id="burgerMenu" class="hidden w-full bg-tarsas4-light dark:bg-tarsas3-dark text-center flex-col lg:hidden dark:text-white">
        <div id="burgerAirsoft" class="py-4 border-b border-black cursor-pointer" onclick="airsoftKatt()">
            <p class="text-white">Airsoft</p>
        </div>
        <div id="burgerAirsoftAlmenu" class="hidden flex-col bg-tarsas3-light dark:bg-tarsas2-dark dark:text-white">
            <a href="#">
                <p class="border-y border-black p-4">Fegyverek</p>
            </a>
            <a href="#">
                <p class="border-b border-black p-4">Ruházat</p>
            </a>
            <a href="#">
                <p class="border-b border-black p-4">Kiegészítők</p>
            </a>
            <a href="#">
                <p class="border-b border-black p-4">Lőszerek</p>
            </a>
        </div>
        <div id="burgerJatekok" class="py-4 border-b border-black cursor-pointer" onclick="jatekokKatt()">
            <p class="text-white">Jatekok</p>
        </div>
        <div id="burgerJatekokAlmenu" class="hidden flex-col bg-tarsas3-light dark:bg-tarsas2-dark dark:text-white">
            <a href="">
                <p class="border-y border-black p-4">Társas</p>
            </a>
            <a href="">
                <p class="border-b border-black p-4">Elektronikus</p>
            </a>
            <a href="">
                <p class="border-b border-black p-4">Műanyag</p>
            </a>
            <a href="">
                <p class="border-b border-black p-4">Fegyverek</p>
            </a>

        </div>
        <a href="./rolunk.html">
            <div id="burgerRolunk" class="py-4 text-white">Rolunk</div>
        </a>
    </div>
        `
    )
}

let navbar = document.createElement("div");
navbar.innerHTML = FullNavbar();
document.body.insertBefore(navbar, document.body.firstChild);

let burgerMenu = document.getElementById("burgerMenu");
let burgerNyitott = false;
let burgerKattintas = () => {
    if (burgerNyitott) {
        burgerMenu.style.display = "none";
        burgerNyitott = false;
    } else {
        burgerMenu.style.display = "flex";
        burgerNyitott = true;
    }
}

let airsoftNyitott = false;
let airsoftBurger = document.getElementById("burgerAirsoftAlmenu");
let airsoftKatt = () => {
    if (airsoftNyitott) {
        airsoftBurger.style.display = "none"
        airsoftNyitott = false;
    } else {
        airsoftBurger.style.display = "flex"
        airsoftNyitott = true;
    }
}

let jatekokNyitott = false;
let jatekBurger = document.getElementById("burgerJatekokAlmenu");
let jatekokKatt = () => {
    if (jatekokNyitott) {
        jatekBurger.style.display = "none"
        jatekokNyitott = false;
    } else {
        jatekBurger.style.display = "flex"
        jatekokNyitott = true;
    }
}


addEventListener("resize", (event) => {
    if (window.innerWidth >= 1024) {
        burgerNyitott = true;
        burgerKattintas();
    }
})
