#!/usr/bin/node
/**
 * Recursive factorial function
 * @param {number} n - integer whose factorial we want
 * @returns {number} factorial of n
 */
function factorial(n) {
  if (isNaN(n) || n === 0) {
    // Factorial of NaN or 0 is 1
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = parseInt(process.argv[2]);
console.log(factorial(arg));
