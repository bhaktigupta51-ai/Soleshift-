/* =========================================================
   SOLESHIFT
   Main Website JavaScript
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

    });


    /* Close menu after clicking a navigation link */

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach((item) => {

        item.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

        });

    });

}
