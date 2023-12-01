console.log("Hello, My World!");
// Get the current URL
var currentUrl = window.location.href;

// Append or modify the query string parameters
var newUrl = currentUrl;

// Load the new URL
window.location.href = newUrl;