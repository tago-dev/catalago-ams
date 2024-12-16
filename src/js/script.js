document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const municipalityFilter = document.getElementById('municipalityFilter');
    const schoolsContainer = document.getElementById('schoolsContainer');
    const modal = document.getElementById('schoolModal');
    const closeModal = document.querySelector('.close-modal');

    // Função para renderizar os cards das escolas
    function renderSchools(schools) {
        schoolsContainer.innerHTML = '';
        schools.forEach(school => {
            const card = createSchoolCard(school);
            schoolsContainer.appendChild(card);
        });
    }

    // Função para criar um card de escola
    function createSchoolCard(school) {
        const card = document.createElement('div');
        card.className = 'school-card';
        card.innerHTML = `
            <div class="school-header">
                <h3 class="school-name">${school.name}</h3>
                <span class="municipality-tag">${school.municipality}</span>
            </div>
            <div class="school-info">
                <p>📍 ${school.address}</p>
                <p>📞 ${school.phone}</p>
            </div>
            <div class="school-footer">
                <button class="btn btn-primary btn-details">Ver Detalhes</button>
            </div>
        `;

        card.querySelector('.btn-details').addEventListener('click', () => {
            showSchoolDetails(school);
        });

        return card;
    }

    // Função para mostrar detalhes da escola no modal
    function showSchoolDetails(school) {
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <div class="school-detail-header">
                <h2>${school.name}</h2>
                <p>${school.municipality}</p>
            </div>
            <div class="school-detail-info">
                <div class="detail-item">
                    <div class="detail-label">Endereço</div>
                    <div class="detail-value">${school.address}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Telefone</div>
                    <div class="detail-value">${school.phone}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Diretor(a)</div>
                    <div class="detail-value">${school.director}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Auxiliares</div>
                    <div class="detail-value">${school.assistants}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">IDEB Anos Finais</div>
                    <div class="detail-value">${school.ideb.finalYears}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">IDEB Ensino Médio</div>
                    <div class="detail-value">${school.ideb.highSchool}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Código INEP</div>
                    <div class="detail-value">${school.inepCode}</div>
                </div>
            </div>
        `;
        modal.style.display = 'block';
    }

    // Eventos de filtro e busca
    function filterSchools() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedMunicipality = municipalityFilter.value;

        const allSchools = Object.entries(schoolsData).flatMap(([municipality, schools]) =>
            schools.map(school => ({ ...school, municipality }))
        );

        const filteredSchools = allSchools.filter(school => {
            const matchesSearch = school.name.toLowerCase().includes(searchTerm) ||
                school.address.toLowerCase().includes(searchTerm);
            const matchesMunicipality = !selectedMunicipality || school.municipality === selectedMunicipality;

            return matchesSearch && matchesMunicipality;
        });

        renderSchools(filteredSchools);
    }

    // Event Listeners
    searchInput.addEventListener('input', filterSchools);
    municipalityFilter.addEventListener('change', filterSchools);

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Inicialização
    const initialSchools = Object.entries(schoolsData).flatMap(([municipality, schools]) =>
        schools.map(school => ({ ...school, municipality }))
    );
    renderSchools(initialSchools);
});