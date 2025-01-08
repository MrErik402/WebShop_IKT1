export default function Navbar() {
    return(
        `
            <div class="flex justify-between h-20">
                <div class="flex flex-col self-center text-start leading-4 text-pretty antialiased">
                    <h1 class="text-xl font-bold tracking-wide">Minta webáruház</h1>
                    <p class="text-sm text-gray-700">Szép webdesign-al</p>
                </div>
                <div class="flex self-center text-start leading-5 tracking-tight text-pretty antialiased gap-5  text-lg font-semibold pr-20">
                    <a href="../index.html">Home</a>
                    <div onClick="popUp()" class="flex -space-x-4 cursor-pointer">
                      <img class="w-10 h-10" src="../Pictures/navCart.png" />
                      <h1 id="cartAmount" class="text-sm bg-black/50 rounded-xl h-5 w-5 text-white text-center">0</h1>
                    </div>
                    <details class="dropdown menu-drop">
                        <summary role="button">
                          <h4 class="text">Shop ˇ</h4>
                        </summary>
                        <ul class="test" style="text-align: justify">
                          <li><a href="#">Accesories</a></li>
                          <hr />
                          <li><a href="#">Casual</a></li>
                          <hr />
                          <li><a href="#">Clothing</a></li>
                          <hr />
                          <li><a href="#">Men</a></li>
                          <hr />
                          <li><a href="#">Women</a></li>
                          <hr />
                        </ul>
                      </details>
                      <details class="dropdown menu-drop">
                        <summary role="button">
                          <h4 class="text">My account ˇ</h4>
                        </summary>
                        <ul class="test" style="text-align: justify">
                          <li><a href="#">Regisztráció</a></li>
                          <hr />
                          <li><a href="#">Bejelentkezés</a></li>
                          <hr />
                        </ul>
                      </details>
                      <a href="">Blog</a>
                      <a href="">Contact us</a>
                </div>
            </div>
        `
    )
}

