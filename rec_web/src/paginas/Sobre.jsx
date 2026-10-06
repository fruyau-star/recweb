import React from 'react';

function Sobre() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', textAlign: 'left' }}>

      <div className="page-header" style={{ marginBottom: '40px' }}>
        <h1 className="title-light" style={{ fontSize: '48px', fontWeight: '300', color: '#BDBDBD', margin: 0 }}>
          Contact
        </h1>
        <h1 className="title-dark" style={{ fontSize: '56px', fontWeight: 'bold', color: '#333333', margin: '5px 0 0 0' }}>
          Information
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '60px', alignItems: 'start' }}>

        <div style={{ paddingTop: '10px' }}>

          <div style={{ marginBottom: '35px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333333', margin: '0 0 5px 0' }}>
              Company Name
            </h3>
            <p style={{ fontSize: '15px', color: '#777777', margin: 0, fontWeight: '300', lineHeight: '1.4' }}>
              1234 Sample Street Austin Texas 76401
            </p>
          </div>

          <div style={{ marginBottom: '35px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333333', margin: 0 }}>
              512.333.2222
            </p>
          </div>

          <div style={{ marginBottom: '45px' }}>
            <p style={{ fontSize: '15px', color: '#777777', margin: 0, fontWeight: '300' }}>
              sampleemail@gmail.com
            </p>
          </div>

          <button 
            className="btn-figma" 
            style={{ 
              background: '#222222', 
              color: '#FFFFFF', 
              border: 'none', 
              padding: '20px 40px', 
              fontSize: '12px', 
              letterSpacing: '0.15em', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            CONTACT US
          </button>
        </div>

<div style={{ width: '100%', height: '450px', background: '#EAEAEA', border: '1px solid #E5E4E7', position: 'relative' }}>
  <iframe
    title="Company Location Map"
    src="https://google.com"
    width="100%"
    height="100%"
    style={{ border: 0, display: 'block' }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>


      </div>
    </div>
  );
}

export default Sobre;
