const footer = () => {
    return(
        `
        <div class="h-96 mt-56 md:h-52 md:mt-40" />
        <div id="lablec" class="w-full bg-tarsas3-light dark:bg-tarsas3-dark dark:text-white py-4 justify-self-end mt-auto flex flex-wrap gap-8 lg:gap-0 absolute bottom-0 h-auto ">
            <div id="hirlevel" class="flex flex-col w-full lg:w-1/3 px-16 gap-4">
                <p>Iratkozzon fel a hírlevelünkre!</p>
                <input type="email" name="" id="" placeholder="E-mail" class="rounded text-lg p-2">
                <button class="bg-tarsas4-light dark:bg-tarsas4-dark text-white px-6 py-2 rounded-xl self-end">Feliratkozás</button>
            </div>
            <div id="elerhetoseg" class="flex flex-col w-full lg:w-1/3 px-16 text-center">
                <p class="mb-4 text-lg">Elérhetőség</p>
                <p>emailunk@email.com</p>
                <p>+36 30 582 9419</p>
            </div>
            <div id="hivatalos" class="flex flex-col w-full lg:w-1/3 px-16">
                <div id="logoHivatalos" class="flex h-1/2 justify-between">
                    <img src="../Pictures/Fooldal/Cég logó.png" alt="">
                    <p class="self-center">Társas estek™ 2024</p>
                </div>
                <div id="gombokHivatalos" class="flex h-1/2 justify-between px-4">
                <button class="bg-tarsas4-light dark:bg-tarsas4-dark text-white px-6 py-2 rounded-xl self-end">ÁSZF</button>
                <button class="bg-tarsas4-light dark:bg-tarsas4-dark text-white px-6 py-2 rounded-xl self-end">Adatvédelem</button>

                </div>
            </div>
        </div>
        `
    );
}

document.querySelector(".footer").innerHTML = footer();

