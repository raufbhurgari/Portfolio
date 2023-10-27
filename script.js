document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
  
    function toggleMenu() {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
  
    // Add an event listener to the window's resize event
    window.addEventListener("resize", function () {
      // Check if the viewport width matches the condition for the media query
      if (window.innerWidth <= 1200) {
        // If the viewport width is less than or equal to 1200px, hide the desktop nav and show the hamburger nav
        document.getElementById("desktop-nav").style.display = "none";
        document.getElementById("hamburger-nav").style.display = "flex";
      } else {
        // If the viewport width is greater than 1200px, show the desktop nav and hide the hamburger nav
        document.getElementById("desktop-nav").style.display = "flex";
        document.getElementById("hamburger-nav").style.display = "none";
      }
    });
  
    // Add event listeners for the menu icon
    icon.addEventListener("click", toggleMenu);
  });
  