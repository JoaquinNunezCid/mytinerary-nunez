import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const City = () => {

    const [city, setCity] = useState()
    let { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:4000/api/cities/'+id) 
        .then(res => {console.log(res)
          setCity(res.data.response)
        })
    },)


    return (
        <>
        <div>
                {city && <div>
                    <h2>Discover the beauty of <span>{city.city}</span></h2>
                </div>
                }
                <div>
                    <h2>UNDER CONSTRUCTION</h2>
                    <Link to="/Cities"><button>BACK TO CITIES</button></Link>
                </div>
        </div>
        </>
    )
}

export default City