import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { withRouter } from './utils/withRouter';
import Cities from './pages/Cities';
import Header from './components/Header';
import Footer from './components/Footer';
import City from './pages/City'
import { connect } from "react-redux"
import usersActions from "./redux/actions/usersActions"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import React, { useEffect } from "react"

const Element = withRouter(City)

const App = (props) => {
    useEffect(()=>{
        if(localStorage.getItem('token')){
            props.signInLS(localStorage.getItem('token'))
        }
    },[])
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route>
                    <Route path='/'element ={<Home/>}></Route>
                    <Route path='/cities'element ={<Cities/>}></Route>
                    <Route path='/cities/:id'element ={<Element/>}></Route>
                    {props.token ? <Route path='*'element ={<Home/>}></Route>:<> <Route path = "/signUp" element = {<SignUp/>}></Route> <Route path = "/signIn" element = {<LogIn/>}></Route> </>} 
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return{
        token: state.users.token
    }
}
const mapDispatchToProps = {
    signInLS: usersActions.signInLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
