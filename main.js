// Get the current URL
var currentUrl = window.location.href;

// Append or modify the query string parameters
var newUrl = currentUrl + (currentUrl.includes('?') ? '&' : '?') + 'key=hello&value=world';

// Load the new URL
window.location.href = newUrl;
