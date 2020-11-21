/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let rez = 1;

  while (n) {
    rez *= n;
    n--;
  }

  return rez;
}
