const express = require('express');
const bodyparser = require ('body-parser');
const usuarioRoutes = require('./routes/usuarioRoutes');
const conexao = require('./config/db');

const app = express();

app.use(bodyparser.json());

app.use('/api/usuarios', usuarioRoutes);

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`servidor rodando na porta ${PORTA}`);
});