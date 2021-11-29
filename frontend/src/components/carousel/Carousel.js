import React from "react"
import { Carousel } from "react-bootstrap"

const MainCarousel = () => {
    const contenidoCarrousel = [
        [
            { city: 'Amsterdam', imagen: '/europe/amsterdam.jpg', alt:'Image of Amsterdam'  },
            { city: 'London', imagen: '/europe/london.jpg', alt:'Image of London'  },
            { city: 'Prague', imagen: '/europe/praga.jpg', alt:'Image of Praga'  },
            { city: 'Venice', imagen: '/europe/venice.jpg', alt:'Image of Venice'  },
        ],
        [
            { city: 'Buenos Aires', imagen: '/latinA/buenos_aires.jpg', alt:'image of Buenos Aires'  },
            { city: 'Cartagena', imagen: '/latinA/cartagena.jpg', alt:'Image of Cartagena'  },
            { city: 'Cuzco', imagen: '/latinA/machu_picchu.jpg', alt:'Image of Cusco'  },
            { city: 'Rio de Janeiro', imagen: '/latinA/rio_de_janeiro.jpg', alt:'Image of Rio de Janeiro'  },
        ],
        [
            { city: 'Chicago', imagen: '/northA/chicago.jpg', alt:'Image of Chicago'  },
            { city: 'Quebec', imagen: '/northA/quebec.jpg', alt:'Image of Quebec'},
            { city: 'San Francisco', imagen: '/northA/san_francisco.jpg', alt:'Image of San Francisco' },
            { city: 'Toronto', imagen: '/northA/toronto.jpg', alt:'Image of Toronto' }
        ]
    ]

    return (
        <>
            <h2>Popular MyTineraries</h2>
            <Carousel>
                    {contenidoCarrousel.map((slide, index) => (
                        <Carousel.Item key={index}>
                            {slide.map((foto, index) => (
                                    <div key={index}>
                                        <h3>{foto.city}</h3>
                                        <img
                                        className='d-block pepito'
                                        src={`./imagenes${foto.imagen}`}
                                        alt={`./imagenes${foto.alt}`}
                                        />
                                    </div>
                                ))}
                        </Carousel.Item>
                    ))}
            </Carousel>
        </>
    )
}

export default MainCarousel