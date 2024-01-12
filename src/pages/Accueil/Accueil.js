import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import heroImage from "../../assets/images/heroimage.png"
import Gallery from "../../components/Gallery/Gallery";
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