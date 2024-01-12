import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import hotelList from '../../annonces.json'

function HotelPage() {
    let currentLink = useLocation()
    let hotelId = currentLink.pathname.slice(1)
    console.log(hotelId)

    //il faut checker si hotelList contient hotelID, si oui, afficher la page
    //sinon afficher PageError

    return<>
    <Header />
    <Footer />
    </>
}

export default HotelPage;