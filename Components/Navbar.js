let FullNavbar = () => {
  return `
        <div id="navbar" class="flex flex-col w-full bg-tarsas3-light dark:bg-tarsas3-dark h-[4em]">
        
        <div id="menupontok" class="flex w-full justify-between">
            <a href="index.html">
                <div id="cegLogo">
                    <img src="../Pictures/Fooldal/Cég logó.png" alt="Társas estek" title="Társas estek" class="flex-row h-[4em] float-start dark:bg-[white] dark:bg-opacity-20 dark:rounded-lg">
                </div>
            </a>
            <div class="flex flex-row flex-wrap justify-between text-base" id="gombok">
                <div onClick="popUp()" class="hover:cursor-pointer h-full w-[6em]" id="kosar">
                    <img src="../Pictures/Fooldal/Kosár.png" alt="Kosárka" class="h-[4em]">
                    <p id="cartAmount" class="h-[1.5em] w-[1.5em] text-white ml-[3.6em] align-baseline text-center rounded-full bg-red-600 absolute top-0">0</p>
                </div>
                
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text bg-tarsas2-light dark:bg-tarsas2-dark h-[2em] w-[5em] align-baseline text-center mr-[2em] mt-[1em]  hover:dark:bg-tarsas1-dark hover:bg-tarsas1-light dark:text-white hover:dark:text-black hover:text-white rounded-2xl hidden lg:block" type="button">Játékok
        </button>

        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10  h-auto hidden">
        <ul class="border-black border-b-2 border-l-2 border-r-2 rounded-b-xl bg-tarsas2-light dark:bg-tarsas2-dark"
            style="text-align: center; width: 17em; margin: 6px -2em !important;">
            <li>
                <a class="" href="./tarsasJatek.html">
                    <img id="kepNav" src="../Pictures/Navbar/jatekos.png" class="" style="display: inline">
                    Társasjáték
                    <img id="kepNav" src="../Pictures/Navbar/jatekos.png" style="display: inline">
                </a>
            </li>
            <div class="w-[25vh] my-2 mx-auto flex justify-center h-0.5 bg-black/70"></div>
            <li>
                <a href="./elektronikus.html"><img id="kepNav" src="../Pictures/Navbar/kocsi.png" class=""
                        style="display: inline">Elektronikus<img id="kepNav" src="../Pictures/Navbar/kocsi.png"
                        class="" style="display: inline"></a>
                    </li>
                    <div class="w-[25vh] my-2 mx-auto flex justify-center h-0.5 bg-black/70"></div>
            <li>
                <a href="./muanyag.html"><img id="kepNav" src="../Pictures/Navbar/katona.png" class=""
                        style="display: inline;">Műanyag<img id="kepNav" src="../Pictures/Navbar/katona.png"
                        class="" style="display: inline" />
                </a>
                </li>
            <div class="w-[25vh] my-2 mx-auto flex justify-center h-0.5 bg-black/70"></div>
            <li><a href="./jatekFegyver.html"><img id="kepNav" src="../Pictures/Navbar/loszer.png" class=""
                        style="display: inline;">Fegyverek<img id="kepNav" src="../Pictures/Navbar/loszer.png"
                        class="" style="display: inline">
                </a>
            </li>
            <div class="w-[25vh] my-2 mx-auto flex justify-center h-0.5 bg-black/70"></div>
        </ul>
        </div>

        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdownFegyver" class="text bg-tarsas2-light dark:bg-tarsas2-dark h-[2em] w-[5em] align-baseline text-center mr-[2em] mt-[1em]  hover:dark:bg-tarsas1-dark hover:bg-tarsas1-light dark:text-white hover:dark:text-black hover:text-white rounded-2xl hidden lg:block" type="button">Fegyverek
        </button>

        <!-- Dropdown menu -->
        <div id="dropdownFegyver" class="z-10  h-auto hidden">
        <ul class="border-black border-b-2 border-l-2 border-r-2 rounded-b-xl bg-tarsas2-light dark:bg-tarsas2-dark"
            style="text-align: center; width: 17em; margin: 6px -2em !important;">
            <li>
                <a class="" href="./airsoftFegyver.html">
                    <img id="kepNav" src="../Pictures/Navbar/fegyver.png" class="" style="display: inline">
                    Fegyverek
                    <img id="kepNav" src="../Pictures/Navbar/fegyverMasik.png" style="display: inline">
                </a>
            </li>
            <div class="w-[25vh] my-2 mx-auto flex justify-center h-0.5 bg-black/70"></div>
            <li>
                <a href="./airsoftRuha.html"><img id="kepNav" src="../Pictures/Navbar/polo.png" class=""
                        style="display: inline">Ruházat<img id="kepNav" src="../Pictures/Navbar/polo.png"
                        class="" style="display: inline"></a>
                    </li>
                    <div class="w-[25vh] my-2 mx-auto flex justify-center h-0.5 bg-black/70"></div>
            <li>
                <a href="./airsoftKieg.html"><img id="kepNav" src="../Pictures/Navbar/tavcso.png" class=""
                        style="display: inline;">Kiegészítők<img id="kepNav" src="../Pictures/Navbar/tavcso.png"
                        class="" style="display: inline" />
                </a>
                </li>
            <div class="w-[25vh] my-2 mx-auto flex justify-center h-0.5 bg-black/70"></div>
            <li><a href="./airsoftTolteny.html"><img id="kepNav" src="../Pictures/Navbar/loszer.png" class=""
                        style="display: inline;">Töltények<img id="kepNav" src="../Pictures/Navbar/loszer.png"
                        class="" style="display: inline">
                </a>
            </li>
            <div class="w-[25vh] my-2 mx-auto flex justify-center h-0.5 bg-black/70"></div>
        </ul>
        </div>

                <a href="./rolunk.html" id="rolunkGomb" class="hidden lg:block h-full">
                    <p class="bg-tarsas2-light dark:bg-tarsas2-dark h-[2em] w-[5em] align-baseline text-center mr-[2em] mt-[1em] hover:dark:bg-tarsas1-dark hover:bg-tarsas1-light dark:text-white hover:dark:text-black hover:text-white rounded-2xl"> Rólunk</p>
                </a>
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
            <a href="./airsoftFegyver.html">
                <p class="border-y border-black p-4"><img id="kepNav" src="../Pictures/Navbar/fegyver.png" class=""
                style="display: inline;">Fegyverek<img id="kepNav" src="../Pictures/Navbar/fegyverMasik.png" class=""
                style="display: inline;"></p>
            </a>
            <a href="./airsoftRuha.html">
                <p class="border-b border-black p-4"><img id="kepNav" src="../Pictures/Navbar/polo.png" class="mr-3"
                style="display: inline;">Ruházat<img id="kepNav" src="../Pictures/Navbar/polo.png" class=""
                style="display: inline;"></p>
            </a>
            <a href="./airsoftKieg.html">
                <p class="border-b border-black p-4"><img id="kepNav" src="../Pictures/Navbar/tavcso.png" class=""
                style="display: inline;">Kiegészítők<img id="kepNav" src="../Pictures/Navbar/tavcso.png" class=""
                style="display: inline;"></p>
            </a>
            <a href="./airsoftTolteny.html">
                <p class="border-b border-black p-4"><img id="kepNav" src="../Pictures/Navbar/loszer.png" class=""
                style="display: inline;">Lőszerek<img id="kepNav" src="../Pictures/Navbar/loszer.png" class=""
                style="display: inline;"></p>
            </a>
        </div>
        <div id="burgerJatekok" class="py-4 border-b border-black cursor-pointer" onclick="jatekokKatt()">
            <p class="text-white">Játékok</p>
        </div>
        <div id="burgerJatekokAlmenu" class="hidden flex-col bg-tarsas3-light dark:bg-tarsas2-dark dark:text-white">
            <a href="./tarsasJatek.html">
                <p class="border-y border-black p-4"><img id="kepNav" src="../Pictures/Navbar/jatekos.png" class=""
                style="display: inline;">Társasjátékok<img id="kepNav" src="../Pictures/Navbar/jatekos.png" class=""
                style="display: inline;"></p>
            </a>
            <a href="./elektronikus.html">
                <p class="border-b border-black p-4"><img id="kepNav" src="../Pictures/Navbar/kocsi.png" class=""
                style="display: inline;">Elektronikus<img id="kepNav" src="../Pictures/Navbar/kocsi.png" class=""
                style="display: inline;"></p>
            </a>
            <a href="./muanyag.html">
                <p class="border-b border-black p-4"><img id="kepNav" src="../Pictures/Navbar/katona.png" class=""
                style="display: inline;">Műanyag<img id="kepNav" src="../Pictures/Navbar/katona.png" class=""
                style="display: inline;"></p>
            </a>
            <a href="./jatekFegyverek.html">
                <p class="border-b border-black p-4"><img id="kepNav" src="../Pictures/Navbar/loszer.png" class=""
                style="display: inline;">Fegyverek<img id="kepNav" src="../Pictures/Navbar/loszer.png" class=""
                style="display: inline;"></p>
            </a>
        </div>
        <a href="./rolunk.html">
            <div id="burgerRolunk" class="py-4 text-white">Rolunk</div>
        </a>
    </div>
        `;
};
let navbar = document.createElement("div");
navbar.innerHTML = FullNavbar();
document.body.insertBefore(navbar, document.body.firstChild);

