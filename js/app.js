const time = null;

const start = function(){
    setInterval(function(){
        const board = document.querySelector(".board")
        const newDiv = document.createElement("div");
        newDiv.classList.add("zombie");
        
        newDiv.style.bottom = Math.floor(Math.random(280 - 50) + "px");

        const max = 20;
        const min = 7;
        const randomTime = Math.floor(Math.random()*(max-min+1)+min) + "s";
        const size = Math.floor(Math.random()*(1.5-1+1)+1);
        newDiv.style.transform = "scale("+ size + ")"; 
        newDiv.style.filer = `blur(${size})`;
        newDiv.style.animationDuration = "1s, " + randomTime;
        

        
        board.appendChild(newDiv);
        newDiv.addEventListener("animationend", function() {
            this.parentElement.removeChild(this);
        });


    }, 1000);
   
}

start();