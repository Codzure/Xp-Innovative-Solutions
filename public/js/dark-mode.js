console.log('Dark mode script loaded');

// Check for saved user preference, if any, on load and toggle the dark mode accordingly
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing dark mode');
    // Check for dark mode preference at the OS level
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Get the user's theme preference from localStorage, if available
    const currentTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Function to set the theme
    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
            localStorage.setItem('theme', 'light');
        }
    }

    // Set the initial theme
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Listen for a click on the theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme');
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    // Listen for changes in the OS theme preference
    prefersDarkScheme.addListener((e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
    });
});
