//our work
let ourwork = document.querySelectorAll(".our-work li");
let imags = Array.from(document.images);
ourwork.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", mangimag);
});
//remove active class from all lis and add to current
function removeActive() {
  ourwork.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
//manag imag
function mangimag() {
  imags.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
