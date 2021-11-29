import React from "react";
import MainCities from "../components/mainCities";
import axios from "axios";
export default class Cities extends React.Component {

  constructor(){
    super()
    this.state = {

    }
  }
  componentDidMount(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    axios.get('http://localhost:4000/api/cities')
    .then( res => this.setState({ciudades : res.data.response}))
  }

  render() {
    return (
        <>
          <div className="cardsFather">
          { this.state.ciudades && <MainCities arrayCiudades={this.state.ciudades}/>}
          </div>
        </>
    );
  }
}