import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Cards({city}) {
    const [cities, setCities] = useState(city)

    console.log(cities)
    return (
        <>
            {city.city &&
            <div className="cardsFather">
                <Link to={`/cities/${city._id}`}>
                <div className="cards">
                    <h2>{city.city}</h2>
                    <img
                        className='card'
                        src={`./imagenes${city.image}`}
                        alt={city.alt}
                        />
                    <p>{city.description}</p>
                </div>
                </Link>
            </div>
            }
        </>
    )
}
export default Cards