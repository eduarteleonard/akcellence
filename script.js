/* ========================================
   MOBILE MENU
======================================== */

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}


/* ========================================
   CLOSE MENU AFTER CLICKING A LINK
======================================== */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("active");

    });

});


/* ========================================
   HEADER SHADOW WHEN SCROLLING
======================================== */

window.addEventListener("scroll", function() {

    const header = document.querySelector("header");

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 5px 18px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.boxShadow =
            "0 3px 15px rgba(0, 0, 0, 0.18)";

    }

});