import { Link } from 'react-router-dom';
import hotelList from '../../annonces.json'

const hotelCards = hotelList.map((card) =>
    <Link to={card.id} className='gallery__card' key={card.id}>
        <img src={card.cover} alt='Couverture de l hôtel' className='gallery__card--cover'/>
        <div className='gallery__card--gradient'>
        <h3 className='gallery__card--gradient-title'>{card.title}</h3>
        </div>
    </Link>
)

function Gallery() { 
    console.log(hotelList)
    return <section className="gallery">
        {hotelCards}
    </section>
}

export default Gallery;