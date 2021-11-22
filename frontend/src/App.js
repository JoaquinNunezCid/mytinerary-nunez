import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Cities from './pages/Cities';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/cities' component={Cities}/>
                <Redirect to='/'/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default App