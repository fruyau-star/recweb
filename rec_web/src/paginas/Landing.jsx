import React from 'react';

const Projetos = () => {
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
        <h2>Nossos Projetos</h2>

        {/* Projeto 1 */}
        <section>
          <h3>Projeto Exemplo 1</h3>
          <img src="https://via.placeholder.com/400x200" alt="Projeto 1" />
          <p>
            Este é um texto de exemplo para descrever o projeto. Você pode
            substituir por informações reais depois.
          </p>
          <button>Ver mais</button>
        </section>

        {/* Projeto 2 */}
        <section>
          <h3>Projeto Exemplo 2</h3>
          <img src="https://via.placeholder.com/400x200" alt="Projeto 2" />
          <p>
            Outro texto de exemplo para descrever o segundo projeto. Ideal para
            mostrar detalhes e imagens.
          </p>
          <button>Ver mais</button>
        </section>

        {/* Projeto 3 */}
        <section>
          <h3>Projeto Exemplo 3</h3>
          <img src="https://via.placeholder.com/400x200" alt="Projeto 3" />
          <p>
            Texto de exemplo para o terceiro projeto. Depois você pode trocar
            pelas informações reais.
          </p>
          <button>Ver mais</button>
        </section>

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

export default Projetos;
