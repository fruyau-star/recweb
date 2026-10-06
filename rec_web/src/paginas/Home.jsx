import React from 'react';

function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', fontFamily: 'sans-serif' }}>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px', alignItems: 'center', padding: '60px 0' }}>
        <div style={{ textAlign: 'left' }}>
          <h1 className="title-light">Project</h1>
          <h1 className="title-dark" style={{ marginBottom: '40px' }}>Nurtown</h1>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '60px' }}>
            <button className="btn-figma" style={{ padding: '15px 25px' }}>◀</button>
            <button className="btn-figma" style={{ padding: '15px 25px' }}>▶</button>
          </div>
          <div style={{ fontSize: '24px', color: '#BDBDBD', fontFamily: 'monospace' }}>
            01 <span style={{ fontSize: '16px', color: '#E0E0E0' }}>/ 02</span>
          </div>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '500px', background: '#EAEAEA' }}>

          <svg width="100%" height="100%" style={{ display: 'block' }}>
            <rect width="100%" height="100%" fill="#EFEFEF"/>
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#D8D8D8" strokeWidth="2"/>
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#D8D8D8" strokeWidth="2"/>
            <rect x="10%" y="10%" width="80%" height="80%" fill="none" stroke="#BDBDBD" strokeWidth="1" strokeDasharray="5,5"/>
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#777777" fontFamily="sans-serif" fontSize="18" fontWeight="300" letterSpacing="2">MAIN ARCHITECTURE VIEW</text>
          </svg>
          <button className="btn-figma" style={{ position: 'absolute', bottom: 0, left: 0, border: 'none', background: '#FFF', padding: '24px 36px' }}>
            View Project →
          </button>
        </div>
      </section>

      <section style={{ background: '#FBFBFB', display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '20px', padding: '30px', margin: '80px 0', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ width: '100%', height: '230px', background: '#F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E5E4E7' }}>
            <span style={{ fontSize: '12px', color: '#BDBDBD', letterSpacing: '0.1em' }}>ELEVATION BLOCK A</span>
          </div>
          <div style={{ width: '100%', height: '140px', background: '#EAEAEA', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E5E4E7' }}>
            <span style={{ fontSize: '12px', color: '#BDBDBD', letterSpacing: '0.1em' }}>ELEVATION BLOCK B</span>
          </div>
        </div>
        <div style={{ width: '100%', height: '390px', background: '#333333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
          <span style={{ fontSize: '12px', color: '#FFF', letterSpacing: '0.1em' }}>STRUCTURE CROSS SECTION</span>
        </div>
        <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <h2 style={{ fontSize: '64px', fontWeight: '300', color: '#F2F2F2', margin: 0, lineHeight: '0.8' }}>ABOUT</h2>
          <p style={{ color: '#777777', fontSize: '16px', lineHeight: '1.8', margin: '20px 0 40px 0' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <button className="btn-figma">Read More →</button>
        </div>
      </section>

      <section style={{ margin: '100px 0', textAlign: 'left' }}>
        <h2 style={{ color: '#BDBDBD', fontSize: '48px', fontWeight: '300', marginBottom: '40px' }}>
          Main Focus/Mission Statement
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '120px', color: '#F2F2F2', lineHeight: '0.8', fontWeight: 'bold' }}>1</span>
            <p style={{ color: '#777777', fontSize: '14px', lineHeight: '1.6', margin: 0, paddingTop: '10px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '120px', color: '#F2F2F2', lineHeight: '0.8', fontWeight: 'bold' }}>2</span>
            <p style={{ color: '#777777', fontSize: '14px', lineHeight: '1.6', margin: 0, paddingTop: '10px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </section>

      <section style={{ margin: '100px 0', textAlign: 'left' }}>
        <h2 style={{ color: '#BDBDBD', fontSize: '48px', fontWeight: '300', marginBottom: '40px' }}>
          Our Projects
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px', marginBottom: '30px' }}>

          <div style={{ 
            gridColumn: 'span 5', 
            height: '250px', 
            background: '#333333', 
            color: '#FFF', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            padding: '40px',
            position: 'relative'
          }}>
            <h3 style={{ fontSize: '40px', margin: '0 0 10px 0', fontWeight: 'bold', lineHeight: '1.1' }}>Sample<br/>Project</h3>
            <span style={{ fontSize: '12px', letterSpacing: '0.1em', color: '#CCC', cursor: 'pointer' }}>VIEW MORE →</span>
          </div>

          <div style={{ gridColumn: 'span 7', height: '250px', background: '#EAEAEA' }}>
            <img src="https://placeholder.com" alt="Project Dome" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ gridColumn: 'span 4', height: '180px', background: '#EAEAEA' }}>
            <img src="https://placeholder.com" alt="Project 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ gridColumn: 'span 4', height: '180px', background: '#EAEAEA' }}>
            <img src="https://placeholder.com" alt="Project 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ gridColumn: 'span 4', height: '180px', background: '#EAEAEA' }}>
            <img src="https://placeholder.com" alt="Project 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ background: '#222', color: '#FFF', border: 'none', padding: '15px 30px', fontSize: '12px', letterSpacing: '0.1em', cursor: 'pointer' }}>
            ALL PROJECTS →
          </button>
        </div>
      </section>

      <section style={{ margin: '100px 0 60px 0', textAlign: 'left' }}>
        <h2 style={{ color: '#BDBDBD', fontSize: '48px', fontWeight: '300', marginBottom: '40px' }}>
          Contact Us
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'start' }}>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input type="text" placeholder="Name" style={{ padding: '15px', background: '#F3F3F3', border: 'none', fontSize: '14px' }} />
            <input type="text" placeholder="Phone Number*" required style={{ padding: '15px', background: '#F3F3F3', border: 'none', fontSize: '14px' }} />
            <input type="email" placeholder="E-mail*" required style={{ padding: '15px', background: '#F3F3F3', border: 'none', fontSize: '14px' }} />
            <input type="text" placeholder="Interested In" style={{ padding: '15px', background: '#F3F3F3', border: 'none', fontSize: '14px' }} />
            <textarea placeholder="Message*" required rows="4" style={{ padding: '15px', background: '#F3F3F3', border: 'none', fontSize: '14px', resize: 'none' }}></textarea>
            
            <button type="submit" style={{ background: '#222', color: '#FFF', border: 'none', padding: '20px', fontSize: '12px', letterSpacing: '0.1em', cursor: 'pointer', marginTop: '10px', width: '180px' }}>
              SEND EMAIL →
            </button>
          </form>

          <div style={{ width: '100%', height: '370px', background: '#EAEAEA' }}>
            <img src="https://placeholder.com" alt="Contact Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
