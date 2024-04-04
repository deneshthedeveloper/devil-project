/* Created by Tivotal */

let openBtn = document.querySelector(".openBtn");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click", () => {
  popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});
