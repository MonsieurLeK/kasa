import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import hotelList from '../../annonces.json'
import PageError from '../PageError/PageError'
import ratingStar from '../../assets/images/icons/Star.svg'
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";

function HotelPage() {
    let currentLink = useLocation()
    let hotelId = currentLink.pathname.slice(1)
    console.log(hotelId)

    const hotelFound = hotelList.find( obj => {
        return obj.id === hotelId
    })
    console.log(hotelFound)
    const hotelTags = hotelFound.tags.map((tag) =>
        <span key={tag}>{tag}</span>
    )
    const star = <img src={ratingStar} alt="étoile"/>
    console.log(hotelFound.rating)
    console.log(hotelFound.equipments)

    if (hotelFound) {
        return<>
    <Header />
    <Slideshow lenght={hotelFound.pictures.length} content={hotelFound.pictures} />
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
                <img src={hotelFound.host.picture} alt="Hôte"/>
            </div>
            <div className="hotelInfos__containerRight--starContainer">
                {star}
            </div>
        </div>
    </section>
    <section className="collapseWrapper">
            <Collapse name="Description" content={hotelFound.description} />
            <Collapse name="Équipements" content={hotelFound.equipments} />
    </section>
    <Footer />
    </>
    } else {
        return <PageError />
    }
}

export default HotelPage;