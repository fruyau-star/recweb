import React from 'react';

const Certificacoes = () => {
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
        <h2>Certificações da Empresa</h2>

        {/* Certificação 1 */}
        <section>
          <h3>Certificação ISO 9001</h3>
          <p>
            Reconhecimento internacional pela qualidade dos processos e gestão
            eficiente.
          </p>
        </section>

        {/* Certificação 2 */}
        <section>
          <h3>Certificação Ambiental</h3>
          <p>
            Garantia de práticas sustentáveis e respeito ao meio ambiente em
            todos os projetos.
          </p>
        </section>

        {/* Certificação 3 */}
        <section>
          <h3>Certificação de Segurança</h3>
          <p>
            Cumprimento das normas de segurança e proteção em obras e
            construções.
          </p>
        </section>
      </main>

      {/* Rodapé */}
      <footer>
        <p>Endereço: Rua Exemplo, 123 - São Paulo/SP</p>
        <p>Telefone: (11) 3333-2222</p>
        <p>Email: exemplo@gmail.com</p>
        <div>
          <span>Facebook | Twitter | LinkedIn | Pinterest</span>
        </div>
      </footer>
    </div>
  );
};

export default Certificacoes;
