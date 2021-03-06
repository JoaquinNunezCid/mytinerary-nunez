import React,{useState,useEffect} from "react";
import {connect} from "react-redux"
import Accordion from "react-bootstrap/Accordion";
import itineraryActions from "../redux/actions/itineraryActions";
import Activity from "./Activity"
import Comments from "./Comments";
import RedHeart from "../assets/heartRed.png"
import WhiteHeart from "../assets/heart.png"

const Swal = require('sweetalert2')



const Itinerary = (props) => {
    const [like, setLike] = useState(true)
    const [itinerariesLikes, setItinerariesLikes] = useState(props.Itineraries.likes)
    const [activities, setActivities] = useState([]);

    useEffect(() => {
     
      props.fechActivitis(props.ItinerariesId)
      .then((res) => {

        
       return  setActivities(res);
      
      });

  }, [])
  
    console.log()
    const likeItinerary = async () => {
        setLike(false) 
        if(!props.token) {
            Swal.fire({
                icon: 'error',
                 title: 'You must be logged to like this post!'
              })  
        }else {
        let response = await props.likeDislike(props.Itineraries._id, props.token)
        setItinerariesLikes(response.data.response)
        } 
    setLike(true)
    }
    console.log(activities)
    let heart = itinerariesLikes.includes(props.userId) ? RedHeart : WhiteHeart
    console.log(props.Itineraries._id)
    return (
        <div className="itinerarioContenedor">
                    <div className="headerItinerario">
                   <img className="iconoItinerarios" src={props.Itineraries.personImage} /> 
                   <h2 className="nombreGuia" >
                          {props.Itineraries.name}
                        </h2>
                   </div>
                   <div>
                     <div className="dato2">
                        <p className="price">
                          <p className="pricio"> Price:</p>{" "}
                          {"💵".repeat(props.Itineraries.price)}
                        </p>
                        <p className="duration">duration: {props.Itineraries.duration}</p>
                      </div>
                      <div className="datos3">
                      <img src={heart} onClick={likeItinerary }/>
                        <p className="likes">{itinerariesLikes.length}</p>
                        <div className="hastag">
                          {props.Itineraries.hashtags.map((e)=>{
                            return(
                              <div className="hastags">
                              <p>{e}</p>
                              </div>
                            )
                          })}
                        </div>
                        
                      </div>
                      <div>
                          <Accordion  defaultActiveKey={props.Itineraries.id}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className="view">View More</Accordion.Header>
                          <Accordion.Body>
                            <div className="actividades">
                          {activities.map((activities) => <Activity Activities={activities}  key={activities._id}/>)}
                          </div>
                          <div className="cometariosContenedor">
                          <Comments key={props.Itineraries._id} itineraryId={props.Itineraries._id} comments={props.Itineraries.comments}/>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      </div>
                   </div>
                   </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.users._id,
        token:state.users.token,
        
    }
}
 
const mapDispatchToProps = {
    likeDislike: itineraryActions.likeDislike,
    fechActivitis: itineraryActions.getActivitiesByItinerary
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary) 