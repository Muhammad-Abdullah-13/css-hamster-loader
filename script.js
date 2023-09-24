// Get the dark mode toggle button and the entire body
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Add an event listener to the dark mode toggle button
darkModeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the entire body
    body.classList.toggle('dark-mode');
});
