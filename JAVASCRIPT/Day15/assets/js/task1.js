 const btn = document.getElementById("toggleBtn");
    const para = document.getElementById("myPara");

    btn.addEventListener("click", () => {
      para.classList.toggle("visible");
      para.classList.toggle("hidden");
    });