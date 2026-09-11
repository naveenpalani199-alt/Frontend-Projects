
        let heading = document.getElementById("heading");

       
        let button = document.getElementById("changeBtn");

       
        button.addEventListener("click", function() {

            heading.textContent = "JavaScript DOM is Easy!";

          
            heading.style.color = "blue";

           
            heading.classList.add("highlight");
        });