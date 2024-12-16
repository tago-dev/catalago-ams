document.addEventListener('DOMContentLoaded', () => {
    // Verifica autenticação
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
        window.location.href = 'login.html';
        return;
    }

    // Toggle sidebar no mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Inicializa os gráficos
    initializeCharts();

    // Carrega dados recentes
    loadRecentSchools();
});

function initializeCharts() {
    // Gráfico IDEB
    const idebCtx = document.getElementById('idebChart').getContext('2d');
    new Chart(idebCtx, {
        type: 'bar',
        data: {
            labels: ['Agudos do Sul', 'Araucária', 'Balsa Nova', 'Lapa', 'São José dos Pinhais'],
            datasets: [{
                label: 'IDEB Anos Finais',
                data: [5.1, 5.2, 4.9, 5.0, 5.3],
                backgroundColor: 'rgba(37, 99, 235, 0.5)',
                borderColor: 'rgba(37, 99, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico Infraestrutura
    const infraCtx = document.getElementById('infrastructureChart').getContext('2d');
    new Chart(infraCtx, {
        type: 'doughnut',
        data: {
            labels: ['Biblioteca', 'Lab. Informática', 'Lab. Ciências', 'Quadra Esportiva'],
            datasets: [{
                data: [85, 70, 45, 90],
                backgroundColor: [
                    'rgba(37, 99, 235, 0.5)',
                    'rgba(16, 185, 129, 0.5)',
                    'rgba(245, 158, 11, 0.5)',
                    'rgba(139, 92, 246, 0.5)'
                ],
                borderColor: [
                    'rgba(37, 99, 235, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(139, 92, 246, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function loadRecentSchools() {
    // Simula dados de escolas recentes
    const recentSchools = [
        {
            name: 'Colégio Estadual Rui Barbosa',
            municipality: 'Agudos do Sul',
            ideb: 5.1,
            updated: '2024-01-15'
        },
        {
            name: 'Colégio Estadual Agalvira B Pinto',
            municipality: 'Araucária',
            ideb: 5.2,
            updated: '2024-01-14'
        },
        {
            name: 'Colégio Estadual Ana Maria V Kava',
            municipality: 'Araucária',
            ideb: 5.3,
            updated: '2024-01-13'
        }
    ];

    const tbody = document.getElementById('recentSchoolsTable');
    tbody.innerHTML = recentSchools.map(school => `
        <tr>
            <td>${school.name}</td>
            <td>${school.municipality}</td>
            <td>${school.ideb}</td>
            <td>${new Date(school.updated).toLocaleDateString()}</td>
        </tr>
    `).join('');
} 