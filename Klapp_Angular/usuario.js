const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'angular_project'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

// Função para criar um novo usuário
router.post('/usuario', (req, res) => {
    const { nome, email, senha } = req.body;
    const query = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
    db.query(query, [nome, email, senha], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao criar usuário' });
        }
        res.status(201).json({ message: 'Usuário criado com sucesso', userId: result.insertId });
    });
});

// Função para ler um usuário por ID
router.get('/usuario/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM usuario WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json(results[0]);
    });
});

// Função para atualizar um usuário
router.put('/usuario/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const query = 'UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id = ?';
    db.query(query, [nome, email, senha, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    });
});

// Função para excluir um usuário
router.delete('/usuario/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM usuario WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao excluir usuário' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json({ message: 'Usuário excluído com sucesso' });
    });
});

// Função de login
router.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const query = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
    db.query(query, [email, senha], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao fazer login' });
        }
        if (results.length === 0) {
            return res.status(401).json({ error: 'Email ou senha incorretos' });
        }
        res.status(200).json({ message: 'Login realizado com sucesso', user: results[0] });
    });
});

// Função para retornar todos os usuários
router.get('/usuarios', (req, res) => {
    const query = 'SELECT * FROM usuario';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
        res.status(200).json(results);
    });
});

module.exports = router;
