/* script.js - Логика */
function generateID(name) {
    return name.toLowerCase().replace(/\s/g, '') + Math.floor(1000 + Math.random() * 9000);
}

function registerUser() {
    let name = document.getElementById("name").value;
    if (!name) {
        alert("Аты-жөніңізді енгізіңіз!");
        return;
    }
    
    let userID = generateID(name);
    let password = Math.random().toString(36).slice(-8);
    let role = prompt("Рөліңізді таңдаңыз: student (оқушы), teacher (мұғалім), admin (админ)").toLowerCase();
    
    if (!["student", "teacher", "admin"].includes(role)) {
        alert("Қате! Тек 'student', 'teacher' немесе 'admin' деп жазыңыз.");
        return;
    }

    localStorage.setItem("userID", userID);
    localStorage.setItem("password", password);
    localStorage.setItem("role", role);
    localStorage.setItem("name", name);
    
    alert(`Сіздің ID: ${userID}\nПароль: ${password}\nРөліңіз: ${role}`);
    window.location.href = "dashboard.html";
}

function logoutUser() {
    localStorage.clear();
    window.location.href = "index.html";
}

window.onload = function() {
    let userName = localStorage.getItem("name") || "Қолданушы";
    let userRole = localStorage.getItem("role") || "Бекітілмеген";
    
    document.getElementById("userName").innerText = userName;
    document.getElementById("userRole").innerText = userRole;
    
    if (userRole === "teacher") {
        document.getElementById("teacherSection").style.display = "block";
    }
};
