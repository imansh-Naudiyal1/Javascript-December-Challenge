// Program: Sum of all even numbers from 1 to 50

let sum = 0; 

for (let i = 1; i <= 50; i++) {
  // Check even number
  if (i % 2 === 0) {
    sum += i; // sum me add kar do
  }
}

console.log("Sum of even numbers from 1 to 50:", sum);
