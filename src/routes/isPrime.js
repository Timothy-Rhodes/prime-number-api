const express = require("express");
const { isPrime } = require("../services/prime");
const { maxNumber } = require("../constants");

const router = express.Router();

// Define a GET route for checking if a number is prime
router.get("/is_prime", (req, res) => {
  try {
    // Extract the 'number' query parameter from the request
    const { number } = req.query;

    // Validate the input: check if 'number' is provided and is a valid integer string
    if (!number || !Number.isInteger(Number(number))) {
      // Respond with a 400 status code and an error message if validation fails
      return res
        .status(400)
        .json({ error: "Invalid input. Please provide an integer." });
    }

    // Convert the number to BigInt
    const bigIntNumber = BigInt(number);

    // Check if the number exceeds the maximum limit
    if (bigIntNumber > maxNumber) {
      return res
        .status(400)
        .json({ error: `Number exceeds the maximum limit of ${maxNumber}.` });
    }

    // Respond with a JSON object containing the number and its prime number status
    return res.json({
      number: bigIntNumber.toString(),
      is_prime: isPrime(bigIntNumber),
    });
  } catch (error) {
    // Handle any unexpected errors
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
});

// Export the router to be used in other parts of the application
module.exports = router;
