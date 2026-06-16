//Even or Odd Checker
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is an even number.");
  } else {
    console.log(num + " is an odd number.");
  }
}
checkEvenOdd(125);
checkEvenOdd(100);

//Multiplication Table
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multiplicationTable(10);

//FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

//Square Pattern
function squarePattern(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(n));
  }
}
squarePattern(5);

//Right-Angled Triangle
function rightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}
rightTriangle(5);
