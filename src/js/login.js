document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    });

    // Handle login form submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Aqui você implementaria a chamada real para sua API
            // Por enquanto, vamos simular um login bem-sucedido
            if (email === 'admin@ams.edu.br' && password === 'admin123') {
                // Simula armazenamento do token
                localStorage.setItem('authToken', 'dummy-token');

                // Redireciona para o dashboard
                window.location.href = 'dashboard.html';
            } else {
                throw new Error('Credenciais inválidas');
            }
        } catch (error) {
            alert(error.message);
        }
    });
}); 