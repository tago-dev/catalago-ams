// Dados das escolas (simulando um banco de dados)
const schoolsData = {
    'Agudos do Sul': [
        {
            'name': 'Colégio Estadual Rui Barbosa',
            'address': 'R. Rui Barbosa, 197, Agudos do Sul - PR, 83850-000',
            'phone': '(41) 3624-1439',
            'director': 'Maria Silva',
            'assistants': 'João Pedro, Ana Clara',
            'ideb': { 'finalYears': 5.1, 'highSchool': 5.1 },
            'inepCode': '41141482'
        }
    ],
    'Araucária': [
        {
            'name': 'Colégio Estadual Agalvira B Pinto',
            'address': 'Rua Central, 45, Araucária - PR',
            'phone': '(41) 3555-1234',
            'director': 'Carlos Souza',
            'assistants': 'Paula Lima, Ricardo Alves',
            'ideb': { 'finalYears': 5.2, 'highSchool': 5.0 },
            'inepCode': '41000002'
        },
        {
            'name': 'Colégio Estadual Ana Maria V Kava',
            'address': 'Av. das Rosas, 100, Araucária - PR',
            'phone': '(41) 3555-5678',
            'director': 'Juliana Martins',
            'assistants': 'Fernando Santos, Beatriz Gomes',
            'ideb': { 'finalYears': 5.3, 'highSchool': 5.1 },
            'inepCode': '41000003'
        }
    ],
    'Balsa Nova': [
        {
            'name': 'Colégio Estadual Angelo Gequelin',
            'address': 'R. Principal, 200, Balsa Nova - PR',
            'phone': '(41) 3625-1122',
            'director': 'Marcos Pacheco',
            'assistants': 'Laura Oliveira, José Pereira',
            'ideb': { 'finalYears': 4.9, 'highSchool': 5.0 },
            'inepCode': '41000004'
        },
        {
            'name': 'Colégio Estadual Donozor N Nogueira',
            'address': 'R. Central, 300, Balsa Nova - PR',
            'phone': '(41) 3625-3344',
            'director': 'Patrícia Mendes',
            'assistants': 'Carlos Silva, Rafaela Nunes',
            'ideb': { 'finalYears': 4.8, 'highSchool': 4.9 },
            'inepCode': '41000005'
        }
    ],
    'Lapa': [
        {
            'name': 'Colégio Estadual Antonio Lacerda Braga',
            'address': 'Av. das Flores, 40, Lapa - PR',
            'phone': '(41) 3623-4555',
            'director': 'Renato Costa',
            'assistants': 'Sofia Almeida, Lucas Braga',
            'ideb': { 'finalYears': 5.0, 'highSchool': 5.0 },
            'inepCode': '41000006'
        },
        {
            'name': 'Colégio Estadual Carneiro',
            'address': 'Rua das Palmeiras, 55, Lapa - PR',
            'phone': '(41) 3623-5666',
            'director': 'Fernanda Lima',
            'assistants': 'Roberto Mendes, Gabriela Santos',
            'ideb': { 'finalYears': 4.9, 'highSchool': 4.8 },
            'inepCode': '41000007'
        }
    ],
    "Balsa Nova": [
        {
            "name": "Colégio Estadual Angelo Gequelin",
            "address": "R. Principal, 200, Balsa Nova - PR",
            "phone": "(41) 3625-1122",
            "director": "Marcos Pacheco",
            "assistants": "Laura Oliveira, José Pereira",
            "ideb": {
                "finalYears": 4.9,
                "highSchool": 5.0
            },
            "inepCode": "41000004"
        },
        {
            "name": "Colégio Estadual Donozor N Nogueira",
            "address": "R. Central, 300, Balsa Nova - PR",
            "phone": "(41) 3625-3344",
            "director": "Patrícia Mendes",
            "assistants": "Carlos Silva, Rafaela Nunes",
            "ideb": {
                "finalYears": 4.8,
                "highSchool": 4.9
            },
            "inepCode": "41000005"
        }
    ],
    "Campo do Tenente": [
        {
            "name": "Colégio Estadual Campo Tenente",
            "address": "Av. Tenente Rodrigues, 50, Campo do Tenente - PR",
            "phone": "(41) 3626-4455",
            "director": "Eduardo Santos",
            "assistants": "Mariana Ramos, Pedro Silva",
            "ideb": {
                "finalYears": 5.0,
                "highSchool": 5.2
            },
            "inepCode": "41000008"
        }
    ],
    "Campo Largo": [
        {
            "name": "Colégio Estadual Augusto Stresser",
            "address": "Rua da Paz, 90, Campo Largo - PR",
            "phone": "(41) 3627-5566",
            "director": "Bianca Lima",
            "assistants": "Thiago Souza, Camila Rocha",
            "ideb": {
                "finalYears": 5.1,
                "highSchool": 5.2
            },
            "inepCode": "41000009"
        }
    ],
    "Contenda": [
        {
            "name": "Colégio Estadual Adhelmar Sicuro",
            "address": "Av. Central, 120, Contenda - PR",
            "phone": "(41) 3628-6677",
            "director": "Alberto Fonseca",
            "assistants": "Priscila Gomes, Fabio Oliveira",
            "ideb": {
                "finalYears": 4.7,
                "highSchool": 4.9
            },
            "inepCode": "41000010"
        }
    ],
    "Fazenda Rio Grande": [
        {
            "name": "Colégio Estadual Floriano Peixoto",
            "address": "Rua das Laranjeiras, 150, Fazenda Rio Grande - PR",
            "phone": "(41) 3629-7788",
            "director": "Felipe Amaral",
            "assistants": "Marina Borges, Arthur Costa",
            "ideb": {
                "finalYears": 5.2,
                "highSchool": 5.1
            },
            "inepCode": "41000011"
        }
    ],
    "Lapa": [
        {
            "name": "Colégio Estadual Antonio Lacerda Braga",
            "address": "Av. das Flores, 40, Lapa - PR",
            "phone": "(41) 3623-4555",
            "director": "Renato Costa",
            "assistants": "Sofia Almeida, Lucas Braga",
            "ideb": {
                "finalYears": 5.0,
                "highSchool": 5.0
            },
            "inepCode": "41000006"
        },
        {
            "name": "Colégio Estadual Carneiro",
            "address": "Rua das Palmeiras, 55, Lapa - PR",
            "phone": "(41) 3623-5666",
            "director": "Fernanda Lima",
            "assistants": "Roberto Mendes, Gabriela Santos",
            "ideb": {
                "finalYears": 4.9,
                "highSchool": 4.8
            },
            "inepCode": "41000007"
        }
    ],
    "Mandirituba": [
        {
            "name": "Colégio Estadual Mandirituba",
            "address": "Rua dos Pioneiros, 300, Mandirituba - PR",
            "phone": "(41) 3630-8899",
            "director": "Luciana Oliveira",
            "assistants": "Gustavo Silva, Ana Beatriz",
            "ideb": {
                "finalYears": 5.0,
                "highSchool": 5.2
            },
            "inepCode": "41000012"
        }
    ],
    "Piên": [
        {
            "name": "Colégio Estadual Santa Rita",
            "address": "Av. das Américas, 400, Piên - PR",
            "phone": "(41) 3631-9900",
            "director": "Raquel Fonseca",
            "assistants": "Samuel Costa, Maria Lopes",
            "ideb": {
                "finalYears": 4.8,
                "highSchool": 4.9
            },
            "inepCode": "41000013"
        }
    ],
    "Quitandinha": [
        {
            "name": "Colégio Estadual Quitandinha",
            "address": "Rua da Independência, 101, Quitandinha - PR",
            "phone": "(41) 3632-0011",
            "director": "Bruno Henrique",
            "assistants": "Letícia Moura, Rafael Santos",
            "ideb": {
                "finalYears": 5.1,
                "highSchool": 5.2
            },
            "inepCode": "41000014"
        }
    ],
    "Rio Negro": [
        {
            "name": "Colégio Estadual Rio Negro",
            "address": "Av. Brasil, 60, Rio Negro - PR",
            "phone": "(41) 3633-1122",
            "director": "André Matos",
            "assistants": "Catarina Silva, João Melo",
            "ideb": {
                "finalYears": 5.0,
                "highSchool": 5.1
            },
            "inepCode": "41000015"
        }
    ],
    "São José dos Pinhais": [
        {
            "name": "Colégio Estadual São José",
            "address": "Rua das Nações, 202, São José dos Pinhais - PR",
            "phone": "(41) 3634-2233",
            "director": "Fátima Ribeiro",
            "assistants": "Rogério Souza, Carla Lima",
            "ideb": {
                "finalYears": 5.3,
                "highSchool": 5.4
            },
            "inepCode": "41000016"
        }
    ],
    "Tijucas do Sul": [
        {
            "name": "Colégio Estadual Tijucas",
            "address": "Rua do Comércio, 150, Tijucas do Sul - PR",
            "phone": "(41) 3635-3344",
            "director": "Paulo Nunes",
            "assistants": "Regina Martins, Victor Hugo",
            "ideb": {
                "finalYears": 5.1,
                "highSchool": 5.0
            },
            "inepCode": "41000017"
        }
    ]
};

