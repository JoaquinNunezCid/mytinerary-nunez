import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { withRouter } from './utils/withRouter';
import Cities from './pages/Cities';
import Header from './components/Header';
import Footer from './components/Footer';
import City from './pages/City'

const Element = withRouter(City)

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route>
                    <Route path='/'element ={<Home/>}></Route>
                    <Route path='/cities'element ={<Cities/>}></Route>
                    <Route path='/cities/:id'element ={<Element/>}></Route>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App