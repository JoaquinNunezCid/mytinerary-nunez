import logo from '../../assets/iconos/logo_mytinerary.svg'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <div className="cajaHero">
                <div className="titulo">
                    <h1>MyTinerary</h1>
                    <img className="logoMyTinerary" src={logo} alt="MyTinerary Logo"></img>
                </div>
                <div>
                    <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                </div>
                <div>
                    <p>Choose your destination</p>
                </div>
                <Link to='/cities'><button>What are you waiting for?</button></Link>
            </div>
        </div>
    )
}

export default Hero 