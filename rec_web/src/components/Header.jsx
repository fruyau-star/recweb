import { Link } from 'react-router-dom';
 
function Header() {
return (
<header>
<nav>
<Link to="/">Home</Link>
<Link to="/sobre">Sobre</Link>
<Link to="/projetos">Projetos</Link>
<Link to="/galeria">Galeria</Link>
<Link to="/certificacoes">Certificações</Link>
<Link to="/contato">Contato</Link>
</nav>
</header>
);
}
 
export default Header;