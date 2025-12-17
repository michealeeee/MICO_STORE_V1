const menu_btn = document.querySelector(".menu_btn");
const menu_btn_icon = document.querySelector(".menu_btn i");
const mobile_menu = document.querySelector(".mobile_menu");

menu_btn.onclick = function (){
mobile_menu.classList.toggle('open');
if (mobile_menu.classList.contains('open')){
    menu_btn_icon.className = "fa-solid fa-xmark";
}
else {
     menu_btn_icon.className = "fa-solid fa-bars";
}

}

