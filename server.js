const express = require("express"); // Express framework for building web applications
const isPrimeRoute = require("./src/routes/isPrime"); // Custom route for checking prime numbers
const swaggerUi = require("swagger-ui-express"); // Swagger UI for API documentation
const YAML = require("yamljs"); // YAML parser to load Swagger documentation

// Load environment variables from a .env file if available
require("dotenv").config();

// Initializing the Express application
const app = express();
const PORT = process.env.PORT || 3000; // Setting the port for the server

// Loading the Swagger documentation
const swaggerDocument = YAML.load("./swagger.yaml");

// Setting up routes
app.use("/", isPrimeRoute); // Route for prime number checking
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Route for Swagger UI documentation

// Starting the server if this file is run directly
if (require.main === module) {
  app
    .listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`); // Log server URL
      console.log(`Swagger docs available at http://localhost:${PORT}/docs`); // Log Swagger docs URL
    })
    .on("error", (err) => {
      console.error("Failed to start server:", err); // Log error if server fails to start
    });
}

// Exporting the app for use in other modules
module.exports = app;
