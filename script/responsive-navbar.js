const toggleNavbarBtns = document.querySelector('.nav-btns ul')
var a = 1;

function myFunction() {
    if (a == 1) {
        toggleNavbarBtns.style.display = "flex";
        a = 0;
    } else {
        toggleNavbarBtns.style.display = "none";
        a = 1;
    }
    
}