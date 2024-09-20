const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistema_login'
});

conexao.connect((erro) => {
    if (erro) throw erro;
    console.log('conectado ao banco de dados MySQL.');
});

module.exports = conexao;