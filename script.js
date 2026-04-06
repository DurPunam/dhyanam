// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(savedTheme + '-mode');
themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(isDark ? 'light-mode' : 'dark-mode');
    themeIcon.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Music toggle (placeholder - would need actual audio element)
const musicToggle = document.getElementById('music-toggle');
if (musicToggle) {
    const musicIcon = document.querySelector('.music-icon');
    let isPlaying = false;
    
    musicToggle.addEventListener('click', () => {
        isPlaying = !isPlaying;
        musicIcon.textContent = isPlaying ? '⏸️' : '▶️';
        musicToggle.innerHTML = `<span class="music-icon">${musicIcon.textContent}</span> ${isPlaying ? 'Pause Music' : 'Play Music'}`;
        musicToggle.setAttribute('aria-label', isPlaying ? 'Pause meditation music' : 'Play meditation music');
        // Add actual audio playback here
    });
}

// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
