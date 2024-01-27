
function register() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var fullName = document.getElementById("fullName").value;
    var country = document.getElementById("country").value;
    var birthdate = document.getElementById("birthdate").value;

  
    if (localStorage.getItem(email)) {
        alert("Пользователь с таким email уже существует.");
    } else {
        
        localStorage.setItem(email, JSON.stringify({ 
            email: email, 
            password: password,
            fullName: fullName,
            country: country,
            birthdate: birthdate
        }));
        alert("Регистрация прошла успешно! Теперь вы можете войти в систему.");
    }
}


function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    var userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
        
        localStorage.setItem("currentUser", email); 
        window.location.href = "profile.html";
    } else {
        alert("Неверный email или пароль. Пожалуйста, попробуйте снова.");
    }
}


function displayProfile() {
    var userEmail = localStorage.getItem("currentUser");
    var userData = JSON.parse(localStorage.getItem(userEmail));
    if (userData) {
        document.getElementById("profileData").innerHTML = `
            <p><b>WELCOME ${userData.fullName}</b></p>
            <p>EMAIL: <br> <b>${userData.email}</b></p>
            <p>FULL NAME: <br> <b>${userData.fullName}</b></p>
            <p>COUNTRY: <br> <b>${userData.country}</b></p>
            <p>BIRTHDATE: <br> <b>${userData.birthdate}</b></p>
        `;
    }
}


if (window.location.pathname === "/profile.html") {
    displayProfile();
}