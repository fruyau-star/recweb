import React from 'react';

function Projetos() {
  const listaProjetos = [
    { id: "01", nome: "Sample Project 1", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: "02", nome: "Sample Project 2", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: "03", nome: "Sample Project 3", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." }
  ];

  return (
    <div style={{ textAlign: 'left' }}>
      <div className="page-header">
        <h1 className="title-light">Our</h1>
        <h1 className="title-dark">Projects</h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', marginTop: '40px' }}>
        {listaProjetos.map((proj) => (
          <div key={proj.id} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px', background: '#FBFBFB', border: '1px solid #E5E4E7', alignItems: 'center' }}>
            <div style={{ width: '100%', height: '380px', background: '#EAEAEA' }}>
              <svg width="100%" height="100%">
                <rect width="100%" height="100%" fill="#EAEAEA"/>
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="#D8D8D8" strokeWidth="1"/>
                <text x="55%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#999999" fontFamily="sans-serif" fontSize="14" letterSpacing="3">PROJECT DRAWING SCHEME {proj.id}</text>
              </svg>
            </div>
            <div style={{ padding: '40px 30px' }}>
              <span style={{ fontSize: '50px', fontWeight: '300', color: '#BDBDBD', display: 'block', lineHeight: '1' }}>{proj.id}</span>
              <h3 style={{ fontSize: '28px', fontWeight: '300', margin: '10px 0 20px 0', textTransform: 'uppercase', color: '#333' }}>{proj.nome}</h3>
              <p style={{ color: '#777777', fontSize: '14px', lineHeight: '1.6', marginBottom: '30px', fontWeight: '300' }}>{proj.desc}</p>
              <button className="btn-figma">View More →</button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projetos;
