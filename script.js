// script.js - Функционал

document.addEventListener("DOMContentLoaded", function() {
    let userRole = localStorage.getItem("role");
    let userName = localStorage.getItem("userID");
    
    if (userName) {
        document.getElementById("userName").textContent = userName;
    }
    if (userRole) {
        document.getElementById("userRole").textContent = userRole;
        showSections(userRole);
    }
});

function registerUser() {
    let name = document.getElementById("name").value;
    if (!name) {
        alert("Аты-жөніңізді енгізіңіз!");
        return;
    }
    
    let userID = name.toLowerCase().replace(/\s/g, '') + Math.floor(1000 + Math.random() * 9000);
    let password = Math.random().toString(36).slice(-8);
    let role = prompt("Рөліңізді таңдаңыз: student (оқушы), teacher (мұғалім), admin (админ)").toLowerCase();
    
    if (!["student", "teacher", "admin"].includes(role)) {
        alert("Қате! 'student', 'teacher' немесе 'admin' деп жазыңыз.");
        return;
    }
    
    localStorage.setItem("userID", userID);
    localStorage.setItem("password", password);
    localStorage.setItem("role", role);
    
    alert(`Сіздің ID: ${userID}\nПароль: ${password}\nРөліңіз: ${role}`);
    window.location.href = "dashboard.html";
}

function showSections(role) {
    if (role === "teacher") {
        document.getElementById("teacherSection").classList.remove("hidden");
    }
}

function uploadTask() {
    let taskTitle = document.getElementById("taskTitle").value;
    let taskDescription = document.getElementById("taskDescription").value;
    
    if (!taskTitle || !taskDescription) {
        alert("Тапсырманың атауы мен сипаттамасын енгізіңіз!");
        return;
    }
    
    alert("Тапсырма жүктелді!");
}

function logoutUser() {
    localStorage.clear();
    window.location.href = "index.html";
}
