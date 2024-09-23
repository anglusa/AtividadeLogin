document.getElementById('formCadastro').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
  
    try {
      const resposta = await fetch('http://localhost:3000/api/usuarios/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha })
      });
  
      const dados = await resposta.json();
  
      if (resposta.status === 201) {
        mensagem.textContent = dados.mensagem;
        mensagem.style.color = 'green';
      } else {
        mensagem.textContent = dados.mensagem;
        mensagem.style.color = 'red';
      }
    } catch (erro) {
      mensagem.textContent = 'Erro ao registrar o usuário. Tente novamente.';
      mensagem.style.color = 'red';
    }
  });
  