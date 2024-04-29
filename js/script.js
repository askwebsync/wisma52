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

// Function to open modal and display image
function openModal() {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
}

// Event listeners for thumbnail click to open modal
const thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", openModal);
});

// Function to zoom in on an element
function zoomIn() {
  const element = document.getElementById("geeks");
  const height = element.clientHeight;
  element.style.height = height + 40 + "px";
}

// Function to zoom out on an element
function zoomOut() {
  const element = document.getElementById("geeks");
  const height = element.clientHeight;
  element.style.height = height - 40 + "px";
}

// Function to reveal elements when scrolled into view
function revealElements() {
  const elements = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < windowHeight - 150) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

// Event listener for modal click to close modal
const modal = document.getElementById("myModal");
modal.onclick = function () {
  const img = document.querySelector(".modal-content");
  img.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
};

// Event listener for window scroll to reveal elements
window.addEventListener("scroll", revealElements);
