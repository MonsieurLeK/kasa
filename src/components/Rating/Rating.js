import star from '../../assets/images/icons/Star.svg'

function Rating(props) {
    let starIcon = <img src={star}  alt='étoile' className='star'/>
    let greyStarIcon = <img src={star}  alt='étoile' className='star greyStar'/>
    let hotelRating = props.rating
    console.log(hotelRating)

    let redStars = []
    let greyStars = []
    for(let i = 1; i <= hotelRating; i++) {
        redStars[i] = starIcon
    }
    for(let i = 1; i <= 5 - hotelRating; i++) {
        greyStars[i] = greyStarIcon
    }

    return <article className='rating'>
        {redStars}
        {greyStars}
    </article>
}

export default Rating