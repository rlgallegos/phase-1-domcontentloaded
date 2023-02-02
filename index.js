// // Your code goes here

// Code your solution in index.js. First, set up a DOMContentLoaded event listener to detect when the HTML
//  page has loaded and the document is ready to be manipulated. Use the event's 
//  callback function to target the paragraph element with id="text" and replace the text with 
//  "This is really cool!"

// Note: Using the innerText Links to an external site.property to modify DOM element content will 
// not work for this lab. Use textContent Links to an external site.or innerHTML Links to an external site.instead.

document.addEventListener('DOMContentLoaded', () => {
    let id = document.getElementById('text');
    console.log("DoM Content succesfully Loaded")
    id.textContent = "This is really cool!";
})