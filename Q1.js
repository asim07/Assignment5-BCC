function factorial(num) {
  var sum = num;
  for (i = num; i > 1; i--) {
    sum *= i - 1;
  }
  return sum;
}
console.log("Factorial of 8 : ", factorial(8));

console.log("Factorial of 5 : ", factorial(5));

console.log("Factorial of 9 : ", factorial(9));
