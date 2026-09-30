import React from 'react';

const Galeria = () => {
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
        <h2>Galeria de Fotos</h2>
        <div>
          {/* Grid de imagens (placeholders por enquanto) */}
          <div>
            <img src="https://via.placeholder.com/200" alt="Foto 1" />
            <img src="https://via.placeholder.com/200" alt="Foto 2" />
            <img src="https://via.placeholder.com/200" alt="Foto 3" />
            <img src="https://via.placeholder.com/200" alt="Foto 4" />
            <img src="https://via.placeholder.com/200" alt="Foto 5" />
            <img src="https://via.placeholder.com/200" alt="Foto 6" />
            <img src="https://via.placeholder.com/200" alt="Foto 7" />
            <img src="https://via.placeholder.com/200" alt="Foto 8" />
            <img src="https://via.placeholder.com/200" alt="Foto 9" />
          </div>
        </div>

        {/* Paginação simples */}
        <div>
          <span>01 / 05</span>
          <button>◀</button>
          <button>▶</button>
        </div>
      </main>

      {/* Rodapé */}
      <footer>
        <p>Endereço: 1234 Sample Street, São Paulo - SP</p>
        <p>Telefone: (11) 3333-2222</p>
        <p>Email: exemplo@gmail.com</p>
        <div>
          <span>Facebook | Twitter | LinkedIn | Pinterest</span>
        </div>
      </footer>
    </div>
  );
};

export default Galeria;
