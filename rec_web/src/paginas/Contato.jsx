import React from 'react';

function Contato() {
  return (
    <div style={{ textAlign: 'left' }}>
      <div className="page-header">
        <h1 className="title-light">Contact</h1>
        <h1 className="title-dark">Information</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', marginTop: '40px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3 style={{ fontSize: '16px', color: '#BDBDBD', letterSpacing: '0.1em', marginBottom: '10px' }}>Main Office</h3>
            <p style={{ color: '#333', margin: 0, fontSize: '16px', lineHeight: '1.6' }}>
              1234 Sample Street<br />Austin, TX 78704
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', color: '#BDBDBD', letterSpacing: '0.1em', marginBottom: '10px' }}>Phone Number</h3>
            <p style={{ color: '#333', margin: 0, fontSize: '16px' }}>512.333.2222</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', color: '#BDBDBD', letterSpacing: '0.1em', marginBottom: '10px' }}>Email</h3>
            <p style={{ color: '#333', margin: 0, fontSize: '16px' }}>sample@gmail.com</p>
          </div>
        </div>

        <div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Name" style={{ padding: '20px', background: '#FBFBFB', border: 'none', outline: 'none', color: '#333', width: '100%', boxSizing: 'border-box' }} />
            <input type="email" placeholder="Email *" required style={{ padding: '20px', background: '#FBFBFB', border: 'none', outline: 'none', color: '#333', width: '100%', boxSizing: 'border-box' }} />
            <input type="text" placeholder="Topic" style={{ padding: '20px', background: '#FBFBFB', border: 'none', outline: 'none', color: '#333', width: '100%', boxSizing: 'border-box' }} />
            <textarea placeholder="Message *" required rows="6" style={{ padding: '20px', background: '#FBFBFB', border: 'none', outline: 'none', color: '#333', width: '100%', boxSizing: 'border-box', resize: 'none' }}></textarea>
            <button type="submit" className="btn-figma btn-dark" style={{ alignSelf: 'flex-start', padding: '20px 40px' }}>
              Send Email →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