const burgerMenu = document.getElementById("burgerMenu");
let isBurgerOpen = false;
const toggleBurgerMenu = () => {
  isBurgerOpen = !isBurgerOpen;
  burgerMenu.style.display = isBurgerOpen ? "flex" : "none";
};

const airsoftBurger = document.getElementById("burgerAirsoftAlmenu");
let isAirsoftOpen = false;
const toggleAirsoftMenu = () => {
  isAirsoftOpen = !isAirsoftOpen;
  airsoftBurger.style.display = isAirsoftOpen ? "flex" : "none";
};

const jatekBurger = document.getElementById("burgerJatekokAlmenu");
let isJatekOpen = false;
const toggleJatekMenu = () => {
  isJatekOpen = !isJatekOpen;
  jatekBurger.style.display = isJatekOpen ? "flex" : "none";
};

document
  .getElementById("burgerGomb")
  .addEventListener("click", toggleBurgerMenu);
document
  .getElementById("burgerAirsoft")
  .addEventListener("click", toggleAirsoftMenu);
document
  .getElementById("burgerJatekok")
  .addEventListener("click", toggleJatekMenu);

window.addEventListener("resize", (event) => {
  if (window.innerWidth >= 1024) {
    isBurgerOpen = true;
    toggleBurgerMenu();
  }
});
