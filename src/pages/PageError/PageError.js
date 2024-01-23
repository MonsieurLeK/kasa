import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";

function PageError () {
    return <>
        <Header />
        <div className="errorContainer">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
        <Footer />
    </>
}

export default PageError;