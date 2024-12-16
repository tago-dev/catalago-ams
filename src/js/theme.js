// Função para gerenciar o tema
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Função para definir o tema
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Atualiza o ícone do botão
        const sunIcon = themeToggle.querySelector('.sun-icon');
        const moonIcon = themeToggle.querySelector('.moon-icon');

        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    // Verifica o tema inicial
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const initialTheme = prefersDarkScheme.matches ? 'dark' : 'light';
        setTheme(initialTheme);
    }

    // Função para alternar o tema
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);

    prefersDarkScheme.addEventListener('change', (e) => {
        const theme = e.matches ? 'dark' : 'light';
        setTheme(theme);
    });
}

// Inicializa o tema imediatamente para evitar flash
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Inicializa o tema quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initTheme); 