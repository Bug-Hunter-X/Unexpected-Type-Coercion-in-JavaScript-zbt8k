function myFunction(a, b) {
  // Convert b to a number using Number()
  return a + Number(b);
}

console.log(myFunction(5, '5')); // Output: 10

function myFunction2(a, b) {
  // Convert b to a number using parseInt()
  return a + parseInt(b);
}

console.log(myFunction2(5, '5')); // Output: 10