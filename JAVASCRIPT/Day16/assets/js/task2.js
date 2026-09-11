const box = document.querySelector("#box");
const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");



btn.addEventListener("click", () => {
    box.classList.add("active");
});

btn1.addEventListener("click", () => {
    box.classList.remove("active");
});
