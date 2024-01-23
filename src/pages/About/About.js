import landscape from '../../assets/images/landscape.png'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Collapse from '../../components/Collapse/Collapse'

function About() {
    const fiabilityContent = <p>Les annonces postée sur Kasa garantissent une fiabilité 
        totale. Les photos sont conformes aux logements, et toutes les informations
        sont régulièrement vérifiées par nos équipes.</p>
    const respectContent = <p>La bienveillance fait partie des valeurs fondatrices
        de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage 
        entraînera une exclusion de notre plateforme.</p>
    const securityContent = <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
        chaque logement correspond aux critères de sécurité établis par nos services.
        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards
        sonnt bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
    return     <>
    <Header />
    <section className='aboutMain'>
        <div className='aboutMain__imageContainer'>
            <img src={landscape} alt="Montagnes."/>
        </div>
        <article className='aboutMain__dropDownContainer'>
            <Collapse name="Fiabilité" content={fiabilityContent} />
            <Collapse name="Respect" content={respectContent} />
            <Collapse name="Service" content={respectContent} />
            <Collapse name="Sécurité" content={securityContent} />
        </article>
    </section>
    <Footer />
    </>
}

export default About;