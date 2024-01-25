import star from '../../assets/images/icons/Star.svg'

function Rating(props) {
    let hotelRating = props.rating
    console.log(hotelRating)

    let redStars = []
    let greyStars = []
    for(let i = 1; i <= hotelRating; i++) {
        redStars[i] = <img src={star}  alt='étoile' className='star' key={"redstar" + i}/>
    }
    for(let i = 1; i <= 5 - hotelRating; i++) {
        greyStars[i] = <img src={star}  alt='étoile' className='star greyStar' key={"greystar" + i} />
    }

    return <article className='rating'>
        {redStars}
        {greyStars}
    </article>
}

export default Rating