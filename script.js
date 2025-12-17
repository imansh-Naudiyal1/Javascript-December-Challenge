const passwordInput = document.getElementById('passwordInput');
const togglebutton = document.getElementById('toggleBtn');
const  requirements = document.getElementById('req-length');
const  Uppercase = document.getElementById('req-uppercase');
const  number = document.getElementById('req-number');
const  specialChar = document.getElementById('req-special');

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
    console.log("current password:", password);
     
    checkRequirements(password);
});

function checkRequirements(password){
    
    if (password.length >= 8){
     requirements.classList.add('met');
     requirements.querySelector('.icon').textContent = "✔️";
    }else{
     requirements.classList.remove('met');
     requirements.querySelector('.icon').textContent = "❌";
    }

    if (/[A-Z]/.test(password)){
     Uppercase.classList.add('met');
     Uppercase.querySelector('.icon').textContent = "✔️";
    }else{
     Uppercase.classList.remove('met');
     Uppercase.querySelector('.icon').textContent = "❌";
    }
    
    if (/\d/.test(password)){
     number.classList.add('met');
     number.querySelector('.icon').textContent = "✔️";
    }else{
     number.classList.remove('met');
     number.querySelector('.icon').textContent = "❌";
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)){
     specialChar.classList.add('met');
     specialChar.querySelector('.icon').textContent = "✔️";
    }else{
     specialChar.classList.remove('met');
    specialChar.querySelector('.icon').textContent = "❌";
    }
    
}
