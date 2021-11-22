import facebook from '../assets/iconos/footer/facebook.svg'
import linkedin from '../assets/iconos/footer/linkedin.svg'
import twitter from '../assets/iconos/footer/twitter.svg'
import instagram from '../assets/iconos/footer/instagram.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerBox texto">
                <h4>About MyTinerary</h4>
                <p>MyTinerary is a proyect that has been founded 20 years ago. We're happy to open this new web page where you and us can archive the trip of your life. The best prices in the market and also the best attention.</p>
            </div>
            <div className="footerBox">
                <h4>Social Networks</h4>
                <div>
                    <img className="redes" src={facebook} alt="Logo Facebook"></img>
                    <a target="_blank" href="www.facebook.com">Facebook</a>
                </div>
                <div>
                    <img className="redes" src={instagram} alt="Logo Instagram"></img>
                    <a target="_blank" href="www.instagram.com">Instagram</a>
                </div>
                <div>
                    <img className="redes" src={twitter} alt="Logo Twitter"></img>
                    <a target="_blank" href="www.twitter.com">Twitter</a>
                </div>
                <div>
                    <img className="redes" src={linkedin} alt="Logo LinkedIn"></img>
                    <a target="_blank" href="www.linkedin.com" >LinkedIn</a>
                </div>
            </div>
            <div className="footerBox">
                <h4>Contact Info</h4>
                <p>Don Pelayo 903, Longchamps</p>
                <p>+54 9 11 3758-4923</p>
                <p>nunezcidjoaquin@gmail.com</p>
            </div>
            <div className="footerBox">
                <Link to="/">Home</Link>
                <Link to="/cities">Cities</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signout">Sign Out</Link>
            </div>
        </div>
    )
}

export default Footer