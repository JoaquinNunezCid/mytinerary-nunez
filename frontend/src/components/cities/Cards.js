import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Cards() {
    const [cities, setCities] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/api/cities")
            .then(res => res.json())
            .then(data => setCities(data.response))
            .catch(err => console.error(err.message))
    },[])
    console.log(cities)
    return (
        <>
            {cities.map(card => 
            <div className="cardsFather">
                <Link to={`/cities/${card._id}`}>
                <div className="cards">
                    <h2>{card.city}</h2>
                    <img
                        className='card'
                        src={`./imagenes${card.image}`}
                        alt={card.alt}
                        />
                    <p>{card.description}</p>
                </div>
                </Link>
            </div>
            )}
        </>
    )
}
export default Cards