// Função para criar a lista de municípios
function createMunicipalityList() {
    const municipalityList = document.getElementById('municipalityList');

    Object.keys(schoolsData).sort().forEach(municipality => {
        const li = document.createElement('li');
        li.className = 'municipality-item';
        li.textContent = municipality;

        const schoolList = document.createElement('ul');
        schoolList.className = 'school-list';

        schoolsData[municipality].forEach(school => {
            const schoolLi = document.createElement('li');
            schoolLi.className = 'school-item';
            schoolLi.textContent = school.name;
            schoolLi.onclick = (e) => {
                e.stopPropagation();
                showSchoolInfo(school);

                // Remove highlight de todas as escolas
                document.querySelectorAll('.school-item').forEach(item => {
                    item.style.backgroundColor = '';
                });
                // Adiciona highlight na escola selecionada
                schoolLi.style.backgroundColor = 'rgba(108, 99, 255, 0.3)';
            };
            schoolList.appendChild(schoolLi);
        });

        li.onclick = () => {
            // Toggle active class nos municípios
            document.querySelectorAll('.municipality-item').forEach(item => {
                if (item !== li) {
                    item.classList.remove('active');
                    item.querySelector('.school-list')?.classList.remove('show');
                }
            });
            li.classList.toggle('active');
            schoolList.classList.toggle('show');

            // Se não houver escolas, mostrar mensagem
            if (schoolsData[municipality].length === 0) {
                document.getElementById('schoolInfo').innerHTML = `
                    <div class="no-school-selected">
                        Nenhuma escola cadastrada para ${municipality}
                    </div>
                `;
            }
        };

        li.appendChild(schoolList);
        municipalityList.appendChild(li);
    });
}

