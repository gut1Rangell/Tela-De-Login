
const body = document.body;
const loginBox = document.querySelector(".login-box");
const h1 = document.querySelector("h1");
const inputs = document.querySelectorAll("input");
const loginButton = document.getElementById("login-button");
const themeSwitch = document.getElementById("theme-switch");

function switchTheme() {
    body.classList.toggle("dark-mode");
    loginBox.classList.toggle("dark-mode");
    if (h1) h1.classList.toggle("dark-mode");
    inputs.forEach(input => input.classList.toggle("dark-mode"));
    if (loginButton) loginButton.classList.toggle("dark-mode");
}

function loadThemePreference() {
    const darkModePreference = localStorage.getItem("darkMode") === "true";
    if (darkModePreference) {
        switchTheme();
        themeSwitch.checked = true; 
    }
}

function saveThemePreference() {
    const darkModeActive = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", darkModeActive);
}

themeSwitch.addEventListener("change", () => {
    switchTheme();
    saveThemePreference();
});

loadThemePreference();
