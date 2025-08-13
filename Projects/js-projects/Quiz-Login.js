document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    
    let email = document.querySelector('input[type="email"]').value;
    let password = document.querySelector('input[type="password"]').value;

    if (email !== "" && password !== "") {
        window.location.href = "Quiz-app.html";
    } else {
        alert("Please enter both email and password");
    }
});