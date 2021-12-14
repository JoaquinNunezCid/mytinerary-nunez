import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import citiesActions from '../redux/actions/citiesActions';
import itinerariosActions from '../redux/actions/itineraryActions'
// import {Card,ListGroupItem,ListGroup, Accordion} from 'react-bootstrap'
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const City = (props) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
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
                         <Card>
                         <CardHeader
                           avatar={
                             <Avatar alt='guideImage' src={itinerary.personImage}/>
                           }
                           title={`aca va el nombre del itinerario`}
                           subheader={`${itinerary.name}${itinerary.lastName}`}
                         />
                         <CardMedia
                           component="img"
                           height="194"
                           image="/static/images/cards/paella.jpg"
                           alt="foto itinerario"
                         />
                         <CardContent>
                           <Typography variant="body2" color="text.secondary">
                            <p><span>Price:</span>{("💸").repeat(itinerary.price)}</p>
                           </Typography>
                         </CardContent>
                         <CardContent>
                           <Typography variant="body2" color="text.secondary">
                            <p><span>Duration:</span>{("⏰").repeat(itinerary.duration)}</p>
                           </Typography>
                         </CardContent>
                         <CardContent>
                           <Typography variant="body2" color="text.secondary">
                           <p><span>{itinerary.hashtags}</span></p>
                           </Typography>
                         </CardContent>
                         <CardActions disableSpacing>
                           <IconButton aria-label="add to favorites">
                             <FavoriteIcon />
                           </IconButton>
                           <IconButton aria-label="share">
                             <ShareIcon />
                           </IconButton>
                           <ExpandMore
                             expand={expanded}
                             onClick={handleExpandClick}
                             aria-expanded={expanded}
                             aria-label="show more"
                           >
                             <ExpandMoreIcon />
                           </ExpandMore>
                         </CardActions>
                         <Collapse in={expanded} timeout="auto" unmountOnExit>
                           <CardContent>
                             <Typography paragraph>Method:</Typography>
                             <Typography paragraph>
                               Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                               aside for 10 minutes.
                             </Typography>
                             <Typography paragraph>
                               Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                               medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                               occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                               large plate and set aside, leaving chicken and chorizo in the pan. Add
                               pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                               stirring often until thickened and fragrant, about 10 minutes. Add
                               saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                             </Typography>
                             <Typography paragraph>
                               Add rice and stir very gently to distribute. Top with artichokes and
                               peppers, and cook without stirring, until most of the liquid is absorbed,
                               15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                               mussels, tucking them down into the rice, and cook again without
                               stirring, until mussels have opened and rice is just tender, 5 to 7
                               minutes more. (Discard any mussels that don’t open.)
                             </Typography>
                             <Typography>
                               Set aside off of the heat to let rest for 10 minutes, and then serve.
                             </Typography>
                           </CardContent>
                         </Collapse>
                       </Card>
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