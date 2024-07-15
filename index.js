let toggle = false;
        document.querySelector(".slider").addEventListener("click",()=>{
            if(toggle == false){
                document.querySelector("body").style.backgroundColor = "black";
                document.querySelectorAll(".changer").forEach((item)=>{item.classList.replace("changer","switch_mode")})
                toggle = true;
            }else{
                document.querySelector("body").style.backgroundColor = "white";
                document.querySelectorAll(".switch_mode").forEach((item)=>{item.classList.replace("switch_mode","changer")})
                toggle = false
            }
        })