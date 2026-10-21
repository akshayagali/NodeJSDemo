const greet = require("../app");

if (greet("World") !== "Hello, World!") {
    throw new Error("Test failed");
}

console.log("All tests passed!");