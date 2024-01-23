import { useState } from 'react'
import arrow from '../../assets/images/icons/arrow.svg'

function Collapse(props) {

    let [isOpen, setIsOpen] = useState(false)

    return <article className='wrapper'>
    <div className='collapse' onClick={() => {
        setIsOpen(! isOpen)
    }}>
        <h2>{props.name}</h2>
        <img src={arrow} alt='flèche' className={`arrow ${isOpen ? 'arrowDown' : ''}`}/>
    </div>
    <div className={`content ${isOpen ? 'contentActive' : ''}`}>{props.content}</div>
    </article>

}
export default Collapse