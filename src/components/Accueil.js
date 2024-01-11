import Header from "./Header"
import Footer from "./Footer"
import heroImage from "../assets/images/heroimage.png"
import Gallery from "./Gallery";
function Accueil () {
    return <>
    <Header />
    <div className="hero-header">
        <img src={heroImage} alt="Une plage rocheuse" className="hero-header__image"/>
        <h2>Chez vous, partout et ailleurs</h2>
    </div>
    <Gallery />
    <Footer />
    </>
}

export default Accueil;