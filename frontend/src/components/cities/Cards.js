import { useState } from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

function Cards({city}) {
    const [cities] = useState(city)

    console.log(cities)
    return (
        <>
            <Card className="card bg-dark text-white">
                <Link to={`/cities/${city._id}`}>
                    <Card.Img src={`./imagenes${city.image}`} alt={city.alt} />
                    <Card.ImgOverlay>
                        <Card.Title><h2>{city.city}</h2></Card.Title>
                        <Card.Text>
                        {city.country}
                        </Card.Text>
                        <Card.Text>{city.description}</Card.Text>
                    </Card.ImgOverlay>
                </Link>
            </Card>
        </>
    )
}
export default Cards