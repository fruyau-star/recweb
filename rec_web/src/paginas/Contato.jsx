import React from 'react';

const Contato = () => {
  return (
    <div>
      {/* Cabeçalho */}
      <header>
        <h1>DIGITAL PROJECT</h1>
        <nav>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/galeria">Galeria</a></li>
            <li><a href="/projetos">Projetos</a></li>
            <li><a href="/certificacoes">Certificações</a></li>
            <li><a href="/contato">Contatos</a></li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main>
        <h2>Informações de Contato</h2>
        <p>Endereço: Rua Exemplo, 123 - São Paulo/SP</p>
        <p>Telefone: (11) 3333-2222</p>
        <p>Email: exemplo@gmail.com</p>

        {/* Formulário de contato */}
        <h3>Envie sua mensagem</h3>
        <form>
          <div>
            <label>Nome:</label>
            <input type="text" name="nome" placeholder="Digite seu nome" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" placeholder="Digite seu email" />
          </div>
          <div>
            <label>Mensagem:</label>
            <textarea name="mensagem" placeholder="Digite sua mensagem"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>

      {/* Rodapé */}
      <footer>
        <p>© 2026 Digital Project - Todos os direitos reservados</p>
        <div>
          <span>Facebook | Twitter | LinkedIn | Pinterest</span>
        </div>
      </footer>
    </div>
  );
};

export default Contato;
