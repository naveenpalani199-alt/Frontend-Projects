const card = document.querySelector(".card");
const toggleBtn = document.querySelector(".toggleBtn");
const input = document.querySelector(".userInput");
const submitBtn = document.querySelector(".submitBtn");

    
    toggleBtn.addEventListener("click", () => {
      card.classList.toggle("dark");
    });

   
    submitBtn.addEventListener("click", () => {
      console.log(input.value);
    });