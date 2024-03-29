import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import hotelList from '../../annonces.json'
import PageError from '../PageError/PageError'
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";
import Rating from "../../components/Rating/Rating";

function HotelPage() {
    let currentLink = useLocation()
    let hotelId = currentLink.pathname.slice(1)
    console.log(hotelId)

    const hotelFound = hotelList.find( obj => {
        return obj.id === hotelId
    })
    const hotelTags = hotelFound?.tags.map((tag) =>
        <span key={tag}>{tag}</span>
    )
    console.log(hotelFound?.equipments)
    let equipmentList = hotelFound?.equipments.map((equipment) => {
        return <span key={equipment}>{equipment}</span>
    })
    
    

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
                <Rating rating={hotelFound.rating} />
            </div>
        </div>
    </section>
    <section className="collapseWrapper">
            <Collapse name="Description" content={hotelFound.description} />
            <Collapse name="Équipements" content={equipmentList} />
    </section>
    <Footer />
    </>
    } else {
        return <PageError />
    }
}

export default HotelPage;