// Today I learned and practiced:

// ## ✔ Topics Covered
// - if statement  
// - else statement  
// - else-if ladder  
// - comparison operators (==, ===, >, <, >=, <=, !=)  
// - logical operators (&&, ||, !)  
// - nested conditions  

// Quiz: Check Divisibility by 2

let number = 5;
 if(number % 2 == 0){
console.log("divisible by 2");
 }else{
    console.log("not divisible by 2");
 }

// Quiz: Check Voting Eligibility

let age = 18;
if (age >=18){
      console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}

// Quiz: Check if password contains "@";

let password = "password@12345";
if (password.includes("@")){
    console.log("Valid password");
}else{
    console.log("Invalid password");
}

// Medium 
// Take 3 number and find the greatest number among them

let num1 = 10, num2 = 20, num3 = 15;
if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the greatest number");
}else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the greatest number");
} else {
    console.log(num3 + " is the greatest number");
}

// Check if a character is a vowel or consonant

let char = 'h';
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
    char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    console.log(char + " is a vowel");
} else {
    console.log(char + " is a consonant");
}

// check if number ends with 0(use % 10)
let Number1 = 125;
if (number % 10 === 0) {
    console.log(number + " ends with 0");
} else {
    console.log(number + " does not end with 0");
}


// Hard
// Given time in 24hr format  tell good morning, good afternoon,good night

let time = 8;
if (time >=0 && time < 12) {
    console.log("Good Morning");
}else if(time >= 12 && time < 18){
    console.log("Good Afternoon");
}else if(time >= 18 && time <= 23){
    console.log("Good Night");
} else {
    console.log("Invalid time");
}

// check if number is 3 digit number

let Number2 = 555;
if (number >= 100 && number <= 999) {
    console.log(number + " is a 3-digit number");
} else {
    console.log(number + " is not a 3-digit number");
}
 
// check if user is start with capital letters

let username = "Rahul";
if(username >= 'A' && username <= 'Z'){
    console.log("Username starts with a capital letter");
}else{
    console.log("Username does not start with a capital letter");
}