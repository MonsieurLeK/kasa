import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import hotelList from '../../annonces.json'
import PageError from '../PageError/PageError'

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
        <img src={picLink} alt={picLink.split("project/").pop()} className="caroussel__image"/>
    )
    if (hotelFound) {
        return<>
    <Header />
    <section className="caroussel">
        {carousselPics}
    </section>
    <Footer />
    </>
    } else {
        return <PageError />
    }
}

export default HotelPage;