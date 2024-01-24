import arrow from '../../assets/images/icons/arrow.svg'
function Slideshow(props) {
    let slideshowPosition = 0



    return <section className="slideshow">
        <img src={arrow} className='slideshow__leftArrow' alt='flèche de sélection d image'/>
        <img src={arrow} className='slideshow__rightArrow' alt='flèche de sélection d image'/>
        <span className='slideshow__position'>{slideshowPosition + 1}/4</span>
    </section>
}

export default Slideshow