document.getElementById("loginForm").addEventListener("submit", function(e){
      e.preventDefault();
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;

      let storedUser = localStorage.getItem("username");
      let storedPass = localStorage.getItem("password");

      if(username === storedUser && password === storedPass){
        alert("Login Successful!");
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid Credentials!");
      }
    });