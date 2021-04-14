$(document).ready(function() {

    slideNav.style.right = "-250px";

    $('#menuBtn').click(function() {
        if(slideNav.style.right == "-250px") {
            slideNav.style.right = "0";
            menu.src = "img/close.png";
        } 
        else {
            slideNav.style.right = "-250px";
            menu.src = "img/menu.png";
        }
    });


});