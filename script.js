let btn = document.querySelector("#menu")
let currState = "hidden"

btn.addEventListener("click", ()=>{
  if(currState === "hidden"){
    currState = "block"
    document.getElementById("ul").style.display = "block"
    document.getElementById("nav").style.width = "100%"
    document.getElementById("nav").style.height = "20vh"
    document.getElementById("main").style.paddingTop = "15vh"
  }
  else{
    currState = "hidden"
    document.getElementById("ul").style.display = "none"
    document.getElementById("nav").style.width = "100%"
    document.getElementById("nav").style.height = "auto"
    document.getElementById("main").style.paddingTop = "0vh"
  }
})