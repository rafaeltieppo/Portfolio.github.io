var modal = document.querySelector(".modal");
var gmail = document.querySelector(".gmail-link");
var body = document.querySelector("body");

function showMenu() {
    modal.style.display = "flex";
    gmail.style.display = "none";
    body.style.overflow = "hidden";
}

function closeMenu() {
    modal.style.display = "none";
    gmail.style.display = "block";
    body.style.overflow = "scroll";
}