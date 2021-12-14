import {Link} from "react-router-dom"
import { useState } from "react"
import toasty from "../components/Toast"
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import GoogleLogin from 'react-google-login'

const SignIn = (props) => {
    const [logInUser, setLogInUser] = useState({ email: '', password: '' })
    const [hidden, setHidden] = useState(true)
    const logUserHandler = (e) =>{
        const value= e.target.value
        const data= e.target.name
        setLogInUser({...logInUser, [data]: value})
    }

    const logInHandler = async () => {
        if (logInUser.email === '' || logInUser.password === '') {
            toasty('error', 'All the fields are required!')
        } else {
            try{
                let res= await props.signInUser(logInUser)
                if(!res.data.success){
                    toasty('error', 'Wrong email or password! Try again')
                }else{
                    toasty('success', 'Welcome Back!')
                }
            }catch (error){
                props.history.push('/fail')
                return false
               }
            
        }       
    }

    const responseGoogle = async (response) => {
        let logInUserGoogle = {
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            flagGoogle: true
        }
        try{
                let res= await props.signInUser(logInUserGoogle)
            if(!res.data.success){
                toasty('error', 'You created your account with google, please log with them')
            }else{
                toasty('success', 'Welcome Back!')
            }
        }catch (error){
            return false
        }
    }
    
    return(
        <div>
            <div className="signInBack"style ={{backgroundImage:"url('/assets/login.jpg')" }}>
                <div className="signInTittle">
                    <h2>Welcome back!</h2>
                    <h4>Log in here</h4>
                    <h4>Be part of one of the greatest travellers community</h4>
                </div>
                <div className="formContainerSignIn">
                    <form className="signInForm">
                        <span><input type="email" name="email" placeholder="Email" value={logInUser.email} onChange={logUserHandler} autoComplete="nope"/></span>
                        <span><input type={hidden ? "password" : "text"} name="password" placeholder="Password" value={logInUser.password} onChange={logUserHandler} autoComplete="nope"/>
                         <div onClick={() => setHidden(!hidden)} className="eyeIcon">
                            {hidden ? <BsEyeSlash className="inputIcons" /> : <BsEye className="inputIcons"/>}
                        </div>
                        </span>
                    </form>
                    <div className="formButtons">
                        <button onClick={logInHandler}>Log in</button>
                        <GoogleLogin
                                    clientId=""
                                    render={renderProps => (
                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Log in with Google</button>
                                    )}
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                                                        />
                        <p>Don't you have an account yet? <Link to="/signUp">Sign up here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    signInUser: usersActions.signInUser
}

export default connect (null, mapDispatchToProps)(SignIn)