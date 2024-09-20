const bcrypt = require('bcryptjs');
const conexao = require('../config/db');

exports.cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: 'por favor. preencha todos os campos.'});
    }

    conexao.query('SELECT * FROM usuarios WHERE usuario_email = ?', [email], async (erro, resultados) => {
        if (resultados.length > 0) {
            return res.status(400).json({ mensagem: 'este e-mail já está em uso.'}); 
    }
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    conexao.query('INSERT INTO usuarios (usuario_nome, usuario_email, usuario_senha) VALUES (?, ?, ?)',
        [nome, email, senhaCriptografada],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json({ mensagem: 'erro ao registrar o usuário' });
            }
            res.status(201).json({ mensagem: 'Usuário registrado com sucesso!'});
        }
    );
  });
};
