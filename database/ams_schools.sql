-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS ams_schools;
USE ams_schools;

-- Tabela de municípios
CREATE TABLE municipalities (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    state CHAR(2) DEFAULT 'PR',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de escolas
CREATE TABLE schools (
    id INT PRIMARY KEY AUTO_INCREMENT,
    municipality_id INT NOT NULL,
    inep_code VARCHAR(8) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100),
    director_name VARCHAR(100),
    assistants TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (municipality_id) REFERENCES municipalities(id)
);

-- Tabela de indicadores IDEB
CREATE TABLE ideb_scores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    school_id INT NOT NULL,
    year YEAR NOT NULL,
    final_years_score DECIMAL(3,1),
    high_school_score DECIMAL(3,1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (school_id) REFERENCES schools(id)
);

-- Tabela de infraestrutura
CREATE TABLE infrastructure (
    id INT PRIMARY KEY AUTO_INCREMENT,
    school_id INT NOT NULL,
    has_library BOOLEAN DEFAULT FALSE,
    has_computer_lab BOOLEAN DEFAULT FALSE,
    has_science_lab BOOLEAN DEFAULT FALSE,
    has_sports_court BOOLEAN DEFAULT FALSE,
    has_accessibility BOOLEAN DEFAULT FALSE,
    has_internet BOOLEAN DEFAULT FALSE,
    classrooms_count INT,
    computers_count INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (school_id) REFERENCES schools(id)
);

-- Inserção dos municípios da AMS
INSERT INTO municipalities (name) VALUES 
('Agudos do Sul'),
('Araucária'),
('Balsa Nova'),
('Campo do Tenente'),
('Contenda'),
('Fazenda Rio Grande'),
('Lapa'),
('Mandirituba'),
('Piên'),
('Quitandinha'),
('Rio Negro'),
('São José dos Pinhais'),
('Tijucas do Sul');

-- Inserção de algumas escolas (exemplo com dados existentes)
INSERT INTO schools (municipality_id, inep_code, name, address, phone, email, director_name, assistants) VALUES
(1, '41141482', 'Colégio Estadual Rui Barbosa', 'R. Rui Barbosa, 197, Agudos do Sul - PR, 83850-000', '(41) 3624-1439', 'e41141482@escola.pr.gov.br', 'Maria Silva', 'João Pedro, Ana Clara'),
(2, '41000002', 'Colégio Estadual Agalvira B Pinto', 'Rua Central, 45, Araucária - PR', '(41) 3555-1234', 'e41000002@escola.pr.gov.br', 'Carlos Souza', 'Paula Lima, Ricardo Alves'),
(2, '41000003', 'Colégio Estadual Ana Maria V Kava', 'Av. das Rosas, 100, Araucária - PR', '(41) 3555-5678', 'e41000003@escola.pr.gov.br', 'Juliana Martins', 'Fernando Santos, Beatriz Gomes');

-- Inserção de scores IDEB
INSERT INTO ideb_scores (school_id, year, final_years_score, high_school_score) VALUES
(1, 2023, 5.1, 5.1),
(2, 2023, 5.2, 5.0),
(3, 2023, 5.3, 5.1);

-- Inserção de dados de infraestrutura
INSERT INTO infrastructure (
    school_id, 
    has_library, 
    has_computer_lab, 
    has_science_lab, 
    has_sports_court, 
    has_accessibility, 
    has_internet,
    classrooms_count,
    computers_count
) VALUES
(1, TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, 12, 25),
(2, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, 15, 30),
(3, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, 18, 35);

-- Criação de view para facilitar a consulta de dados completos das escolas
CREATE VIEW view_school_details AS
SELECT 
    s.id,
    s.inep_code,
    s.name AS school_name,
    s.address,
    s.phone,
    s.email,
    s.director_name,
    s.assistants,
    m.name AS municipality,
    i.has_library,
    i.has_computer_lab,
    i.has_science_lab,
    i.has_sports_court,
    i.has_accessibility,
    i.has_internet,
    i.classrooms_count,
    i.computers_count,
    idb.final_years_score,
    idb.high_school_score,
    idb.year AS ideb_year
FROM schools s
JOIN municipalities m ON s.municipality_id = m.id
LEFT JOIN infrastructure i ON s.id = i.school_id
LEFT JOIN ideb_scores idb ON s.id = idb.school_id
WHERE idb.year = (
    SELECT MAX(year) 
    FROM ideb_scores 
    WHERE school_id = s.id
);

-- Índices para melhorar a performance
CREATE INDEX idx_school_municipality ON schools(municipality_id);
CREATE INDEX idx_school_inep ON schools(inep_code);
CREATE INDEX idx_ideb_school_year ON ideb_scores(school_id, year); 