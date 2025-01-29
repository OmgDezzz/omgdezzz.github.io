// Get the elements for the hamburger menu and the navigation menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Toggle the menu visibility when the hamburger icon is clicked
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
