//<!-- using scripts to show progess bar befor show a page-->
$(window).on("load", function(){
    $(".load").fadeOut(2000)
    $(".container-show").fadeIn(3000)
})
$(window).on("load", function(){
    $(".load").fadeOut(2000)
    $(".container-show").fadeIn(3000)
})

// Show divs
var toogle = document.querySelector("#emoji")
var menu = document.querySelector(".emoji-show")

toogle.addEventListener("click",()=>{
    menu.classList.toggle("active")
})