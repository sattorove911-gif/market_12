
const menu = document.querySelector(".menu");
const btnAdd = document.querySelector(".btn-add");
const remBtn = document.querySelector(".rem-btn");

btnAdd.addEventListener("click", () => {
    menu.style.display = "flex";
    remBtn.style.display = "block";
    btnAdd.style.display = "none";
});

remBtn.addEventListener("click", () => {
    menu.style.display = "none";
    remBtn.style.display = "none";
    btnAdd.style.display = "block";
});
