import React from "react";
import MainCities from "../components/mainCities";
// import axios from "axios";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions"

class Cities extends React.Component {
  constructor(){
    super()
    this.state = {
    }
  }
  componentDidMount(){
    this.props.getCities()
  }

  render() {
    return (
        <>
          <div className="cardsFather">
          { this.props.allCities.length > 0 && <MainCities arrayCiudades={this.props.allCities}/>}
          </div>
        </>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
      allCities : state.citiesReducer.citiesList
  } 
}
const mapDispatchToProps = {
  getCities:citiesActions.getAllCities,
}

export default connect(mapStateToProps,mapDispatchToProps)(Cities)

// const Cities = () => {
  
// }