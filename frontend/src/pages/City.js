import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import citiesActions from '../redux/actions/citiesActions';
import itinerariosActions from '../redux/actions/itineraryActions'
import Itinerary from '../components/Itinerary'

const City = (props) => {

    let { id } = useParams();

    useEffect(() => {
        props.getCity(id)
        props.fechItinerarios(id)
    },[])
    console.log(props)

    return (
        <>
            <div className="body">
                    {props.city && <div>
                        <h2>Discover the beauty of <span>{props.city.city}</span></h2>
                    </div>
                    }
                    <div className="itineraries-father">
                    {props.itinerarios.length>0?props.itinerarios.map(itineraries => <Itinerary Itineraries={itineraries} ItinerariesId={itineraries._id} key={itineraries.id}/>
                       )
                        :<h2>THERE ARE NO ITINERARIES FOR THIS CITY</h2>}
                    </div>
                    <div>
                        <Link to="/Cities"><button>BACK TO CITIES</button></Link>
                    </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        city:state.citiesReducer.city,
        itinerarios: state.itineraryReducer.itinerarios
    } 
  }
  const mapDispatchToProps = {
    getCity:citiesActions.getACity,
    fechItinerarios: itinerariosActions.traerItinerarios
  }

export default connect(mapStateToProps,mapDispatchToProps)(City)