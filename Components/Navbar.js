const Navbar = () => {
  return(
      `
      <div id="navbar" class="flex flex-col w-[100%] bg-tarsas3-light dark:bg-tarsas3-dark h-[4em]">
        
      <div id="menupontok" class="flex w-[100%] justify-between">
          <a href="index.html">
              <div id="cegLogo">
                  <img src="../Pictures/Fooldal/Cég logó.png" alt="Társas estek" title="Társas estek" class="flex-row h-[4em] float-start dark:bg-[white] dark:bg-opacity-20 dark:rounded-lg">
              </div>
          </a>
          <div class="">
              <div class="flex flex-row flex-wrap justify-between text-base" id="gombok">
                  <div onclick={popUp()} class="h-full w-[6em] cursor-pointer" id="kosar">
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
                          <li><a class="" href="#"><img id="kepNav" src="../Pictures/Navbar/fegyver.png" class=""
                                      style="display: inline">Fegyverek<img id="kepNav" src="../Pictures/Navbar/fegyverMasik.png"
                                      style="display: inline"></a></li>
                          <hr />
                          <li><a href="#"><img id="kepNav" src="../Pictures/Navbar/polo.png" class=""
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
                              <a class="" href="#">
                                  <img id="kepNav" src="../Pictures/Navbar/jatekos.png" class="" style="display: inline">
                                  Társasjáték
                                  <img id="kepNav" src="../Pictures/Navbar/jatekos.png" style="display: inline">
                              </a>
                          </li>
                          <hr/>
                          <li>
                              <a href="#"><img id="kepNav" src="../Pictures/Navbar/kocsi.png" class=""
                                      style="display: inline">Elektronikus<img id="kepNav" src="../Pictures/Navbar/kocsi.png"
                                      class="" style="display: inline"></a>
                                  </li>
                          <hr/>
                          <li>
                              <a href="#"><img id="kepNav" src="../Pictures/Navbar/katona.png" class=""
                                      style="display: inline;">Műanyag<img id="kepNav" src="../Pictures/Navbar/katona.png"
                                      class="" style="display: inline">
                                  </a>
                              </li>
                          <hr/>
                          <li><a href="#"><img id="kepNav" src="../Pictures/Navbar/loszer.png" class=""
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


          <div id="burgerGomb" class="flex justify-center items-center w-16 mr-2 lg:hidden" onclick="burgerKattintas()">
              <img src="../Pictures/Navbar/burger_icon.png" alt="" class="h-4/5">
          </div>


          
      </div>

      
  </div>
  <div id="burgerMenu" class="hidden w-full bg-tarsas3-light dark:bg-tarsas2-dark text-center flex-col lg:hidden">
      <div id="burgerAirsoft" class="py-4 border-b border-black">Airsoft</div>
      <div id="burgerJatekok" class="py-4 border-b border-black">Jatekok</div>
      <div id="burgerRolunk" class="py-4">Rolunk</div>
  </div>
      `
  ) 
}

let burgerMenu = document.getElementById("burgerMenu");
let tartalom = document.getElementById("tartalom");
let burgerNyitott = false;
let burgerKattintas = () => {
    if (burgerNyitott) {
        burgerMenu.style.display = "none";
        tartalom.style.marginTop = "0em";
        burgerNyitott = false;
    } else {
        burgerMenu.style.display = "flex";
        //tartalom.style.marginTop = "8em";
        burgerNyitott = true;
    }

}

document.querySelector("#navbar").innerHTML += Navbar()