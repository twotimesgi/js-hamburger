let menuBtnOpen = document.querySelector(".fa-bars");
let menuBtnClose = document.querySelector(".fa-times");
let menuDiv = document.querySelector(".hamburger-menu");

menuBtnOpen.addEventListener("click",function(){
    menuDiv.classList.add("active");
});

menuBtnClose.addEventListener("click",function(){
    menuDiv.classList.remove("active");
});