let lefutottEgyszer = false;
      var elozoId; 
      function tekerjle(id){
        if(!lefutottEgyszer){
          var my_element = document.getElementById(`_${id}`);
          my_element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });

          my_element.style.border = "4px dashed black"
          elozoId = id;
          lefutottEgyszer = true;
        }
        else{
          document.getElementById(`_${elozoId}`).style.border = "none"
          var my_element2 = document.getElementById(`_${id}`);
          my_element2.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });

          my_element2.style.border = "4px dashed black"
          elozoId = id;
        }
        }