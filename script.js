
const passwordInput = document.getElementById("passwordInput");
const toggleBtn = document.getElementById("toggleBtn");
const reqLength = document.getElementById("req-length");
const reqUppercase = document.getElementById("req-uppercase");
const reqNumber = document.getElementById("req-number");
const reqSpecial = document.getElementById("req-special");

// Toggle password visibility
toggleBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        toggleBtn.textContent = "👁️";
    }
});

// Real-time password validation
passwordInput.addEventListener("keyup", () => {
    const password = passwordInput.value;
    console.log("Current password:", password);

    checkRequirements(password);
});
// Function to check password requirements
function checkRequirements(password) {
    if (password.length >= 8) {
        reqLength.classList.add("met");
        reqLength.querySelector(".icon").textContent = "✔";
    } else {
        reqLength.classList.remove("met");
        reqLength.querySelector(".icon").textContent = "×";
    }
    // 2. Uppercase letter
    if (/[A-Z]/.test(password)) {
        reqUppercase.classList.add("met");
        reqUppercase.querySelector(".icon").textContent = "✔";
    } else {
        reqUppercase.classList.remove("met");
        reqUppercase.querySelector(".icon").textContent = "×";
    }

    // 3. Number
    if (/[0-9]/.test(password)) {
        reqNumber.classList.add("met");
        reqNumber.querySelector(".icon").textContent = "✔";
    } else {
        reqNumber.classList.remove("met");
        reqNumber.querySelector(".icon").textContent = "×";  
    }

    // 4. Special character
    if (/[!@#$%^&*]/.test(password)) {
        reqSpecial.classList.add("met");
        reqSpecial.querySelector(".icon").textContent = "✔";
    } else {
        reqSpecial.classList.remove("met");
        reqSpecial.querySelector(".icon").textContent = "×";
    }
}
