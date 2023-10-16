const screentop = document.querySelector(".top");
const botones = document.querySelectorAll(".num")

botones.forEach(boton => {
    boton.addEventListener("click" ,() => {
        const hitBoton = boton.textContent;
        
        if (boton.id ==="c") {
            screentop.textContent = "";
            return;
        
        }
        if(boton.id === "equal") {
        screentop.textContent = eval(screentop.textContent);
        return;

        }
        
        if(screentop.textContent === ""){

        }
        screentop.textContent += hitBoton
        
        
         
        })

       
    }) 

        
        
       


      
















 
