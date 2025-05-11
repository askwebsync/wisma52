document.addEventListener("DOMContentLoaded", function () {
  const navbarItems = document.querySelectorAll(".navbar-item");

  // Add click event listener to each navbar item
  navbarItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all navbar items
      navbarItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Add active class to the clicked navbar item
      this.classList.add("active");
    });
  });
});

// Function to toggle menu visibility
function toggleMenu() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("hidden");
}

// Event listener for menu button click
const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", toggleMenu);

window.addEventListener("load", function () {
  document.getElementById("loading-screen").style.display = "none";
});
