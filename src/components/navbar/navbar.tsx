import './navbar.css';
import { Link } from 'react-router-dom';
export function Navbar() {
  return (
    <div className='container-navbar'>
      <div className="navbar">
        <Link to="/">Blog dos Viajantes</Link>
        <Link to="/about">Sobre nós</Link>
      </div>
    </div>
  );
}
