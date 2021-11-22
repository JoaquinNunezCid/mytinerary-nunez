import Hero from '../components/main/Hero'
import Main from '../components/main/Main'
import MainCarousel from '../components/carousel/Carousel'
// import photo from '../assets/imghero.webp'

const Home = () => {
    return (
        <>
            {/* <img className="photo" alt="Foto Hero en el bosque" src={photo}></img> */}
            <Hero/>
            <Main/>
            <MainCarousel/>
        </>
    )
}

export default Home