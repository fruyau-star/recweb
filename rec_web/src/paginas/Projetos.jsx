import React from 'react';

const Projetos = () => {
    const projetos = [
        {
            titulo: 'Projeto 1',
            imagem: 'url-da-imagem-1.jpg',
            descricao: 'Descrição do Projeto 1'
        },
        {
            titulo: 'Projeto 2',
            imagem: 'url-da-imagem-2.jpg',
            descricao: 'Descrição do Projeto 2'
        },
        {
            titulo: 'Projeto 3',
            imagem: 'url-da-imagem-3.jpg',
            descricao: 'Descrição do Projeto 3'
        }
    ];

    return (
        <div>
            {projetos.map((projeto, index) => (
                <div key={index}>
                    <h2>{projeto.titulo}</h2>
                    <img src={projeto.imagem} alt={projeto.titulo} />
                    <p>{projeto.descricao}</p>
                </div>
            ))}
        </div>
    );
};

export default Projetos;