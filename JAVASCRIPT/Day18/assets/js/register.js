document.getElementById("registerForm").addEventListener("submit", function(e){
      e.preventDefault();
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      alert("Registration Successful!");
      window.location.href = "login.html";
    });