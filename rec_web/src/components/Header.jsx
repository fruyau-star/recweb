import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const menuItems = [
    { label: 'Main', path: '/' },
    { label: 'Gallery', path: '/galeria' },
    { label: 'Projects', path: '/projetos' },
    { label: 'Certifications', path: '/certificacoes' },
    { label: 'Contacts', path: '/contato' }
  ];

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '30px 0',
      borderBottom: '1px solid #F2F2F2'
    }}>
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
        <div style={{ textAlign: 'left', lineHeight: '1' }}>
          <span style={{ fontWeight: '900', fontSize: '22px', letterSpacing: '0.1em', color: '#333333', textTransform: 'uppercase' }}>Digital</span>
          <br />
          <span style={{ fontWeight: '300', fontSize: '22px', letterSpacing: '0.1em', color: '#333333', textTransform: 'uppercase' }}>Project</span>
        </div>
      </Link>

      {/* Menu */}
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '60px', margin: 0, padding: 0 }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link to={item.path} style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  textDecoration: 'none',
                  color: '#333333',
                  fontWeight: isActive ? '700' : '300',
                  borderTop: isActive ? '1px solid #333333' : '1px solid transparent',
                  borderBottom: isActive ? '1px solid #333333' : '1px solid transparent',
                  padding: '6px 0',
                  transition: '0.2s'
                }}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
