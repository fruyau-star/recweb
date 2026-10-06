import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ background: '#2C2C2C', color: '#FFFFFF', padding: '60px 0', marginTop: '100px', fontSize: '14px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2fr 2fr', gap: '40px', maxWidth: '1170px', margin: '0 auto', padding: '0 20px', textAlign: 'left' }}>
        
        {/* Coluna 1: Logo Branca */}
        <div>
          <div style={{ lineHeight: '1', marginBottom: '20px' }}>
            <span style={{ fontWeight: '900', fontSize: '22px', letterSpacing: '0.1em', color: '#FFFFFF', textTransform: 'uppercase' }}>Digital</span>
            <br />
            <span style={{ fontWeight: '300', fontSize: '22px', letterSpacing: '0.1em', color: '#FFFFFF', textTransform: 'uppercase' }}>Project</span>
          </div>
        </div>

        {/* Coluna 2: Links rápidos */}
        <div>
          <h4 style={{ color: '#FFFFFF', fontWeight: '700', marginBottom: '20px', fontSize: '16px' }}>Information</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link to="/" style={{ color: '#FFF', fontSize: '14px' }}>Main</Link></li>
            <li><Link to="/galeria" style={{ color: '#FFF', fontSize: '14px' }}>Gallery</Link></li>
            <li><Link to="/projetos" style={{ color: '#FFF', fontSize: '14px' }}>Projects</Link></li>
            <li><Link to="/certificacoes" style={{ color: '#FFF', fontSize: '14px' }}>Certifications</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Contatos */}
        <div>
          <h4 style={{ color: '#FFFFFF', fontWeight: '700', marginBottom: '20px', fontSize: '16px' }}>Contacts</h4>
          <p style={{ color: '#FFF', margin: '0 0 15px 0', lineHeight: '1.6' }}>
            1234 Sample Street<br />Austin, TX 78704
          </p>
          <p style={{ color: '#FFF', margin: 0 }}>512.333.2222</p>
          <p style={{ color: '#FFF', margin: '5px 0 0 0' }}>sample@gmail.com</p>
        </div>

        {/* Coluna 4: Redes Sociais */}
        <div>
          <h4 style={{ color: '#FFFFFF', fontWeight: '700', marginBottom: '20px', fontSize: '16px' }}>Social Media</h4>
          <div style={{ display: 'flex', gap: '30px', fontSize: '20px' }}>
            <a href="#" style={{ color: '#FFF' }}>FB</a>
            <a href="#" style={{ color: '#FFF' }}>TW</a>
            <a href="#" style={{ color: '#FFF' }}>LN</a>
            <a href="#" style={{ color: '#FFF' }}>PIN</a>
          </div>
        </div>

      </div>
      
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '40px', paddingToP: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
        © <layout>followupButton(query="""Add current year to my calendar""", label="""2026""", variant=FOLLOWUP_BUTTON_VARIANT_DATE_DROPDOWN)</layout> Digital Project. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
