const button = document.querySelector("#menu-button"),
  menu = document.querySelector("#menu");
button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const modal = document.getElementById("myModal"),
  modalImg = document.getElementById("img01");
for (
  var img = document.querySelectorAll(".thumbnail"), i = 0;
  i < img.length;
  i++
)
  img[i].onclick = function () {
    (modal.style.display = "block"),
      (modalImg.src = this.src),
      (modalImg.alt = this.alt);
  };
function zoomin() {
  var e = document.getElementById("geeks"),
    t = e.clientHeight;
  e.style.height = t + 40 + "px";
}
function zoomout() {
  var e = document.getElementById("geeks"),
    t = e.clientHeight;
  e.style.height = t - 40 + "px";
}
function reveal() {
  for (var e = document.querySelectorAll(".reveal"), t = 0; t < e.length; t++) {
    var l,
      n = window.innerHeight;
    e[t].getBoundingClientRect().top < n - 150
      ? e[t].classList.add("active")
      : e[t].classList.remove("active");
  }
}
modal.onclick = function () {
  (img.className += " out"),
    setTimeout(function () {
      (modal.style.display = "none"), (img01.className = "modal-content");
    }, 400);
};
