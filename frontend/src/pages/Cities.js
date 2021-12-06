import React from "react";
import MainCities from "../components/MainCities";

class Cities extends React.Component {
  constructor(){
    super()
    this.state = {
    }
  }

  render() {
    return (
        <>
          <div className="cardsFather">
          <MainCities/>
          </div>
        </>
    );
  }
}

export default Cities