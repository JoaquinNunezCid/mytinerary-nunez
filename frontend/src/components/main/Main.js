import logo1 from '../../assets/iconos/around.svg' 
import logo2 from '../../assets/iconos/save-money.svg' 
import logo3 from '../../assets/iconos/passport.svg' 

const Main = () => {
    return (
        <section>
            <h2>Why you should choose us?</h2>
            <div className="main">
                <div>
                    <img className="logos" src={logo1} alt="logo avion dando vuelta al mundo"></img>
                    <p className="choose">We are the leaders in the traveling market to America and Europe</p>
                </div>
                <div>
                    <img className="logos" src={logo2} alt="Logo bolsa de dinero en mano"></img>
                    <p className="choose">We have the lowest prices</p>
                </div>
                <div>
                    <img className="logos" src={logo3} alt="Logo pasaporte"></img>
                    <p className="choose">We take care about all the stuff and formalities before your trip</p>
                </div>
            </div>
        </section>
    )
}

export default Main