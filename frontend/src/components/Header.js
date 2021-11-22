import {Navbar, Container, Nav} from 'react-bootstrap'
import user from '../assets/iconos/usuario.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="nav">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Link className="linkHeader" to="/">MyTinerary</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Link className="linkHeader" to="/cities">Cities</Link>
                <Link className="linkHeader" to="/signin">Sign In</Link>
                <Link className="linkHeader" to="/signout">Sign Out</Link>
                </Nav>
                <Nav>
                    <img className="usuario" src={user} alt="Foto de usuario"></img>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header