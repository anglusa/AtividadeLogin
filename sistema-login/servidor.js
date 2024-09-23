const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usuarioRoutes = require('./routes/usuarioRoutes');
const conexao = require('./config/db');

// Inicializar o app Express
const app = express();

// Middleware para interpretar JSON
app.use(bodyParser.json());

// Definir a pasta de arquivos estáticos (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Definir as rotas de usuários
app.use('/api/usuarios', usuarioRoutes);

// Rota padrão para a página inicial (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
