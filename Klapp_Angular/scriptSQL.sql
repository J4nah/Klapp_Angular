-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS angular_project;
USE angular_project;

-- Criação da tabela de usuários
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL
);

-- Inserção de dados iniciais
INSERT INTO usuario (nome, email, senha) VALUES ('Vinicius', 'vinicius@gmail.com', '123');
INSERT INTO usuario (nome, email, senha) VALUES ('Janaina', 'janaina@gmail.com', '123');
