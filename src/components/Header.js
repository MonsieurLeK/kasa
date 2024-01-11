import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.svg';

function Header() {
    return <header className="header">
    <img src={logo} alt="Logo de Kasa"/>
    <nav className="header__link-container">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
    </nav>
</header>
}

export default Header;