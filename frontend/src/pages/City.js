import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import citiesActions from '../redux/actions/citiesActions';
import itinerariosActions from '../redux/actions/itineraryActions'
import {Card,ListGroupItem,ListGroup, Accordion} from 'react-bootstrap'

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
                    {props.itinerarios.length>0?props.itinerarios.map(itinerary =>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={itinerary.personImage} />
                            <Card.Body>
                                <Card.Title>{itinerary.name} {itinerary.lastName}</Card.Title>
                                <Card.Text>
                                {itinerary.surname}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><p><span>Price:</span>{("💸").repeat(itinerary.price)}</p></ListGroupItem>
                                <ListGroupItem><p><span>Duration:</span>{("⏰").repeat(itinerary.duration)}</p></ListGroupItem>
                                <ListGroupItem><p><span>Likes:</span>{("🧡").repeat(itinerary.likes)}</p></ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>View More </Accordion.Header>
                                    <Accordion.Body>
                                        UNDER CONSTRUCTION
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Accordion>
                            </Card.Body>
                        </Card>)
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