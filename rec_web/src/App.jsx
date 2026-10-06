import './App.css';
import { Routes, Route } from 'react-router-dom';
 
import Header from './components/Header';
import Footer from './components/Footer';
 
import Home from './paginas/Home';
import Certificacoes from './paginas/Certificacoes';
import Contato from './paginas/Contato';
import Galeria from './paginas/Galeria';
import Projetos from './paginas/Projetos';
import Sobre from './paginas/Sobre';
 
function App() {
return (
<div className="app">
<Header />
 
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/home" element={<Home />} />
<Route path="/certificacoes" element={<Certificacoes />} />
<Route path="/contato" element={<Contato />} />
<Route path="/galeria" element={<Galeria />} />
<Route path="/projetos" element={<Projetos />} />
<Route path="/sobre" element={<Sobre />} />
</Routes>
</main>
 
<Footer />
</div>
);
}
 
export default App;