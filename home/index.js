var modal = document.querySelector(".modal");
var gmail = document.querySelector(".gmail-link");

function showMenu() {
    modal.style.display = "flex";
    gmail.style.display = "none";
}

function closeMenu() {
    modal.style.display = "none";
    gmail.style.display = "block";
}