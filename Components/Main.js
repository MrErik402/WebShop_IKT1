const FilterByPrice = () => {
    function range() {
        return {
          minprice: 1, 
          maxprice: 1000,
          min: 1, 
          max: 1000,
          minthumb: 0,
          maxthumb: 0, 
          
          mintrigger() {   
            this.minprice = Math.min(this.minprice, this.maxprice -1 );      
            this.minthumb = ((this.minprice - this.min) / (this.max - this.min)) * 100;
          },
           
          maxtrigger() {
            this.maxprice = Math.max(this.maxprice, this.minprice + 1); 
            this.maxthumb = 100 - (((this.maxprice - this.min) / (this.max - this.min)) * 100);    
          }, 
        }
    }
    return(
        `
        <div class="flex">
                    <div class="flex w-full flex-col  ">
                        <h1 class="font-semibold text-xl">Casual</h1>
                        <div class="lines">
                            <div class="red-line">&nbsp</div>
                            <div class="gray-line">&nbsp</div>
                        </div>
                      </div>
                      <div class="flex flex-col w-3/4 ">
                        <h1 class="font-semibold text-xl">Filter by price</h1>
                        <div class="lines">
                            <div class="red-line">&nbsp</div>
                            <div class="gray-line">&nbsp</div>
                        </div>
                            <div class="h-32 flex justify-center items-center ">
                                <div x-data="range()" x-init="mintrigger(); maxtrigger()" class="relative max-w-xl w-full px-1  ">
                                  <div>
                                    <input type="range"
                                           step="1"
                                           x-bind:min="min" x-bind:max="max"
                                           x-on:input="mintrigger"
                                           x-model="minprice"
                                           class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer">
                              
                                    <input type="range" 
                                           step="1"
                                           x-bind:min="min" x-bind:max="max"
                                           x-on:input="maxtrigger"
                                           x-model="maxprice"
                                           class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer">
                              
                                    <div class="relative z-10 h-2 flex flex-col justify-center max-w-7xl mx-auto">
                                      <div class="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
                              
                                      <div class="absolute z-20 top-0 bottom-0 rounded-md bg-red-500" x-bind:style="'right:'+maxthumb+'%; left:'+minthumb+'%'"></div>
                              
                                      <div class="absolute z-30 w-6 h-6 top-0 left-0 bg-red-300 rounded-full -mt-2 -ml-1" x-bind:style="'left: '+minthumb+'%'"></div>
                              
                                      <div class="absolute z-30 w-6 h-6 top-0 right-0 bg-red-300 rounded-full -mt-2 -mr-3" x-bind:style="'right: '+maxthumb+'%'"></div>
                               
                                    </div>
                              
                                  </div>
                                  
                                  <div class="flex justify-between items-center py-5">
                                        <div class="">
                                            <button class="bg-gray-500/50 py-0.5 px-2 rounded-sm">FILTER</button>
                                        </div>
                                        <div class="flex justify-end items-center">
                                            <p>Price:</p>
                                            <div class="gap-0 flex justify-end">
                                                <p class="pl-2">$</p>
                                            <input  type="text" maxlength="4" x-on:input="mintrigger" x-model="minprice" class="text-center max-w-10">
                                            </div>
                                            <p class="px-2">-</p>
                                            <div>
                                            $<input type="text" maxlength="4" x-on:input="maxtrigger" x-model="maxprice" class="text-center max-w-10">
                                        </div>
                                    </div>
                                  </div>
                                  
                                </div>
                            
                              </div>
                        </div>
                      
                </div>
        `
    )
}

document.querySelector("#filter-by-price").innerHTML += FilterByPrice()