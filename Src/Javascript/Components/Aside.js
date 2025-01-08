export default function Aside(){
    return(
        `
        <div id="aside" class="bg-red-500/90 h-full mx-auto w-full max-w-8xl px-2.5 md:px-20 "> <!-- MaxWidthWrapper, azért kell, hogy megadjunk egy max méretet, reszponzivitás miatt -->
            <div class="flex justify-between h-20 items-center ">
                <h1 class="text-center text-white">Home / Products / Casual</h1>
            </div> 
        </div>
        `
    )
}