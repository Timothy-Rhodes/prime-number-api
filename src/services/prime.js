/**
 * Checks if a number is prime.
 * A prime number is greater than 1 and divisible only by 1 and itself.
 *
 * Optimizations:
 * - Reject numbers < 2 immediately.
 * - Handle multiples of 2 and 3 separately for efficiency.
 * - Loop only up to sqrt(n)
 * - Only check factors of the form 6k ± 1
 *
 * @param {number} n - The number to check.
 * @returns {boolean} - True if prime, otherwise false.
 */
const isPrime = (n) => {
  n = BigInt(n); // Ensure n is a BigInt

  if (n < 2n) return false; // Less than 2 is not prime
  if (n === 2n || n === 3n) return true; // 2 and 3 are prime
  if (n % 2n === 0n || n % 3n === 0n) return false; // Exclude multiples of 2 and 3

  // Only check factors of the form 6k ± 1
  for (let i = 5n; i * i <= n; i += 6n) {
    if (n % i === 0n || n % (i + 2n) === 0n) return false;
  }

  return true;
};

module.exports = { isPrime };
