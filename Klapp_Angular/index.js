const express = require('express');
const usuarioRoutes = require('./usuario'); // Importa o arquivo de funções de usuário
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Rotas de usuário
app.use('/', usuarioRoutes);

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
