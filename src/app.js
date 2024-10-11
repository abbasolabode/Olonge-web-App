"use strict";
//Retrieving the dom elements
const menu = document.querySelector("#menu"); //Contains hidden
const openBtn = document.querySelector("#hamburger");
const closeBtn = document.querySelector("#close-btn");

//display menu logic implementation
const showMenu = function () {
    menu.classList.toggle("hidden");
};

openBtn.addEventListener("click", showMenu);

const closeMenu = function () {
    if (!menu.classList.contains("hidden")) {
        menu.classList.toggle("hidden");
    }
};

closeBtn.addEventListener("click", closeMenu);

//This logic implementation means when the menu body is clicked it will hide the menu
window.addEventListener("click", (event) => {
    if (event.target === menu) {
        menu.classList.toggle("hidden");
    }
});



