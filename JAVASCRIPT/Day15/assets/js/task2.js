const btn = document.getElementById("toggleBtn");
    const box = document.getElementById("colorBox");

    btn.addEventListener("click", () => {
      box.classList.toggle("green");
      box.classList.toggle("red");
    });