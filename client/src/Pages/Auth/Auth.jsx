import React,{useState} from "react";
import './Auth.css';
import AboutAuth from './AboutAuth';
import icon from '../../assets/so-icon.png'

const Auth = () => {
    const [isSignup , setIsSignup] = useState(false);
    const handleSwitch = ()=>{
        setIsSignup(!isSignup);
    }
    
    return (
    <section className="auth-section">
        {isSignup && <AboutAuth />}
        <div className="auth-container">
            <form>
            {!isSignup && <img src={icon} alt="icon" className=""/>}
                
                    {isSignup &&
                        <label htmlFor='name'>
                            <h4>Display Name : </h4>
                            <input type='text' id='name' />
                        </label>
                    }
                
                <label htmlFor="email">
                    <h4>Email : </h4>
                    <input type='email' name='email' id='email' />
                </label>
                <label htmlFor="password">
                    <h4>Password : </h4>
                    <input type='password' name='password' id='password' />
                </label>
                <br />
                <button type="submit" className="auth-btn">{!isSignup ? "Login" : 'SignUp'}</button>
            </form>
            <p>
                {isSignup ? 'Already have an account' : "Don't have an account"}
                <button type="button" className="handle-switch-btn " onClick={handleSwitch}>{isSignup? 'Login':"SignUp"}</button>
            </p>
        </div>
    </section>
    )
};

export default Auth;
