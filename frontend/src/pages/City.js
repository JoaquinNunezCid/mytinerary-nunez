import React from 'react'
import axios from 'axios'

class City extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            city:{}
        }
    }
    componentDidMount(){
        axios
        .get("http://localhost:4000/api/cities/"+this.props.params.city)
        .then((response)=>this.setState(response.data.response))
    }
    render(){
        console.log(this.state.city)
        return(
            <>
                <h1>{this.state.city.country}</h1>
            </>
        )
    }
}

export default City