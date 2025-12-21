const passwordInput = document.getElementById('passwordInput');
const togglebutton = document.getElementById('toggleBtn');
const  requirements = document.getElementById('req-length');
const  Uppercase = document.getElementById('req-uppercase');
const  number = document.getElementById('req-number');
const  specialChar = document.getElementById('req-special');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');
const submitBtn = document.getElementById('submit-btn');

togglebutton.addEventListener('click' ,() => {
    if(passwordInput.type === "password"){
        passwordInput.type ="text";
        togglebutton.textContent = "🙈";
    }else{
        passwordInput.type = "password";
        togglebutton.textContent = "👁️";
    }
})

passwordInput.addEventListener('keyup', () => {
    const password = passwordInput.value;
    checkRequirements(password);
});

function checkRequirements(password){
    let score = 0;
    if (password.length >= 8){
     requirements.classList.add('met');
     requirements.querySelector('.icon').textContent = "✔️";
        score++;
    }else{
     requirements.classList.remove('met');
     requirements.querySelector('.icon').textContent = "❌";
    }

    if (/[A-Z]/.test(password)){
     Uppercase.classList.add('met');
     Uppercase.querySelector('.icon').textContent = "✔️";
     score++;
    }else{
     Uppercase.classList.remove('met');
     Uppercase.querySelector('.icon').textContent = "❌";
    }
    
    if (/\d/.test(password)){
     number.classList.add('met');
     number.querySelector('.icon').textContent = "✔️";
     score++;
    }else{
     number.classList.remove('met');
     number.querySelector('.icon').textContent = "❌";
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)){
     specialChar.classList.add('met');
     specialChar.querySelector('.icon').textContent = "✔️";
        score++;
    }else{
     specialChar.classList.remove('met');
    specialChar.querySelector('.icon').textContent = "❌";
    }
    strengthText.classList.remove("weak", "medium", "strong");

if (score <= 1) {
  strengthText.textContent = " Weak";
  strengthText.classList.add("weak");
  strengthBar.style.width = "33%";
    strengthBar.style.backgroundColor = "#f44336";
}
else if (score <= 3) {
  strengthText.textContent = "Medium";
  strengthText.classList.add("medium");
    strengthBar.style.width = "66%";
    strengthBar.style.backgroundColor = "#ff9800";
}
else {
  strengthText.textContent = "Strong";
  strengthText.classList.add("strong");
    strengthBar.style.width = "100%";
    strengthBar.style.backgroundColor = "#4caf50";
}

    console.log("Password Strength Score: " + score);
}

//submit button event listener
submitBtn.addEventListener('click',(e) => {
    e.preventDefault();
    const password = passwordInput.value;
    alert("Password Submitted: " + password);
});
//store password in local storage with value
localStorage.setItem('password', passwordInput.value);
