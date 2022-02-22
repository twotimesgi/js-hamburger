let menuBtnOpen = document.querySelector("#open");
let menuBtnClose = document.querySelector("#close");
let menuDiv = document.querySelector(".hamburger-menu");
menuBtnOpen.addEventListener("click",function(){
    menuDiv.style.display = "block";
});
menuBtnClose.addEventListener("click",function(){
    menuDiv.style.display = "none";
});