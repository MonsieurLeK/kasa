import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import hotelList from '../../annonces.json'
import PageError from '../PageError/PageError'
import ratingStar from '../../assets/images/icons/Star.svg'

function HotelPage() {
    let currentLink = useLocation()
    let hotelId = currentLink.pathname.slice(1)
    console.log(hotelId)

    const hotelFound = hotelList.find( obj => {
        return obj.id === hotelId
    })
    console.log(hotelFound)
    //reprendre le système de caroussel pour charger une image à la
    //fois en se baladant dans la liste des images.
    const carousselPics = hotelFound.pictures.map((picLink) => 
        <div className="caroussel__container" key={picLink}>
        <img src={picLink} alt={picLink.split("project/").pop()} className="caroussel__container--image"/>
        </div>
    )
    const hotelTags = hotelFound.tags.map((tag) =>
        <span key={tag}>{tag}</span>
    )
    const star = <img src={ratingStar} alt="étoile"/>
    console.log(hotelFound.rating)

    if (hotelFound) {
        return<>
    <Header />
    <section className="caroussel">
        {carousselPics}
    </section>
    <section className="hotelInfos">
        <div className="hotelInfos__containerLeft">
            <h1>{hotelFound.title}</h1>
            <p>{hotelFound.location}</p>
            <div className="hotelInfos__containerLeft--tagsContainer">
                {hotelTags}
            </div>
        </div>
        <div className="hotelInfos__containerRight">
            <div className="hotelInfos__containerRight--hostContainer">
                <p>{hotelFound.host.name}</p>
                <img src={hotelFound.host.picture} alt="Photo de l'hôte"/>
            </div>
            <div className="hotelInfos__containerRight--starContainer">
                {star}
            </div>
        </div>
    </section>
    <Footer />
    </>
    } else {
        return <PageError />
    }
}

export default HotelPage;