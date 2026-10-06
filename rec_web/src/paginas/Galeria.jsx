import React from 'react';

function Galeria() {
  const blocosGaleria = Array.from({ length: 10 });

  return (
    <div style={{ textAlign: 'left' }}>
      <div className="page-header">
        <h1 className="title-light">Photo</h1>
        <h1 className="title-dark">Gallery</h1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '30px',
        margin: '40px 0'
      }}>
        {blocosGaleria.map((_, index) => (
          <div key={index} style={{ width: '100%', height: '170px', background: '#FBFBFB', border: '1px solid #E5E4E7', position: 'relative', overflow: 'hidden' }}>
            <svg width="100%" height="100%">
              <rect width="100%" height="100%" fill="#FBFBFB"/>
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="#EBEBEB" strokeWidth="1"/>
              <circle cx="50%" cy="50%" r="20" fill="none" stroke="#E5E4E7" strokeWidth="1" />
              <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#BDBDBD" fontFamily="monospace" fontSize="12">
                P-0{index + 1}
              </text>
            </svg>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginTop: '50px' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '24px', color: '#333333' }}>
          01 <span style={{ color: '#BDBDBD', fontSize: '16px' }}>/ 05</span>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-figma" style={{ padding: '12px 20px' }}>◀</button>
          <button className="btn-figma" style={{ padding: '12px 20px' }}>▶</button>
        </div>
      </div>
    </div>
  );
}

export default Galeria;
