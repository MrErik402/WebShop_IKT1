const Navbar = () => {
    return(
        `
            <div class="flex justify-between h-20">
                <div class="flex flex-col self-center text-start leading-4 text-pretty antialiased">
                    <h1 class="text-xl font-bold tracking-wide">Minta webáruház</h1>
                    <p class="text-sm text-gray-700">Szép webdesign-al</p>
                </div>
                <div class="flex self-center text-start leading-5 tracking-tight text-pretty antialiased gap-5  text-lg font-semibold pr-20">
                    <a href="">Home</a>
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

document.querySelector("#navbar").innerHTML += Navbar()