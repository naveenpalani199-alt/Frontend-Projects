
    

    const title = document.getElementById("mainHeading");
    title.textContent = "Updated Heading via JavaScript";

    const paragraph = document.querySelectorAll(".text")

     paragraph.forEach(function(paragraph, index) {
             paragraph.textContent = "This is updated paragraph " + (index + 1);
        });






    
    