// Função para mostrar informações da escola
function showSchoolInfo(school) {
    const schoolInfo = document.getElementById('schoolInfo');
    schoolInfo.innerHTML = `
        <h2>${school.name}</h2>
        
        <div class="info-item">
            <div class="info-label">Endereço:</div>
            <div class="info-value">${school.address}</div>
        </div>
        
        <div class="info-item">
            <div class="info-label">Telefone:</div>
            <div class="info-value">${school.phone}</div>
        </div>
        
        <div class="info-item">
            <div class="info-label">Diretor:</div>
            <div class="info-value">${school.director}</div>
        </div>
        
        <div class="info-item">
            <div class="info-label">Auxiliares:</div>
            <div class="info-value">${school.assistants}</div>
        </div>
        
        <div class="info-item">
            <div class="info-label">Ideb - Anos Finais:</div>
            <div class="info-value">${school.ideb.finalYears}</div>
        </div>
        
        <div class="info-item">
            <div class="info-label">Ideb - Ensino Médio:</div>
            <div class="info-value">${school.ideb.highSchool}</div>
        </div>
        
        <div class="info-item">
            <div class="info-label">Código INEP:</div>
            <div class="info-value">${school.inepCode}</div>
        </div>
    `;
}

// Inicializar a página
document.addEventListener('DOMContentLoaded', () => {
    createMunicipalityList();
});