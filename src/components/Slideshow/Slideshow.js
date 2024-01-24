import { useState } from 'react'
import arrow from '../../assets/images/icons/arrow.svg'
function Slideshow(props) {
    let [slideshowPosition, setSlideshowPosition] = useState(1)
    function positionPlus() {
        if (slideshowPosition == props.lenght) {
            setSlideshowPosition(slideshowPosition = 1)
        } else {
            setSlideshowPosition(slideshowPosition + 1)
        }
    }
    function positionMoins() {
        if (slideshowPosition == 1) {
            setSlideshowPosition(slideshowPosition = props.lenght)
        } else {
            setSlideshowPosition(slideshowPosition - 1)
        }
    }


    return <section className="slideshow">
        <img src={props.content[slideshowPosition - 1]} className='slideshow__mainPic' alt='intérieur du logement'></img>
        <img src={arrow} className='slideshow__leftArrow arrow' onClick={positionMoins} alt='flèche de sélection d image'/>
        <img src={arrow} className='slideshow__rightArrow arrow' onClick={positionPlus} alt='flèche de sélection d image'/>
        <span className='slideshow__position'>{slideshowPosition}/{props.lenght}</span>
    </section>
}

export default Slideshow