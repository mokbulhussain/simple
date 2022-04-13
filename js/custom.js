
let slickActive=document.querySelectorAll(".slick-active")[1]
slickActive.classList.add("middle")

let arrow_next=document.querySelector(".slick-next");
let arrow_prev=document.querySelector(".slick-prev");

arrow_next.addEventListener('click',function(){
    document.querySelectorAll(".slick-active")[0].classList.remove("middle")
    document.querySelectorAll(".slick-active")[2].classList.remove("middle")
    document.querySelectorAll(".slick-active")[1].classList.add("middle");
    
})


arrow_prev.addEventListener('click',function(){
    document.querySelectorAll(".slick-active")[0].classList.remove("middle")
    document.querySelectorAll(".slick-active")[2].classList.remove("middle")
    document.querySelectorAll(".slick-active")[1].classList.add("middle");
})


