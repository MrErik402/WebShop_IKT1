function popUp(localTermekek) {
    if (!Array.isArray(localTermekek)) return;

    document.querySelector(".kosarbanLevoTermekek").innerHTML = ``;
    document.querySelector(".popUp").classList.remove("hidden");

    let sum = 0;

    if(kosar.length == 0){
        document.querySelector("#finalPrice").textContent = 0 + "$";
    }


    kosar.forEach(value => {
        let id = value.id;
        let quantity = value.quantity;

        sum += localTermekek.find(item => item.id === id).ar * quantity;
        document.querySelector("#finalPrice").textContent = sum + "$";

        document.querySelector(".kosarbanLevoTermekek").innerHTML += `
            <div class="flex flex-col -space-y-6 item-container" data-id="${id}">
                <div class="remove-item relative hover:ring-1 ring-red-500 cursor-pointer bg-red-400/30 text-center max-w-5 float-right right-0">X</div>
                <img class="ring-1 ring-black/30 w-full max-w-36 h-full max-h-36" src="${localTermekek.find(item => item.id === id).img[0]}" alt="">
                <div class="bg-gray-200/30 ring-1 ring-black/30 flex gap-2 justify-between">
                    <input onChange="inputChange(${id}, Number(this.value))" min="1" type="number" value="${quantity}" class="w-8" />
                    <h1 class="text-right float-right">T</h1>
                </div>
            </div>
        `;
    });

    // "x" gomb event listener
    document.querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(e.target.closest(".item-container").getAttribute("data-id"));
            removeThisItem(id, localTermekek);
        });
    });

    // A legtetejére a popupnál
    const innerContent = document.querySelector(".innerContent");
    innerContent.scrollTop = 0;
}